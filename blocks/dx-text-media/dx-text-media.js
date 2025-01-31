//Getting main Div container
var mainDivOne = document.querySelector('.dx-text-media');
//adding classNames to main Div
var containerNewDiv = document.createElement('div');
containerNewDiv.setAttribute('class','lyt-container');
mainDivOne.appendChild(containerNewDiv);

//creating section element
var sectionElemen = document.createElement('section');
//adding Id to section
sectionElemen.setAttribute('class','layout-container');
//adding classNames to section
sectionElemen.classList.add('clearfix','bg-color--shell','no-padding');
containerNewDiv.appendChild(sectionElemen);
 
//creating div
var containerDivv = document.createElement('div');
//adding class to container Div
containerDivv.setAttribute('class','layout-container-wrapper');  
sectionElemen.appendChild(containerDivv);

//Creating Inside div one
var containerInsideDivv = document.createElement('div');
//adding class
containerInsideDivv.setAttribute('class','flex-container');
containerInsideDivv.classList.add('flex-container--multi-33','flex-container--center');
containerDivv.appendChild(containerInsideDivv);

//Creating Inside div two
var containerInsideDivvtwo = document.createElement('div');
//adding class
containerInsideDivvtwo.setAttribute('class','card');  
containerInsideDivv.appendChild(containerInsideDivvtwo);

//creating article
var articleElemen = document.createElement('article');
//adding class to article
articleElemen.setAttribute('class','tile');
articleElemen.classList.add('tile--card','bg-color','tile--simulate-links');
containerInsideDivvtwo.appendChild(articleElemen);

//Creating Inside div three
var containerInsideDivvthree = document.createElement('div');
//adding class
containerInsideDivvthree.setAttribute('class','tile-image');  
articleElemen.appendChild(containerInsideDivvthree);

//Creating Inside div four
var containerInsideDivvfour = document.createElement('div');
//adding class
containerInsideDivvfour.setAttribute('class','adpimg__container');
containerInsideDivvfour.classList.add('adpimg__display--rectangle','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h50-v50','card-1-tester');
containerInsideDivvthree.appendChild(containerInsideDivvfour);

var pictu = document.querySelector('.dx-text-media > div > div > picture');
containerInsideDivvfour.appendChild(pictu);

document.querySelector('.card-1-tester > picture > img').setAttribute('class', 'adpimg__img');

// //creating div container two
// var containerDivTwo = document.createElement('div');
// //adding class to container Div
// containerDivTwo.setAttribute('class','tile-content');  
// articleElem.appendChild(containerDivTwo);

// //Creating Inside div container two
// var containerTwoInsideDiv = document.createElement('div');
// //adding class
// containerTwoInsideDiv.setAttribute('class','tile-content-copy');
// containerDivTwo.appendChild(containerTwoInsideDiv);

// //Creating Inside two div container two
// var containerTwoInsideDivTwo = document.createElement('h4');
// //adding class
// containerTwoInsideDivTwo.setAttribute('class','tile-title');
// containerTwoInsideDiv.appendChild(containerTwoInsideDivTwo);

// //Creating Inside three div container two
// var containerTwoInsideDivThree = document.createElement('div');
// //adding class
// containerTwoInsideDivThree.setAttribute('class','rte-wrapper');
// containerTwoInsideDivTwo.appendChild(containerTwoInsideDivThree);

// //Creating Inside div four para container two with value
// // var containerTwoInsideDivFour = document.createElement('p');
// // containerTwoInsideDivThree.appendChild(containerTwoInsideDivFour);
// var containerTwoInsideDivFourValue = document.querySelector('.dx-card > div > div > p');
// containerTwoInsideDivThree.appendChild(containerTwoInsideDivFourValue);
// // containerTwoInsideDivFour.innerHTML = containerTwoInsideDivFourValue;


