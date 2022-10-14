// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

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

  const firstAttri = `El nombre ${apiData.name} `;
  var otherAttri = "";

  for (const elements of apiData.country) {
    otherAttri = `tiene un ${elements.probability * 100} porciento de ser de ${
      elements.country_id
    }.`;
  }

  text$$.textContent = firstAttri + otherAttri;
  document.body.appendChild(text$$);
}
