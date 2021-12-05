const highInput = document.querySelector('.high-input input');
const lowInput = document.querySelector('.low-input input');
const iconAddHigh = document.querySelector('.high-input .btn');
const iconAddLow = document.querySelector('.low-input .btn');
const highList = document.querySelector('.high-list');
const lowList = document.querySelector('.low-list');

let id = 0;

const createTaskHigh = (event) => {
  event.preventDefault();
  let valueHigh = highInput.value;
  let idCurrentHigh = highInput.getAttribute('data-prior');
  let currentHigh = document.querySelector(idCurrentHigh);

  id++;

  if (valueHigh != '') {
    currentHigh.insertAdjacentHTML('afterbegin', `
    <form class='block' id='${id}'>
      <div class='block-input'>
        <input type='checkbox' class='check'>
      </div>
      <div class='text'>
        ${valueHigh}
      </div>
      <input type='submit' id='${id}' class='btnClose' value=''>
    </form>
  `);
  }

  const btnsClose = document.querySelectorAll('.btnClose');
  btnsClose.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      for (let child = 0; child < currentHigh.children.length; child++) {
        if (currentHigh.children[child].id == item.id) {
          currentHigh.children[child].classList.add('hidden');
          id--;
        }
      }
    });
  });
};

const createTaskLow = (event) => {
  event.preventDefault();
  let valueLow = lowInput.value;
  let idCurrent = lowInput.getAttribute('data-prior');
  let currentLow = document.querySelector(idCurrent);

  id++;

  if (valueLow != '') {
    currentLow.insertAdjacentHTML('afterbegin', `
    <form class='block' id='${id}'>
      <div class='block-input'>
        <input type='checkbox' class='check'>
      </div>
      <div class='text'>
        ${valueLow}
      </div>
      <input type='submit' id='${id}' class='btnClose' value=''>
    </form>
  `);
  }

  const btnsClose = document.querySelectorAll('.btnClose');
  btnsClose.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      for (let child = 0; child < currentLow.children.length; child++) {
        if (currentLow.children[child].id == item.id) {
          currentLow.children[child].classList.add('hidden');
          id--;
        }
      }
    });
  });
};

iconAddHigh.addEventListener('click', createTaskHigh);
iconAddLow.addEventListener('click', createTaskLow);

