class myClass {
    // properties
    className = "BYETS MERN Batch 2";
    students = ["Default", "Sagar", "Apurba", "Nisho", "Nobel"];
    apurba;

    // method
    organization = () => {
        return "DIPTI";
    };

    // method with parameter
    bestStudent = (std = "Default Person") => {
        return std + ", " + this.students[2] + " and " + this.students[3] + " are best friends";
    };

    // constructor
    constructor(data = "BYETS MERN Batch 2") {
        console.log(data);
    };
};
const obj = new myClass;
console.log(obj.className);
console.log(obj.organization());
console.log(obj.bestStudent("Sagar"));
console.log(obj.bestStudent("Group of Hujurs"));
console.log(obj.bestStudent());
console.log(obj.students);

const obj2 = new myClass;
obj2.apurba = "Apurba is a good student";
console.log(obj2.apurba);
console.log(obj.apurba);
obj2.nisha = "Nisha is an opportunist";
console.log(obj2.nisha);


class myChildClass extends myClass {
    topStudent = () => {
        return this.students[2] + " is the top student of this class";
    };

    constructor() {
        super();
        console.log("Child class created successfully");
    };
};
const childObj = new myChildClass;
console.log(childObj.topStudent());