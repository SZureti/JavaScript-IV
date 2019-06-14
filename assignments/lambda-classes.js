// CODE here for your Lambda Classes

//base-class/// Person
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        // this.speak = function(){
        //     console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
        // }  
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

//Instructor
class Instructor extends Person {
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        console.log(`Today I an learning about ${subject}.`);
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

//Student

class Student extends Person {
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(student){
        return `${student.favSubjects}`;
    }
    PRAssignment(student, subject){
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
}

//Project Manager

class ProjectManager extends Instructor {
    constructor(projectManagerAttr){
        super(projectManagerAttr);
        this.gradClassName = projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor;
        this.slackChannel = projectManagerAttr.slackChannel;
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Person objects

const saipher = new Person({
    name: "Saipher",
    age: 29,
    location: "Chicago"
});

//Instructor Objects

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

//Student Objects

const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

//ProjectManager Objects

const ben = new ProjectManager({
    name: "Ben",
    age: 30,
    location: "Texas",
    gender: "M",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    slackChannel: "Web21",
    catchPhrase: "Ayyyyee let's go!",
    gradClassName: "WEB17",
    favInstructor: "Josh"
  });

console.log(saipher.speak());
console.log(saipher.age);
console.log(saipher.location);
console.log(dan.specialty);
console.log(dan.favLanguage);
console.log(dan.catchPhrase);
console.log(dan.demo("JavaScript-III"))
console.log(dan.grade(kevin, "JavaScript-IV"))
console.log(kevin.previousBackground);
console.log(kevin.className);
console.log(kevin.favSubjects);
console.log(kevin.listsSubjects(kevin));
console.log(kevin.sprintChallenge(kevin, "JavaScript-I"));
console.log(kevin.PRAssignment(kevin, "JavaScript-II"));
console.log(ben.catchPhrase);
console.log(ben.gradClassName);
console.log(ben.favInstructor);
console.log(ben.standup(ben.slackChannel));
console.log(ben.debugsCode(kevin, "JavaScript-IV"));
