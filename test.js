let arr = [1, 2, 3, 4, 5];

const add = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    console.log(arr[i]);
  }
  //   console.log(typeof sum)
  return sum;
};
console.log(add());
