const contenedor = document.querySelector("#contenedor");
const cantidadDePokemon = 5;

const llamarPokemon = () => {
  for (let i = 1; i <= cantidadDePokemon; i++) {
    obtenerPokemon(i);
  }
};

const obtenerPokemon = async (numeroPokemon) => {
  const respuesta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`
  );
  const data = await respuesta.json();
  console.log(data);
  mostrarPokemon(data);
};

const mostrarPokemon = ({ id, name, sprites, weight, stats }) => {
  const { back_default, back_shiny, front_default, front_shiny } = sprites;
  const [hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad] =
    stats;
  console.log(ataque.base_stat);

  const html = `
  <div class="contenedor-pokemon">
      <div class="descripcion-pokemon">
      <p>Numero de Pokedex: ${id}</p>
      <p>Nombre: ${name}</p>
      <p>Peso: ${weight}lbs</p>
      </div>
      
      <div class="imagenes">
        <div><img src="${front_default}" alt="Imagen frontal de ${name}" /></div>
        <div><img src="${back_default}" alt="Imagen trasera de ${name}" /></div>
        <div><img src="${front_shiny}" alt="Imagen frontal shiny de ${name}" /></div>
        <div><img src="${back_shiny}" alt="Imagen trasera shiny de ${name}" /></div>
      </div>

      <div class="estadisticas">
        <p>Estadisticas base</p>
        <p>Vida: ${hp.base_stat}</p>
        <p>Ataque: ${ataque.base_stat}</p>
        <p>Ataque Especial: ${ataqueEspecial.base_stat}</p>
        <p>Defensa: ${defensa.base_stat}</p>
        <p>Defensa Especial: ${defensaEspecial.base_stat}</p>
        <p>Velocidad: ${velocidad.base_stat}</p>
      </div>
    </div>
  `;

  contenedor.innerHTML += html;
};

llamarPokemon();
