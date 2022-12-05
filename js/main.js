const logo = document.querySelector('header img');

logo.onclick = function(){
  window.open("http://www.standermultimarcas.com.br/?fbclid=IwAR0pMKHXC2J9Fba0NE7c1c7xNVD-SNpS07_HxNGx25nWmF1OdfLdXAK0kGg", "_blank");
}

function createGame(selecao1, horario, selecao2, pais1, pais2) {
  return `
    <li>
      <div>
        <img src="./assets/Bandeiras dos países/icon=${selecao1}.svg" alt="${selecao1}"/>
        <span>${pais1}</span>
      </div>
        <strong>${horario}</strong>
      <div>
        <img src="./assets/Bandeiras dos países/icon=${selecao2}.svg" alt="${selecao2}"/>
        <span>${pais2}</span>
      </div>
    </li>
  `
}

let delay = -0.4;
function createCard(data, dia, games, fase) {
  delay += 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>
        <ul>
          <li>${data} <span>${dia}</span></li>
          <li><span class="fase">${fase}</span></li>
        </ul>
      </h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
  
document.querySelector("#cards").innerHTML =  
createCard("05/12", "segunda", createGame("japan", "12:00", "croatia", "Japão", "Croácia") + createGame("brazil", "16:00", "south korea", "Brasil", "Coréia do Sul"),"Oitavas de Final") +
createCard("06/12", "Terça", createGame("morocco", "12:00", "spain", "Marrocos", "Espanha") + createGame("portugal", "16:00", "switzerland", "Portugal", "Suíça"), "Oitavas de Final") +
createCard("09/12", "Sexta", createGame("", "12:00", "", "", "") + createGame("netherlands", "16:00", "argentina", "Holanda", "Argentina"),"Quartas de Final") +
createCard("10/12", "Sábado", createGame("", "12:00", "", "", "") + createGame("england", "16:00", "france", "Inglaterra", "França"),"Quartas de Final") +
createCard("13/12", "Terça", createGame("", "16:00", "", "", ""), "Semifinal") +
createCard("14/12", "Quarta", createGame("", "16:00", "", "", ""), "Semifinal") +
createCard("17/12", "Sábado", createGame("", "12:00", "", "", ""), "Disputa Pelo Terceiro Lugar") +
createCard("18/12", "Domingo", createGame("", "12:00", "", "", ""), "Final")
/**
 * Jogos primeira faze
    createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador", "Catar", "Equador")) +
    createCard("21/11", "segunda", createGame("england", "10:00", "iran", "Inglaterra", "Irã") + createGame("senegal", "13:00", "netherlands", "Senegal", "Holanda") + createGame("united states", "16:00", "wales", "Estados Unidos", "País de Gales")) +
    createCard("22/11", "terça", createGame("argentina", "07:00", "saudi arabia", "Argentina", "Arábia Saudita") + createGame("denmark", "10:00", "tunisia", "Dinamarca", "Tunísia") + createGame("mexico", "13:00", "poland", "México" , "Polônia") + createGame("france", "16:00", "australia", "França", "Austrália")) +
    createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia", "Marrocos", "Croácia") + createGame("germany", "10:00", "japan", "Alemanha", "Japão") + createGame("spain", "13:00", "costa rica", "Espanha", "Costa Rica") + createGame("belgium", "16:00", "canada", "Bélgica", "Canadá")) +
    createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon", "Suíça", "Camarões") + createGame("uruguay", "10:00", "south korea", "Uruguai", "Coréia do Sul") + createGame("portugal", "13:00", "ghana", "Portugal", "Gana") + createGame("brazil", "16:00", "serbia", "Brasil", "Sérvia")) +
    createCard("25/11", "sexta", createGame("wales", "07:00", "iran", "País de Gales", "Irã") + createGame("qatar", "10:00", "senegal", "Catar", "Senegal") + createGame("netherlands", "13:00", "ecuador", "Holanda", "Portugal") + createGame("england", "16:00", "united states", "Inglaterra", "Estados Unidos")) +
    createCard("26/11", "sábado", createGame("tunisia", "07:00", "australia", "Tunísia", "Austrália") + createGame("poland", "10:00", "saudi arabia", "Polônio", "Arábia Saudita") + createGame("france", "13:00", "denmark", "França", "Dinamarca") + createGame("argentina", "16:00", "mexico", "Argentina", "México")) + 
    createCard("27/11", "domingo", createGame("japan", "07:00", "costa rica", "Japão", "Costa Rica") + createGame("belgium", "10:00", "morocco", "Bélgica", "Marrocos") + createGame("croatia", "13:00", "canada", "Croácia", "Canadá") + createGame("spain", "16:00", "germany", "Espanha", "Alemanha")) + 
    createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia", "Camarões", "Sérvia") + createGame("south korea", "10:00", "ghana", "Coréia do Sul", "Gana") + createGame("brazil", "13:00", "switzerland", "Brasil", "Suíça") + createGame("portugal", "16:00", "uruguay", "Portugal", "Uruguai")) +
    createCard("29/11", "terça", createGame("ecuador", "12:00", "senegal", "Equador", "Senegal") + createGame("netherlands", "12:00", "qatar", "Holanda", "Catar") + createGame("iran", "16:00", "united states", "Irã", "Estados Unidos") + createGame("wales", "16:00", "england", "País de Gales", "Inglaterra")) +
    createCard("30/11", "quarta", createGame("tunisia", "12:00", "france", "Tunísia", "França") + createGame("australia", "12:00", "denmark", "Austrália", "Dinamarca") + createGame("poland", "16:00", "argentina", "Polônia", "Argentina") + createGame("saudi arabia", "16:00", "mexico", "Arábia Saudita", "México")) +
    createCard("01/12", "quinta", createGame("croatia", "12:00", "belgium", "Croácia", "Bélgica") + createGame("canada", "12:00", "morocco", "Canadá", "Marrocos") + createGame("japan", "16:00", "spain", "Japão", "Espanha") + createGame("costa rica", "16:00", "germany", "Costa Rica", "Alemanha")) + 
    createCard("02/12", "quinta", createGame("south korea", "12:00", "portugal", "Coréia do Sul", "Portugal") + createGame("ghana", "12:00", "uruguay", "Gana", "Uruguai") + createGame("serbia", "16:00", "switzerland", "Sérvia", "Suíça") + createGame("cameroon", "16:00", "brazil", "Camarões", "Brasil")) 
   */

/**
 * CAPTURA A BANDEIRA CLICADA
 */
for(let bandeira of document.querySelectorAll("li img")){
 //console.log(bandeira)
  bandeira.onclick = (e) => {
    filtro(bandeira);
  }
}
/**
 * Mostra somente os jogos da seleção selecionada
 * @param {*} bandeiraFiltro 
 */
function filtro(bandeiraFiltro){
  const cards = document.querySelectorAll(".card");
  console.log(cards)
  for(j = 0; j < cards.length; j++){
    const listaDeBandeiras1 = cards[j].querySelectorAll("li img:first-child");
    const listaDeBandeiras2 = cards[j].querySelectorAll("li img~img");
    let filtroAtivo = false;
    let temBandeiraNoCard = false;
    console.log(listaDeBandeiras1)
    for(i = 0; i < listaDeBandeiras1.length; i++){
      if((listaDeBandeiras1[i].closest("li").offsetParent != null) || (listaDeBandeiras1[i].closest(".card").offsetParent != null)){//verifica se o elemento já está oculto ou não
        if(!((listaDeBandeiras1[i].alt != bandeiraFiltro.alt) && (listaDeBandeiras2[i].alt != bandeiraFiltro.alt))){
          temBandeiraNoCard = true;
          listaDeBandeiras1[i].closest("li").style.borderTop = "none";
        }else{
          listaDeBandeiras1[i].closest("li").style.display = "none";
        }
      }else {
        filtroAtivo = true;
      }
    }
    if(!temBandeiraNoCard){
      cards[j].style.display = "none";
    }
  }
}
