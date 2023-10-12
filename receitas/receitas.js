const receitas = [
  {
    titulo: "Arroz de Couve-flor",
    imagem: "Arroz de couve flor.jpeg",
    preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
    ingredientes: ["Arroz", "Couve-flor", "Cebola Média", "Azeite"]
  },
  {
    titulo: "Bolo de Café",
    imagem: "Bolo de cafe.jpeg",
    preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
    ingredientes: ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"]
  },
  {
    titulo: "Coxinha de Brigadeiro",
    imagem: "coxinha de brigadeiro.jpeg",
    preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
    ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"]
  }
];

const pnlCatalogo = document.getElementById("pnlCatalogo");

function getListaIngredientes(ingredientes) {
  const lista = ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("");
  return `<ul>${lista}</ul>`;
}

function getCard(receita) {
  return `
    <div class="card" style="width: 250px;">
      <img src="${receita.imagem}" class="card-img-top imagem-receita" alt="Foto de ${receita.titulo}" style="width: 250px; height: 250px;">
      <div class="card-body ">
        <h5 class="card-title">${receita.titulo}</h5>
        ${getListaIngredientes(receita.ingredientes)}
        <hr>
        <p class="card-text">${receita.preparo}</p>
      </div>
    </div>
  `;
}

function preencheCatalogo() {
  const catalogoHTML = receitas.map(receita => getCard(receita)).join("");
  pnlCatalogo.innerHTML = catalogoHTML;
}

preencheCatalogo();
