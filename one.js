console.log("So My JS 101 course is  at its end !!!!");
fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const pokemonsprite = data.sprites.front_default;
    const pokemonImage = document.getElementById("pokemonsprite"); // Updated ID

    pokemonImage.src = pokemonsprite;
    pokemonImage.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
