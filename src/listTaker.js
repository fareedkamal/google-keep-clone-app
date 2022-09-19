
function loadListTaker(data){
    
    function valid (keycode){
        var valid = 
            (keycode > 47 && keycode < 58)   || // number keys
            (keycode > 64 && keycode < 91)   || // letter keys
            (keycode > 95 && keycode < 112)  || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode==32)||
            (keycode > 218 && keycode < 223);   // [\]' (in order)
        return valid;
    }
    
    function checkNote(e){
        if(e.target.classList.contains('uncheck')){
            e.target.classList.replace('uncheck','check');
            e.target.parentNode.classList.add('crossed');
        }
        else{
            e.target.classList.replace('check','uncheck');
            e.target.parentNode.classList.remove('crossed');
        }
    }

    function removeNote(e){
        if(e.target.parentNode.previousSibling){
            e.target.parentNode.previousSibling.childNodes[1].focus();
        }
        else
            e.target.parentNode.nextSibling.focus();
        e.target.parentNode.remove();
    }


    function createItem(value,classValue){
        const listItem=document.createElement('div');
        const btn=document.createElement('button');
        const text=document.createElement('div');
        const delbtn=document.createElement('button');
        

        if(value)
            text.textContent=value;

        text.onkeydown=func2;
        
        if(classValue)
            listItem.className=classValue;
        else
            listItem.classList.add('list-item','set');
        
        btn.classList.add('done-box','uncheck');
        btn.onclick = checkNote;
        delbtn.classList.add('done-box');
        delbtn.onclick = removeNote;
        text.classList.add('list-data');
        text.setAttribute('contenteditable','true');
        text.setAttribute('placeholder','');

        btn.addEventListener('focusout',(e)=>{
            e.target.parentNode.classList.remove('show-border');
        });
        btn.onfocus=(e)=>{
            e.target.parentNode.classList.add('show-border');
        };

        listItem.onmouseleave=(e)=>{
            if(e.target.childNodes[1]!==document.activeElement)
                e.target.lastChild.classList.remove('del-btn');
        }

        listItem.onmouseenter=(e)=>{
            if(! e.target.lastChild.classList.contains('del-btn'))
                e.target.lastChild.classList.add('del-btn');
        }

        text.addEventListener('focusout',(e)=>{
            e.target.parentNode.classList.remove('show-border');
            e.target.nextSibling.classList.remove('del-btn');
        });
        text.onfocus=(e)=>{
            e.target.parentNode.classList.add('show-border');
            e.target.nextSibling.classList.add('del-btn');
        };
        listItem.appendChild(btn);
        listItem.appendChild(text);
        listItem.appendChild(delbtn);
        return listItem;
    }
    
    function func2(e){
        if(e.key=="Backspace" && e.target.textContent==''){
            removeNote(e);
            return;
        }
        if(e.key!="Enter")return;
        e.preventDefault();

        if(e.target.parentNode.nextSibling.id=='')
        {    listBox.insertBefore(createItem(),e.target.parentNode.nextSibling);
            e.target.parentNode.nextSibling.childNodes[1].focus();    
        }    
        else
            e.target.parentNode.nextSibling.focus();
    }

    function func(e){
        if(e.key==="Enter"){
            e.preventDefault();return;
        }
        if(!valid(e.keyCode))return;
        listBox.insertBefore(createItem(),e.target);
        e.target.previousSibling.childNodes[1].focus();
       
    }

    noteInput.classList.add('hide');
    listBox.classList.remove('hide');

    if(data)
    {
        listBox.children[0].remove();
        for(let i = 0;i<data.children.length-1;i++)
        {
            listBox.appendChild(createItem(data.children[i].children[1].textContent,data.children[i].className));
        }
        listBox.appendChild(document.getElementById('add-sign').cloneNode(true));   
    }
    document.getElementById('add-sign').onkeydown=func;
    document.getElementById('add-sign').focus();

}

const noteTitle=document.getElementById('note-title');
const noteInput=document.getElementById('note-input-area')
const noteBtnField=document.getElementById('note-btnfield');
const noteTakerBox=document.getElementById('note-taker-box');
const noteCloseBtn=document.getElementById('note-taker-close-btn');
const listBtn=document.getElementById('list-btn');
const saveBtn=document.getElementById('save-btn');
const listBox=document.getElementById('list-box');


export default loadListTaker;