document.getElementById('calculate').addEventListener('click',function(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var b = document.getElementById('bmi');
    var bmi = weight/height;

    b.textContent = bmi



})