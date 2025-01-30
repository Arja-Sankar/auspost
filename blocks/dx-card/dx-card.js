//Getting main Div container
var mainDiv = document.querySelector('.dx-card');
//adding classNames to main Div
mainDiv.classList.add('lyt-container');
 
//creating section element
var sectionElem = document.createElement('section');
//adding Id to section
sectionElem.setAttribute('class','layout-container');
//adding classNames to section
sectionElem.classList.add('clearfix','bg-color--shell','no-padding--bottom');
mainDiv.appendChild(sectionElem);
 
//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','layout-container-wrapper');  
sectionElem.appendChild(containerDiv);

//Creating Inside div one
var containerInsideDiv = document.createElement('div');
//adding class
containerInsideDiv.setAttribute('class','flex-container');
containerInsideDiv.classList.add('flex-container--single-row', 'flex-container--center');
containerDiv.appendChild(containerInsideDiv);

//Creating Inside div two
var containerInsideDivtwo = document.createElement('div');
//adding class
containerInsideDivtwo.setAttribute('class','card');  
containerInsideDiv.appendChild(containerInsideDivtwo);

//creating article
var articleElem = document.createElement('article');
//adding class to article
articleElem.setAttribute('class','tile');
containerInsideDiv.classList.add('tile--featured', 'tile--card', 'bg-color', 'tile--image-right', 'tile--simulate-links');
containerInsideDivtwo.appendChild(articleElem);

//Creating Inside div three
var containerInsideDivthree = document.createElement('div');
//adding class
containerInsideDivthree.setAttribute('class','tile-image');  
articleElem.appendChild(containerInsideDivthree);

//Creating Inside div four
var containerInsideDivfour = document.createElement('div');
//adding class
containerInsideDivfour.setAttribute('class','adpimg__container');
containerInsideDiv.classList.add('adpimg__display--fluid', 'adpimg__obj-fit', 'js-object-fit', 'adpimg__obj-fit--h75-v50');
containerInsideDivthree.appendChild(containerInsideDivfour);

var pict = document.querySelector('.dx-card > div > div > picture');
containerInsideDivfour.appendChild(pict);

//creating div container two
var containerDivTwo = document.createElement('div');
//adding class to container Div
containerDivTwo.setAttribute('class','tile-content');  
articleElem.appendChild(containerDivTwo);

//Creating Inside div container two
var containerTwoInsideDiv = document.createElement('div');
//adding class
containerTwoInsideDiv.setAttribute('class','tile-content-copy');
containerDivTwo.appendChild(containerTwoInsideDiv);

//Creating Inside two div container two
var containerTwoInsideDivTwo = document.createElement('h4');
//adding class
containerTwoInsideDivTwo.setAttribute('class','tile-title');
containerTwoInsideDiv.appendChild(containerTwoInsideDivTwo);

//Creating Inside three div container two
var containerTwoInsideDivThree = document.createElement('div');
//adding class
containerTwoInsideDivThree.setAttribute('class','rte-wrapper');
containerTwoInsideDivTwo.appendChild(containerTwoInsideDivThree);

//Creating Inside div four para container two with value
var containerTwoInsideDivFour = document.createElement('p');
containerTwoInsideDivThree.appendChild(containerTwoInsideDivFour);
var containerTwoInsideDivFourValue = document.querySelectorAll('.dx-card > div > div > p')[0].textContent;
containerTwoInsideDivFour.innerHTML = containerTwoInsideDivFourValue;

//Creating Inside five div container two
var containerTwoInsideDivFive = document.createElement('div');
//adding class
containerTwoInsideDivFive.setAttribute('class','tile-copy');
containerTwoInsideDiv.appendChild(containerTwoInsideDivFive);

//Creating Inside six div container two
var containerTwoInsideDivSix = document.createElement('div');
//adding class
containerTwoInsideDivSix.setAttribute('class','rte-wrapper');
containerTwoInsideDivSix.classList.add('cmp-text');
containerTwoInsideDivFive.appendChild(containerTwoInsideDivSix);

//Creating Inside div seven para container two with value
var containerTwoInsideDivSeven = document.createElement('p');
var containerTwoInsideDivSevenValue = document.querySelectorAll('.dx-card > div > div > p')[1].textContent;
containerTwoInsideDivSix.appendChild(containerTwoInsideDivSeven);
containerTwoInsideDivSeven.innerHTML = containerTwoInsideDivSevenValue;

//Creating Inside div eight ul container two
var containerTwoInsideDivUL = document.createElement('ul');
containerTwoInsideDivSix.appendChild(containerTwoInsideDivUL);

//Creating Inside div nine li container two
var containerTwoInsideDivLi = document.createElement('li');
var containerTwoInsideDivLiValue = document.querySelectorAll('.dx-card > div > div > p')[2].textContent;
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLi);
containerTwoInsideDivLi.innerHTML = containerTwoInsideDivLiValue;

//Creating Inside div ten li Two container two
var containerTwoInsideDivLiOne = document.createElement('li');
var containerTwoInsideDivLiOneValue = document.querySelectorAll('.dx-card > div > div > p')[3].textContent;
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiOne);
containerTwoInsideDivLiOne.innerHTML = containerTwoInsideDivLiOneValue;

//Creating Inside div elven li Three container two
var containerTwoInsideDivLiTwo = document.createElement('li');
var containerTwoInsideDivLiTwoValue = document.querySelectorAll('.dx-card > div > div > p')[4].textContent;
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiTwo);
containerTwoInsideDivLiTwo.innerHTML = containerTwoInsideDivLiTwoValue;

//Creating Inside div twelve li four container two
var containerTwoInsideDivLiThree = document.createElement('li');
var containerTwoInsideDivLiThreeValue = document.querySelectorAll('.dx-card > div > div > p')[5].textContent;
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiThree);
containerTwoInsideDivLiThree.innerHTML = containerTwoInsideDivLiThreeValue;

//Creating Inside div thirteen li five container two
var containerTwoInsideDivLiFour = document.createElement('li');
var containerTwoInsideDivLiFourValue = document.querySelectorAll('.dx-card > div > div > p')[6].textContent;
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFour);
containerTwoInsideDivLiFour.innerHTML = containerTwoInsideDivLiFourValue;

//Creating Inside div fourteen li six container two
var containerTwoInsideDivLiFive = document.createElement('li');
var containerTwoInsideDivLiFiveValue = document.querySelectorAll('.dx-card > div > div > p')[7].textContent;
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFive);
containerTwoInsideDivLiFive.innerHTML = containerTwoInsideDivLiFiveValue;
