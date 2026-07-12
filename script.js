const botao = document.getElementById("gerar");
const input = document.getElementById("link");
const imagem = document.getElementById("qrcode");
botao.addEventListener("click", function(){

    const link = input.value;

    imagem.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(link);

});
if(link.trim() === ""){
    alert("Digite um link primeiro!");
    return;
}
