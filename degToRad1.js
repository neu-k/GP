// 度数法の360度 = 弧度法の2π
let degrees = 45;

let radian = degToRad(degrees);
console.log(`degrees: ${degrees}, radian: ${radian}`);

function degToRad(degrees) {
  return (degrees / 360) * (Math.PI * 2)
}
