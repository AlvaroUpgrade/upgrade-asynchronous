// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

const url = "https://api.nationalize.io";

const submitButton$$ = document.querySelector("button");
submitButton$$.addEventListener("click", () => {
  const searcher = document.querySelector("input");

  fetch(url + "?name=" + searcher.value)
    .then((response) => response.json())
    .then((data) => createText(data));
});

function createText(apiData) {
  const text$$ = document.createElement("p");
  const deleteButton$$ = document.createElement("button");
  deleteButton$$.textContent = "Eliminar";

  var sentence = `El nombre ${apiData.name} `;

  for (const elements of apiData.country) {
    sentence += `tiene un ${elements.probability * 100} porciento de ser de ${
      elements.country_id
    }. `;
  }

  deleteButton$$.addEventListener("click", () =>
    deleteElement([text$$, deleteButton$$])
  );

  text$$.textContent = sentence;
  document.body.appendChild(text$$);
  document.body.appendChild(deleteButton$$);
}

const deleteElement = (elements) => {
  for (const element of elements) {
    element.remove();
  }
};
