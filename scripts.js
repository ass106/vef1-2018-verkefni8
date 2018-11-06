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
    const itemList = items.querySelectorAll('.item');
    
      for (let item of items.querySelectorAll('.item__checkbox')) {
        item.addEventListener('click', finish);
      } 
      for (let item of items.querySelectorAll('.item')) {
        item.addEventListener('click', edit);
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
    
    value.change()
  }
  
  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
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
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
