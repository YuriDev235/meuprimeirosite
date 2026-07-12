const botao = document.getElementById("gerar");
const download = document.getElementById("download");
const input = document.getElementById("link");
const imagem = document.getElementById("qrcode");

botao.addEventListener("click", function () {

    const link = input.value;

    if (link === "") {
        alert("Digite um link!");
        return;
    }

    imagem.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(link);

    imagem.onload = function () {
        download.style.display = "block";
    };

});
