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
    <span class="material-symbols-outlined edit_btn">edit_note</span>
    `),
  ];

  listItem.classList.add("list_item");
  inputName.value = "";
  inputNum.value = "";

  lists.append(listItem);

  const deletes = document.querySelectorAll(".delete_btn").forEach((del) => {
    del.addEventListener("click", delBtn);
  });

  listItem.childNodes[13].addEventListener("click", editBtn);
}

function editBtn() {
  const currentNode = this.parentNode;
  const inputedName = currentNode.childNodes[3];
  const inputedNum = currentNode.childNodes[5];
  const textEdit = currentNode.childNodes[7];
  const numEdit = currentNode.childNodes[9];

  console.log("I'm editting!");

  this.classList.toggle("edit_mode");

  inputedName.textContent = "";
  inputedNum.textContent = "";

  if (textEdit.classList[0] === "text_edit") {
    textEdit.classList.add("inputed_name_edit");
    textEdit.classList.remove("text_edit");
  } else {
    textEdit.classList.remove("inputed_name_edit");
    textEdit.classList.add("text_edit");
    console.log("SAVE");
  }

  if (numEdit.classList[0] === "num_edit") {
    numEdit.classList.add("inputed_num_edit");
    numEdit.classList.remove("num_edit");
  } else {
    numEdit.classList.remove("inputed_num_edit");
    numEdit.classList.add("num_edit");
  }
}

function delBtn() {
  console.log("I'm deleting now!");
  lists.removeChild(this.parentNode); //parentNode = "ul"
  //ちなみにアロー関数で定義すると、定義した時点でどこから呼ばれたかで指すthisが決まる
}

//
// オブジェクトで収納することもできる
//(今回はforEachで１つの要素を取ると芋づる式にli全部の要素も取って来てしまう
//ことになるから、使えなかった)
//
// const editArgs = { listItem, inputedName, inputedNum, textEdit, numEdit };
// 
// const edits = document
//   .querySelector(".edit_btn")
//   .addEventListener("click", () => editBtn(editArgs));

// const edits = document.querySelectorAll(".edit_btn");
// edits.forEach(function (edit) {
//   console.log("I'm editting now!");
// edit.addEventListener("click", () => {
//   console.log("edit");
//   // edit.innerHTML = `<span class="material-symbols-outlined">done</span>`;
//   textEdit.forEach(function (el) {
//     inputedName.textContent = "";
//     el.classList.toggle("text_edit");
//     el.classList.toggle("inputed_name_edit");
//   });
//   numEdit.forEach(function (el2) {
//     inputedNum.textContent = "";
//     el2.classList.toggle("num_edit");
//     el2.classList.toggle("inputed_num_edit");
//   });
// });
// });

