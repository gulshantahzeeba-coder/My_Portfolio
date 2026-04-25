            //    =-=-=-=-=-HERDER-=-=-=-=-=  

var sidemenu = document.getElementById("sidemenu");

// OPEN MENU
function openmenu(){
  sidemenu.style.right = "0";
}

// CLOSE MENU
function closemenu(){
  sidemenu.style.right = "-100%";
}

// AUTO CLOSE when any link clicked
document.querySelectorAll("#sidemenu a").forEach(link => {
  link.addEventListener("click", function(){
    sidemenu.style.right = "-100%";
  });
});




            //    =-=-=-=-=-ABOUT-=-=-=-=-=  

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");



function opentab(tabname){
 
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 

            //    =-=-=-=-=-CONTACT-=-=-=-=-=  

const scriptURL = "https://script.google.com/macros/s/AKfycbxplYSQ8VS33J452rMWd_gC7qdRDBc5LcT6fo9qrQPaW4A-Xls5r4oodkUAXu6e5l1KzQ/exec";

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    })
  })
  .then(res => res.text())
  .then(data => {

    msg.style.display = "block";
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully :)";

    form.reset();

    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);

  })
  .catch(error => {

    console.log(error);

    msg.style.display = "block";
    msg.style.color = "red";
    msg.textContent = "Something went wrong :(";

  });
});