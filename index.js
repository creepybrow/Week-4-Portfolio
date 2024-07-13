//template_r6z69ye
//service_20jpaxp
// public key hnP2n1Q8doU5v-nbH
let isModalOpen = false;
let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += "dark-theme"
    }
    else{ 
        document.body.classList.remove("dark-theme")
    }
}
function contact(event){
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    emailjs
    .sendForm(
        'service_20jpaxp',
        'template_r6z69ye',
        event.target,
        'hnP2n1Q8doU5v-nbH'
    ).then(() =>{
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
    }).catch(() =>{
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at creepybrow@gmail.com"
        );
    })
}
//let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    //toggle modal
    document.body.classList += " modal--open";
}
