import {ADD_TASK,} from './view.js';

const block = document.querySelector('.block');
block.remove();

function deleteBlock() {
  this.parentElement.remove();
}

function checkBlock() {
  this.parentElement.classList.toggle('checked');
  if (this.parentElement.classList.contains('checked')) {
    this.parentElement.style.backgroundColor = '#f4f4f4';
  } else {
    this.parentElement.style.backgroundColor = '#fff';
  }
}

function addTask(event) {
  event.preventDefault();
  const copyElement = block.cloneNode(true);
  const deletInput = copyElement.querySelector('.delete-block');
  const checkInput = copyElement.querySelector('.checkbox-input');
  const text = copyElement.querySelector('.text');

  checkInput.addEventListener('click', checkBlock);
  deletInput.addEventListener('click', deleteBlock);

  text.innerHTML = this.parentElement.parentElement.firstElementChild.firstElementChild.value;
  if (this.parentElement.parentElement.firstElementChild.firstElementChild.value == '') {
    return;
  } 
  this.parentElement.parentElement.firstElementChild.firstElementChild.value = '';
  this.parentElement.parentElement.append(copyElement);
};

ADD_TASK.forEach(function(item) {
  item.addEventListener('click', addTask);
});