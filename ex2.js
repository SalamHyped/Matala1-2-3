for (let num = 2; num < 237; num++) {
  let flag = true;
  for (let j = 2; j < num; j++) {
    if (num % j == 0) flag = false;
  }
  if (flag) console.log(num);
}
