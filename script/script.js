document.getElementById('calculate').addEventListener('click',function(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
   
    var message = document.getElementById('message');
    // var bmi = weight/height;
    var bmi = weight / (height * height)

   
    

    if(bmi < 18.5){
        message.textContent = "Underwait: " + bmi.toFixed(2);
    } else if(bmi >= 18.5 && bmi <=24.9){
        message.textContent = "Normal weight: " + bmi.toFixed(2);
    }  else if(bmi >= 25 && bmi <=29.9){
        message.textContent = "Over weight: " + bmi.toFixed(2);
    }else{
        message.textContent = "Obesity: " + bmi.toFixed(2);
    }

    if (weight.trim() === ''){
        message.textContent = "weight can not  be Empty";
    }else if(weight < 0){
        message.textContent = "weight can not  be Negative";
    } 
   
    if (height.trim() === ''){
        message.textContent = "height can not  be Empty";
    }else if(height < 0){
        message.textContent = "height can not  be Negative";
    } 
   

})