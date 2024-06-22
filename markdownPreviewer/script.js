const text = document.getElementById('text');
const authorQuote = document.getElementById('author');
const btnQuote = document.getElementById('new-quote');
const twitter = document.getElementById('twitter');
const body = document.body;

const url =  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const colorRandom = () => {
    const syntax = '123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += syntax[Math.floor(Math.random() * 16)];    
    }
    return color
}

btnQuote.addEventListener('click', async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const quotes = data.quotes;

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        text.querySelector('h2').innerText = randomQuote.quote;
        authorQuote.querySelector('p').innerText = `- ${randomQuote.author}`;

        const newColor = colorRandom();
        setTimeout(() => {
            body.style.backgroundColor = newColor;
            authorQuote.style.color = newColor;
            text.style.color = newColor;
            btnQuote.style.backgroundColor = newColor;
            twitter.style.backgroundColor = newColor;
        }, 500);
    } catch (error) {
        alert('Tienes un error:', error)
    }
});