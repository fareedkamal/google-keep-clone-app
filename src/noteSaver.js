import loadNoteEditor from "./noteEditor";
import { closeNoteTaker } from "./noteTaker";
import { load_noteEditorUI, load_noteItemRemoveUI } from "./uiLoader";

function emptyNote(){
    if(document.getElementById('note-input-area').classList.contains('hide')){
        return (document.getElementById('list-box').childElementCount==1
         && document.getElementById('note-title').value=='');
    }
    else{
        return (document.getElementById('note-input-area').textContent==''
        && document.getElementById('note-title').value=='');
    }    
}


function getNotesCount(){
    return document.querySelectorAll('.note-item').length;
}

function noteSaver(){
    if(emptyNote())return;
    
    const noteItem=document.getElementById('note-textfield').cloneNode(true);
 
    if(noteItem.children[0].value=='')
        noteItem.children[0].setAttribute('placeholder','Untitled');

    if(noteItem.dataset.id){
        const el=document.querySelector(`.note-item[data-id="${noteItem.dataset.id}"]`);
        el.innerHTML=noteItem.innerHTML;
        el.children[0].value=noteItem.children[0].value;
        el.lastElementChild.id='';
        el.lastElementChild.className='hide note-del-btn';
    }
    
    else{
        const noteItemCloseBtn=document.createElement('button');
        noteItemCloseBtn.className='hide note-del-btn';
        noteItem.appendChild(noteItemCloseBtn);
        noteItem.id='';
        noteItem.setAttribute('data-id',`${getNotesCount()+1}`);
        noteItem.className='note-item';
        noteItem.addEventListener('click',loadNoteEditor);
        
        const notesContainer=document.getElementById('notes-container');
        
        if (notesContainer.classList.contains('col'))
            noteItem.style.width='600px';
        notesContainer.appendChild(noteItem);

    }
    
    closeNoteTaker();
    load_noteItemRemoveUI();
    load_noteEditorUI();
}



export default noteSaver;