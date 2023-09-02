import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {

  // Find mentors who can teach the specified module
  
 // const mentorsForModule = mentors.filter(mentor => mentor.canTeach.includes(moduleName));

  // Extract and return the names of mentors
  //const mentorNames = mentorsForModule.map(mentor => mentor.name);

  //return mentorNames;
//};
  
  return mentors.filter(mentor=>mentor.canTeach.includes(moduleName)).map(mentor=>mentor.name)
  // TODO complete this function
};
// You can uncomment out this line to try your function
 console.log(possibleMentorsForModule('using-apis'));
 console.log(possibleMentorsForModule('browsers'));
/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
 const possibleMentors = possibleMentorsForModule(moduleName)
 return possibleMentors[Math.floor(Math.random() * possibleMentors.length)];
  // TODO complete this function
};
// You can uncomment out this line to try your function
 console.log(findMentorForModule('javascript'));
 console.log(findMentorForModule('react'));
