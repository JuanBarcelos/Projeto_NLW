//Procrurar o botão
 const btn = document.querySelector("#add-time");

//Quando clicar no botão
btn.addEventListener("click",cloneField);

//Executar uma ação
function cloneField(){
    //duplicar os campos
      const frm = document.querySelector('.schedule-item').cloneNode(true);
    //limpar os campos
      const limpar = frm.querySelectorAll('input');
         //para cada campo
            limpar.forEach(function(limpar) {
              //pega o input do momento e limpa
              limpar.value = "";
            });
    //colocar na pag
    document.querySelector('#schedule-items').appendChild(frm);
}
