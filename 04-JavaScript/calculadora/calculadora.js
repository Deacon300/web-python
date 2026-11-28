function calcular(operacoes) {
    let campo1 = document.querySelector("#num1");
    let campo2 = document.querySelector("#num2");
    let resultado;

    if (campo1.value === '' || campo2.value === '') {
        alert('Preencha os dois números.');
        return;
    }
    let num1 = Number(campo1.value);
    let num2 = Number(campo2.value);
}