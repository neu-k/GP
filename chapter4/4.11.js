document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("main_canvas");
  let context = canvas.getContext("2d");

  context.fillStyle = "#c5c8da";
  context.fillRect(50, 50, 50, 50);

  context.strokeStyle = "#e5d9d0";
  context.strokeRect(10, 10, 30, 30);
});
