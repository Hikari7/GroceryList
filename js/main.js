const addBtn = document.querySelector(".add"); //addするボタン
const inputName = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
// const listItem = document.querySelector(".list_item"); // li
const lists = document.querySelector(".list"); // ul
const plus = document.querySelector(".plus");
const check = document.getElementById("check");
const items = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); //ページ遷移防ぐ

  const listItem = document.createElement("li");
  listItem.classList.add("inputed_info");
  console.log(inputName);
  listItem.innerHTML = `<li class="list_item">
  <input type="checkbox" class="check" />
  <span class="inputed_name">
  ${inputName.value}
  </span>
  <span class="inputed_num">
  ${inputNum.value}
  </span>
  <span class="material-symbols-outlined">delete</span>
  </li>`;

  inputName.value = "";
  inputNum.value = "";
  lists.appendChild(listItem);
});
