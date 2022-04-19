const formNotaN1 = document.getElementById("notaN1");
const formNotaN2 = document.getElementById("notaN2");
const formNotaN3 = document.getElementById("notaN3");


function calcularMedia() {
    const valorN1 = formNotaN1.value;
    const valorN2 = formNotaN2.value;
    const valorN3 = formNotaN3.value;
    
    // validações
    // 1ª - Preciso verificar se os dados são de fato do tipo integer (inteiro) e não do tipo string (texto).
    // 2ª - Preciso verificar se o valor digitado é igual ou menor que 10. Nenhum nota poderá ser maior que 10.

    // regra/lógica de negócio (que é basicamente o nosso sistema/programa/software)]
    // 1ª - O sistema deve fornecer três campos (n1, n2 e n3) para que o usuário preencher.
    // 2ª - O sistema deve ser capaz de capturar os valores dos campos e aplicar um calculo de média.
    // 3ª - O sistema deve ser capaz de informar o resultado para o usuário/cliente na tela.
}