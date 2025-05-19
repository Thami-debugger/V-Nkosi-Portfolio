const quotes = [
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles Swindoll" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Courage doesn’t mean you don’t get afraid. Courage means you don’t let fear stop you.", author: "Bethany Hamilton" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
];

function displayTwoRandomQuotes() {
    let shuffledQuotes = quotes.sort(() => 0.5 - Math.random()); // Shuffle quotes randomly
    let selectedQuotes = shuffledQuotes.slice(0, 2); // Select first two quotes

    document.getElementById("quote-text1").textContent = `"${selectedQuotes[0].text}"`;
    document.getElementById("quote-author1").textContent = `- ${selectedQuotes[0].author}`;

    document.getElementById("quote-text2").textContent = `"${selectedQuotes[1].text}"`;
    document.getElementById("quote-author2").textContent = `- ${selectedQuotes[1].author}`;
}

// Show two quotes on page load
window.onload = displayTwoRandomQuotes;