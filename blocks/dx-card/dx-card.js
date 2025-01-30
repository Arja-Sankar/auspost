//Getting main Div container
var mainDiv = document.querySelector('.dx-card');
var container = document.createElement('div');
//adding classNames to main Div
container.setAttribute('class','lyt-container');
 mainDiv.appendChild(container);

//creating section element
var sectionElem = document.createElement('section');
//adding Id to section
sectionElem.setAttribute('class','layout-container');
//adding classNames to section
sectionElem.classList.add('clearfix','bg-color--shell','no-padding--bottom');
container.appendChild(sectionElem);
 
//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','layout-container-wrapper');  
sectionElem.appendChild(containerDiv);

//Creating Inside div one
var containerInsideDiv = document.createElement('div');
//adding class
containerInsideDiv.setAttribute('class','flex-container');
containerInsideDiv.classList.add('flex-container--single-row','flex-container--center');
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
articleElem.classList.add('tile--featured','tile--card','bg-color','tile--image-right','tile--simulate-links');
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
containerInsideDivfour.classList.add('adpimg__display--fluid', 'adpimg__obj-fit', 'js-object-fit', 'adpimg__obj-fit--h25-v75');
containerInsideDivthree.appendChild(containerInsideDivfour);

var pict = document.querySelector('.dx-card > div > div > picture');
containerInsideDivfour.appendChild(pict);

document.querySelector('.dx-card > div > div > picture > img').setAttribute('class', 'adpimg__img')

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
// var containerTwoInsideDivFour = document.createElement('p');
// containerTwoInsideDivThree.appendChild(containerTwoInsideDivFour);
var containerTwoInsideDivFourValue = document.querySelector('.dx-card > div > div > p');
containerTwoInsideDivThree.appendChild(containerTwoInsideDivFourValue);
// containerTwoInsideDivFour.innerHTML = containerTwoInsideDivFourValue;

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
//var containerTwoInsideDivSeven = document.createElement('p');
var containerTwoInsideDivSevenValue = document.querySelector('.dx-card > div > div > p');
//containerTwoInsideDivSix.appendChild(containerTwoInsideDivSeven);
containerTwoInsideDivSix.appendChild(containerTwoInsideDivSevenValue);

//Creating Inside div eight ul container two
var containerTwoInsideDivUL = document.createElement('ul');
containerTwoInsideDivSix.appendChild(containerTwoInsideDivUL);

//Creating Inside div nine li container two
//var containerTwoInsideDivLi = document.createElement('li');
var containerTwoInsideDivLiValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLi);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiValue);

//Creating Inside div ten li Two container two
//var containerTwoInsideDivLiOne = document.createElement('li');
var containerTwoInsideDivLiOneValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiOne);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiOneValue);

//Creating Inside div elven li Three container two
//var containerTwoInsideDivLiTwo = document.createElement('li');
var containerTwoInsideDivLiTwoValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiTwo);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiTwoValue);

//Creating Inside div twelve li four container two
//var containerTwoInsideDivLiThree = document.createElement('li');
var containerTwoInsideDivLiThreeValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiThree);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiThreeValue);

//Creating Inside div thirteen li five container two
//var containerTwoInsideDivLiFour = document.createElement('li');
var containerTwoInsideDivLiFourValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFour);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFourValue);

//Creating Inside div fourteen li six container two
//var containerTwoInsideDivLiFive = document.createElement('li');
var containerTwoInsideDivLiFiveValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFive);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFiveValue);

//-------------------------------------------------------------------

// var containerDivCardprev = document.createElement('div');
// containerDivCardprev.setAttribute('class','lyt-container');
// mainDiv.appendChild(containerDivCardprev);

//creating div
var containerDivCard = document.createElement('div');
//adding class to container Div
containerDivCard.setAttribute('class','lyt-container');  
mainDiv.appendChild(containerDivCard);

//creating section element
var sectionCard = document.createElement('section');
//adding Id to section
sectionCard.setAttribute('class','layout-container');
//adding classNames to section
sectionCard.classList.add('clearfix','bg-color--shell','no-padding');
containerDivCard.appendChild(sectionCard);

