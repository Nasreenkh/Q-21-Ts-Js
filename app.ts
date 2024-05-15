/*question no 21. They think of something you could store in a TypeScript Object. Write a program that creates
Objects containing these items. */






// Define objects containing information about different countries
let countries = [
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
countries.forEach(country => {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Official Language: ${country.language}`);
    console.log("-----------------------------------------");
});