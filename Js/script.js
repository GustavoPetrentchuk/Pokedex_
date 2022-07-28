const pokemonNome = document.querySelector('.nome_pokemon');
const pokemonId = document.querySelector('.id_pokemon');
const pokemonImage = document.querySelector('.pokemonGif');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonNome.innerHTML = 'Loading...';
    const data = await fetchPokemon(pokemon);

    if (data){
        pokemonImage.style.display = 'block';
        pokemonNome.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonId.innerHTML = '';
        pokemonNome.innerHTML = 'Not found :(';
    }
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click', () =>{
    if (searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
})

buttonNext.addEventListener('click', () =>{
    searchPokemon += 1;
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);