//creating div
var containerDivCardOne = document.createElement('div');
//adding class to container Div
containerDivCardOne.setAttribute('class','layout-container-wrapper');  
sectionCard.appendChild(containerDivCardOne);

//Creating Inside div one
var containerDivCardTwo = document.createElement('div');
//adding class
containerDivCardTwo.setAttribute('class','flex-container');
containerDivCardTwo.classList.add('flex-container--single-row','flex-container--center');
containerDivCardOne.appendChild(containerDivCardTwo);

//Creating Inside div two
var containerDivCardThree = document.createElement('div');
//adding class
containerDivCardThree.setAttribute('class','card');  
containerDivCardTwo.appendChild(containerDivCardThree);

//creating article
var articleElemOne = document.createElement('article');
//adding class to article
articleElemOne.setAttribute('class','tile');
articleElemOne.classList.add('tile--featured','tile--card','bg-color','tile--image-right','tile--simulate-links');
containerDivCardThree.appendChild(articleElemOne);

//Creating Inside div three
var containerDivCardFour = document.createElement('div');
//adding class
containerDivCardFour.setAttribute('class','tile-image');  
articleElemOne.appendChild(containerDivCardFour);

//Creating Inside div four
var containerDivCardFive = document.createElement('div');
//adding class
containerDivCardFive.setAttribute('class','adpimg__container');
containerDivCardFive.classList.add('adpimg__display--fluid','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h75-v50');
containerDivCardFour.appendChild(containerDivCardFive);

var pictureOne = document.querySelector('.dx-card > div > div > picture');
containerDivCardFive.appendChild(pictureOne);

document.querySelector('.tile-image > .adpimg__obj-fit--h25-v75 > picture > img').setAttribute('class', 'adpimg__img');

//creating div container two
var containerDivCardSix = document.createElement('div');
//adding class to container Div
containerDivCardSix.setAttribute('class','tile-content');  
articleElemOne.appendChild(containerDivCardSix);

//Creating Inside div container two
var containerDivCardSeven = document.createElement('div');
//adding class
containerDivCardSeven.setAttribute('class','tile-content-copy');
containerDivCardSix.appendChild(containerDivCardSeven);

//Creating Inside two div container two
var containerDivCardeight = document.createElement('h4');
//adding class
containerDivCardeight.setAttribute('class','tile-title');
containerDivCardSeven.appendChild(containerDivCardeight);

//Creating Inside three div container two
var containerDivCardNine = document.createElement('div');
//adding class
containerDivCardNine.setAttribute('class','rte-wrapper');
containerDivCardeight.appendChild(containerDivCardNine);

//Creating Inside div four para container two with value
var containerDivCardTenValue = document.querySelector('.dx-card > div > div > p');
containerDivCardNine.appendChild(containerDivCardTenValue);

//Creating Inside five div container two
var containerTwoInsideDivEleven = document.createElement('div');
//adding class
containerTwoInsideDivEleven.setAttribute('class','tile-copy');
containerDivCardSeven.appendChild(containerTwoInsideDivEleven);

//Creating Inside six div container two
var containerTwoInsideDivTwelve = document.createElement('div');
//adding class
containerTwoInsideDivTwelve.setAttribute('class','rte-wrapper');
containerTwoInsideDivTwelve.classList.add('cmp-text');
containerTwoInsideDivEleven.appendChild(containerTwoInsideDivTwelve);


//Creating Inside div eight ul container two
var containerUL = document.createElement('ul');
containerTwoInsideDivTwelve.appendChild(containerUL);

//Creating Inside div nine li container two
var containerLI = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLI);

//Creating Inside div nine li container three
var containerLIOne = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLIOne);

//Creating Inside div nine li container four
var containerLITwo = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLITwo);

//Creating Inside div nine li container five
var containerLIThree = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLIThree);

//Creating Inside div nine li container six
var containerLIFour = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLI);

//Creating Inside div nine li container seven
var containerLIFive = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLIFive);

//Creating Inside div nine li container eight
var containerLISix = document.querySelector('.dx-card > div > div > ul > li');
containerUL.appendChild(containerLISix);

//-------------------------------------------------------


