const pointer = document.querySelector(".pointer");

// Follow cursor on MouseHover

document.addEventListener("mousemove", e => {
  let x = e.pageX;
  let y = e.pageY;

  pointer.style.top = y + "px";
  pointer.style.left = x + "px";
  pointer.style.display = "block";

  // cursor effects on Mouse Stopped
  const mouseStopped = () => {
    pointer.style.display = "none";
  };
  // clearTimeOut(timeout);
  timeout = setTimeout(mouseStopped, 2000);
});

// cursor effects of MouseOut

document.addEventListener("mouseout", () => {
  pointer.style.display = "none";
});
