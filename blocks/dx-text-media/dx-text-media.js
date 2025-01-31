//Getting main Div container
var mainDiv = document.querySelector('.dx-text-media');
//adding classNames to main Div
var containerNewDiv = document.createElement('div');
containerNewDiv.setAttribute('class','lyt-container');
mainDiv.appendChild(containerNewDiv);

//creating section element
var sectionElem = document.createElement('section');
//adding Id to section
sectionElem.setAttribute('class','layout-container');
//adding classNames to section
sectionElem.classList.add('clearfix','bg-color--shell','no-padding');
containerNewDiv.appendChild(sectionElem);
 
//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','layout-container-wrapper');  
sectionElem.appendChild(containerDiv);

//Creating Inside div one
var containerInsideDiv = document.createElement('div');
//adding class
containerInsideDiv.setAttribute('class','flex-container');
containerInsideDiv.classList.add('flex-container--multi-33','flex-container--center');
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
articleElem.classList.add('tile--card','bg-color','tile--simulate-links');
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
containerInsideDivfour.classList.add('adpimg__display--rectangle','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h50-v50');
containerInsideDivthree.appendChild(containerInsideDivfour);

var pict = document.querySelector('.dx-text-media > div > div > picture');
containerInsideDivfour.appendChild(pict);

document.querySelector('.adpimg__obj-fit--h50-v50 > div > div > picture > img').setAttribute('class', 'adpimg__img');

