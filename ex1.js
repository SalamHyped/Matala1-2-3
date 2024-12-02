let num;
(num % 2 == 0 || num % 3 == 0 || num % 5 == 0) && console.log("1");
((num % 2 == 0 && num % 3 == 0) || (num % 3 == 0 && num % 5 == 0) || num % 2 == 0 && num % 5 == 0) && console.log("2");
(num % 2 == 0 && num % 2 == 3 && num % 5 == 0) && console.log("3");