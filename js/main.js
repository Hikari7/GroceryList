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

  // console.log(willbechecked);

  listItem.classList.add("list_item");
  inputName.value = "";
  inputNum.value = "";

  lists.append(listItem);

  // const checked = document.querySelectorAll(".check").forEach((ch) => {
  //   ch.addEventListener("click", () => {
  //     // console.log("checked!", listItem);
  //     // listItem.classList.add("done");
  //     document.querySelectorAll(".inputed_name").forEach((el) => {
  //       console.log(el);
  //       el.classList.add("done");
  //     });
  //   });
  // });

  const deletes = document.querySelectorAll(".delete").forEach((del) => {
    del.addEventListener("click", delBtn);
  });

  const edits = document.querySelectorAll(".edit").forEach((edit) => {
    edit.addEventListener("click", editBtn);
  });
}

// function checked() {
// console.log("checked!");
//1) made const again to get the list
// const beChecked = inputName.value;
// beChecked.classList.add("done");
// this.classList.add("done");

//2)
// span.classList.add("done");
// listItem.classList.add("done");
// node.classList.add("done");
// }

function delBtn() {
  // console.log(this.parentNode);
  // console.log(child);
  lists.removeChild(this.parentNode); //parentNode = "ul"

  //ちなみにアロー関数で定義すると、定義した時点でどこから呼ばれたかで指すthisが決まる
}

function editBtn(e) {
  console.log("editしてやるで");
  const target = e.target.classList.contains("edit");
  // if (target) {
  //   let val = e.target.parentNode.firstChild.innerHTML;
  //   // alert(val);
  //   e.target.parentNode.innerHTML = `
  // <input type="checkbox" class="check" />
  //   <span class="inputed_name">
  //   ${inputName.value}
  //   </span>
  //   <span class="inputed_num">
  //   ${inputNum.value}
  //   </span>
  //   <span class="material-symbols-outlined delete">delete</span>
  //   <span class="material-symbols-outlined edit">
  //   edit_note
  //   </span>
  //    `;
  // }
}
