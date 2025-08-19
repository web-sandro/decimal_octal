function binarioParaOctal() {
  let binarioInput = document.getElementById("binario");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

<<<<<<< HEAD
  // aceita vírgula ou ponto
  let raw = decimalInput.value.trim().replace(",", ".");
  if (raw === "" || isNaN(raw)) {
=======
  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[01.]+$/.test(binario) || (binario.split('.').length > 2)) {
>>>>>>> 41ec47135cd0309cde6750404f89560a675a0345
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (0, 1 e no máximo um ponto).";
    passos.innerHTML = "";
    return;
  }

<<<<<<< HEAD
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
=======
  let [parteInteira, parteFracionaria] = binario.split(".");
  parteFracionaria = parteFracionaria || "";

  let etapas = [];

  // ----- Parte inteira -----
  while (parteInteira.length % 3 !== 0) {
    parteInteira = "0" + parteInteira;
  }
  etapas.push(`Parte inteira ajustada: ${parteInteira}`);

  let octInt = "";
  for (let i = 0; i < parteInteira.length; i += 3) {
    let grupo = parteInteira.substr(i, 3);
    let valorDecimal = parseInt(grupo, 2);
    etapas.push(`${grupo} → ${valorDecimal}`);
    octInt += valorDecimal;
  }

  // Remover zeros à esquerda
  octInt = octInt.replace(/^0+/, "") || "0";

  // ----- Parte fracionária -----
  let octFrac = "";
  if (parteFracionaria.length > 0) {
    while (parteFracionaria.length % 3 !== 0) {
      parteFracionaria = parteFracionaria + "0";
    }
    etapas.push(`Parte fracionária ajustada: ${parteFracionaria}`);
>>>>>>> 41ec47135cd0309cde6750404f89560a675a0345

    for (let i = 0; i < parteFracionaria.length; i += 3) {
      let grupo = parteFracionaria.substr(i, 3);
      let valorDecimal = parseInt(grupo, 2);
      etapas.push(`${grupo} → ${valorDecimal}`);
      octFrac += valorDecimal;
    }
    // remover zeros inúteis do final
    octFrac = octFrac.replace(/0+$/, "");
  }

  let resultadoFinal = octInt + (octFrac ? "." + octFrac : "");
  octalInput.value = resultadoFinal;

  resultado.innerHTML = `Binário: <strong>( ${binario} )₂</strong> → Octal: <strong>( ${resultadoFinal} )₈</strong>`;
  passos.innerHTML = "<strong>Passos da conversão Binário → Octal:</strong><br>" + etapas.join("<br>");
}

<<<<<<< HEAD


function octalParaDecimal() {
  let decimalInput = document.getElementById("decimal");
=======
function octalParaBinario() {
  let binarioInput = document.getElementById("binario");
>>>>>>> 41ec47135cd0309cde6750404f89560a675a0345
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

<<<<<<< HEAD
  // aceita vírgula ou ponto
  let raw = octalInput.value.trim();
  if (raw === "" || !/^[0-7]+([.,][0-7]*)?$/.test(raw)) {
    decimalInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (0–7, opcionalmente com ponto ou vírgula).";
=======
  let octal = octalInput.value.trim();

  if (octal === "" || !/^[0-7.]+$/.test(octal) || (octal.split('.').length > 2)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (0-7 e no máximo um ponto).";
>>>>>>> 41ec47135cd0309cde6750404f89560a675a0345
    passos.innerHTML = "";
    return;
  }

<<<<<<< HEAD
  // normaliza vírgula → ponto
  let octal = raw.replace(",", ".");
  let [parteInteira, parteFracionaria = ""] = octal.split(".");

  let decimal = 0;
=======
  let [parteInteira, parteFracionaria] = octal.split(".");
  parteFracionaria = parteFracionaria || "";

>>>>>>> 41ec47135cd0309cde6750404f89560a675a0345
  let etapas = [];
  let binInt = "";
  for (let i = 0; i < parteInteira.length; i++) {
    let digito = parteInteira[i];
    let grupoBin = parseInt(digito, 8).toString(2).padStart(3, '0');
    etapas.push(`${digito} (octal) → ${grupoBin} (binário)`);
    binInt += grupoBin;
  }
  // remover zeros à esquerda
  binInt = binInt.replace(/^0+/, "") || "0";

<<<<<<< HEAD
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
=======
  let binFrac = "";
  for (let i = 0; i < parteFracionaria.length; i++) {
    let digito = parteFracionaria[i];
    let grupoBin = parseInt(digito, 8).toString(2).padStart(3, '0');
    etapas.push(`${digito} (octal) → ${grupoBin} (binário)`);
    binFrac += grupoBin;
  }
  // remover zeros inúteis do final
  binFrac = binFrac.replace(/0+$/, "");

  let resultadoFinal = binInt + (binFrac ? "." + binFrac : "");
  binarioInput.value = resultadoFinal;

  resultado.innerHTML = `Octal: <strong>( ${octal} )₈</strong> → Binário: <strong>( ${resultadoFinal} )₂</strong>`;
  passos.innerHTML = "<strong>Passos da conversão Octal → Binário:</strong><br>" + etapas.join("<br>");
>>>>>>> 41ec47135cd0309cde6750404f89560a675a0345
}
