const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1999, end: 2007},
    {name: "Company four", category: "Retail", start: 1989, end: 2010},
    {name: "Company five", category: "Technology", start: 2009, end: 2014},
    {name: "Company six", category: "Finance", start: 1987, end: 2010},
    {name: "Company seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company nine", category: "Retail", start: 1981, end: 1989},
];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
 
//forEach
companies.forEach(function(company) {
    console.log(company)
});



//filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.Push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return true;
//     }
// })


// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink)


// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// console.log(retailCompanies);


// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);



//map
//sort
//reduce