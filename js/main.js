const addBtn = document.querySelector(".add"); //addするボタン
const inputName = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
const lists = document.querySelector(".list"); // ul
// const editList = document.querySelector('.edit_list')

//functionは外だったら反映するので、一旦引数に渡して外で内容を書いていく

addBtn.addEventListener("click", addList);

function addList(e) {
  e.preventDefault();
  const listItem = document.createElement("li"); //create "li" element
  const items = [
    (listItem.innerHTML = `
    <input type="checkbox" class="check" />
    <span class="inputed_name">
    ${inputName.value} ${inputNum.value}
    </span>
    <form class="edit">
          <input type="text" />
          <input type="number" />
        </form>
    <span class="material-symbols-outlined delete">delete</span>
    <span class="material-symbols-outlined edit_btn">
    edit_note
    </span>
    `),
  ];

  listItem.classList.add("list_item");
  inputName.value = "";
  inputNum.value = "";

  lists.append(listItem);

  // inputName.setAttribute('input', 'readonly');

  const deletes = document.querySelectorAll(".delete").forEach((del) => {
    del.addEventListener("click", delBtn);
  });

  const editBtn = document.querySelectorAll(".edit_btn").forEach((edi) => {
    edi.addEventListener("click", editMode);
  });

  function editMode(e) {
    //この時点でeditボタン押したことになってる
    console.log("editしてやるで");
    const edits = document.querySelectorAll(".edit").forEach((edit) => {
      edit.classList.remove("edit_list"); //formからのDOMを取るようにする
      //valueを更新する
      
    });
  }
}

function delBtn() {
  lists.removeChild(this.parentNode); //parentNode = "ul"

  //ちなみにアロー関数で定義すると、定義した時点でどこから呼ばれたかで指すthisが決まる
}

// const edit = e.target.classList.contains("edit");　//editのクラスが含まれている
// e.target.onclick = function editSave() {
//   console.log(e);
//   e.target.classList.contains("edit").innerHTML = `<span class="material-symbols-outlined saved"> done </span>`;
// }

// const saved = document.querySelector('.saved');
// console.log(saved);
// if (target = true) {
// let val = e.target.parentNode.firstChild.innerHTML;

// e.target.parentNode.innerHTML = `
// <input type="checkbox" class="check" />
//   <span class="inputed_name">
//    ${inputName.value}
//    </span>
//    <span class="inputed_num">
//    ${inputNum.value}
//    </span>
//    <span class="material-symbols-outlined delete">delete</span>
//    <span class="material-symbols-outlined edit">
//    edit_note
//    </span>
//     `;
