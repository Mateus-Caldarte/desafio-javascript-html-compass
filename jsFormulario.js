function validar(){
    var userName = document.getElementById('nome').value;
    var userEmail = document.getElementById('email').value;
    var erro = document.querySelector('.alert-danger');
    if(userName == "" || userEmail == ""){
         erro.classList.toggle('d-none');
         
    }
}