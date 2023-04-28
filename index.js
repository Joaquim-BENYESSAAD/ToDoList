const containerList = document.getElementById("containerList");
const check = document.getElementById("check");
const listItems = [];
const removeDiv = document.getElementsByClassName("right");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>`;

function getValue(){
    var input = document.getElementById("in").value;
    const listItem = document.createElement('div');
    listItem.className = 'list';
    listItem.innerHTML = `<div class="check"><input type="radio" name="" id="check"></div>
                          <div class="left">${input}</div>
                          <div class="right">${svg}</div>`;
    
    listItems.push(listItem);
    containerList.appendChild(listItem);

    const deleteBtn = listItem.querySelector(".right");
    deleteBtn.addEventListener("click", () => {
      listItem.classList.add("delete");
      listItem.remove();
      const index = listItems.indexOf(listItem);
      listItems.splice(index, 1);
    });

    // check.addEventListener('click',()=>{
    //     listItem.style.backgroundColor = "background: #ff0000";
    // });

    const changeBackgroundButton = listItem.querySelector('input[type="radio"]');
    changeBackgroundButton.addEventListener('click', () => {
        // Changer le fond d'écran de l'élément de liste en rouge
        listItem.style.backgroundColor = 'red';
    });
};

