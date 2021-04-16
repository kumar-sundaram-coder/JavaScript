function sayHello(name) {
  console.log("Hi " + name);
}

//Task 1
const sayHello1 = (name) => {
  console.log("Hi " + name);
};

//Task 2
const sayHello2 = (firstName, lastName) => {
  console.log(firstName + " " + lastName);
};
const sayHello3 = () => {
  console.log("Hi " + "Kumar");
};
const sayHello4 = (name) => {
  const str = "Hi " + name;
  return str;
};

//Task3
const sayHello5 = (name = "MAX") => {
  console.log("Hi " + name);
};

// Task4
const checkInput = (cb, ...arg) => {
  let flag = false;
  for (const str of arg) {
    console.log(str);
    if (str.length === 0) {
      flag = true;
    }
  }
  if (flag) {
    alert("EMPTY STRING FOUND !!!");
  } else {
    cb();
  }
};

const cb = () => {
  alert("NO EMPTY STRING FOUND ...");
};

sayHello("Kumar");
sayHello1("Kumar");
sayHello2("Kumar", "Sundaram");
sayHello3();
const strr = sayHello4("Kumar");
console.log(strr);
sayHello5("Kumar");
sayHello5();

checkInput(cb, "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd");
checkInput(cb, "abcd", "", "abcd", "", "abcd", "abcd", "abcd");
