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

//creating div container two
var containerDivvTwo = document.createElement('div');
//adding class to container Div
containerDivvTwo.setAttribute('class','tile-content');  
articleElemen.appendChild(containerDivvTwo);

//Creating Inside div container two
var containerTwoInsideDivv = document.createElement('div');
//adding class
containerTwoInsideDivv.setAttribute('class','tile-content-copy');
containerDivvTwo.appendChild(containerTwoInsideDivv);

//Creating Inside two div container two
var containerTwoInsideDivvTwo = document.createElement('h4');
//adding class
containerTwoInsideDivvTwo.setAttribute('class','tile-title');
containerTwoInsideDivv.appendChild(containerTwoInsideDivvTwo);

//Creating Inside three div container two
var containerTwoInsideDivvThree = document.createElement('div');
//adding class
containerTwoInsideDivvThree.setAttribute('class','rte-wrapper');
containerTwoInsideDivvTwo.appendChild(containerTwoInsideDivvThree);

//Creating Inside div four para container two with value
var containerTwoInsideDivvFourValue = document.querySelector('.dx-text-media > div > div > p');
containerTwoInsideDivvThree.appendChild(containerTwoInsideDivvFourValue);

//Creating Inside five div container two
var containerTwoInsideDivvFive = document.createElement('div');
//adding class
containerTwoInsideDivvFive.setAttribute('class','tile-copy');
containerTwoInsideDivv.appendChild(containerTwoInsideDivvFive);

//Creating Inside six div container two
var containerTwoInsideDivvSix = document.createElement('div');
//adding class
containerTwoInsideDivvSix.setAttribute('class','rte-wrapper');
containerTwoInsideDivvSix.classList.add('cmp-text');
containerTwoInsideDivvFive.appendChild(containerTwoInsideDivvSix);

//Creating Inside div seven para container two with value
//var containerTwoInsideDivvSeven = document.createElement('p');
var containerTwoInsideDivvSevenValue = document.querySelector('.dx-text-media > div > div > p');
//containerTwoInsideDivvSix.appendChild(containerTwoInsideDivvSeven);
containerTwoInsideDivvSix.appendChild(containerTwoInsideDivvSevenValue);

var containerEightDivv = document.createElement('div');
containerEightDivv.SetAttribute('class', 'cta-wrapper');
containerEightDivv.classList.add('cta-wrapper--row','cta-wrapper--left');
containerDivvTwo.appendChild(containerEightDivv);

var anchorNew = document.createElement('a');
var anchorValue = document.querySelector('.dx-text-media > div > div > p')
anchorNew.setAttribute('id','cta-1-628236-624912');
anchorNew.setAttribute('class','link-chevron');
anchorNew.setAttribute('href','');
anchorNew.setAttribute('title',anchorValue);
anchorNew.setAttribute('data-event','site interaction');
anchorNew.setAttribute('data-category','card|freight-services|li');
anchorNew.setAttribute('data-description','learn-more');
anchorNew.setAttribute('aria-labelledby','cta-1-628236-624912 card-title-id-0');
containerEightDivv.appendChild(anchorNew);
anchorNew.appendChild(anchorValue);
