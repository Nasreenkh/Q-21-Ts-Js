// Define objects containing information about different countries
var countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331000000,
        language: "English"
    },
    {
        name: "France",
        capital: "Paris",
        population: 67000000,
        language: "French"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1441000000,
        language: "Mandarin"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 213000000,
        language: "Portuguese"
    }
];
// Print information about each country
console.log("Information about different countries:");
countries.forEach(function (country) {
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log("Official Language: ".concat(country.language));
    console.log("-----------------------------------------");
});
