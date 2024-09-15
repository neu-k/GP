// 回転行列を用いてベクトルを回転させる
function rotate2D(vec, radian) {
  let sin = Math.sin(radian);
  let cos = Math.cos(radian);
  return [
    vec[0] * cos + vec[1] * -sin,
    vec[0] * sin + vec[1] * cos
  ];
}
