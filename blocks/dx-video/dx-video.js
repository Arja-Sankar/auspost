//Getting main Div container
var mainDivOnne = document.querySelector('.dx-video');
//adding classNames to main Div
var containerNewwDiv = document.createElement('div');
containerNewwDiv.setAttribute('class','lyt-container');
mainDivOnne.appendChild(containerNewwDiv);

//creating section element
var sectionnElemen = document.createElement('section');
//adding Id to section
sectionnElemen.setAttribute('class','layout-container');
//adding classNames to section
sectionnElemen.classList.add('clearfix','bg-color','no-padding--bottom');
containerNewwDiv.appendChild(sectionnElemen);
 
//creating div
var containerrDivv = document.createElement('div');
//adding class to container Div
containerrDivv.setAttribute('class','layout-container-wrapper');  
sectionnElemen.appendChild(containerrDivv);

//Creating Inside div one
var containerInsiderDivv = document.createElement('div');
//adding class
containerInsiderDivv.setAttribute('class','flex-container');
containerInsiderDivv.classList.add('flex-container--multi-50','flex-container--center');
containerrDivv.appendChild(containerInsiderDivv);

//Creating Inside div two
var containerInsiderDivvtwo = document.createElement('div');
//adding class
containerInsiderDivvtwo.setAttribute('class','card');  
containerInsiderDivv.appendChild(containerInsiderDivvtwo);

//creating article
var articleElemenn = document.createElement('article');
//adding class to article
articleElemenn.setAttribute('class','tile');
articleElemenn.classList.add('tile--simulate-links');
containerInsiderDivvtwo.appendChild(articleElemenn);

//creating div container two
var containerrDivvTwo = document.createElement('div');
//adding class to container Div
containerrDivvTwo.setAttribute('class','tile-content');  
articleElemenn.appendChild(containerrDivvTwo);

//Creating Inside div container two
var containerrTwoInsideDivv = document.createElement('div');
//adding class
containerrTwoInsideDivv.setAttribute('class','tile-content-copy');
containerrDivvTwo.appendChild(containerrTwoInsideDivv);

//Creating Inside two div container two
var containerrTwoInsideDivvTwo = document.createElement('h4');
//adding class
containerrTwoInsideDivvTwo.setAttribute('class','tile-title');
containerrTwoInsideDivv.appendChild(containerrTwoInsideDivvTwo);

//Creating Inside three div container two
var containerrTwoInsideDivvThree = document.createElement('div');
//adding class
containerrTwoInsideDivvThree.setAttribute('class','rte-wrapper');
containerrTwoInsideDivvTwo.appendChild(containerrTwoInsideDivvThree);

//Creating Inside div four para container two with value
var containerTwoInsideDivvFourValue = document.querySelector('.dx-video > div > div > p');
containerrTwoInsideDivvThree.appendChild(containerTwoInsideDivvFourValue);

//Creating Inside five div container two
var containerrTwoInsideDivvFive = document.createElement('div');
//adding class
containerrTwoInsideDivvFive.setAttribute('class','tile-copy');
containerrTwoInsideDivv.appendChild(containerrTwoInsideDivvFive);

//Creating Inside six div container two
var containerrTwoInsideDivvSix = document.createElement('div');
//adding class
containerrTwoInsideDivvSix.setAttribute('class','rte-wrapper');
containerrTwoInsideDivvSix.classList.add('cmp-text');
containerrTwoInsideDivvFive.appendChild(containerrTwoInsideDivvSix);

//Creating Inside div seven para container two with value
var containerrTwoInsideDivvSevenValue = document.querySelector('.dx-video > div > div > p');
containerrTwoInsideDivvSix.appendChild(containerrTwoInsideDivvSevenValue);

//Creating Inside div two
var containerInsidervideo = document.createElement('div');
//adding class
containerInsidervideo.setAttribute('class','youtube-player');  
containerInsiderDivv.appendChild(containerInsidervideo);

var containerInsidervideoOne = document.createElement('div');
//adding class
containerInsidervideoOne.setAttribute('class','video-player');  
containerInsidervideo.appendChild(containerInsidervideoOne);

var containerInsidervideoTwo = document.createElement('div');
//adding class
containerInsidervideoTwo.setAttribute('class','vp-wrapper');  
containerInsidervideoOne.appendChild(containerInsidervideoTwo);
containerInsidervideoTwo.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/E6qQxbyB47I" title="Rationale Partnership | StarTrack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

// var containerInsidervideoThree = document.createElement('iframe');
// var videosrc = document.querySelector('.dx-video > div > div > p').innerText;
// //adding class
// containerInsidervideoThree.setAttribute('class','player');
// containerInsidervideoThree.setAttribute('id','video-player-596658-402204');
// containerInsidervideoThree.setAttribute('data-video-id','E6qQxbyB47I');
// containerInsidervideoThree.setAttribute('frameborder','0');
// containerInsidervideoThree.setAttribute('allowfullscreen','');
// containerInsidervideoThree.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
// containerInsidervideoThree.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
// containerInsidervideoThree.setAttribute('title','Rationale Partnership | StarTrack');
// containerInsidervideoThree.setAttribute('width','640');
// containerInsidervideoThree.setAttribute('height','360');
// containerInsidervideoThree.setAttribute('src',videosrc);
// containerInsidervideoTwo.appendChild(containerInsidervideoThree);
document.querySelector('.dx-video > div > div > p').style.display = 'none';
