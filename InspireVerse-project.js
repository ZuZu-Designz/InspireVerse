// Array of quotes
const quotes = [
    { 
        quote: "The only way to do great work is to love what you do.", 
        author: "Steve Jobs" 
    },
    { 
        quote: "In the middle of every difficulty lies opportunity.", 
        author: "Albert Einstein" 
    },
    { 
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
        author: "Winston Churchill" 
    },
    { 
        quote: "Happiness is not something ready-made. It comes from your own actions.", 
        author: "Dalai Lama" 
    },
    { 
        quote: "The journey of a thousand miles begins with one step.", 
        author: "Lao Tzu" 
    },
    { 
        quote: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt" 
    },
    { 
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", 
        author: "Ralph Waldo Emerson" 
    },
    { 
        quote: "Do what you can, with what you have, where you are.", 
        author: "Theodore Roosevelt" 
    },
    { 
        quote: "It does not matter how slowly you go as long as you do not stop.", 
        author: "Confucius" 
    },
    { 
        quote: "Success usually comes to those who are too busy to be looking for it.", 
        author: "Henry David Thoreau" 
    }
    
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote displayed
function displayQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
}

// Event listener for button click
document.getElementById('new-quote').addEventListener('click', displayQuote);
