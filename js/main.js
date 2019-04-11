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

// Breaks DRY principle! Let's do this instead:


sayName("Haynes", "Jamal");
sayName("Gordon","Debra");
sayName("Irinov","Svetlana");
sayName("Rodriguez","Sequina");


function sayName(lastName, firstName) {
  console.log(`${firstName} ${lastName}`);
}


// Pure function 

const bugSquasher = function (bug, squasher) {
  return `The ${bug} was squashed by a ${squasher}`;
}

//  Has no effect on other things in system.  The function will always 
//  return the same value when given the same inputs.

bugSquasher('beetle', 'boot');
bugSquasher('beetle','boot');
bugSquasher('spider', 'thing next to my hand when I saw it');


//  Impure functions  -- produce different results upon execution

const noise = function() {
  return Math.random();
}

console.log(`${noise()}`);
console.log(`${noise()}`);
console.log(`${noise()}`);
console.log(`${noise()}`);

//  Different results each time

const updateDOM = function(message) {
  const el = document.getElementById('messages');
  el.innerHTML += message;
}

