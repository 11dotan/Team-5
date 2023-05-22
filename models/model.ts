class Person{
    
    constructor(
        public username: string,
        public name: string,
        public email:string,
        public phone:number,
        public password:string,
        public address: string
        ){
            
        }
}
class Student extends Person{
    uid: string;
    course: Course[];
    grades: number [] ;
    attendance: boolean [] ;
    constructor(
        public username: string,
        public name: string,
        public email:string,
        public phone:number,
        public password:string,
        public address: string,
        ){
            super(username, name, email, phone, password, address);
            this.uid = uniqueId()
        }
}



class Lecturer extends Person{
    uid: string;
    courseTeach: Course[];
    constructor(
        public username: string,
        public name: string,
        public email:string,
        public phone:number,
        public password:string,
        public address: string,
        ){
            super(username, name, email, phone, password, address);
            this.uid = uniqueId()
        }
}



class Course {
    uid: string;
    constructor(
        public nameCourse: string,
        public datesCourse: string,
        public lecturer: string,
        public studentsCourse: Student[ ])
    {
        this.uid = uniqueId()
    }
}
    
let courses: Course[] = [];
let lecturers: Lecturer[] = [];
let students:Student[] = [];


function uniqueId(): string {
    return `id: ${Math.random()}`;
}
