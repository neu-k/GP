let bool;

for(let i = 0; i < 5000; i = i + 1) {
  let num = Math.random()
  if (num == 0) {
    console.log("Number is zero.");
    bool = true;
  } else if (num > 0.5) {
    console.log("Number is bigger than 0.5.")
    console.log(num);
  } else {
    console.log("Number is between 0 and 0.5.")
    console.log(num);
  }
}

if (bool == true) {
  console.log("Zero was created.");
}
