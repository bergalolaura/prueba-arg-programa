const crearPersonajes = () => {

    const personajes = [
        {
            nombre: "Rick Sánchez",
            imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            gender: "Male",
            species: "Human",
            status: "Alive",
        },
        {
            nombre: "Morty Smith",
            imagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            gender: "Male",
            species: "Human",
            status: "Alive",
        },
        {
            nombre: " Morty Smith",
            imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            gender: "Female",
            species: "Human",
            status: "Alive",
        },
        {
            nombre: "Morty Smith",
            imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            gender: "Female",
            species: "Human",
            status: "Alive",
        },
        {
            nombre: "Jerry Smith",
            imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            gender: "Male",
            species: "Human",
            status: "Alive",
        },
        {
            nombre: "Abadango Cluster",
            imagen: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            gender: "Female",
            species: "Alien",
            status: "Alive",
        },
        {
            nombre: "Abradolf Lincler",
            imagen: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            gender: "Male",
            species: "Human",
            status: "unknown",
        },
        {
            nombre: "Adjudicator Rick",
            imagen: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            gender: "Male",
            species: "Human",
            status: "Dead",
        },
    
        {
            nombre: "Agency Director",
            imagen: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
            gender: "Male",
            species: "Human",
            status: "Dead",
        },
        {
            nombre: "Alan Rails",
            imagen: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            gender: "Male",
            species: "Human",
            status: "Dead",
        },
        {
            nombre: "Albert Einstein",
            imagen: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            gender: "Male",
            species: "Human",
            status: "Dead",
        },
        {
            nombre: "Alexander",
            imagen: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
            gender: "Male",
            species: "Human",
            status: "Dead",
        },
        {
            nombre: "Alien Googah",
            imagen: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
            gender: "unknown",
            species: "Alien",
            status: "unknown",
        },
        {
            nombre: "Alien Morty",
            imagen: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            gender: "Male",
            species: "Alien",
            status: "unknown",
        },
        {
            nombre: "Alien Rick",
            imagen: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            gender: "Male",
            species: "Alien",
            status: "unknown",
        },
        {
            nombre: "Amish Cyborg",
            imagen: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
            gender: "Male",
            species: "Alien",
            status: "Dead",
        },
    
        {
            nombre: "Annie",
            imagen: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
            gender: "Female",
            species: "Human",
            status: "Alive",
    
        },
    
        {
            nombre: "Antenna Morty",
            imagen: "https://rickandmortyapi.com/api/character/avatar/18.jpeg", 
            gender: "Male",
            species: "Human",
            status: "Alive",
    
        },
    
        {
            nombre: "Antenna Rick",
            imagen: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            gender: "Male",
            species: "Human",
            status: "unknown",
    
        },
    
        {
            nombre: "Ants in my Eyes Johnson",
            imagen: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            gender: "Male",
            species: "Human",
            status: "unknown",
    
        },
    ]
    
    let diper="";
    for(let i = 0; i <personajes.length; i = i+1){
        diper += `<div class="personaje">
        <h3 class="personajes">${personajes[i].nombre}</h3>
        <img src="${personajes[i].imagen}" alt="Imagen de ${personajes[i].nombre}">
        
        <ul>
            <li>Gender: ${personajes[i].gender}</li>
            <li>Species: ${personajes[i].species}</li>
            <li> Status: ${personajes[i].status}</li>
        </ul>
    </div>`;

    }
    mostrar("contenedor",diper);
};


const mostrar = (elemento,texto) => {
    const contenedor = document.getElementsByClassName(elemento)[0];
    contenedor.innerHTML = texto;
};

crearPersonajes();
