function createGame(selecao1, horario, selecao2) {
  return `
    <li>
      <img src="./assets/Bandeiras dos países/icon=${selecao1}.svg" alt="Bandeira do Brasil"/>
      <strong>${horario}</strong>
      <img src="./assets/Bandeiras dos países/icon=${selecao2}.svg" alt="Bandeira da Sérvia"/>
    </li>
  `
}

let delay = -0.4;
function createCard(data, dia, games) {
  delay += 0.4;
  console.log(delay)
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${data} <span>${dia}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =  
    createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
    createCard("28/11","segunda",createGame("brazil", "13:00", "switzerland")) +
    createCard("02/12","segunda",createGame("cameroon", "16:00", "brazil"))
  

