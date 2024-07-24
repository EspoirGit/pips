function lotbutt() {
  let pip_one = document.getElementById("pip-one");
  let cap_one = document.getElementById("capi-one");
  let lot = document.getElementById("gain");

  console.log(cap_one.value);
  var k = lot.value * pip_one.value * 10;
  var k_moins = (k * 100) / cap_one.value;
  var k_mont_plus = Number(cap_one.value) + k;
  var k_mont_moins = cap_one.value - k;
  Swal.fire({
    text:`Votre gain ou perte potentiel est de : ${k}$ .............. Si c'était un gain, vous aurez gagner  : ${k_moins}% de votre capital soit ${k_mont_plus}$ ............. Si c'était une perte, vous aurez perdu  : ${k_moins}% de votre capital soit ${k_mont_moins}$`
  });
}

function nbLot() {
  let b = document.getElementById("mont_gain_pert").value;
  let e = document.getElementById("nbr_pip").value;
  let T = b / (e * 10);

  Swal.fire({text : `Le nombre de lot à utiliser est de : ${T}` });
}

function nbPips() {
  let b = document.getElementById("pp_gain").value;
  let e = document.getElementById("nbPip").value;
  let T = b / (e * 10);

  Swal.fire( {text : `Le nombre de pips à utiliser est de : ${T}pips`});
}

function pourcentage() {
  var a = document.getElementById("cap_two").value;
  var k = document.getElementById("pource").value;
  var k_pour = (k * 100) / a;
  console.log(k_pour)

  Swal.fire({text : `
  Si c'était un gain, vous aurez gagner ${k_pour}% de votre capital, soit ${
    Number(a) + Number(k)
  }$.............
  Si c'était une perte, vous aurez perdu ${k_pour}% de votre capital, soit ${
    Number(a) - Number(k)
  }$ 
    
  `});
}
