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
    147258369,
    "mor@gmail.com",
    +972565820,
    "159753",
    "ramat hasharon"
  )
);

lecturers.push(
  new Lecturer(
    "ilan haim",
    789456123,
    "ilan@gmail.com",
    +972565820,
    "2222",
    "ramat hasharon"
  )
);

// lecturers[0].courseTeach = [];
// lecturers[1].courseTeach = [];
// lecturers[2].courseTeach = [];

courses.push(
  new Course(
    "Full Stuck",
    ["1.5.23", "8.5.23", "15.5.23", "22.5.23", "29.5.23", "5.6.23"],
    lecturers[0]
  )
);
// lecturers[0].courseTeach.push(
//   new Course(courses[0].nameCourse, courses[0].datesCourse, courses[0].lecturer)
// );

courses.push(
  new Course(
    "DevOps",
    [
      "17.5.23",
      "24.5.23",
      "31.5.23",
      "7.6.23",
      "14.6.23",
      "21.6.23",
      "28.6.23",
    ],
    lecturers[1]
  )
);
// lecturers[1].courseTeach.push(
//   new Course(courses[1].nameCourse, courses[1].datesCourse, courses[1].lecturer)
// );

courses.push(
  new Course(
    "QA",
    [
      "11.5.23",
      "18.5.23",
      "25.5.23",
      "1.6.23",
      "8.6.23",
      "15.6.23",
      "22.6.23",
      "29.6.23",
    ],
    lecturers[2]
  )
);
// lecturers[2].courseTeach.push(
//   new Course(courses[2].nameCourse, courses[2].datesCourse, courses[2].lecturer)
// );
