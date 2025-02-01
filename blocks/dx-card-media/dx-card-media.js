//Getting main Div container
var mainDivOne = document.querySelector('.dx-card-media');
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
containerInsideDivv.classList.add('flex-container--multi-25','flex-container--center');
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
containerInsideDivvfour.classList.add('adpimg__display--rectangle','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h75-v50','card-8-tester');
containerInsideDivvthree.appendChild(containerInsideDivvfour);

var pictu = document.querySelector('.dx-card-media > div > div > picture');
containerInsideDivvfour.appendChild(pictu);

document.querySelector('.card-8-tester > picture > img').setAttribute('class', 'adpimg__img');

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
containerTwoInsideDivvTwo.setAttribute('id','card-title-id-0');
containerTwoInsideDivv.appendChild(containerTwoInsideDivvTwo);

//Creating Inside three div container two
var containerTwoInsideDivvThree = document.createElement('div');
//adding class
containerTwoInsideDivvThree.setAttribute('class','rte-wrapper');
containerTwoInsideDivvTwo.appendChild(containerTwoInsideDivvThree);

//Creating Inside div four para container two with value
var containerTwoInsideDivvFourValue = document.querySelector('.dx-card-media > div > div > p');
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
var containerTwoInsideDivvSevenValue = document.querySelector('.dx-card-media > div > div > p');
//containerTwoInsideDivvSix.appendChild(containerTwoInsideDivvSeven);
containerTwoInsideDivvSix.appendChild(containerTwoInsideDivvSevenValue);

var containerEightDivvv = document.createElement('div');
containerEightDivvv.setAttribute('class', 'cta-wrapper');
containerEightDivvv.classList.add('cta-wrapper--row','cta-wrapper--left');
containerDivvTwo.appendChild(containerEightDivvv);

var anchorNew = document.createElement('a');
var anchorValue =  document.querySelector('.dx-card-media > div > div > p').innerText;
var anchorLink =  document.querySelectorAll('.dx-card-media > div > div > p > a')[0].href;
anchorNew.setAttribute('id','cta-1-521868-588348');
anchorNew.setAttribute('class','link-chevron');
anchorNew.setAttribute('href',anchorLink);
anchorNew.setAttribute('title',anchorValue);
anchorNew.setAttribute('data-event','site interaction');
anchorNew.setAttribute('data-category','card|same-day|li');
anchorNew.setAttribute('data-description','courier');
anchorNew.setAttribute('aria-labelledby','cta-1-521868-588348 card-title-id-0');
containerEightDivvv.appendChild(anchorNew);
anchorNew.innerHTML = anchorValue;

//document.querySelectorAll('.dx-card-media > div > div')[2].style.display = 'none';

var anchorNeww = document.createElement('a');
var anchorValuee = document.querySelectorAll('.dx-card-media > div > div > p')[1].innerText;
var anchorLinkk =  document.querySelectorAll('.dx-card-media > div > div > p > a')[1].href;
anchorNeww.setAttribute('id','cta-2-425472-470346');
anchorNeww.setAttribute('class','link-chevron');
anchorNeww.setAttribute('href',anchorLinkk);
anchorNeww.setAttribute('title',anchorValuee);
anchorNeww.setAttribute('data-event','site interaction');
anchorNeww.setAttribute('data-category','card|same-day|li');
anchorNeww.setAttribute('data-description','next-flight');
anchorNeww.setAttribute('aria-labelledby','cta-2-425472-470346 card-title-id-0');
containerEightDivvv.appendChild(anchorNeww);
anchorNeww.innerHTML = anchorValuee;
// document.querySelectorAll('.dx-card-media > div > div')[1].style.display = 'none';
// document.querySelectorAll('.dx-card-media > div > div')[2].style.display = 'none';
document.querySelectorAll('.dx-card-media > div > div')[1].style.display = 'none';
document.querySelectorAll('.dx-card-media > div > div')[2].style.display = 'none';
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

var pictuu = document.querySelector('.dx-card-media > div > div > picture');
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
containerTwoInsideDivvTwoo.setAttribute('id','card-title-id-1');
containerTwoInsideDivvv.appendChild(containerTwoInsideDivvTwoo);

//Creating Inside three div container two
var containerTwoInsideDivvThreee = document.createElement('div');
//adding class
containerTwoInsideDivvThreee.setAttribute('class','rte-wrapper');
containerTwoInsideDivvTwoo.appendChild(containerTwoInsideDivvThreee);

