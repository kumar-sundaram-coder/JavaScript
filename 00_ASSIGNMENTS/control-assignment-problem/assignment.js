const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("randomNumber > 0.7");
} else {
  alert("randomNumber <= 0.7");
}

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const el of arr) {
  console.log(el);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

if (
  (randomNumber > 0.7 && randomNumberTwo > 0.7) ||
  !(randomNumber > 0.2 && randomNumberTwo > 0.2)
) {
  alert(
    "randomNumber >0.7 && randomNumberTwo >0.7) || !(randomNumber > 0.2 && randomNumberTwo > 0.2"
  );
} else {
  alert("NAY!");
}
