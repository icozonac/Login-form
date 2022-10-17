const show = document.querySelector(".show");
show.style.visibility = "hidden";

const password = document.querySelector(".input-pass");
password.addEventListener("input", (e) => {
  const value = e.target.value;
  if(value) 
  show.style.visibility = "visible";
  else
  show.style.visibility = "hidden";
});

show.addEventListener("click",() => {
   
  if(password.type === "password") {
    password.type = "text";
    show.textContent ="HIDE";
    }
  else{
    password.type = "password";
    show.textContent ="SHOW";
  
  }
})
