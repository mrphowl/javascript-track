/**
 * JS-119: Object-Oriented JavaScript
 * 
 * Code challenge: Creating getters
 */
class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    // Task 1: Create an empty getter method called level().
    /**
     * The getter method should return the level of a student, based on how many
     * credits (this.credits) they have.
     *   - If student has more than 90 credits, they are a 'Senior'.
     *   - If the student has 90 or fewer credits, but more than 60 (>= 61),
     *     they are a 'Junior'.
     *   - If the student has 60 or fewer credits, but more than 30 (>= 31),
     *     they are a 'Sophomore'.
     *   - If the student has 30 or fewer credits, they are a 'Freshman'.
     */
    get level() {
      if ( this.credits > 90 ) {
        return 'Senior';
      } else if ( this.credits >= 61 && this.credits <= 90 ) {
        return 'Junior';
      } else if ( this.credits >= 31 && this.credits <=60 ) {
        return 'Sophomore';
      } else {
        return 'Freshman';
      }
    }
}

const student = new Student(3.9);
