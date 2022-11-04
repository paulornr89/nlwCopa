function createGame(selecao1, horario, selecao2) {
  return `
    <li>
      <img src="./assets/Bandeiras dos países/icon=${selecao1}.svg" alt="Bandeira do Brasil"/>
      <strong>${horario}</strong>
      <img src="./assets/Bandeiras dos países/icon=${selecao2}.svg" alt="Bandeira da Sérvia"/>
    </li>
  `
}

function createCard(data, dia, games) {
  return `
    <div class="card">
      <h2>${data} <span>${dia}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo da NLW" />
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
    ${createCard("28/11","segunda",createGame("brazil", "13:00", "switzerland"))}
    ${createCard("02/12","segunda",createGame("cameroon", "16:00", "brazil"))}
  </main>
`
