const menu = document.querySelectorAll("[data-dropdown]");

function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleOutsideClick);
    element.setAttribute(outside, "");
  }
}

function handleClick(event) {
  event.preventDefault();
  this.classList.add("active");
  outsideClick(this, ["touchstart", "click"], () => {
    this.classList.remove("active");
  });
}

menu.forEach((m) => {
  ["touchstart", "click"].forEach((userEvent) => {
    m.addEventListener(userEvent, handleClick);
  });
});
