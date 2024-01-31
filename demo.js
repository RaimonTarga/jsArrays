const gridContainer = document.getElementById('gridContainer');
const inputValue = document.getElementById('inputValue');
const editValue = document.getElementById('editValue');
const selectedForm = document.getElementById('selectedForm');
const elements = [];
let selectedNode;


function addElement(){
    let value = inputValue.value;
    addValue(value);
}

function populate(){
    for (let i = 0; i < 9; i++){
        let value = Math.floor(Math.random() * 10);
        addValue(value);
    }
}

function addValue(value){
    const node = document.createElement("div");
    const textnode = String(value);
    elements.push(value);
    node.className = "grid-item"
    node.append(textnode);
    node.onclick = function(){
        selectElement(node);
    };
    gridContainer.appendChild(node);
}

function selectElement(e){
    if (selectedNode != null) selectedNode.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    selectedNode = e;
    selectedNode.style.backgroundColor = "rgba(163, 0, 0, 0.8)";
    selectedForm.style = "display:flex";
}

function removeSelected(){
    if (selectedNode != null){
        removeElement(selectedNode);
        editValue.value = "";
        selectedNode = null;
        selectedForm.animate([{opacity:1},{opacity:0}],250);
        setTimeout(() => {
            selectedForm.style = "display:none";
        }, 250);
    }
}

function editSelected(){
    if (selectedNode != null){
        const value = editValue.value;
        const nodes = Array.prototype.slice.call(document.querySelectorAll("grid-item"));
        const position = nodes.indexOf(selectedNode);
        elements[position] = value;
        selectedNode.innerHTML = String(value);
        editValue.value = "";
    }
}

function removeSelection(){
    if (selectedNode != null){
        selectedNode.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        selectedNode = null;
        editValue.value = "";
        selectedForm.animate([{opacity:1},{opacity:0}],250);
        setTimeout(() => {
            selectedForm.style = "display:none";
        }, 250);
    }
}

function removeElement(e){
    const nodes = Array.prototype.slice.call(document.querySelectorAll("grid-item"));
    const position = nodes.indexOf(e);
    elements.splice(position, 1);
    e.animate([{opacity:1},{opacity:0}],250);
    setTimeout(() => {
        e.remove();
    }, 250);
}