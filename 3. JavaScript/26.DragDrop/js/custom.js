const draggables = document.querySelectorAll('.draggable');
const dropContainer = document.getElementById('dropContainer');
const myBtnElement=document.getElementById("myBtn");
var pas;
myBtnElement.addEventListener("click",()=>{
  pas=prompt("Enter Password","PASSWORD");
  if(pas=="kkcc")
  {
    alert("Password is Ok");
  }
  else
  {
    alert("Password Failed");
  }
});
    draggables.forEach(elem => {
      elem.addEventListener('dragstart', e => {
        e.dataTransfer.setData('type', e.target.dataset.type);
      });
    });

    dropContainer.addEventListener('dragover', e => {
      e.preventDefault();
    });

    dropContainer.addEventListener('drop', e => {
      e.preventDefault();
      const type = e.dataTransfer.getData('type');
      let element;

      switch(type) {
        case 'input':
          element = document.createElement('input');
          element.type = 'text';
          element.placeholder = 'Text Input';
          element.value=pas;
          break;
        case 'textarea':
          element = document.createElement('textarea');
          element.placeholder = 'Textarea';
          break;
        case 'select':
          element = document.createElement('select');
          let opt1 = document.createElement('option');
          opt1.value = '1';
          opt1.text = 'Option 1';
          let opt2 = document.createElement('option');
          opt2.value = '2';
          opt2.text = 'Option 2';
          element.add(opt1);
          element.add(opt2);
          break;
        case 'checkbox':
          element = document.createElement('input');
          element.type = 'checkbox';
          break;
        case 'radio':
          element = document.createElement('input');
          element.type = 'radio';
          break;
        case 'button':
          element = document.createElement('button');
          element.textContent = 'Button';
          break;
        default:
          return;
      }

      element.style.display = 'block';
      element.style.marginBottom = '10px';
      dropContainer.appendChild(element);
    });