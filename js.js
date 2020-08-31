 function f1 (){

  let inp1 = document.querySelector('.inp-1');
  let s1 = document.querySelector('.s-1');
  let s2 = document.querySelector('.s-2');
  let s3 = document.querySelector('.s-3');
  let out1 = +inp1.value * 15000 * +s1.value;
  // console.log(out1)
  let out2 = out1 / 100 * +s2.value;
  // console.log(out2)
  let out3 = out1 + out2;
  // console.log(out3)
  let out4 = out3 / 100 * +s3.value;
  document.querySelector('.out').innerHTML =out3 + out4;
}
document.querySelector('.btn').onclick = f1;