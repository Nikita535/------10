const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  if (eInput.value == "")
    {
       eField.classList.add("shake", "error");
       checkEmail();
    }
   else
   {
    checkEmail();
   } 
  if (pInput.value == "") 
  {
    let  errorTxt = pField.querySelector(".error-txt");
        errorTxt.innerText="Поле не может быть пустым"
       pField.classList.add("shake", "error") 
  }
  else
  {
    if (pInput.value != "123")
    {
      let  errorTxt = pField.querySelector(".error-txt");
      errorTxt.innerText="Неверный пароль"
      pField.classList.add("shake", "error");
      
    }
     else
     {
        if(pInput.value != "123"){
            pField.classList.add("error");
          }else{
            pField.classList.remove("error");
          }
     }
  }
 
  
  
  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

 
  

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      let errorTxt = eField.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "Неправильный формат почты" : errorTxt.innerText = "Поле не может быть пустым";
    }else{ 
      eField.classList.remove("error");
    }
  }


  
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
  }
}