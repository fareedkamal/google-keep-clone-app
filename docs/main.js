(()=>{"use strict";document.getElementById("note-title");const e=document.getElementById("note-input-area"),t=(document.getElementById("note-btnfield"),document.getElementById("note-taker-box"),document.getElementById("note-taker-close-btn"),document.getElementById("list-btn"),document.getElementById("save-btn"),document.getElementById("list-box")),n=function(n){function d(e){e.target.classList.contains("uncheck")?(e.target.classList.replace("uncheck","check"),e.target.parentNode.classList.add("crossed")):(e.target.classList.replace("check","uncheck"),e.target.parentNode.classList.remove("crossed"))}function l(e){e.target.parentNode.previousSibling?e.target.parentNode.previousSibling.childNodes[1].focus():e.target.parentNode.nextSibling.focus(),e.target.parentNode.remove()}function o(e,t){const n=document.createElement("div"),o=document.createElement("button"),a=document.createElement("div"),c=document.createElement("button");return e&&(a.textContent=e),a.onkeydown=s,console.log(t),t?n.className=t:n.classList.add("list-item","set"),o.classList.add("done-box","uncheck"),o.onclick=d,c.classList.add("done-box"),c.onclick=l,a.classList.add("list-data"),a.setAttribute("contenteditable","true"),a.setAttribute("placeholder",""),o.addEventListener("focusout",(e=>{e.target.parentNode.classList.remove("show-border")})),o.onfocus=e=>{e.target.parentNode.classList.add("show-border")},n.onmouseleave=e=>{e.target.childNodes[1]!==document.activeElement&&e.target.lastChild.classList.remove("del-btn")},n.onmouseenter=e=>{e.target.lastChild.classList.contains("del-btn")||e.target.lastChild.classList.add("del-btn")},a.addEventListener("focusout",(e=>{e.target.parentNode.classList.remove("show-border"),e.target.nextSibling.classList.remove("del-btn")})),a.onfocus=e=>{e.target.parentNode.classList.add("show-border"),e.target.nextSibling.classList.add("del-btn")},n.appendChild(o),n.appendChild(a),n.appendChild(c),n}function s(e){"Backspace"!=e.key||""!=e.target.textContent?"Enter"==e.key&&(e.preventDefault(),""==e.target.parentNode.nextSibling.id?(t.insertBefore(o(),e.target.parentNode.nextSibling),e.target.parentNode.nextSibling.childNodes[1].focus()):e.target.parentNode.nextSibling.focus()):l(e)}if(e.classList.add("hide"),t.classList.remove("hide"),n){t.children[0].remove();for(let e=0;e<n.children.length-1;e++)t.appendChild(o(n.children[e].children[1].textContent,n.children[e].className));t.appendChild(document.getElementById("add-sign").cloneNode(!0))}document.getElementById("add-sign").onkeydown=function(e){var n;"Enter"!==e.key?((n=e.keyCode)>47&&n<58||n>64&&n<91||n>95&&n<112||n>185&&n<193||32==n||n>218&&n<223)&&(t.insertBefore(o(),e.target),e.target.previousSibling.childNodes[1].focus()):e.preventDefault()},document.getElementById("add-sign").focus()},d=function(){if(console.log(this),console.log(this.parentNode.parentNode),console.log(this.parentNode.parentNode.parentNode),document.getElementById("note-input-area").classList.contains("hide")?1==document.getElementById("list-box").childElementCount&&""==document.getElementById("note-title").value:""==document.getElementById("note-input-area").textContent&&""==document.getElementById("note-title").value)return;const e=document.getElementById("note-textfield").cloneNode(!0);if(""==e.children[0].value&&e.children[0].setAttribute("placeholder","Untitled"),e.dataset.id){const t=document.querySelector(`.note-item[data-id="${e.dataset.id}"]`);t.innerHTML=e.innerHTML,t.children[0].value=e.children[0].value,t.lastElementChild.id="",t.lastElementChild.className="hide note-del-btn"}else{const t=document.createElement("button");t.className="hide note-del-btn",e.appendChild(t),e.id="",e.setAttribute("data-id",`${document.querySelectorAll(".note-item").length+1}`),e.className="note-item",e.addEventListener("click",E);const n=document.getElementById("notes-container");n.classList.contains("col")&&(e.style.width="600px"),n.appendChild(e)}l(),p(),L()};function l(){a.textContent="",s.value="",s.classList.add("hide"),g.classList.add("hide"),c.classList.replace("set","hide"),i.className="set",m.classList.remove("hide"),h.classList.remove("col"),h.removeAttribute("data-id"),a.classList.remove("hide"),g.innerHTML='<div id="add-sign" class="list-text" contenteditable="true" placeholder="List item" ></div>',document.getElementById("overlay").className="hide"}function o(e,t,o,g){s.classList.remove("hide"),g&&(s.value=g),c.classList.replace("hide","set"),i.classList.add("note-taker-active"),m.classList.add("hide"),h.classList.add("col"),o&&h.setAttribute("data-id",o),u.onclick=d,r.onclick=l,e?"list-btn"==e.target.id?n():a.focus():a.innerHTML=t}const s=document.getElementById("note-title"),a=document.getElementById("note-input-area"),c=document.getElementById("note-btnfield"),i=document.getElementById("note-taker-box"),r=document.getElementById("note-taker-close-btn"),m=document.getElementById("list-btn"),u=document.getElementById("save-btn"),g=document.getElementById("list-box"),h=document.getElementById("note-textfield");document.getElementById("add-sign");const E=function(e){if("note-del-btn"==e.target.className)return;const t=document.getElementById("overlay");let d=e.target;for(;"note-item"!=d.className;)d=d.parentNode;const s=document.getElementById("note-taker-box"),a=d.dataset.id;""==d.children[1].className?o(null,d.children[1].innerHTML,a,d.children[0].value):(o(null,null,a,d.children[0].value),n(d.children[2])),s.classList.add("editor-mode"),t.onclick=e=>{e.target.classList.replace("set","hide"),l()},t.classList.replace("hide","set")};function p(){document.querySelectorAll(".note-item").forEach((e=>{e.onmouseenter=e=>{e.target.lastElementChild.classList.remove("hide")},e.onmouseleave=e=>{e.target.lastElementChild.classList.add("hide")},e.lastElementChild.onclick=e=>{e.target.parentNode.remove()}}))}function L(){document.querySelectorAll(".note-item").forEach((e=>{e.addEventListener("click",E)}))}!function(){const e=document.getElementById("note-input-area"),t=document.getElementById("list-btn"),n=document.getElementById("view-btn"),d=document.getElementById("notes-container");p(),L(),e.addEventListener("click",o),t.addEventListener("click",o),n.addEventListener("click",(()=>{d.classList.contains("col")?(d.classList.remove("col"),document.querySelectorAll(".note-item").forEach((e=>e.style.width=""))):(d.classList.add("col"),document.querySelectorAll(".note-item").forEach((e=>e.style.width="600px")))}))}()})();