const addBtn = document.querySelector(".add"); //addするボタン
const inputName = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
const lists = document.querySelector(".list"); // ul
// const items = [];

// addBtn.addEventListener("click", (e) => {
// const listItem = document.createElement("li");
// const addList = function (e) {
//   e.preventDefault(); //ページ遷移防ぐ

//   listItem.innerHTML = `<li class="list_item">
//     <input type="checkbox" class="check" />
//     <span class="inputed_name">
//     ${inputName.value}
//     </span>
//     <span class="inputed_num">
//     ${inputNum.value}
//     </span>
//     <span class="material-symbols-outlined delete">delete</span>
//     <span class="material-symbols-outlined edit">
//   edit_note
//   </span>
//     </li>`;

//   inputName.value = "";
//   inputNum.value = "";

//   const edits = document.querySelectorAll(".edit").forEach((edit) => {
//     edit.addEventListener("click", editBtn);
//   });

//   const deletes = document.querySelectorAll(".delete").forEach((del) => {
//     del.addEventListener("click", delBtn);
//   });
// };
// lists.appendChild(listItem);

// addBtn.addEventListener("click", addList);
// items.push(listItem);
// console.log(items);

//functionは外だったら反映するので、一旦引数に渡して外で内容を書いていく
// const items = [];

addBtn.addEventListener("click", addList);

function addList(e) {
  e.preventDefault(); //ページ遷移防ぐ
  const listItem = document.createElement("li");
  // console.log(listItem);
  const items = [
    (listItem.innerHTML = `<li class="list_item">
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
  </li>`),
  ];

  inputName.value = "";
  inputNum.value = "";

  lists.append(listItem);

  const deletes = document.querySelectorAll(".delete").forEach((del) => {
    for (let item = 0; item < items.length; item++) {
      del.addEventListener("click", () => {
        // lists.removeChild(listItem);
        // lists.remove(listItem);
        items.splice(items.indexOf(item), 1);
        // console.log(item);
      });
      // console.log(items);
    }
  });
}

// console.log(item);

// const edits = document.querySelectorAll(".edit").forEach((edit) => {
//   edit.addEventListener("click", editBtn);
// });

//

//

// function editBtn() {
//   // console.log("編集してやるで");
// }
