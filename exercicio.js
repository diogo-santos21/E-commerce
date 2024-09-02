function armazenarValor(){

var userInput = document.getElementById("userInput").value;
var produtosDisponiveis = 3;

if(userInput<=produtosDisponiveis && userInput>0){
    
    document.getElementById("valorInserido").innerText = "Produtos adicionados ao carrinho";

} else if(userInput>produtosDisponiveis)
{ 
    document.getElementById("valorInserido").innerText = "Quantidade de produtos indisponível";
    
} else if(userInput<=0)
    
    document.getElementById("valorInserido").innerText = "Quantidade inválida";

}