document.getElementById("ctsForm").addEventListener("submit", function(e){
  e.preventDefault();
  let sueldo = parseFloat(document.getElementById("sueldo").value);
  let asignacion = parseFloat(document.getElementById("asignacion").value);
  let grati = parseFloat(document.getElementById("grati").value);
  let meses = parseInt(document.getElementById("meses").value);
  let dias = parseInt(document.getElementById("dias").value);

  let remuneracion = sueldo + asignacion + (grati/6);
  let cts = (remuneracion/6)  meses + (remuneracion/360)  dias;

 document.getElementById("resultado").innerText = "Tu CTS es: S/ " + cts.toFixed(2);
});
