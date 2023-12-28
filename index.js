const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let divisible3 = i % 3 === 0;
    let divisible5 = i % 5 === 0;

    if (divisible3 && divisible5) {
      console.log("FizzBuzz");
    } else if (divisible3) {
      console.log("Fizz");
    } else if (divisible5) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();

module.exports = fizzBuzz;
