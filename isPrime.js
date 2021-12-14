

var array = new Array(500);

for (var i=2 ; i<=array.length-1; i++) {
    if((i%2===0) || (i%3===0))
        continue;
    console.log(i+" first code,");
}

var number = 0;

for (var i=2 ; i<500; i++) {
    if((i%2===0) || (i%3===0))
        continue;
    console.log(i+" second code,");
}

function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}

console.log(isPrime(499999) + " third code");

