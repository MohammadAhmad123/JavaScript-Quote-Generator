
const quotes = [
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "What is a man? A Miserable little pile of secrets!", author: "Dracula From Castlevania" },
    { quote: "I have never advocated war except as means of peace, so seek peace, but prepare for war. Because war... War never changes. War is like winter and winter is coming.", author: "Ulysses S Grant" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];


const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const apiQuoteBtn = document.getElementById('api-quote');


function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteText.textContent = `"${selectedQuote.quote}"`;
    authorText.textContent = `– ${selectedQuote.author}`;
}


function fetchQuoteFromAPI() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            quoteText.textContent = `"${advice}"`;
            authorText.textContent = '';  
        })
        .catch(error => {
            console.log("Error fetching the advice: ", error);
            quoteText.textContent = "An error occurred. Please try again!";
            authorText.textContent = '';
        });
}


newQuoteBtn.addEventListener('click', displayNewQuote);
apiQuoteBtn.addEventListener('click', fetchQuoteFromAPI);



