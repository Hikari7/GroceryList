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

  const inputedName = document.querySelector(".inputed_name");
  const inputedNum = document.querySelector(".inputed_num");
  const textEdit = document.querySelectorAll(".text_edit");
  const numEdit = document.querySelectorAll(".num_edit");

 

  // const edits = e.target.classList.contains(".edit_btn").forEach((edit) => {
  //   edit.addEventListener("click", editBtn);
  // });


  const edits = document.querySelectorAll(".edit_btn").forEach((edit) => {
    edit.addEventListener("click", editBtn);
  });

  function editBtn() {
   
    console.log("I'm editting!");
    textEdit.forEach(function (el) {
      inputedName.textContent = "";
      el.classList.toggle("text_edit");
      el.classList.toggle("inputed_name_edit");
    });
    numEdit.forEach(function (el2) {
      inputedNum.textContent = "";
      el2.classList.toggle("num_edit");
      el2.classList.toggle("inputed_num_edit");
    });
  }

  // const edits = document.querySelectorAll(".edit_btn");
  // edits.forEach(function (edit) {
  //   // console.log(edit);
  //   edit.addEventListener("click", () => {
  //     console.log("edit");
  //     edit.innerHTML = `<span class="material-symbols-outlined">done</span>`;

  //     textEdit.forEach(function (el) {
  //       inputedName.textContent = "";
  //       el.classList.toggle("text_edit");
  //       el.classList.toggle("inputed_name_edit");
  //     });
  //     numEdit.forEach(function (el2) {
  //       inputedNum.textContent = "";
  //       el2.classList.toggle("num_edit");
  //       el2.classList.toggle("inputed_num_edit");
  //     });
  //   });
    // edit.forEach("click", (ed) => {
    //   edit.addEventListener("click"),
    //     () => {
    //       edit.innerHTML = `<span class="material-symbols-outlined edit_btn">edit_note</span>`;
    //     };
    // });
  // });
}

function delBtn() {
  console.log("I'm deleting!");
  // lists.removeChild(this.parentNode); //parentNode = "ul"
  //ちなみにアロー関数で定義すると、定義した時点でどこから呼ばれたかで指すthisが決まる
}
