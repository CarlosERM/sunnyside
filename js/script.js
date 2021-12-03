const burgerButton = document.querySelector(".navigation__hamburguer");
const menu = document.querySelector(".top__mobile-menu");
const events = ["ontouch", "click"];
function handleClick(event) {
  event.preventDefault();
  menu.classList.toggle("active");
  //   outsideClick(menu, () => {
  //     menu.classList.remove("active");
  //   });
}

// function outsideClick(element1, callback) {
//   const html = document.documentElement;
//   html.addEventListener("click", handleOutsideClick);

//   function handleOutsideClick(event) {
//     console.log(event.target);
//   }
// }

events.forEach((event) => {
  burgerButton.addEventListener(event, handleClick);
});
