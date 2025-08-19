function decimalParaOctal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let decimal = decimalInput.value.replace(",", "."); // aceita vírgula

  if (decimal === "" || isNaN(decimal)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let n = parseFloat(decimal);
  let inteiro = Math.floor(n);
  let fracao = n - inteiro;

  let octalInteiro = "";
  let etapas = [];

  // Parte inteira
  if (inteiro === 0) {
    octalInteiro = "0";
  } else {
    while (inteiro > 0) {
      let resto = inteiro % 8;
      etapas.push(`${inteiro} ÷ 8 = ${Math.floor(inteiro / 8)} (resto ${resto})`);
      octalInteiro = resto + octalInteiro;
      inteiro = Math.floor(inteiro / 8);
    }
  }

  // Parte fracionária (até 6 casas no octal para não ficar infinito)
  let octalFracao = "";
  let limite = 6;
  while (fracao > 0 && limite > 0) {
    fracao *= 8;
    let digito = Math.floor(fracao);
    octalFracao += digito;
    etapas.push(`(${fracao.toFixed(6)}) → dígito ${digito}`);
    fracao -= digito;
    limite--;
  }

  let octal = octalInteiro + (octalFracao ? "." + octalFracao : "");
  octalInput.value = octal;
  resultado.innerHTML = `Decimal: <strong>( ${decimal} )₁₀</strong> → Octal: <strong>( ${octal} )₈</strong>`;

  etapas.push(`<br><strong>Resultado final: ( ${decimal} )₁₀ → ( ${octal} )₈ </strong>`);

  passos.innerHTML = "<strong>Passos da conversão Decimal → Octal:</strong><br>" +
    etapas.join("<br>");
}


function octalParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let octal = octalInput.value.trim().replace(",", "."); // aceita vírgula

  if (octal === "" || !/^[0-7]+(\.[0-7]+)?$/.test(octal)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (apenas dígitos de 0 a 7, opcionalmente com ponto ou vírgula).";
    passos.innerHTML = "";
    return;
  }

  let partes = octal.split(".");
  let parteInteira = partes[0];
  let parteFracionaria = partes[1] || "";

  let decimal = 0;
  let etapas = [];

  // Parte inteira
  let octalReverso = parteInteira.split("").reverse();
  octalReverso.forEach((digito, index) => {
    let valor = parseInt(digito);
    let parcial = valor * Math.pow(8, index);
    etapas.push(`${digito} × 8^${index} = ${parcial}`);
    decimal += parcial;
  });

  // Parte fracionária
  parteFracionaria.split("").forEach((digito, index) => {
    let valor = parseInt(digito);
    let parcial = valor * Math.pow(8, -(index + 1));
    etapas.push(`${digito} × 8^-${index + 1} = ${parcial}`);
    decimal += parcial;
  });

  decimalInput.value = decimal;
  resultado.innerHTML = `Octal: <strong>( ${octal} )₈</strong> → Decimal: <strong>( ${decimal} )₁₀</strong>`;

  etapas.push(`<br><strong>Resultado final: ( ${octal} )₈ → ( ${decimal} )₁₀</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Octal → Decimal:</strong><br>" +
    etapas.join("<br>");
}
