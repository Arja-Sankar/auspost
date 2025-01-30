//Getting main Div container
var mainDiv = document.querySelector('.dx-cta');

//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','cta-wrapper');
containerDiv.classList.add('cta-wrapper--row','cta-wrapper--center');
mainDiv.appendChild(containerDiv);

var endingAnchor = document.createElement('a');
 var insightContentOne = document.querySelector('.dx-cta-wrapper > .dx-cta > div > div').innerText;
 endingAnchor.setAttribute('id','cta-1-533502-508572');
 endingAnchor.setAttribute('class','btn');
endingAnchor.classList.add('btn--primary','btn--medium');
  endingAnchor.setAttribute('href','/sales-enquiry');
  endingAnchor.setAttribute('title','Enquire about a StarTrack account');
    endingAnchor.setAttribute('data-event','site interaction');
endingAnchor.setAttribute('data-category','|btn');
endingAnchor.setAttribute('data-description','enquire-about-a-startrack-account');
    endingAnchor.appendChild(insightContentOne);
  containerDiv.appendChild(endingAnchor);
