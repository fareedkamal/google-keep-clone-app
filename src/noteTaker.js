
import noteSaver from './noteSaver';
import loadListTaker from './listTaker';

function closeNoteTaker(){
    noteInput.textContent='';
    noteTitle.value='';
    noteTitle.classList.add('hide');
    listBox.classList.add('hide');
    noteBtnField.classList.replace('set','hide');
    noteTakerBox.className="set";
    listBtn.classList.remove('hide');
    noteTextField.classList.remove('col');
    noteTextField.removeAttribute('data-id');
    noteInput.classList.remove('hide');
    
    listBox.innerHTML='<div id="add-sign" class="list-text" contenteditable="true" placeholder="List item" ></div>';   
    document.getElementById('overlay').className='hide';

}

function loadNoteTaker(e,value,noteId,titleValue){
    noteTitle.classList.remove('hide');
    
    if(titleValue)noteTitle.value= titleValue;
    noteBtnField.classList.replace('hide','set');
    noteTakerBox.classList.add('note-taker-active');
    
    listBtn.classList.add('hide');
    noteTextField.classList.add('col');
    
    if(noteId)
        noteTextField.setAttribute('data-id',noteId);

    saveBtn.onclick=noteSaver;
    noteCloseBtn.onclick = closeNoteTaker;
     
    if(e)
    {if(e.target.id=='list-btn'){
      loadListTaker();
    }
    else
        noteInput.focus();
    }
    else{
        noteInput.innerHTML=value;
    }

    
}

const noteTitle=document.getElementById('note-title');
const noteInput=document.getElementById('note-input-area')
const noteBtnField=document.getElementById('note-btnfield');
const noteTakerBox=document.getElementById('note-taker-box');
const noteCloseBtn=document.getElementById('note-taker-close-btn');
const listBtn=document.getElementById('list-btn');
const saveBtn=document.getElementById('save-btn');
const listBox=document.getElementById('list-box');
const noteTextField=document.getElementById('note-textfield');
const addSign=document.getElementById('add-sign');

export {loadNoteTaker,closeNoteTaker};
