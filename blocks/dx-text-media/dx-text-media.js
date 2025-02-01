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

var containerEightDivvv = document.createElement('div');
containerEightDivvv.setAttribute('class', 'cta-wrapper');
containerEightDivvv.classList.add('cta-wrapper--row','cta-wrapper--left');
containerDivvTwo.appendChild(containerEightDivvv);

var anchorNew = document.createElement('a');
var anchorValue =  document.querySelector('.dx-text-media > div > div > p').innerText;
var anchorLink =  document.querySelectorAll('.dx-text-media > div > div')[2].innerText;
anchorNew.setAttribute('id','cta-1-628236-624912');
anchorNew.setAttribute('class','link-chevron');
anchorNew.setAttribute('href',anchorLink);
anchorNew.setAttribute('title',anchorValue);
anchorNew.setAttribute('data-event','site interaction');
anchorNew.setAttribute('data-category','card|freight-services|li');
anchorNew.setAttribute('data-description','learn-more');
anchorNew.setAttribute('aria-labelledby','cta-1-628236-624912 card-title-id-0');
containerEightDivvv.appendChild(anchorNew);
anchorNew.innerHTML = anchorValue;
document.querySelectorAll('.dx-text-media > div > div')[1].style.display = 'none';
document.querySelectorAll('.dx-text-media > div > div')[2].style.display = 'none';

//---------------------------------

//Creating Inside div two
var containerInsideDivvtwoo = document.createElement('div');
//adding class
containerInsideDivvtwoo.setAttribute('class','card');  
containerInsideDivv.appendChild(containerInsideDivvtwoo);

//creating article
var articleElementdiv = document.createElement('article');
//adding class to article
articleElementdiv.setAttribute('class','tile');
articleElementdiv.classList.add('tile--card','bg-color','tile--simulate-links');
containerInsideDivvtwoo.appendChild(articleElementdiv);

//Creating Inside div three
var containerInsideDivvthreee = document.createElement('div');
//adding class
containerInsideDivvthreee.setAttribute('class','tile-image');  
articleElementdiv.appendChild(containerInsideDivvthreee);

//Creating Inside div four
var containerInsideDivvfourr = document.createElement('div');
//adding class
containerInsideDivvfourr.setAttribute('class','adpimg__container');
containerInsideDivvfourr.classList.add('adpimg__display--rectangle','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h50-v50','card-2-tester');
containerInsideDivvthreee.appendChild(containerInsideDivvfourr);

var pictuu = document.querySelector('.dx-text-media > div > div > picture');
containerInsideDivvfourr.appendChild(pictuu);

document.querySelector('.card-2-tester > picture > img').setAttribute('class', 'adpimg__img');

//creating div container two
var containerDivvTwoo = document.createElement('div');
//adding class to container Div
containerDivvTwoo.setAttribute('class','tile-content');  
articleElementdiv.appendChild(containerDivvTwoo);

//Creating Inside div container two
var containerTwoInsideDivvv = document.createElement('div');
//adding class
containerTwoInsideDivvv.setAttribute('class','tile-content-copy');
containerDivvTwoo.appendChild(containerTwoInsideDivvv);

//Creating Inside two div container two
var containerTwoInsideDivvTwoo = document.createElement('h4');
//adding class
containerTwoInsideDivvTwoo.setAttribute('class','tile-title');
containerTwoInsideDivvv.appendChild(containerTwoInsideDivvTwoo);

//Creating Inside three div container two
var containerTwoInsideDivvThreee = document.createElement('div');
//adding class
containerTwoInsideDivvThreee.setAttribute('class','rte-wrapper');
containerTwoInsideDivvTwoo.appendChild(containerTwoInsideDivvThreee);

//Creating Inside div four para container two with value
var containerTwoInsideDivvvFourValue = document.querySelectorAll('.dx-text-media > div > div > p')[2];
containerTwoInsideDivvThreee.appendChild(containerTwoInsideDivvvFourValue);

//Creating Inside five div container two
var containerTwoInsideDivvvFive = document.createElement('div');
//adding class
containerTwoInsideDivvvFive.setAttribute('class','tile-copy');
containerTwoInsideDivvv.appendChild(containerTwoInsideDivvvFive);

//Creating Inside six div container two
var containerTwoInsideDivvSixx = document.createElement('div');
//adding class
containerTwoInsideDivvSixx.setAttribute('class','rte-wrapper');
containerTwoInsideDivvSixx.classList.add('cmp-text');
containerTwoInsideDivvvFive.appendChild(containerTwoInsideDivvSixx);

//Creating Inside div seven para container two with value
//var containerTwoInsideDivvvSeven = document.createElement('p');
var containerTwoInsideDivvvSevenValue = document.querySelectorAll('.dx-text-media > div > div > p')[2];
//containerTwoInsideDivvSixx.appendChild(containerTwoInsideDivvvSeven);
containerTwoInsideDivvSixx.appendChild(containerTwoInsideDivvvSevenValue);

var containerEightDivvvv = document.createElement('div');
containerEightDivvvv.setAttribute('class', 'cta-wrapper');
containerEightDivvvv.classList.add('cta-wrapper--row','cta-wrapper--left');
containerDivvTwoo.appendChild(containerEightDivvvv);

var anchorNewOne = document.createElement('a');
var anchorValueOne = document.querySelectorAll('.dx-text-media > div > div > p')[2].innerText;
var anchorLinkk =  document.querySelectorAll('.dx-text-media > div > div > p')[3].innerText;
anchorNewOne.setAttribute('id','cta-1-638208-490290');
anchorNewOne.setAttribute('class','link-chevron');
anchorNewOne.setAttribute('href',anchorLinkk);
anchorNewOne.setAttribute('title',anchorValueOne);
anchorNewOne.setAttribute('data-event','site interaction');
anchorNewOne.setAttribute('data-category','card|packaging-options|li');
anchorNewOne.setAttribute('data-description','shop-packaging');
anchorNewOne.setAttribute('aria-labelledby','cta-1-638208-490290 card-title-id-1');
containerEightDivvvv.appendChild(anchorNewOne);
anchorNewOne.innerHTML = anchorValueOne;
document.querySelectorAll('.dx-text-media > div > div > p')[2].style.display = 'none';
document.querySelectorAll('.dx-text-media > div > div > p')[3].style.display = 'none';