//Creating Inside div four para container two with value
var containerTwoInsideDivvvFourValue = document.querySelectorAll('.dx-card-media > div > div > p')[4];
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
var containerTwoInsideDivvvSevenValue = document.querySelectorAll('.dx-card-media > div > div > p')[4];
//containerTwoInsideDivvSixx.appendChild(containerTwoInsideDivvvSeven);
containerTwoInsideDivvSixx.appendChild(containerTwoInsideDivvvSevenValue);

var containerEightDivvvv = document.createElement('div');
containerEightDivvvv.setAttribute('class', 'cta-wrapper');
containerEightDivvvv.classList.add('cta-wrapper--row','cta-wrapper--left');
containerDivvTwoo.appendChild(containerEightDivvvv);

var anchorNewOne = document.createElement('a');
var anchorValueOne = document.querySelectorAll('.dx-card-media > div > div > p > a')[2].textContent;
var anchorLinkk =  document.querySelectorAll('.dx-card-media > div > div > p > a')[6].href;
anchorNewOne.setAttribute('id','cta-1-594996-480318');
anchorNewOne.setAttribute('class','link-chevron');
anchorNewOne.setAttribute('href',anchorLinkk);
anchorNewOne.setAttribute('title',anchorValueOne);
anchorNewOne.setAttribute('data-event','site interaction');
anchorNewOne.setAttribute('data-category','card|next-day|li');
anchorNewOne.setAttribute('data-description','premium');
anchorNewOne.setAttribute('aria-labelledby','cta-1-594996-480318 card-title-id-1');
containerEightDivvvv.appendChild(anchorNewOne);
anchorNewOne.innerHTML = anchorValueOne;
document.querySelectorAll('.dx-card-media > div > div')[4].style.display = 'none';
document.querySelectorAll('.dx-card-media > div > div')[5].style.display = 'none';

//-----------------------------------------------------

//Creating Inside div two
var containerInsideDivvtwooo = document.createElement('div');
//adding class
containerInsideDivvtwooo.setAttribute('class','card');  
containerInsideDivv.appendChild(containerInsideDivvtwooo);

//creating article
var articleElementdivv = document.createElement('article');
//adding class to article
articleElementdivv.setAttribute('class','tile');
articleElementdivv.classList.add('tile--card','bg-color','tile--simulate-links');
containerInsideDivvtwooo.appendChild(articleElementdivv);

//Creating Inside div three
var containerInsideDivvthreeee = document.createElement('div');
//adding class
containerInsideDivvthreeee.setAttribute('class','tile-image');  
articleElementdivv.appendChild(containerInsideDivvthreeee);

//Creating Inside div four
var containerInsideDivvfourrr = document.createElement('div');
//adding class
containerInsideDivvfourrr.setAttribute('class','adpimg__container');
containerInsideDivvfourrr.classList.add('adpimg__display--rectangle','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h50-v50','card-3-tester');
containerInsideDivvthreeee.appendChild(containerInsideDivvfourrr);

var pictuuu = document.querySelector('.dx-card-media > div > div > picture');
containerInsideDivvfourrr.appendChild(pictuuu);

document.querySelector('.card-3-tester > picture > img').setAttribute('class', 'adpimg__img');

//creating div container two
var containerDivvTwooo = document.createElement('div');
//adding class to container Div
containerDivvTwooo.setAttribute('class','tile-content');  
articleElementdivv.appendChild(containerDivvTwooo);

//Creating Inside div container two
var containerTwooInsideeDivvv = document.createElement('div');
//adding class
containerTwooInsideeDivvv.setAttribute('class','tile-content-copy');
containerDivvTwooo.appendChild(containerTwooInsideeDivvv);

//Creating Inside two div container two
var containerTwoInsideDivvTwooo = document.createElement('h4');
//adding class
containerTwoInsideDivvTwooo.setAttribute('class','tile-title');
containerTwoInsideDivvTwooo.setAttribute('id','card-title-id-2');
containerTwooInsideeDivvv.appendChild(containerTwoInsideDivvTwooo);

//Creating Inside three div container two
var containerTwoInsideDivvThreeee = document.createElement('div');
//adding class
containerTwoInsideDivvThreeee.setAttribute('class','rte-wrapper');
containerTwoInsideDivvTwooo.appendChild(containerTwoInsideDivvThreeee);

