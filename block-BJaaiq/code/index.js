let container=document.querySelector(".container")
let listElm=document.querySelector(".infinte-scroll");
alert ("The Dom Content Loding")
function loadMore()
quotes.forEach((elm)=>{

    let parentDiv=document.createElement("div");
    parentDiv.classList.add("parentDiv");
    let quote = document.createElement('h2');
    quote.innerText = elm.quoteText;
    let author = document.createElement('span');
    author.innerText = `author => ${elm.quoteAuthor}`;
    
    parentDiv.append(quote,author);
    listElm.append(parentDiv);

});