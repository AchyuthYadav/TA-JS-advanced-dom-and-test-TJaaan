let form = document.querySelector('form');
let div = document.querySelector('.div');

let li = document.createElement('li');

function addQuotes(){
    for (let i=0; i<max; i++){
        let li = document.createElement('li')
        let blockQuote = document.createElement('cite');
        blockQuote.innerText = quotes[index].quoteText;
        cite.innerText=quotes[index].quoteAuthor;
        li.append(blockQuote,cite);
    }
}
