const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const note = document.createElement("div");

  note.classList.add("toast");
  note.classList.add(type ? type : getRandomType());

  note.innerText = message ? message : getRandomMessage();

  toasts.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
