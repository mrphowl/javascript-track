/**
 * JS-119: Object-Oriented JavaScript
 * 
 * Code challenge: Instantiating an object
 */
class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
}
// Task 1: Create a variable called student. Set it equal to a new instance of
// class Student. The student object should be instantiated with a gpa of 3.9.
const student = new Student(3.9);
