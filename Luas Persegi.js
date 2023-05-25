function hitungLuas() 
{
      var sisiLuas = document.getElementById('sisiLuas').value;
      var luas = sisiLuas * sisiLuas;
      document.getElementById('outputLuas').innerHTML = "L = S x S<br>L = " + sisiLuas +  "x"  + sisiLuas +"<br>L = " + luas;
}

function resetKalkulator() 
{
      document.getElementById('sisiLuas').value = "";
      document.getElementById('outputLuas').innerHTML = "";
}