//Creating Inside div four para container two with value
var containerTwoInsideDivvvFourValuee = document.querySelectorAll('.dx-card-media > div > div > p')[6];
containerTwoInsideDivvThreeee.appendChild(containerTwoInsideDivvvFourValuee);

//Creating Inside five div container two
var containerTwoInsideDivvvFivee = document.createElement('div');
//adding class
containerTwoInsideDivvvFivee.setAttribute('class','tile-copy');
containerTwooInsideeDivvv.appendChild(containerTwoInsideDivvvFivee);

//Creating Inside six div container two
var containerTwoInsideDivvSiixx = document.createElement('div');
//adding class
containerTwoInsideDivvSiixx.setAttribute('class','rte-wrapper');
containerTwoInsideDivvSiixx.classList.add('cmp-text');
containerTwoInsideDivvvFivee.appendChild(containerTwoInsideDivvSiixx);

//Creating Inside div seven para container two with value
//var containerTwoInsideDivvvSevenn = document.createElement('p');
var containerTwoInsideDivvvSevennValue = document.querySelectorAll('.dx-card-media > div > div > p')[6];
//containerTwoInsideDivvSiixx.appendChild(containerTwoInsideDivvvSevenn);
containerTwoInsideDivvSiixx.appendChild(containerTwoInsideDivvvSevennValue);

var containerEighttDivvvv = document.createElement('div');
containerEighttDivvvv.setAttribute('class', 'cta-wrapper');
containerEighttDivvvv.classList.add('cta-wrapper--row','cta-wrapper--left');
containerDivvTwooo.appendChild(containerEighttDivvvv);

var anchorNewOnee = document.createElement('a');
var anchorValueOnee = document.querySelectorAll('.dx-card-media > div > div > p')[6].textContent;
var anchorLinkkk =  document.querySelectorAll('.dx-card-media > div > div > p > a')[5].href;
anchorNewOnee.setAttribute('id','cta-1-443754-443754');
anchorNewOnee.setAttribute('class','link-chevron');
anchorNewOnee.setAttribute('href',anchorLinkkk);
anchorNewOnee.setAttribute('title',anchorValueOne);
anchorNewOnee.setAttribute('data-event','site interaction');
anchorNewOnee.setAttribute('data-category','card|road|li');
anchorNewOnee.setAttribute('data-description','road-express');
anchorNewOnee.setAttribute('aria-labelledby','cta-1-443754-443754 card-title-id-2');
containerEighttDivvvv.appendChild(anchorNewOnee);
anchorNewOnee.innerHTML = anchorValueOnee;
document.querySelectorAll('.dx-card-media > div > div ')[7].style.display = 'none';
document.querySelectorAll('.dx-card-media > div > div ')[8].style.display = 'none';

//---------------------------------

//Creating Inside div two
var containerInsideDivvttwo = document.createElement('div');
//adding class
containerInsideDivvttwo.setAttribute('class','card');  
containerInsideDivv.appendChild(containerInsideDivvttwo);

//creating article
var articleElemeen = document.createElement('article');
//adding class to article
articleElemeen.setAttribute('class','tile');
articleElemeen.classList.add('tile--card','bg-color','tile--simulate-links');
containerInsideDivvttwo.appendChild(articleElemeen);

//Creating Inside div three
var containerInsideDivvtthree = document.createElement('div');
//adding class
containerInsideDivvtthree.setAttribute('class','tile-image');  
articleElemeen.appendChild(containerInsideDivvtthree);

//Creating Inside div four
var containerInsideDivvffour = document.createElement('div');
//adding class
containerInsideDivvffour.setAttribute('class','adpimg__container');
containerInsideDivvffour.classList.add('adpimg__display--rectangle','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h50-v50','card-85-tester');
containerInsideDivvtthree.appendChild(containerInsideDivvffour);

// var picttu = document.querySelector('.dx-card-media > div > div > picture');
// containerInsideDivvfour.appendChild(picttu);

// document.querySelector('.card-85-tester > picture > img').setAttribute('class', 'adpimg__img');

// //creating div container two
// var containerDivvTtwo = document.createElement('div');
// //adding class to container Div
// containerDivvTtwo.setAttribute('class','tile-content');  
// articleElemeen.appendChild(containerDivvTtwo);

// //Creating Inside div container two
// var containerTwoInsideDivv = document.createElement('div');
// //adding class
// containerTwoInsideDivv.setAttribute('class','tile-content-copy');
// containerDivvTwo.appendChild(containerTwoInsideDivv);

