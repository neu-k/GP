// 0以上100未満の乱数を生成する関数
function rnd() {
  let random = Math.random();
  random *= 100;
  return Math.floor(random);
}

for (i = 0; i < 5; i += 1) {
  console.log(rnd());
}
