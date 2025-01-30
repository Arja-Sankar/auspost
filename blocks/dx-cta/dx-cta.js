//Getting main Div container
var mainDiv = document.querySelector('.dx-cta');

//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','cta-wrapper');
containerDiv.classList.add('cta-wrapper--row','cta-wrapper--center');
mainDiv.appendChild(containerDiv);

var endingAnchor = document.createElement('a');
 var insightContentOne = document.querySelector('.dx-cta > div > div > p').textContent;
 endingAnchor.setAttribute('id','cta-1-533502-508572');
 endingAnchor.setAttribute('class','btn');
endingAnchor.classList.add('btn--primary','btn--medium');
  endingAnchor.setAttribute('href','/sales-enquiry');
  endingAnchor.setAttribute('title',insightContentOne);
    endingAnchor.setAttribute('data-event','site interaction');
endingAnchor.setAttribute('data-category','|btn');
endingAnchor.setAttribute('data-description','enquire-about-a-startrack-account');
    endingAnchor.innerHTML = insightContentOne;
  containerDiv.appendChild(endingAnchor);
