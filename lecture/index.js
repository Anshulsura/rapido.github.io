function outerFunction() {
  var a = 10;
  return function () {
    console.log(a);
  };
}


var ans = outerFunction();

ans();
