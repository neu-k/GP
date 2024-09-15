// ベクトルV, Wの内積を求める
let V = [5, 1];
let W = [-2, 3];

unitV = normalize(V);
unitW = normalize(W);

let dotValue = dot(unitV, unitW);
let rad = Math.acos(dotValue);
let deg = rad / Math.PI * 180;

console.log(rad);
console.log(deg);


// ベクトルを単位化する関数
function normalize(v) {
  let len = Math.sqrt(v[0] ** 2 + v[1] ** 2);
  return [v[0] / len, v[1] / len];
}

// ベクトルの内積を求める関数
function dot(v1, v2) {
  return (v1[0] * v2[0]) + (v1[1] * v2[1]);
}
