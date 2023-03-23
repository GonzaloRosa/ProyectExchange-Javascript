//Array de objetos
const monedas = [{
    code: 'USD',
    name: 'Dólar estadounidense'
  },
  {
    code: 'EUR',
    name: 'Euro'
  },
  {
    code: 'JPY',
    name: 'Yen japonés'
  },
  {
    code: 'GBP',
    name: 'Libra esterlina'
  },
  {
    code: 'AUD',
    name: 'Dólar australiano'
  },
  {
    code: 'CAD',
    name: 'Dólar canadiense'
  },
  {
    code: 'CHF',
    name: 'Franco suizo'
  },
  {
    code: 'CNY',
    name: 'Yuan chino'
  },
  {
    code: 'MXN',
    name: 'Peso mexicano'
  },
  {
    code: 'NZD',
    name: 'Dólar neozelandés'
  },
  {
    code: 'ARS',
    name: 'Peso Argentino'
  },
];

//DOM
const fromSelect = document.querySelector('#from');
const toSelect = document.querySelector('#to');
const amountInput = document.querySelector('#amount');
const resultDiv = document.querySelector('#result');
const cotizador = document.querySelector('#cotizador')

//Evento
cotizador.onclick = convert

// Iterador For
for (let currency of monedas) {
  const fromOption = document.createElement('option');
  const toOption = document.createElement('option');
  fromOption.value = currency.code;
  toOption.value = currency.code;
  fromOption.text = currency.name;
  toOption.text = currency.name;
  fromSelect.appendChild(fromOption);
  toSelect.appendChild(toOption);
}

//Function
function convert() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;
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





//------------------------------Modo oscuro------------------------------

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

// Función que cambia entre los modos claro y oscuro
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  
  // Guardar el estado del modo oscuro en el almacenamiento local
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Cambiar a modo claro'
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    darkModeToggle.textContent = 'Cambiar a modo oscuro'
    localStorage.setItem('dark-mode', 'disabled');
  }
}



// Agregar el evento click al botón para cambiar entre los modos claro y oscuro
darkModeToggle.addEventListener('click', toggleDarkMode);

// Verificar el estado del modo oscuro almacenado en el almacenamiento local
const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
}


