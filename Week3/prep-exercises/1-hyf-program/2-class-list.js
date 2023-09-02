import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  // TODO complete this function
  const selectedClass = classes.find((cls) => cls.name === className);
  // const selectedClass = {
  //   name: "class34",
  //   startDate: "2-9-2021",
  //   active: true,
  //   currentModule: "react",
  // }
  if (!selectedClass || !selectedClass.active) {
    return [];
  }
  const people = [];
  // Add students
  const classStudents = students.filter(
    (student) => student.class === className
  );
  // const classStudents = [{ name: "Rob", class: "class34", gitHubName: "robvk", graduated: false },]
  classStudents.forEach((student) =>
    people.push({ name: student.name, role: "student" })
  );
    // people = [{ name: "Rob", role: "student" }]
  // Add mentors
  mentors.forEach((mentor) => {
    if (mentor.nowTeaching === selectedClass.currentModule) {
      people.push({ name: mentor.name, role: "mentor" });
    }
  });
  // people = [{ name: "Rob", role: "student" }, { name: "Shriyans", role: "mentor" }]
  return people;
  

};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  const activeClasses = {};

  classes.forEach((cls) => {
    if (cls.active) {
      activeClasses[cls.name] = getPeopleOfClass(cls.name);
    }
  });

  return activeClasses;
};
// You can uncomment out this line to try your function
 console.log(getActiveClasses());
