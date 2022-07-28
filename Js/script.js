const pokemonNome = document.querySelector('.nome_pokemon');
const pokemonId = document.querySelector('.id_pokemon');
const pokemonImage = document.querySelector('.pokemonGif');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonNome.innerHTML = data.name;
    pokemonId.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
}

form.addEventListener('submit', () =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

