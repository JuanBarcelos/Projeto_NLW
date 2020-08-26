
/*const dataBase = require('./db')
const createProffy = require('./createProffy')
dataBase.then(async (db) => {
  //inserir dados

    proffyValue = {
      name: "Adriele Barcelos", 
      avatar: "https://pps.whatsapp.net/v/t61.24694-24/117598751_330324981685692_5377679568414138225_n.jpg?oh=baf7f5989274141863b3bfc68f974aea&oe=5F36B70F",
      whatsapp: '21965821475',
      bio:"Entusiasta da melhor gramática do português avançado.<br>Apaixonda por dar aula e por mudar a vida das pessoas através de pronomios. Mais de 200.000 pessoas já passaram pela minha sala de aula.",
    }
    classValue = {
      subject: 1,
      cost: '20',
      //o proffy_id virá pelo banco de dados
    }
    classScheduleValues = [
      //o class_id virá pelo banco de dados, após cadastramos a class
      {
        weekday: [1],
        time_from: 720,
        time_to: 1220,
      },
      {
        weekday: [3], 
        time_from: 520,
        time_to: 1220,
      }
    ]
    //await createProffy(db,{proffyValue, classValue, classScheduleValues})

  //Consultar os dados inseridos
  
  //todos os proffys
//const selectedProffys  = await db.all("SELECT * FROM proffys")
//console.log(selectedProffys);

//consultar as classes de um proffy e trazer junto com os dados do proffy
    /*const selectedClassessAndProffys = await db.all(`
      SELECT classes.*,proffys.* FROM proffys JOIN classes ON (classes.proffy_id = proffys.id) WHERE classes.proffy_id = 1;
    `)
//console.log(selectedClassessAndProffys);

    //o horário que a pessoa trabalha, por exemplo, é das 8h-18h
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima
    const selectedClassesSchedules = await db.all(`
      SELECT class_schedule.* FROM class_schedule WHERE class_schedule.class_id = "1"
      AND class_schedule.weekday = "5"
      AND class_schedule.time_from <= "320"
      AND class_schedule.time_to >"520"
    `)
    })
   // console.log(selectedClassesSchedules);
   */
