function decimalParaOctal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");

  let decimal = decimalInput.value;

  if (decimal === "" || isNaN(decimal)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    return;
  }

  let octal = parseInt(decimal).toString(8);
  octalInput.value = octal;
  resultado.innerHTML = `Decimal: <strong>${decimal}</strong> → Octal: <strong>${octal}</strong>`;
}

function octalParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");

  let octal = octalInput.value.trim();

  if (octal === "" || !/^[0-7]+$/.test(octal)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (0-7).";
    return;
  }

  let decimal = parseInt(octal, 8);
  decimalInput.value = decimal;
  resultado.innerHTML = `Octal: <strong>${octal}</strong> → Decimal: <strong>${decimal}</strong>`;
}
