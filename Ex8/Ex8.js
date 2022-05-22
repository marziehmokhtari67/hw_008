function Student(name,gender){
this.name=name,
this.gender=gender
}
Student.prototype.age=19

let studObj= new Student('ali','male')
console.log(studObj)

studObj.__proto__.age=20
let studObj1=studObj
console.log(studObj1)