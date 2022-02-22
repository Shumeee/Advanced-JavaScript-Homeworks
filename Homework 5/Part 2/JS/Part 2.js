async function getCurrency(){
    let result = await fetch(`https://restcountries.com/v3.1/capital/tallinn`);
    let data = await result.json();
    let currency = Object.keys(data[0].currencies)[0];
    getCountries(currency);
}

async function getCountries(currency){
    let countries = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
    let data = await countries.json();
    console.log(`Number of countries that use ${currency} as currency: ${data.length}`);
}
getCurrency();