// //Creating Inside two div container two
// var containerTwoInsideDivvTwo = document.createElement('h4');
// //adding class
// containerTwoInsideDivvTwo.setAttribute('class','tile-title');
// containerTwoInsideDivvTwo.setAttribute('id','card-title-id-3');
// containerTwoInsideDivv.appendChild(containerTwoInsideDivvTwo);

// //Creating Inside three div container two
// var containerTwoInsideDivvThree = document.createElement('div');
// //adding class
// containerTwoInsideDivvThree.setAttribute('class','rte-wrapper');
// containerTwoInsideDivvTwo.appendChild(containerTwoInsideDivvThree);

// //Creating Inside div four para container two with value
// var containerTwoInsideDivvFourValue = document.querySelectorAll('.dx-card-media > div > div > p')[8];
// containerTwoInsideDivvThree.appendChild(containerTwoInsideDivvFourValue);

// //Creating Inside five div container two
// var containerTwoInsideDivvFive = document.createElement('div');
// //adding class
// containerTwoInsideDivvFive.setAttribute('class','tile-copy');
// containerTwoInsideDivv.appendChild(containerTwoInsideDivvFive);

// //Creating Inside six div container two
// var containerTwoInsideDivvSix = document.createElement('div');
// //adding class
// containerTwoInsideDivvSix.setAttribute('class','rte-wrapper');
// containerTwoInsideDivvSix.classList.add('cmp-text');
// containerTwoInsideDivvFive.appendChild(containerTwoInsideDivvSix);

// //Creating Inside div seven para container two with value
// //var containerTwoInsideDivvSeven = document.createElement('p');
// var containerTwoInsideDivvSevenValue = document.querySelectorAll('.dx-card-media > div > div > p')[8];
// //containerTwoInsideDivvSix.appendChild(containerTwoInsideDivvSeven);
// containerTwoInsideDivvSix.appendChild(containerTwoInsideDivvSevenValue);

// var containerEightDivvv = document.createElement('div');
// containerEightDivvv.setAttribute('class', 'cta-wrapper');
// containerEightDivvv.classList.add('cta-wrapper--row','cta-wrapper--left');
// containerDivvTwo.appendChild(containerEightDivvv);

// var anchorrNew = document.createElement('a');
// var anchorrValue =  document.querySelectorAll('.dx-card-media > div > div > p')[10];
// var anchorrLink =  document.querySelectorAll('.dx-card-media > div > div > p')[12].textContent;
// anchorrNew.setAttribute('id','cta-1-545136-498600');
// anchorrNew.setAttribute('class','link-chevron');
// anchorrNew.setAttribute('href',anchorrLink);
// anchorrNew.setAttribute('title',anchorrValue);
// anchorrNew.setAttribute('data-event','site interaction');
// anchorrNew.setAttribute('data-category','card|special-and-secure-services|li');
// anchorrNew.setAttribute('data-description','special-services');
// anchorrNew.setAttribute('aria-labelledby','cta-1-545136-498600 card-title-id-3');
// containerEightDivvv.appendChild(anchorrNew);
// anchorrNew.innerHTML = anchorrValue;

// //document.querySelectorAll('.dx-card-media > div > div')[2].style.display = 'none';

// var anchorrNeww = document.createElement('a');
// var anchorrValuee = document.querySelectorAll('.dx-card-media > div > div > p')[11];
// var anchorrLinkk =  document.querySelectorAll('.dx-card-media > div > div > p')[13].textContent;
// anchorrNeww.setAttribute('id','cta-2-490290-550122');
// anchorrNeww.setAttribute('class','link-chevron');
// anchorrNeww.setAttribute('href',anchorrLinkk);
// anchorrNeww.setAttribute('title',anchorrValuee);
// anchorrNeww.setAttribute('data-event','site interaction');
// anchorrNeww.setAttribute('data-category','card|special-and-secure-services|li');
// anchorrNeww.setAttribute('data-description','security-express');
// anchorrNeww.setAttribute('aria-labelledby','cta-2-490290-550122 card-title-id-3');
// containerEightDivvv.appendChild(anchorrNeww);
// anchorrNeww.innerHTML = anchorrValuee;
// // document.querySelectorAll('.dx-card-media > div > div')[1].style.display = 'none';
// // document.querySelectorAll('.dx-card-media > div > div')[2].style.display = 'none';
// document.querySelectorAll('.dx-card-media > div > div')[10].style.display = 'none';
// document.querySelectorAll('.dx-card-media > div > div')[11].style.display = 'none';
