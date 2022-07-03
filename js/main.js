const addBtn = document.querySelector(".add"); //addするボタン
const inputName = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
const lists = document.querySelector(".list"); // ul
const check = document.getElementById("check");
const items = [];
const del = document.querySelector("material-symbols-outlined delete");

// document.querySelector(".material-symbols-outlined delete").innerHTML = '<span class="material-symbols-outlined delete">delete</span> '

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); //ページ遷移防ぐ

  const listItem = document.createElement("li");
  listItem.classList.add("inputed_info");

  listItem.innerHTML = `<li class="list_item">
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
  </li>`;

  inputName.value = "";
  inputNum.value = "";

  lists.appendChild(listItem);

  const edits = document.querySelectorAll(".edit").forEach((edit) => {
    edit.addEventListener("click", editBtn);
  });

  const deletes = document.querySelectorAll(".delete").forEach((del) => {
    del.addEventListener("click", delBtn);
  });
});

function editBtn() {
  // console.log("編集してやるぞ");
}

function delBtn() {
  // console.log("削除してやるで");
}
