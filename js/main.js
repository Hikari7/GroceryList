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
    ${inputName.value}
    </span>
    <span class="inputed_num">  
    ${inputNum.value}
    </span>

          <input type="text" class ="text_edit"/>
          <input type="number"  class ="num_edit"/>
    <span class="material-symbols-outlined delete_btn">delete</span>
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

  const deletes = document.querySelectorAll(".delete_btn").forEach((del) => {
    del.addEventListener("click", delBtn);
  });

  // const edits = document.querySelectorAll(".edit_btn").forEach((edit) => {
  //   edit.addEventListener("click", editMode);
  // });

  const inputedName = document.querySelector(".inputed_name");
  const inputedNum = document.querySelector(".inputed_num");

  const textEdit = document.querySelectorAll(".text_edit");
  const numEdit = document.querySelectorAll(".num_edit");

  document.querySelectorAll(".edit_btn").forEach((edit) => {
    edit.addEventListener("click", () => {
      inputedName.textContent = "";
      inputedNum.textContent = "";
      console.log("edit");
      textEdit.forEach(function (el) {
        el.classList.remove("text_edit");
      });
      textEdit.forEach(function (el) {
        el.classList.add("inputed_name_edit");
      });
      numEdit.forEach(function (el2) {
        el2.classList.remove("num_edit");
      });
      numEdit.forEach(function (el2) {
        el2.classList.add("inputed_num_edit");
      });
    });
  });

  // function editMode() { 　//このfunctionの中で書いているからうまくいかない、全部ぜんぶとって来てしまう？
  //   console.log("editmode");
  //この時点でeditボタン押したことになってる
  // const edits = document
  //   .querySelectorAll(".edit_mode")
  //   .forEach((edi) => {
  //     console.log(edi);
  //     edi.classList.remove("edit_mode"); //formからのDOMを取るようにする
  //     //valueを更新する
  //   });

  // const editParent = document.querySelector('.edit_mode')
  // let editChildren = editParent.querySelectorAll(":scope > form");
  // editChildren.forEach(item => item.classList.remove("edit_mode"));
  // }
}

function delBtn() {
  console.log("delするよ");
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
