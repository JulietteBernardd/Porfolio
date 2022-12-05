const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) => onMouseMove(event));

const onMouseMove = (event) => {
  const maxDeg = 20;
  const mousePosX = event.offsetX;
  const mousePosY = event.offsetY;
  const xMid = card.offsetWidth / 2;
  const yMid = card.offsetHeight / 2; //250px

  //Trouver la valeur négative eou positive en fonction de l'axe
  const xPos = mousePosX - xMid;
  const yPos = mousePosY - yMid;

  //Trouver proportionnellement le degres
  const xDeg = (xPos * maxDeg) / xMid;
  const yDeg = (yPos * maxDeg) / yMid;

  card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`;

  console.log(xPos);
};

ScrollReveal().reveal(".logo", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});

ScrollReveal().reveal(".contact", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});

ScrollReveal().reveal(".text", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});

ScrollReveal().reveal(".title", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});

ScrollReveal().reveal(".button", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});

ScrollReveal().reveal(".card", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});
