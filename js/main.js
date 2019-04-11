{
  let firstName = "Jamal";
  let lastName = "Haynes";
  console.log(`${firstName} ${{lastName}}`);
}

{
  let firstName = "Debra";
  let lastName = "Gordon";
  console.log(`${firstName} ${{lastName}}`);
}
{
  let firstName = "Svetlana";
  let lastName = "Irinov";
  console.log(`${firstName} ${{lastName}}`);
}
{
  let firstName = "Sequina";
  let lastName = "Rodriguez";
  console.log(`${firstName} ${{lastName}}`);
}


sayName("Haynes", "Jamal");
sayName("Gordon","Debra");
sayName("Irinov","Svetlana");
sayName("Rodriguez","Sequina");








function sayName(lastName, firstName) {
  console.log(`${firstName} ${lastName}`);
}



class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  greet() {
    console.log(`${this.firstName} ${this.lastName} says hello.`);
  }
}

var jamal = new Person("Haynes", "Jamal");

jamal.greet();