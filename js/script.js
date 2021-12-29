$(document).ready(function () {

  $('#tipo').on('change', consultarMarcas);
  $('#marca').on('change', consultarModelos);
  $('#modelo').on('change', consultarAnoVeiculo);
});

consultarMarcas = function () {

  let tipoVeiculoSelecionado = $('#tipo').val();

  if (tipoVeiculoSelecionado != '' && tipoVeiculoSelecionado != '0') {
    let montarUrl = `https://parallelum.com.br/fipe/api/v1/${tipoVeiculoSelecionado}/marcas`;
    $.ajax({
      url: montarUrl,
      success: function (objResponse) {
        $.each(objResponse, function (index, value) {
          $('#marca').append(`<option value="${value.codigo}">${value.nome}</option>`);
        });
      },
      error: function (erro) {
        console.error(erro);
      }
    });
  }
}

consultarModelos = function () {
  
  let marcaVeiculoSelecionado = $('#marca').val();

  if (marcaVeiculoSelecionado != '' && marcaVeiculoSelecionado != '0') {
    let montarUrl = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaVeiculoSelecionado}/modelos`;
    $.ajax({
      url: montarUrl,
      success: function (objResponse) {
        $.each(objResponse.modelos, function (index, value) {
          $('#modelo').append(`<option value="${value.codigo}">${value.nome}</option>`);
        });
      },
      error: function (erro) {
        console.error(erro);
      }
    });
  }
}


consultarAnoVeiculo = function () {
  
  let marcaVeiculoSelecionado = $('#marca').val();
  let modeloVeiculoSelecionado = $('#modelo').val();

  if (marcaVeiculoSelecionado != '' && marcaVeiculoSelecionado != '0' && modeloVeiculoSelecionado != '' && modeloVeiculoSelecionado != '0') {
    let montarUrl = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaVeiculoSelecionado}/modelos/${modeloVeiculoSelecionado}/anos`;
    $.ajax({
      url: montarUrl,
      success: function (objResponse) {
        $.each(objResponse, function (index, value) {
          $('#ano').append(`<option value="${value.codigo}">${value.nome}</option>`);
        });
      },
      error: function (erro) {
        console.error(erro);
      }
    });
  }
}

window.addEventListener("scroll", dealWithScroll);

var headerInner = document.querySelector('.header-1');

function dealWithScroll() {
  if (screen.width <= 640) {
    if (window.pageYOffset >= 50) {
      headerInner.classList.add('fixed');
    } else {
      headerInner.classList.remove('fixed');
    }
  } else {
    if (window.pageYOffset >= 400) {
      headerInner.classList.add('fixed');
    } else {
      headerInner.classList.remove('fixed');
    }
  }
}