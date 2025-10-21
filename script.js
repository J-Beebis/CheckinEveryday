// Small enhancement: simple form validation and smooth scroll
document.addEventListener('DOMContentLoaded',()=>{
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', (e)=>{
e.preventDefault();
const id = a.getAttribute('href').slice(1);
const el = document.getElementById(id);
if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
})
});


const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', (e)=>{
// Basic HTML form action uses mailto; show a friendly message instead of navigating away
e.preventDefault();
alert('Thanks — your message would be sent. Replace the form action with your form backend or email handler.');
})
}
});
