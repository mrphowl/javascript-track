/**
 * JS-119: Object-Oriented JavaScript
 * 
 * Code challenge: Creating setters
 */
class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90 ) {
            return 'Senior';
        } else if (this.credits > 60) {
            return 'Junior';
        } else if (this.credits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }

    // Task 1: Create an empty setter method called "major()".
    set major(major) {
      // Task 2: Set the student's major to a backing property "_major". If the
      // student's level is Junior or Senior, the value of the backing property
      // should be equal to the parameter passed to the setter method. If the
      // student is only a Freshman or Sophomore, set the "_major" backing
      // property equal to 'None'.
      if ( this.level === 'Senior' || this.level === 'Junior' ) {
        this._major = major;
      } else {
        this._major = 'None';
      }
      
    }
}

var student = new Student(3.9, 90);
