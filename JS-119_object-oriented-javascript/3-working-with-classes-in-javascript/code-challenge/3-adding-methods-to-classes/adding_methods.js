/**
 * JS-119: Object-Oriented JavaScript
 * 
 * Code challenge: Adding methods to classes
 */
class Student {
    constructor(gpa){
        this.gpa = gpa;
    }

    // Task 1: Create an empty method called stringGPA() and add it to the
    // Student class
    stringGPA() {
      // Task 2: Inside the stringGPA() method, convert the value of the gpa
      // property to a string and return it.
      return this.gpa.toString();
    }
}

const student = new Student(3.9);