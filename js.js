let citater = [
    "Every moment is a fresh beginning",
    "You can't use up creativity.",
    "For my brother, I will walk into hell, wearing gasoline boots if it means his freedom.",
    "I am not the animal you think you see before you. I am the laws of karma all come down wrong",
    "The greatest crimes are not those committed for the sake of necessity but those committed for the sake of superfluity",
    "So many books, so little time.",
    "Be the change that you wish to see in the world.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Always forgive your enemies; nothing annoys them so much.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
];
let randomHeader = [
    "john cena",
    "denmark",
    "germany",
    "Us",
    "Uk",
    "Asia",
    "africa",
    "jamaica",
    "some random island",
    "oh shit quoutes "

];
console.log(randomHeader)

let quoutes = document.querySelector(".siteFooter__quote blockquote")
console.log(citater)

for (let i = 0; i < citater.length; i++) {
    console.log(citater[i])
    let randomCitater = Math.floor(Math.random() * citater.length);
    quoutes.innerHTML = "<blockquote>" + citater[randomCitater] + "</blockquote>";

}
let footerHeader = document.getElementById("quote-headline")
console.log(footerHeader)
for (let i = 0; i < randomHeader.length; i++) {
    console.log(randomHeader[i])
    let randomQuiz = Math.floor(Math.random() * randomHeader.length);
    footerHeader.innerHTML = "<h2>" + randomHeader[randomQuiz] + "</h2>";
    footerHeader.style.color="rgb(255, 0, 0)";
    footerHeader.style.background="rgb(206, 182, 182)";
   /*  footerHeader.style.border = "3px solidrgb(0, 183, 244)"; */
    console.log(randomQuiz)

}


