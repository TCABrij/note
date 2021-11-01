
 // Creating Note
function createNote(){
    let parent = document.querySelector('.notes-box');
    let inputField = document.querySelector('#inputField');
    let div = document.createElement('div');
    div.setAttribute('class', 'note');
    div.setAttribute('onClick', 'del(this)')
    div.setAttribute('title', 'Delete this note');
    parent.append(div);
    let heading = document.createElement('h2');
    div.append(heading);
  
    if(inputField.value != '')
      heading.innerHTML = inputField.value;
    else
      heading.innerHTML = "Empty note";

    let closeButton = document.createElement('button');
    div.append(closeButton);
    closeButton.textContent = "X";
    closeButton.setAttribute('class', 'del-note-button');
    closeButton.setAttribute('title', 'delete note');
    closeButton.setAttribute('onClick', 'del(this)');

}

// Deleting Note
function del(element){
    element.style.display = "none";
}