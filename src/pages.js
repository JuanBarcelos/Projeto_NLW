const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHouresToMinutes} = require('./utils/format');

function pageLanding(req, res){
  return res.render("index.html");
}

async function pageStudy(req, res){
  const filtro = req.query

  if(!filtro.subject || !filtro.weekday || !filtro.time){
    return res.render("study.html",{filtro, subjects, weekdays});
  }
  //converter hr em mim
const timeToMinutes = convertHouresToMinutes(filtro.time)
  
  //buscar dados no bd
  const query = `
  SELECT classes.*,proffys.* 
  FROM proffys 
  JOIN classes ON (classes.proffy_id = proffys.id) 
  WHERE EXISTS (
    SELECT class_schedule.* 
    FROM class_schedule 
    WHERE class_schedule.class_id = classes.id
    AND class_schedule.weekday = ${filtro.weekday}
    AND class_schedule.time_from <=${timeToMinutes} 
    AND class_schedule.time_to > ${timeToMinutes}
  )
  AND classes.subject = '${filtro.subject}' `  
//conexao e controle de erro
    try {
      const db = await Database;
      const proffys = await db.all(query)  

      proffys.map((proffy)=>{
        proffy.subject = getSubject(proffy.subject);
      })


      return res.render("study.html",{proffys, subjects, filtro, weekdays});
    } catch (error) {
      console.log(error)
    }

}

function pageGiveClasses(req, res){
    //se não mostrar a pag
  return res.render("give-classes.html",{subjects, weekdays});
}

async function saveClasses(req, res){
  const creatProffy = require('./database/createProffy')

 const proffyValue = {
    name: req.body.name, 
    avatar: req.body.avatar,
    whatsapp: req.body.whatsapp,
    bio:req.body.bio
  }

 const classValue = {
    subject: req.body.subject,
    cost: req.body.cost
  }

  const classScheduleValues = req.body.weekday.map((weekday,index) => {
      return{
        weekday,
        time_from: convertHouresToMinutes(req.body.time_from[index]),
        time_to: convertHouresToMinutes(req.body.time_to[index])
      }
  });

  try {
    const db = await Database
   await creatProffy(db,{proffyValue, classValue, classScheduleValues})

   let queryString = "?subject="+req.body.subject
    queryString += "&weekday="+req.body.weekday[0]
    queryString += "&time="+req.body.time_from[0]

    return res.redirect('/study'+ queryString );

  } catch (error) {
    console.log(error)
  }
  
}


module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
}