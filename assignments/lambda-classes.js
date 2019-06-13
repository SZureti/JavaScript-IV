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
    listsSubjects(student, array){
        return student[array].forEach(function(item, i){
            console.log(item);
        });
    }
    PRAssignment(student,subject){
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
}

//Project Manager




const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});


const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});



