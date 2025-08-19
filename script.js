function decimalParaOctal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  // aceita vírgula ou ponto
  let raw = decimalInput.value.trim().replace(",", ".");
  if (raw === "" || isNaN(raw)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor decimal válido.";
    passos.innerHTML = "";
    return;
  }

  let decimal = parseFloat(raw);
  let inteiro = Math.floor(decimal);
  let fracao = decimal - inteiro;

  let etapas = [];

  // --- Parte inteira (divisões por 8) ---
  let octalInteiro = "";
  let n = inteiro;
  if (n === 0) {
    octalInteiro = "0";
  } else {
    while (n > 0) {
      let resto = n % 8;
      etapas.push(`${n} ÷ 8 = ${Math.floor(n / 8)} (resto ${resto})`);
      octalInteiro = resto + octalInteiro;
      n = Math.floor(n / 8);
    }
  }

  // --- Parte fracionária (multiplicações por 8) ---
  let octalFracao = "";
  let limite = 6; // até 6 casas
  while (fracao > 0 && limite > 0) {
    fracao *= 8;
    let digito = Math.floor(fracao);
    octalFracao += digito;
    etapas.push(`${fracao.toFixed(6)} → parte inteira = ${digito}`);
    fracao -= digito;
    limite--;
  }

  let octal = octalInteiro + (octalFracao ? "." + octalFracao : "");

  octalInput.value = octal;
  resultado.innerHTML = `Decimal: <strong>( ${raw.replace(".", ",")} )₁₀</strong> → Octal: <strong>( ${octal.replace(".", ",")} )₈</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${raw.replace(".", ",")} )₁₀ → ( ${octal.replace(".", ",")} )₈</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Decimal → Octal:</strong><br>" +
    etapas.join("<br>");
}



function octalParaDecimal() {
  let decimalInput = document.getElementById("decimal");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  // aceita vírgula ou ponto
  let raw = octalInput.value.trim();
  if (raw === "" || !/^[0-7]+([.,][0-7]*)?$/.test(raw)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (0–7, opcionalmente com ponto ou vírgula).";
    passos.innerHTML = "";
    return;
  }

  // normaliza vírgula → ponto
  let octal = raw.replace(",", ".");
  let [parteInteira, parteFracionaria = ""] = octal.split(".");

  let decimal = 0;
  let etapas = [];

  // Parte inteira
  parteInteira.split("").reverse().forEach((digito, i) => {
    let valor = parseInt(digito, 10);
    let parcial = valor * Math.pow(8, i);
    etapas.push(`${digito} × 8^${i} = ${parcial}`);
    decimal += parcial;
  });

  // Parte fracionária
  parteFracionaria.split("").forEach((digito, i) => {
    let valor = parseInt(digito, 10);
    let parcial = valor * Math.pow(8, -(i + 1));
    etapas.push(`${digito} × 8^-${i + 1} = ${parcial}`);
    decimal += parcial;
  });

  decimalInput.value = decimal;
  resultado.innerHTML = `Octal: <strong>( ${raw} )₈</strong> → Decimal: <strong>( ${decimal} )₁₀</strong>`;
  etapas.push(`<br><strong>Resultado final: ( ${raw} )₈ → ( ${decimal} )₁₀</strong>`);

  passos.innerHTML = "<strong>Passos da conversão Octal → Decimal:</strong><br>" +
    etapas.join("<br>");
}
