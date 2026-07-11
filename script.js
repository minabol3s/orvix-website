// Smooth scrolling for navigation links

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior:"smooth"
        });

    });

});





// Code typing animation

const codeText = `

function Orvix(){

 buildSoftware();

 createSolutions();

 deliverQuality();

}

`;


const codeBox = document.querySelector(".code-box pre");

let index = 0;


function typeCode(){

    if(index < codeText.length){

        codeBox.innerHTML += codeText.charAt(index);

        index++;

        setTimeout(typeCode,50);

    }

}



// Start animation after loading

window.addEventListener("load",()=>{

    codeBox.innerHTML="";

    typeCode();

});







// Reveal sections animation

const sections = document.querySelectorAll(
    ".services, .about, .contact, .card"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{


threshold:0.2


});



sections.forEach(section=>{

    observer.observe(section);

});






// Add shadow to navbar on scroll


window.addEventListener("scroll",()=>{


const navbar = document.querySelector(".navbar");


if(window.scrollY > 50){

    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.4)";

}

else{

    navbar.style.boxShadow="none";

}


});