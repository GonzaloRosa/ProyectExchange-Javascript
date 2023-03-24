//Array de objetos
const monedas = [{
    codigo: 'USD',
    nombre: 'Dólar estadounidense'
  },
  {
    codigo: 'EUR',
    nombre: 'Euro'
  },
  {
    codigo: 'JPY',
    nombre: 'Yen japonés'
  },
  {
    codigo: 'GBP',
    nombre: 'Libra esterlina'
  },
  {
    codigo: 'AUD',
    nombre: 'Dólar australiano'
  },
  {
    codigo: 'CAD',
    nombre: 'Dólar canadiense'
  },
  {
    codigo: 'CHF',
    nombre: 'Franco suizo'
  },
  {
    codigo: 'CNY',
    nombre: 'Yuan chino'
  },
  {
    codigo: 'MXN',
    nombre: 'Peso mexicano'
  },
  {
    codigo: 'NZD',
    nombre: 'Dólar neozelandés'
  },
  {
    codigo: 'ARS',
    nombre: 'Peso Argentino'
  },
];

//DOM
const deSelector = document.querySelector('#from');
const aSelector = document.querySelector('#to');
const montoInput = document.querySelector('#amount');
const resultDiv = document.querySelector('#result');
const cotizador = document.querySelector('#cotizador')

//Evento
cotizador.onclick = convert

// Iterador For
for (let divisa of monedas) {
  const deOpcion = document.createElement('option');
  const aOpcion = document.createElement('option');
  deOpcion.value = divisa.codigo;
  aOpcion.value = divisa.codigo;
  deOpcion.text = divisa.nombre;
  aOpcion.text = divisa.nombre;
  deSelector.appendChild(deOpcion);
  aSelector.appendChild(aOpcion);
}

//Function
function convert() {
  const from = deSelector.value;
  const to = aSelector.value;
  const amount = montoInput.value;
  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

  //AJAX Y Fetch y promesa
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      const result = amount * rate;

      //Asincronia
      setTimeout(() => {
        resultDiv.innerHTML = `<h3 style="color: black; font-size: 60px; background-color: yellow;">
        Total: ${amount} ${from} = ${result} ${to}</h3>`;
      }, 2000);
    })
    .catch(error => console.log(error));
}

//Libreria JQuery
$("#modo-oscuro-alternar").css({
  "padding": "10px",
  "background-color": "#0088ff",
  "color": "rgb(255, 255, 255)",
  "border": "none",
  "border-radius": "5px",
  "cursor": "pointer"
})

//------------------------------Modo oscuro------------------------------

const cambiarModoOscuro = document.querySelector('#modo-oscuro-alternar');
const body = document.body;

// Función que cambia entre los modos claro y oscuro
function modoOscuroAlternado() {
  body.classList.toggle('modo-oscuro');

  // Guardar el estado del modo oscuro en el almacenamiento local
  if (body.classList.contains('modo-oscuro')) {
    cambiarModoOscuro.textContent = 'Cambiar a modo claro'
    localStorage.setItem('modo-oscuro', 'activado');
  } else {
    cambiarModoOscuro.textContent = 'Cambiar a modo oscuro'
    localStorage.setItem('modo-oscuro', 'desactivado');
  }
}

cambiarModoOscuro.addEventListener('click', modoOscuroAlternado);

const modoOscuro = localStorage.getItem('modo-oscuro');
// Operador Ternario
modoOscuro === 'activado' ? body.classList.add('modo-oscuro') : ''