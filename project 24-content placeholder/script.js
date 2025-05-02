const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);
function getData() {
  header.innerHTML = `<img
    src="laptop.jpg"
    alt="Laptop open on wooden table photo by Kari Shea"
  />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          sequi!`;

  profileImg.innerHTML = ` <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="photo of the author"
            />`;

  name.innerHTML = `John Doe`;
  date.innerHTML = ` May 02, 2025`;

  animatedBgs.forEach((bg = bg.classList.remove("animated-bg-text")));
}
