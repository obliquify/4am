// Here I call the Merriam-Webster API


// Integrating the search field and button
document.getElementById("search-button").addEventListener("click", (e)=>{
  e.preventDefault();

  const word = document.getElementById("search-field").value;

  let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/` + word + `?key=315a09b6-8d7b-449e-9b99-5630beabfc37`;

  fetch(url)
  .then(res=>res.json())
  .then(data=>definition(data))

  const definition = (data) => {
    console.log(data)

    let results = "";

    for(let i = 0; i < data.length; i++)
    {
      results += "<p>" + "<em>" + data[i].fl + "</em>" + "</p>";
      results += "<p>" + data[i].shortdef + "</p>";
    }

    document.getElementById("definition").innerHTML=results;

  }

})
