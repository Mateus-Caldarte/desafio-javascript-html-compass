function validar(){
    var userName = document.getElementById('nome').value;
    var userEmail = document.getElementById('email').value;
    var erro = document.querySelector('.alert-danger');
    if(userName == "" || userEmail == ""){
         erro.classList.toggle('d-none');
         
    }
}
function enviar(){
    var userName = document.getElementById('nome').value;
    $.ajax({
    type: "POST",
    url: `https://prog-bolsas-api.herokuapp.com/api/${userName}`,
    data: data,
    success: function(data){ 
        console.log(data);
    },
    });
}