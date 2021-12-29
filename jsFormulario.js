function validar(){
    var userName = document.getElementById('nome').value;
    var userEmail = document.getElementById('email').value;
    var erro = document.querySelector('.alert-danger');
    if(userName == "" || userEmail == ""){
         erro.classList.toggle('d-none');
         
    }
    else{
        enviar();
    }
}
function validar(){
    let userName = document.getElementById('nome').value;
    let userEmail = document.getElementById('email').value;
    let userMsg = document.getElementById('mensagem').value;
    var url = "https://prog-bolsas-api.herokuapp.com/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};
    let data = JSON.stringify({
        "nome": `${userName}`,
        "email": `${userEmail}`,
        "msg": `${userMsg}`,
    });
    xhr.send(data);
    
}