function decimalParaOctal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let decimal = decimalInput.value;

  if (decimal === "" || isNaN(decimal)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let n = parseInt(decimal);
  let octal = "";
  let etapas = [];

  while (n > 0) {
    let resto = n % 8;
    etapas.push(`${n} ÷ 8 = ${Math.floor(n / 8)} (resto ${resto})`);
    octal = resto + octal;
    n = Math.floor(n / 8);
  }

  octal = octal || "0";
  octalInput.value = octal;
  resultado.innerHTML = `Decimal: <strong>${decimal })₁₀</strong> → Octal: <strong>( ${octal} )₈</strong>`;

  etapas.push(`<br><strong>Resultado final: ( ${decimal} )₁₀ → ( ${octal} )₈ </strong>`);

  passos.innerHTML = "<strong>Passos da conversão Decimal → Octal:</strong><br>" +
    etapas.join("<br>");
}
function octalParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let octal = octalInput.value.trim();

  if (octal === "" || !/^[0-7]+$/.test(octal)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (apenas dígitos de 0 a 7).";
    passos.innerHTML = "";
    return;
  }

  let decimal = 0;
  let etapas = [];

  let octalReverso = octal.split("").reverse();

  octalReverso.forEach((digito, index) => {
    let valor = parseInt(digito);
    let parcial = valor * Math.pow(8, index);
    etapas.push(`${digito} × 8^${index} = ${parcial}`);
    decimal += parcial;
  });

  decimalInput.value = decimal;
  resultado.innerHTML = `Octal: <strong>( ${octal} )₈</strong> → Decimal: <strong>( ${decimal} )₁₀</strong>`;

  etapas.push(`<br><strong>Resultado final: ( ${octal} )₈ → ( ${decimal} )₁₀</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Octal → Decimal:</strong><br>" +
    etapas.join("<br>");
}
