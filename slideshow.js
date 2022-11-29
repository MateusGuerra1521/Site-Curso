'use strict';

const images = [
    { 'id': '1', 'url':'./images/despertar.jpg'},
    { 'id': '2', 'url':'./images/sla.jpg'},
    { 'id': '3', 'url':'./images/esforço.jpeg'}
]

const containeritems = document.querySelector('#container-items');


const loadimages = (images, container ) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>`
           
    })



}


loadimages( images, containeritems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containeritems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const next = () => {
    const lastitem = items [items.length - 1];
    containeritems.insertBefore( lastitem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)