//Creating Inside div two
var containerDivCardtwoThree = document.createElement('div');
//adding class
containerDivCardtwoThree.setAttribute('class','card');  
containerDivCardTwo.appendChild(containerDivCardtwoThree);

//creating article
var articleElemOnee = document.createElement('article');
//adding class to article
articleElemOnee.setAttribute('class','tile');
articleElemOnee.classList.add('tile--featured','tile--card','bg-color','tile--image-right','tile--simulate-links');
containerDivCardtwoThree.appendChild(articleElemOnee);

//Creating Inside div three
var containerDivCardtwoFour = document.createElement('div');
//adding class
containerDivCardtwoFour.setAttribute('class','tile-image');  
articleElemOnee.appendChild(containerDivCardtwoFour);

//Creating Inside div four
var containerDivCardtwoFive = document.createElement('div');
//adding class
containerDivCardtwoFive.setAttribute('class','adpimg__container');
containerDivCardtwoFive.classList.add('adpimg__display--fluid','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h75-v50','tester__addon');
containerDivCardtwoFour.appendChild(containerDivCardtwoFive);

var pictureOnee = document.querySelector('.dx-card > div > div > picture');
containerDivCardtwoFive.appendChild(pictureOnee);

document.querySelector('.tile-image > .tester__addon > picture > img').setAttribute('class', 'adpimg__img');

//creating div container two
var containerDivCardtwoSix = document.createElement('div');
//adding class to container Div
containerDivCardtwoSix.setAttribute('class','tile-content');  
articleElemOnee.appendChild(containerDivCardtwoSix);

//Creating Inside div container two
var containerDivCardtwoSeven = document.createElement('div');
//adding class
containerDivCardtwoSeven.setAttribute('class','tile-content-copy');
containerDivCardtwoSix.appendChild(containerDivCardtwoSeven);

//Creating Inside two div container two
var containerDivCardtwoeight = document.createElement('h4');
//adding class
containerDivCardtwoeight.setAttribute('class','tile-title');
containerDivCardtwoSeven.appendChild(containerDivCardtwoeight);

//Creating Inside three div container two
var containerDivCardtwoNine = document.createElement('div');
//adding class
containerDivCardtwoNine.setAttribute('class','rte-wrapper');
containerDivCardtwoeight.appendChild(containerDivCardtwoNine);

//Creating Inside div four para container two with value
var containerDivCardtwoTenValue = document.querySelector('.dx-card > div > div > p');
containerDivCardtwoNine.appendChild(containerDivCardtwoTenValue);

//Creating Inside five div container two
var containerTwoInsideDivtwoEleven = document.createElement('div');
//adding class
containerTwoInsideDivtwoEleven.setAttribute('class','tile-copy');
containerDivCardtwoSeven.appendChild(containerTwoInsideDivtwoEleven);

//Creating Inside six div container two
var containerTwoInsideDivtwoTwelve = document.createElement('div');
//adding class
containerTwoInsideDivtwoTwelve.setAttribute('class','rte-wrapper');
containerTwoInsideDivtwoTwelve.classList.add('cmp-text');
containerTwoInsideDivtwoEleven.appendChild(containerTwoInsideDivtwoTwelve);

//Creating Inside div seven para container two with value

var containerTwoInsideDivtwoSevenValue = document.querySelector('.dx-card > div > div > p');
containerTwoInsideDivtwoTwelve.appendChild(containerTwoInsideDivtwoSevenValue);

//Creating Inside div eight ul container two
var containertwoUL = document.createElement('ul');
containerTwoInsideDivtwoTwelve.appendChild(containertwoUL);

//Creating Inside div nine li container two
var containertwoLI = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containertwoLI);

//Creating Inside div nine li container three
var containerLItwoOne = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containerLItwoOne);

//Creating Inside div nine li container four
var containerLItwoTwo = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containerLItwoTwo);

//Creating Inside div nine li container five
var containerLItwoThree = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containerLItwoThree);

//Creating Inside div nine li container six
var containerLItwoFour = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containerLItwoFour);

//Creating Inside div nine li container seven
var containerLItwoFive = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containerLItwoFive);

//Creating Inside div nine li container eight
var containerLItwoSix = document.querySelector('.dx-card > div > div > ul > li');
containertwoUL.appendChild(containerLItwoSix);
