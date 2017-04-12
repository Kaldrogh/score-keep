import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

  

  // class Person {
  //   constructor(name = "John Doe", age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return `Hi, i'm ${this.name}.`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} a ${this.age} an${this.age > 1 ? 's' : ''}.`
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  //   getGreeting() {
  //     if (this.title) {
  //       return `Hi, i'm ${this.name}, i work as a ${this.title}.`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = "assembly") {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //     return `Hi, i'm ${this.name} and my preferred language is ${this.preferredLanguage}`;
  //   }
  // }
  //
  // let me = new Employee("Marco", 31, "Dev");
  // console.log(me.getGreeting());
  //
  // let me2 = new Employee("Tromezee");
  // console.log(me2.getGreeting());
  //
  // let geek = new Programmer("Tromezee", 31);
  // console.log(geek.getGreeting());

});
