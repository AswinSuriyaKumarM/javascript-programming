class Student{

    name=""
    mark=0

    studentdetails(){
        console.log(`Name is ${this.name}`)
        console.log(`Mark is ${this.mark}`)
    }
}

var s = new Student()
s.studentdetails()