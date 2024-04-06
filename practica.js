console.log(document.getElementById('descripcion'));

console.log(document.querySelector('#descripcion'));

console.log(document.querySelectorAll('li'));


const elementosLi = document.querySelectorAll('li');
console.log(`Hay ${elementosLi.length} elementos en la lista.`);

const elementosLi = document.querySelectorAll('li');
elementosLi.forEach(li => {
    console.log(li.textContent);
});

const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = "En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis programas tuvieron que interactuar con los 12 jueces manteniendo una conversación mediante un computador durante cinco minutos en donde se plantean una serie de preguntas con el fin de determinar si es un computador o un humano. En la edición del 2008 ningún logró pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12 jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";
document.body.appendChild(nuevoParrafo);


document.body.innerHTML += '<a href="#">Enlace principal</a>';


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const listaMeses = document.createElement('ul');
document.body.appendChild(listaMeses);
meses.forEach(mes => {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = mes;
    listaMeses.appendChild(nuevoElemento);
});
