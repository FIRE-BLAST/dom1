//console.dir(document);
//console.log(document.domain);

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'goodbye';
//header.style.borderBottom = 'solid 3px #000';


//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent = 'hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//var itm = document.getElementsByClassName('card card-body');


//for(var i = 0; i < items.length; i++){
 //   items[i].style.backgroundcolor = 'red';
//}

//var header = document.querySelector('container');
//header.style.fontWeight = 'bold';


var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';

for(var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}