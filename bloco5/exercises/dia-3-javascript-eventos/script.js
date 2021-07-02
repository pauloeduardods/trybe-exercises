function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function addDaysOfTheMonth(daysList, holidayList, fridayList) {
  const monthDaysList = document.querySelector('#days');

  for (let day of daysList) {
    const createDay = document.createElement('li');
    if (holidayList.includes(day)) createDay.classList.add('holiday');
    if (fridayList.includes(day)) createDay.classList.add('friday');
    createDay.classList.add('day');
    createDay.innerText = day;
    monthDaysList.appendChild(createDay);
  }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

addDaysOfTheMonth(dezDaysList, holidays, fridays)

function createHolidayButton(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.id = ('btn-holiday');
  createButton.innerText = string;
  buttonsContainer.appendChild(createButton);
}

createHolidayButton('Feriados');

document.querySelector('#btn-holiday').addEventListener('click', showHolidays);

function showHolidays() {
  const holidays = document.querySelectorAll('.holiday');
  const currentColor = holidays[0].style.backgroundColor;
  let newColor = 'white';
  if (currentColor === 'white') newColor = 'rgb(238,238,238)';
  for (let day of holidays) {
    day.style.backgroundColor = newColor;
  }
}

function createFridayButton(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const createButton = document.createElement('button');
  createButton.id = 'btn-friday';
  createButton.innerText = string;
  buttonsContainer.appendChild(createButton);
}

createFridayButton('Sexta-feira');

function showFridays() {
  const fridays = document.querySelectorAll('.friday');
  let oldText = [];
  const newText = 'Sextou CARAIO';
  document.querySelector('#btn-friday').addEventListener('click', function(){
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerText === newText) {
        fridays[i].innerText = oldText[i];
      } else {
        oldText[i] = fridays[i].innerText;
        fridays[i].innerText = newText;
      }
    }
  });
}
showFridays()

document.querySelector('#days').addEventListener('mouseover', zoomIn);
document.querySelector('#days').addEventListener('mouseout', zoomOut);

function zoomIn(event) {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
}
function zoomOut(event) {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
}