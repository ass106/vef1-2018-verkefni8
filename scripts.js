const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);  
});

/*
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var divtest = document.createElement('div');
divtest.appendChild(para);


var elephant = document.querySelector('.form');
elephant.appendChild(divtest);
console.log("feitt");
*/

const text = (() => {
  let items;
  
  
  function init(_form, _items) {
    items = _items;
    
      for (let item of items.querySelectorAll('.item__checkbox')) {
        item.addEventListener('click', finish);
      } 
      for (let item of items.querySelectorAll('.item__text')) {
        item.addEventListener('click', edit);
      }
      for (let item of items.querySelectorAll('.item__button')) {
        item.addEventListener('click', deleteItem);
      }

    _form.addEventListener('submit', formHandler);
    

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();


    add(document.querySelector('.form__input').value);
  
    for (let item of items.querySelectorAll('.item__checkbox')) {
      item.addEventListener('click', finish);
    }
    for (let item of items.querySelectorAll('.item__text')) {
      item.addEventListener('click', edit);
    }
    for (let item of items.querySelectorAll('.item__button')) {
      item.addEventListener('click', deleteItem);
    }

    console.log('halló heimur');
  }
  
  // event handler fyrir það að klára færslu
  function finish(e) {
    if (e.target.checked) {
      e.target.parentElement.className += ' item--done';
    } else {
      e.target.parentElement.className = 'item';
    }
    console.log('Finish changes')
  }
  
  // event handler fyrir það að breyta færslu
  function edit(e) {

    var value = e.target.innerText;
    var elephant = e.target.parentElement;
    
    
    var newForm = document.createElement("form");
    newForm.className = "item__edit";
    
    var change = document.createElement("input");
    change.type = "text";
    change.className = "text__input";
    change.style = 'widht: 100%';
    change.value = value;
    
    e.target.remove();

    newForm.appendChild(change);
    elephant.appendChild(newForm);
    elephant.insertBefore(newForm, elephant.childNodes[2]);

    newForm.addEventListener('submit', commit);

    console.log('Changes started');
  }
  
  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    e.preventDefault();
    elephant = e.target.parentElement;
    var newSpan = document.createElement('span');
    newSpan.className = "item__text";

    var value = document.querySelector('.text__input').value;

    newSpan.appendChild(document.createTextNode(value));
    
    e.target.remove();
    elephant.appendChild(newSpan);
    elephant.insertBefore(newSpan, elephant.childNodes[2]);
    newSpan.addEventListener('click', edit);

    console.log(value);

    console.log('Committed');
  }
  
  // fall sem sér um að bæta við nýju item
  function add(value) {
    
    var input = value;
    
    var li = document.createElement("li");
    li.className = "item";
    
    var content = document.createElement("input");
    content.type = "checkbox";
    content.className = "item__checkbox";
    
    var span = document.createElement("span");
    
    span.className = "item__text";
    span.appendChild(document.createTextNode(input));
    
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Eyða"));
    button.className = "item__button";
    
    li.appendChild(content);
    li.appendChild(span);
    li.appendChild(button);
    
    items.appendChild(li);
    
    console.log(input);
  }
  
  // event handler til að eyða færslu
  function deleteItem(e) {
    e.target.parentElement.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
