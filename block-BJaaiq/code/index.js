let root = document.querySelector('ul');

let max = 3;

function addQuotes(){
    for (let i=0; i<max; i++){
        let li = document.createElement('li')
        let blockQuote = document.createElement('cite');
        blockQuote.innerText = quotes[index].quoteText;
        cite.innerText=quotes[index].quoteAuthor;
        li.append(blockQuote,cite);
    }
}

addQuotes();

document.addEventListener('scroll',()=>{
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight ;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes();
    }
})

