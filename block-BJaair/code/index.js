let form = document.querySelector('form');
let ul = document.querySelector('ul');

let cardsData = localStorage.setIteam('cards',JSON.stringify)
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let title = event.target.elements.title.value;
    let create = event.target.elements.title.value;
    cardsData.push({title, category})
    localStorage.setItem('cards',JSON.stringify(cardsData))
    createUI(cardsData, ul)
    
});

function createUI(data, root){
    let fragment = new DocumentFragment();
    data.forEach((cardInfo)=> {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = cardInfo.category;
        let h2 = document.createElement('h2');
        h2.innerText= cardinfo.title;
        li.append(p, h2);
        fragment.appendChild(li);
    });
        root.append(fragment)
    }

    function handleEdit(event){
        let elm = event.target;
        let input = document.createElement('input');
        input.value = info;
        input.addEventListener('keyup',(e)=>{
            if(e.keyCode === 13) {
                console.log('pressed enter');
            }
        })
        let parent = event.target.parentElement;
        parent.replacechild(input, elm);
    }

