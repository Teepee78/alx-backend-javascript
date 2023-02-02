namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export let cTeacher: Teacher = {
    firstName: "Sleek",
    lastName: "Boss",
    experienceTeachingC: 10,
  };
  console.log("C++");
  cpp.teacher = cTeacher;
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  console.log("Java");
  java.teacher = cTeacher;
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  console.log("React");
  react.teacher = cTeacher;
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
