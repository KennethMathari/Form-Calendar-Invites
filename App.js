//Selectors
const titleInput=document.querySelector(".input-title");
const descInput = document.querySelector('.input-desc');
const timezoneInput = document.querySelector('.input-timezone');
const startInput = document.querySelector('.input-start');
const endInput = document.querySelector('.input-end');
const locationInput = document.querySelector('.input-location');
const Button = document.querySelector('.btn');
const eventItem = document.querySelector('.form-output');





//Event Listeners
Button.addEventListener('click', addEvent);


//Functions
function addEvent(event){
//prevent form from submitting
 event.preventDefault();

 // //Create Event Item Div
 // const eventdiv=document.createElement("div"); 
 // eventdiv.classList.add("event-item-content")
 // //Append to Event Item
 // eventItem.appendChild(eventdiv);

 //create Label
  const label =document.createElement("h3");
  label.innerHTML="Copy the code in the text area and paste in the embed block";
  eventItem.appendChild(label);



  //Create Text Area
 const textarea =document.createElement("textarea");
 textarea.classList.add("form-control");
 textarea.setAttribute("rows", "10");
 textarea.setAttribute("cols","70");
 var snippet= " <div class='event-item-content'><div class='event-title'>"+titleInput.value+"</div><div class='event-desc'>"+descInput.value+"</div><div class='event-timezone'>"+timezoneInput.value+"</div><div class='event-start'>"+startInput.value+"</div><div class='event-end'>"+endInput.value+"</div><div class='event-location'>"+locationInput.value+"</div><a cal-platform='google' href='#' class='button-event google w-button'>Google Calendar</a><a cal-platform='apple' href='#' class='button-event apple w-button'>Apple Calendar</a><a cal-platform='outlook' href='#' class='button-event outlook w-button'>Outlook Calendar</a></div><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script><script src='https://cdn.finsweet.com/files/fscalendar/calendar-invite-v1.0.min.js'></script><script> var calendarInvite = fsCalendar({title: '.event-title',start: '.event-start',end: '.event-end',timezone: '.event-timezone',address: '.event-location',description: '.event-desc',eventItemClass: '.event-item-content',localize: true});</script>";
 textarea.innerHTML=snippet;
  //Append to Event Item
 eventItem.appendChild(textarea);

//  //Create Title Div
//  const title =document.createElement("div");
//  title.classList.add("event-title");
//  title.innerHTML=titleInput.value;
//  //Append to Event Item
//  eventdiv.appendChild(title);
//  //Clear input-title value
//  titleInput.value='';

//  //Create Desc Div
//  const desc =document.createElement("div");
//  desc.classList.add("event-desc");
//  desc.innerHTML=descInput.value;
//  //Append to Event Item
//  eventdiv.appendChild(desc);
//  //Clear input-title value
//  descInput.value='';

//  //Create timezone Div
//  const timezone =document.createElement("div");
//  timezone.classList.add("event-timezone");
//  timezone.innerHTML=timezoneInput.value;
//  //Append to Event Item
//  eventdiv.appendChild(timezone);
//  //Clear input-timezone value
//  timezoneInput.value='';

//  //Create start Div
//  const start =document.createElement("div");
//  start.classList.add("event-start");
//  start.innerHTML=startInput.value;
//  //Append to Event Item
//  eventdiv.appendChild(start);
//  //Clear input-start value
//  startInput.value='';

//  //Create end Div
//  const end =document.createElement("div");
//  end.classList.add("event-end");
//  end.innerHTML=endInput.value;
//  //Append to Event Item
//  eventdiv.appendChild(end);
//  //Clear input-end value
//  endInput.value='';

//  //Create location Div
//  const location =document.createElement("div");
//  location.classList.add("event-location");
//  location.innerHTML=locationInput.value;
//  //Append to Event Item
//  eventdiv.appendChild(location);
//  //Clear input-location value
//  locationInput.value='';



// const buttons='<a cal-platform="google" href="#" class="button-event google w-button">Google Calendar</a> <a cal-platform="apple" href="#" class="button-event apple w-button">Apple Calendar</a> <a cal-platform="outlook" href="#" class="button-event outlook w-button">Outlook Calendar</a>';
// eventdiv.insertAdjacentHTML( 'beforeend', buttons );


 
}