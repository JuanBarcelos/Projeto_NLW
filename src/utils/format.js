const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
  ]
  
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "sábado",
  ]
  
  function getSubject(subjectNumber){
    return subjects[+subjectNumber]
  } 

function convertHouresToMinutes(time){
  const [hour, minutes] = time.split(':')
  return Number((hour*60)+minutes)
}

  module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHouresToMinutes
  }