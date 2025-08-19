function binarioParaOctal() {
  let binarioInput = document.getElementById("binario");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let binario = binarioInput.value.trim();

  if (binario === "" || !/^[01.]+$/.test(binario) || (binario.split('.').length > 2)) {
    octalInput.value = "";
    resultado.innerHTML = "Digite um valor binário válido (0, 1 e no máximo um ponto).";
    passos.innerHTML = "";
    return;
  }

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

function octalParaBinario() {
  let binarioInput = document.getElementById("binario");
  let octalInput = document.getElementById("octal");
  let resultado = document.getElementById("resultado");
  let passos = document.getElementById("passos");

  let octal = octalInput.value.trim();

  if (octal === "" || !/^[0-7.]+$/.test(octal) || (octal.split('.').length > 2)) {
    binarioInput.value = "";
    resultado.innerHTML = "Digite um valor octal válido (0-7 e no máximo um ponto).";
    passos.innerHTML = "";
    return;
  }

  let [parteInteira, parteFracionaria] = octal.split(".");
  parteFracionaria = parteFracionaria || "";

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
}
