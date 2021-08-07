//color picker functions
let colorInput = document.querySelector('#color');
let color1Input = document.querySelector('#color1');
let color2Input = document.querySelector('#color2');
let color3Input = document.querySelector('#color3');
let color4Input = document.querySelector('#color4');
let color5Input = document.querySelector('#color5');
// let hexInput = document.querySelector('#hex');

colorInput.addEventListener('input', () =>{
   let color = colorInput.value;
//    hexInput.value = color;
//    document.body.style.backgroundColor = color;
   document.querySelector('#usern').style.color = color;

});

color1Input.addEventListener('input', () =>{
    let color1 = color1Input.value;
    document.querySelector('#hbody').style.backgroundColor = color1;

});   
color2Input.addEventListener('input', () =>{
    let color2 = color2Input.value;
    document.querySelector('#userd').style.color = color2;

}); 
color3Input.addEventListener('input', () =>{
    let color3 = color3Input.value;
    document.querySelector('#menuid').style.color = color3;

}); 
color4Input.addEventListener('input', () =>{
    let color4 = color4Input.value;
    document.querySelector('#but').style.color = color4;

});
color5Input.addEventListener('input', () =>{
    let color5 = color5Input.value;
    document.querySelector('#button').style.backgroundColor = color5;

});

//menu navigation functions

var headerDiv = document.getElementById('header');
var sliderDiv = document.getElementById('slider');
var bodyDiv = document.getElementById('body');

var headerBtn = document.getElementById('header_Btn');
var sliderBtn = document.getElementById('slider_Btn');
var bodyBtn = document.getElementById('body_Btn');

var headerBtn1 = document.getElementById('header_Btn');
var sliderBtn1 = document.getElementById('slider_Btn');
var bodyBtn1 = document.getElementById('body_Btn');

headerBtn.onclick = function() {
	headerDiv.setAttribute('class', 'visible');
    sliderDiv.setAttribute('class', 'hidden');
	bodyDiv.setAttribute('class', 'hidden');
	headerBtn1.setAttribute('class', 'menu-bgc');
	sliderBtn1.setAttribute('class', 'grid-h center-grid');
	bodyBtn1.setAttribute('class', 'grid-h');
};

sliderBtn.onclick = function() {
	headerDiv.setAttribute('class', 'hidden');
	bodyDiv.setAttribute('class', 'hidden');
    sliderDiv.setAttribute('class', 'visible');
	headerBtn1.setAttribute('class', 'grid-h');
	sliderBtn1.setAttribute('class', 'menu-bgc center-grid');
	bodyBtn1.setAttribute('class', 'grid-h');
};
bodyBtn.onclick = function() {
    headerDiv.setAttribute('class', 'hidden');
    sliderDiv.setAttribute('class', 'hidden');
	bodyDiv.setAttribute('class', 'visible');
	bodyBtn1.setAttribute('class', 'grid-h');
	sliderBtn1.setAttribute('class', 'grid-h center-grid');
	bodyBtn1.setAttribute('class', 'menu-bgc');
};