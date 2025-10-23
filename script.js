function hasilkan() {
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);
  var select = parseInt(document.getElementById("select").value);
  var hasil = document.getElementById("hasil");

  switch (select) {
    case 1:
      return (hasil.innerHTML = a + b);
      break;
    case 2:
      return (hasil.innerHTML = a - b);
      break;

    case 3:
      return (hasil.innerHTML = a * b);
      break;

    case 4:
      return hasil.innerHTML = a / b;
      break;
  }
}
