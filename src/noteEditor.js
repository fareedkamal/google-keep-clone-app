import loadListTaker from "./listTaker";
import { closeNoteTaker, loadNoteTaker } from "./noteTaker";

function loadNoteEditor(e){

    if(e.target.className=="note-del-btn")return;
    const overlay=document.getElementById('overlay');
    let el=e.target;
    while(el.className != 'note-item')
        el=el.parentNode; 

    const editor=document.getElementById('note-taker-box');
    const noteId=el.dataset.id;

    if(el.children[1].className==''){    
        loadNoteTaker(null,el.children[1].innerHTML,noteId,el.children[0].value);
    }
    else{
        loadNoteTaker(null,null,noteId,el.children[0].value);
        loadListTaker(el.children[2]);
    }

    editor.classList.add('editor-mode');

    overlay.onclick=(e)=>{
        e.target.classList.replace('set','hide');
        closeNoteTaker();
    }
    overlay.classList.replace('hide','set');
    
}

export default loadNoteEditor;