const addBtn = document.querySelector(".add"); //addするボタン
const inputName = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
const lists = document.querySelector(".list"); // ul

//functionは外だったら反映するので、一旦引数に渡して外で内容を書いていく

addBtn.addEventListener("click", addList);

function addList(e) {
  e.preventDefault();
  const listItem = document.createElement("li"); //create "li" element
  const items = [
    (listItem.innerHTML = `
    <input type="checkbox" class="check" />
    <span class="inputed_name">
    ${inputName.value}
    </span>
    <span class="inputed_num">
    ${inputNum.value}
    </span>
    <span class="material-symbols-outlined delete">delete</span>
    <span class="material-symbols-outlined edit">
    edit_note
    </span>
    `),
  ];

  listItem.classList.add("list_item");
  inputName.value = "";
  inputNum.value = "";

  lists.append(listItem);

  const deletes = document.querySelectorAll(".delete").forEach((del) => {
    del.addEventListener("click", delBtn);
  });
}

function delBtn() {
  lists.removeChild(this.parentNode); //parentNode = "ul"
}

// function editBtn() {
//   // console.log("編集してやるで");
// }
