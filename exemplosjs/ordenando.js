// Função para trocar os valores de duas posições de um vetor
const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const randomIndex1 = Math.floor(Math.random() * array.length);
      const randomIndex2 = Math.floor(Math.random() * array.length);
      swap(array, randomIndex1, randomIndex2);
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
  const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Selection Sort
  const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, i, minIndex);
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Quick Sort
  const quick_sort = (array, low, high) => {
    if (low < high) {
      const pivotIndex = partition(array, low, high);
      quick_sort(array, low, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, high);
    }
  };
  
  // Função de particionamento para o Quick Sort
  const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
      }
    }
    swap(array, i + 1, high);
    return i + 1;
  };
  
function add() {
    const valorInput = document.getElementById("valor");
    const listaValores = document.getElementById("valores");

    const node = document.createElement("li");
    const valor = document.createTextNode(valorInput.value);
    node.appendChild(valor);
    listaValores.appendChild(node);

    valorInput.value = ""; // Limpar o campo de entrada
}

function ordenar() {
  const listaValores = document.getElementById("valores");
  const listaAlgoritmo = document.getElementById("algoritmo");
  const elementos = Array.from(listaValores.children);

  const valores = elementos.map(item => parseInt(item.innerHTML));
  
  if (listaAlgoritmo.value === "bubbleSort") {
      bubble_sort(valores);
  } else if (listaAlgoritmo.value === "selectionSort") {
      selection_sort(valores);
  } else if (listaAlgoritmo.value === "quickSort") {
      quick_sort(valores, 0, valores.length - 1);
  }

  // Use map para criar novos elementos li com os valores ordenados
  const novosElementos = valores.map(item => `<li>${item}</li>`);

  // Use reduce para concatenar os elementos em uma única string
  const listaOrdenadaHTML = novosElementos.reduce((accumulator, currentValue) => accumulator + currentValue, "");

  // Defina o innerHTML da lista com os elementos ordenados
  listaValores.innerHTML = listaOrdenadaHTML;
}


function misturar() {
  const listaValores = document.getElementById("valores");
  const elementos = Array.from(listaValores.getElementsByTagName("li"));

  // Extrai os valores numéricos dos elementos
  const valores = elementos.map(item => parseInt(item.textContent)).filter(value => !isNaN(value));

  // Embaralha os valores usando o método sort com uma função de comparação aleatória
  valores.sort(() => Math.random() - 0.5);

  // Reorganize os elementos na lista com os valores embaralhados
  for (let i = 0; i < elementos.length; i++) {
    if (!isNaN(valores[i])) {
      elementos[i].textContent = valores[i];
    }
  }
}


