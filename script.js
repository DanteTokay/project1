const buttonAdd = document.querySelector('.baton');
  let licznik = 1;
const addElement = function (){

  const ddiv = document.createElement('DIV');
  ddiv.textContent=licznik;
  if(licznik%4==0){
    ddiv.classList.add('circle')
  }

  document.body.appendChild(ddiv);
  licznik ++;

}

buttonAdd.addEventListener('click', addElement);
