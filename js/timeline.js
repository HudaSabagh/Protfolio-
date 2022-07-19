import { data } from "./data.js";
/* bar button display for responsive */
$(document).ready(function($) {

    $('#bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.header').toggleClass('toggle');
    })
})

//timeline component
const list = document.querySelector('#project')
data.timeline.forEach((item) => {
        const listElement = document.createElement('li')
        listElement.innerHTML = `<div id="div-area"><time>${item.year}</time><p>${item.details}</p></div>`
        list.appendChild(listElement)
    })
    /* End timeline */





/* move arrows-------This code from Internet and i modified it----------- */
$(() => {
    const timeline = document.querySelector(".timeline ol"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        firstItem = document.querySelector(".timeline li:first-child"),
        lastItem = document.querySelector(".timeline li:last-child"),
        xScrolling = 430,
        disabledClass = "disabled";
    window.addEventListener("load", animateTl(xScrolling, arrows, timeline));

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function setBtnState(el, flag = true) {
        if (flag) {
            el.classList.add(disabledClass);
        } else {
            if (el.classList.contains(disabledClass)) {
                el.classList.remove(disabledClass);
            }
            el.disabled = false;
        }
    }

    function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", function() {
                if (!arrowPrev.disabled) {
                    arrowPrev.disabled = true;
                }
                if (!arrowNext.disabled) {
                    arrowNext.disabled = true;
                }
                const sign = (this.classList.contains("arrow__prev")) ? "" : "-";

                if (counter === 0) {
                    tl.style.transform = `translateX(-${scrolling}px)`;
                } else {
                    const tlStyle = window.getComputedStyle(tl);
                    const tlTransform = tlStyle.getPropertyValue("transform");
                    const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
                    tl.style.transform = `translateX(${values}px)`;
                }

                setTimeout(() => {
                    isElementInViewport(firstItem) ? setBtnState(arrowPrev) :
                        setBtnState(arrowPrev, false);
                    isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
                }, 1100);
                counter++;
            });
        }
    }
})