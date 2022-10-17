let form=document.querySelector('form');
let draggables=document.getElementsByClassName("draggable");
let display=document.querySelector('.display');

form.addEventListener("submit",(event) => {
    event.preventDefault();
    let title=document.querySelector('#title').value;
    createUI(title);
})


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
