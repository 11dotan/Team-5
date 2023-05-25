class Person {
  constructor(
    public name: string,
    public id: number,
    public email: string,
    public phone: number,
    public password: string,
    public address: string
  ) {}
}
class Student extends Person {
  coursesUser: Course[];
  grades: number[];
  attendance: boolean[];
  constructor(
    public name: string,
    public id: number,
    public email: string,
    public phone: number,
    public password: string,
    public address: string
  ) {
    super(name, id, email, phone, password, address);
  }
}

class Lecturer extends Person {
  courseTeach: Course[];
  constructor(
    public name: string,
    public id: number,
    public email: string,
    public phone: number,
    public password: string,
    public address: string
  ) {
    super(name, id, email, phone, password, address);
  }
}

class Course {
  public studentsCourse: Student[];
  uid: string;
  constructor(
    public nameCourse: string,
    public datesCourse: string[],
    public lecturer: Lecturer
  ) {
    this.uid = uniqueId();
  }
}

const courses: Course[] = [];
const lecturers: Lecturer[] = [];
const students: Student[] = [];

lecturers.push(
  new Lecturer(
    "Ron mizrahi",
    123456789,
    "ron@gmail.com",
    +972565820,
    "123456",
    "ramat hasharon"
  )
);

lecturers.push(
  new Lecturer(
    "mor oren",
    123456789,
    "mor@gmail.com",
    +972565820,
    "159753",
    "ramat hasharon"
  )
);

lecturers.push(
  new Lecturer(
    "ilan haim",
    25134587,
    "ilan@gmail.com",
    +972565820,
    "2222",
    "ramat hasharon"
  )
);

courses.push(new Course("Full Stuck", ["1.2", "8.2", "13.2"], lecturers[0]));
courses.push(new Course("Design", ["1.2", "8.2", "13.2"], lecturers[1]));
courses.push(new Course("QA", ["1.2", "8.2", "13.2"], lecturers[2]));
