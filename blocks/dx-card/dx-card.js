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
 
