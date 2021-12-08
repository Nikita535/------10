const icon=document.querySelector('.icon');
const search=document.querySelector('.search');

const clear=document.querySelector('.clear');
const Search=document.getElementById('search');

icon.addEventListener("click",()=>{
    search.classList.toggle('active');
});

clear.addEventListener("click",()=>{
    Search.value='';
});