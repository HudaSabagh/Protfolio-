import { data } from "./data.js";
/* bar button display for responsive */
$(document).ready(function($) {

    $('#bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.header').toggleClass('toggle');
    })
})

const list = document.querySelector('#project')
data.portfolio.forEach((item) => {
    const listElement = document.createElement('li')
    listElement.innerHTML = `<img src="${item.photo}"><h2>${item.title}</h2><p>${item.details}</p>`
    list.appendChild(listElement)
})