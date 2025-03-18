const currenciesUrl = 'https://currency-converter-pro1.p.rapidapi.com/currencies';
const currenciesOptions = {
    method: 'GET',
    headers: {
  'x-rapidapi-key': '3960ef29b6msh05cd634f1d9f848p1f74aejsndaf1a9cda706',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
    }
};


// 'x-rapidapi-key': '34974923bdmsh5400459f8c3ffd9p12c4efjsn58d9719f9571',
// 'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'


let select1 = document.querySelector('.currency1')
let select2 = document.querySelector('.currency2')



fetch(currenciesUrl, currenciesOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.result);


        for (let key in data.result) {
            let newOption = document.createElement('option')
            newOption.textContent = key 
            select1.appendChild(newOption)
        }

        for (let key in data.result) {
            let newOption = document.createElement('option')
            newOption.textContent = 
            newOption.textContent = key
            select2.appendChild(newOption)
        }


    })



let result = document.querySelector('.result')





function showResult() {
    let input = document.querySelector('input')

    let amount = input.value


    const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${select1.value}&to=${select2.value}&amount=${amount}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '34974923bdmsh5400459f8c3ffd9p12c4efjsn58d9719f9571',
            'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.result)
            result.textContent = Math.round(data.result)
        })


}