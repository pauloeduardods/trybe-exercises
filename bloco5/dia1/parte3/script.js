document.getElementById('header-container').style.backgroundColor = 'green';
let emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'brown';
for(let tag of emergency.querySelectorAll('h3')){
  tag.style.backgroundColor = 'magenta'
}
let noEmergency = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergency.style.backgroundColor = 'yellow';
for(let tag of noEmergency.getElementsByTagName('h3')){
  tag.style.backgroundColor = 'black';
};