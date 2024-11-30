const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter the Valid height ${height} `
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter the Valid weight ${weight} `
    }else {
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        let bmiCategory = "";
        if (bmi < 18.9){
            bmiCategory = "You are in Under Weight category."
        }else if (18.9 < bmi < 24.9){
            bmiCategory = "You are in Normal weight category."
        }else{
            bmiCategory = "You are in overweight Weight category."
        }
         // show the result
        result.innerHTML = `<span>${bmi}</span>\n${bmiCategory}`
    }

})