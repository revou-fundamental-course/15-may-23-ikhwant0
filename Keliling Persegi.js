function hitungKeliling() 
{
      var sisiKeliling = parseFloat(document.getElementById('sisiKeliling').value);
      var keliling = 4 * sisiKeliling;
      document.getElementById('outputKeliling').innerHTML = "K = 4 x S<br>K = 4 x" + sisiKeliling +"<br>L = " + keliling;
}

function resetKalkulator() 
{
      document.getElementById('sisiKeliling').value = "";
      document.getElementById('outputKeliling').innerHTML = "";
}
