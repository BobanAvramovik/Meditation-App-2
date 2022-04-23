const app = document.querySelector(".app");

// Amount of time to consider user inactive
const inactiveTime = 3000; // 3sec

// Last time the mouse has moved
let mouseLastMoveTime = new Date();

// Listen for mouse move
document.addEventListener("mousemove", () => {
  // Reset last time the mouse has moved
  mouseLastMoveTime = new Date();
  // Show app
  app.classList.remove("inactive");
  // Show cursor
  document.body.style.cursor = "auto";
});

//   Deactivate app
function deactivateApp() {
  // Check if the user was inactive for a certain amount of time
  let now = new Date();
  let deltaTime = now - mouseLastMoveTime;

  if (deltaTime >= inactiveTime) {
    //   Hide app
    app.classList.add("inactive");
    // Hide cursor
    document.body.style.cursor = "none";
  }

  //   Loop
  requestAnimationFrame(deactivateApp);
}
deactivateApp();
