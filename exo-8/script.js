const btn = document.getElementById("btn");
const message = document.getElementById("message");
const messages = [
  "Maitre Rida est le meilleur !",
  "Rida Président !",
  "Rida il arrive à supporter le S, quel crack",
  "Des Rida, il n'y en a pas deux comme lui",
  "Rida c'est Tchoupi mais avec 140 de QI",
  "Pas besoin d'acheter de jeux vidéos quand tu t'appelle Rida, tu te le code tout seul"
];

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.innerText = messages[randomIndex];
});
