    // IMAGENS PASSANDO

document.addEventListener("DOMContentLoaded", function() {

    const slides = document.querySelectorAll(".slide");
    const bolinhas = document.querySelectorAll(".bolinha");
    let index = 0;
    let intervalo;

    function trocarSlide() {
        slides[index].classList.remove("ativo");
        if (bolinhas[index]) {
            bolinhas[index].classList.remove("ativa");
        }

        index = (index + 1) % slides.length;

        slides[index].classList.add("ativo");
        if (bolinhas[index]) {
            bolinhas[index].classList.add("ativa");
        }
    }

    function iniciarTimer() {
        intervalo = setInterval(trocarSlide, 5000);
    }

    function resetarTimer() {
        clearInterval(intervalo);
        iniciarTimer();
    }

    bolinhas.forEach((bolinha, i) => {
        bolinha.addEventListener("click", () => {
            slides[index].classList.remove("ativo");
            bolinhas[index].classList.remove("ativa");

            index = i;

            slides[index].classList.add("ativo");
            bolinhas[index].classList.add("ativa");

            resetarTimer();
        });
    });

    iniciarTimer();

});

function cadastrarPet() {

    let nome = document.getElementById("nome").value;
    let especie = document.getElementById("especie").value;
    let data = document.getElementById("data").value;

    // PEGAR SEXO SELECIONADO
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    let sexo = sexoSelecionado ? sexoSelecionado.value : "Não informado";

    // PEGAR SERVIÇOS MARCADOS
    let servicosMarcados = document.querySelectorAll('.serv:checked');
    let lista = [];

    servicosMarcados.forEach(function(servico) {
        lista.push(servico.value);
    });

    let listaServicos = lista.length > 0 ? lista.join(", ") : "Nenhum";

    // SALVAR NO LOCALSTORAGE
    localStorage.setItem("nomePet", nome);
    localStorage.setItem("especiePet", especie);
    localStorage.setItem("sexoPet", sexo);
    localStorage.setItem("listaServicos", listaServicos);
    localStorage.setItem("dataPet", data);

    // REDIRECIONAR PARA A PÁGINA DO COMPROVANTE
    window.location.href = "comprovante.html";
}