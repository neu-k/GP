let V = [5, -3];

let L = Math.sqrt(V[0] ** 2 + V[1] ** 2);

V[0] /= L;
V[1] /= L;

console.log(`ベクトルVの単位ベクトルは ${V}`);
