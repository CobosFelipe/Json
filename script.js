const json = "archivo.json";

fetch(json)
  .then((response) => response.json())
  .then((data) => {
    mostarDelanteros(data[1].participantes);
    mostrarPorterosB(data[1].participantes);
    mostrarDefensasPaisC(data[1].participantes);
    mostrarMejoresCalificados(data[1].participantes);
    peoresDefensas(data[1].participantes);
    puntuacionPromedio(data[1].participantes);
    vecesGanado(data[1].participantes);
  });

function mostarDelanteros(data) {
  const delanteros = [];
  data.forEach((d) => {
    delanteros.push({
      nombre: d.jugadores[0].nombre,
      posicion: d.jugadores[0].posicion,
      puntuacion: d.jugadores[0].puntuacion,
    });
  });
  console.log("Todos los delanteros: ", delanteros);
}

function mostrarPorterosB(data) {
  const porteros = [];
  data.forEach((d) => {
    if (d.grupo === 2) {
      porteros.push({
        nombre: d.jugadores[2].nombre,
        posicion: d.jugadores[2].posicion,
        puntuacion: d.jugadores[2].puntuacion,
      });
    }
  });
  console.log("Porteros del grupo B: ", porteros);
}

function mostrarDefensasPaisC(data) {
  const defensas = [];
  data.forEach((d) => {
    if (d.nombre.startsWith("C")) {
      defensas.push({ pais: d.nombre, nombre: d.jugadores[1].nombre, posicion: d.jugadores[1].posicion, puntuacion: d.jugadores[1].puntuacion });
    }
  });
  console.log("Defensas de paises que empiezan por la 'C':", defensas);
}

function mostrarMejoresCalificados(data) {
  const jugador = [];
  data.forEach((j) => {
    //El segundo for Each es para recorrer las diferentes posiciones donde están guardados los jugadores
    j.jugadores.forEach((d) => {
      jugador.push(d);
    });
  });
  // Usamos el metodo sort para organizar los datos almacenados en el array de puntuaciones
  const jugadoresOrdenados = jugador.sort((a, b) => b.puntuacion - a.puntuacion);
  // Usamos el metodo slice para obtener los primeros 5 elementos del arreglo
  const mejoresPunt = jugadoresOrdenados.slice(0, 5);
  // El for es para que se vean mas organizados los valores (Opcional)
  const puntos = [];
  for (let i = 0; i < mejoresPunt.length; i++) {
    puntos.push({ nombre: mejoresPunt[i].nombre, posicion: mejoresPunt[i].posicion, puntuacion: mejoresPunt[i].puntuacion });
  }
  console.log("Mejores puntuaciones", puntos);
}

function peoresDefensas(data) {
  const jugador = [];
  data.forEach((j) => {
    //El segundo for Each es para recorrer las diferentes posiciones donde están guardados los jugadores
    j.jugadores.forEach((d) => {
      if (d.posicion === "Defensa") {
        jugador.push(d);
      }
    });
  });
  // Usamos el metodo sort para organizar los datos almacenados en el array de puntos
  const puntOrdenadas = jugador.sort((a, b) => a.puntuacion - b.puntuacion);
  // Usamos el metodo slice para obtener los primeros 10 elementos del arreglo
  const peoresPunt = puntOrdenadas.slice(0, 10);
  const puntuaciones = [];
  for (let i = 0; i < peoresPunt.length; i++) {
    puntuaciones.push({ nombre: peoresPunt[i].nombre, posicion: peoresPunt[i].posicion, puntuacion: peoresPunt[i].puntuacion });
  }
  console.log("Peores puntuaciones:", puntuaciones);
}

function puntuacionPromedio(data) {
  const grupos = {};

  data.forEach((d) => {
    const nombreEquipo = d.nombre;
    // Crear un arreglo vacio con el nombre de cada equipo
    grupos[nombreEquipo] = [];
    let suma = 0;
    for (let i = 0; i < d.jugadores.length; i++) {
      suma += d.jugadores[i].puntuacion;
    }
    grupos[nombreEquipo].push(suma / 3);
  });
  console.log("Promedio puntacion por equipo", grupos);
}

function vecesGanado(data) {
  const ganadores = [];
  data.forEach(d =>{
    ganadores.push({Equipo: d.nombre, Veces_ganado: d.veces_ganado})
  })
  console.log("Veces ganadas por equipo:",ganadores);
}
