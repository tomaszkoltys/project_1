const header = document.querySelector("header");
const navmenu_a = document.querySelectorAll(".navmenu a");
const logo = document.querySelector(".logo");
const  hamburgermenu_fabars = document.querySelector(".hamburgermenu .fa-bars");
const  nav_menu = document.querySelector(".navmenu");
const  hamburgermenu = document.querySelector(".hamburgermenu");
const  navbutton = document.querySelector(".navbutton");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
    navmenu_a.forEach(e => {
        e.classList.toggle("sticky", this.window.scrollY > 0);
      });
    logo.classList.toggle("sticky", this.window.scrollY > 0);
    hamburgermenu_fabars.classList.toggle("sticky", this.window.scrollY > 0);
    nav_menu.classList.toggle("sticky", this.window.scrollY > 0);
    hamburgermenu.classList.toggle("sticky", this.window.scrollY > 0);
    navbutton.classList.toggle("sticky", this.window.scrollY > 0);
})





const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector("#email");
function checkEmail(){
    const emaipattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emaipattern)) {
         return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}




const nameField = form.querySelector(".name-field");
const nameInput = nameField.querySelector("#name");
function checkName(){
    const namePattern = /^[A-Za-z\s]{3,}$/;
    if(!nameInput.value.match(namePattern)){
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}




const phoneField = form.querySelector(".phone-field");
const phoneInput = phoneField.querySelector("#phone");
function checkPhone(){
    const phonePattern = /^\d{9}$/;
    if(!phoneInput.value.match(phonePattern)){
        return phoneField.classList.add("invalid");
    }
    phoneField.classList.remove("invalid");
}




const messageField = form.querySelector(".message-field");
const messageInput = messageField.querySelector("#message");
function checkMessage(){
    const messagePattern = /^.+$/;
    if(!messageInput.value.match(messagePattern)){
        return messageField.classList.add("invalid");
    }
    messageField.classList.remove("invalid");
}



var btn = document.getElementById('btn');
btn.addEventListener('click',function(e) {
    e.preventDefault()
    checkEmail();
    checkName();
    checkPhone();
    checkMessage();

    nameInput.addEventListener("keyup",checkName);
    emailInput.addEventListener("keyup",checkEmail);
    phoneInput.addEventListener("keyup",checkPhone);
    messageInput.addEventListener("keyup",checkMessage);

    if(!nameField.classList.contains("invalid") && !emailField.classList.contains("invalid") && !phoneField.classList.contains("invalid") && !messageField.classList.contains("invalid")){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        var body = 'Rent4U:<br>'+ 'Imię: ' +name + '<br/> Email: ' + email + '<br/> Telefon: ' +
        phone + '<br/> Wiadomość: '+ message;

        const icon = document.querySelector(".confirm");
        icon.style.display = "inline-block";

        Email.send({
            SecureToken : "26919f03-6045-4c29-baab-d53068bfcfdf",
            To : 'adam.padam24@gmail.com', 
            From : "jacekplacek221155@gmail.com",
            Subject : "Contact message",
            Body : body
        }).then(
        message => alert(message)
        );

    }
})





let menu = document.querySelector('.fa-bars');
let navmenu = document.querySelector('.navmenu');

menu.addEventListener("click", () =>{
    menu.classList.toggle('fa-xmark');
    navmenu.classList.toggle('open');
})






const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-content');
        }
        else{
            entry.target.classList.remove('show-content');
        }
    });
});

const observer_section = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenSections = document.querySelectorAll(".hidden");
const hiddenElements = document.querySelectorAll(".hidden-content");
hiddenSections.forEach((el) => observer_section.observe(el));
hiddenElements.forEach((el) => observer.observe(el));


