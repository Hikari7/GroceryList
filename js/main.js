const addItems = document.querySelector(".add");
// const inputName = document.getElementById("item");
// const inputNum = document.getElementById("add_num");
const listItem = document.querySelector(".list_item"); // li
const listLine = document.querySelector(".list"); // ul
const plus = document.querySelector(".plus");
const check = document.getElementById("check");
const items = [];

console.log(addItems);

let isInputed = false;

// let num = 0;

// inputNum.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   num = e.target.value;
// });

function inputCheck() {
  if (item.form_item.value == "") {
    alert("Please fill the fields!");
    return false;
  } else {
    return true;
  }
}

function addItem(e) {
  e.preventDefault(); //ページ遷移防ぐ
  const text = document.querySelector("[name=item]").value; //this=formを指す
  const num = document.querySelector("[name=num]").value;
  const item = {
    text: text,
    number: num,
    // done: false,
  };
  console.log(item);
  // items.push(item);
  // this.reset();
}

addItems.addEventListener("submit", addItem);

// addItems.addEventListener("click", (e) => {
//   e.preventDefault(); //ページ遷移防ぐ
// return inputCheck();
//出力はできたけど、、
// if (isInputed) {  //入力されていなかったら
//   console.log("入力してください");
// } else {
//   const itemName = document.createElement("span"); //span of item
//   const itemNum = document.createElement("span"); //span of num
//   itemName.textContent = inputName.value;
//   itemNum.textContent = inputNum.value;
//   check.after(itemNum);
//   check.after(itemName);

// });
