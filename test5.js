let apiName = ["OpenGL", "WebGL", "DirectX"];

let extracted = apiName[Math.floor(Math.random() * apiName.length)];
console.log(`今回抽出されたのは ${extracted} です。`)

switch(extracted) {
  case "OpenGL":
    console.log("この読み方は「オープンジーエル」です。");
    break;
  case "WebGL":
    console.log("この読み方は「ウェブジーエル」です。");
    break;
  case "DirectX":
    console.log("この読み方は「ダイレクトエックス」です。");
    break;
}
