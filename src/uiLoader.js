import loadNoteEditor from "./noteEditor";
import {loadNoteTaker} from "./noteTaker";


function load_noteItemRemoveUI(){
    document.querySelectorAll('.note-item').forEach(i=>{
        i.onmouseenter=(e)=>{
            e.target.lastElementChild.classList.remove('hide');
        }
        i.onmouseleave=(e)=>{
            e.target.lastElementChild.classList.add('hide');
        }
        i.lastElementChild.onclick=(e)=>{
            e.target.parentNode.remove();
        }
    });
}


function load_noteEditorUI(){
    document.querySelectorAll('.note-item').forEach(i=>{
        i.addEventListener('click',loadNoteEditor);
    });
}



function loadUI(){

const noteTaker = document.getElementById('note-input-area');
const listBtn = document.getElementById('list-btn');
const viewBtn = document.getElementById('view-btn');
const notesContainer = document.getElementById('notes-container');


load_noteItemRemoveUI();
load_noteEditorUI();

noteTaker.addEventListener('click',loadNoteTaker);
listBtn.addEventListener('click',loadNoteTaker);
viewBtn.addEventListener('click',()=>{
    if(notesContainer.classList.contains('col')){
        notesContainer.classList.remove('col');
        document.querySelectorAll('.note-item').forEach(i=>i.style.width='');}
    else{
        notesContainer.classList.add('col');
        document.querySelectorAll('.note-item').forEach(i=>i.style.width='600px');}
});
}

export {load_noteItemRemoveUI, loadUI,load_noteEditorUI};