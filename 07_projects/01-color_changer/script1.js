// We need all the button so we can use this buttons and add loop on them 
// using this selector we are going to get nodeList we can perform forEach loop on this
const btn = document.querySelectorAll('.button');
// we need body of html page so we can change the color of the body as per button color
const pageBody = document.querySelector('body');

// perform foeEach loop on the btn(nodeList) so we can get one element at a time so we can change the background color using that button
btn.forEach(function(btn){
    // we are performing event on the button event is 'click' and using function we are changing the style of body
    btn.addEventListener('click', function(e){
        let color = e.target.id;
        switch (color){
            case 'grey':
                pageBody.style.backgroundColor = color;
                break;
            case "white":
                pageBody.style.backgroundColor = color;
                break;
            case "blue":
                pageBody.style.backgroundColor = color;
                break;
            case "yellow":
                pageBody.style.backgroundColor = color;
                break;
            case "purple":
                pageBody.style.backgroundColor = color;
                break;
            default:
                pageBody.style.backgroundColor = "red";
        }
    })
})