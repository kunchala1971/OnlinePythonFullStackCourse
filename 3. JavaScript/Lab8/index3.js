//the given number prime or not
var n = 100;
var i = 1;
var count;
for (var j = 1; j <= n; j++) {
  i = 2;
  count = 0;
  while (i < j) {
    if (j % i === 0) {
      count++;
    }
    i++;
  }

  if (count === 0) {
    console.log(j);
  }
}
