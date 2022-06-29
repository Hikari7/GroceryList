const inputAdd = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
const add = document.querySelector(".add");
const listItem = document.querySelector(".list_item"); // li
const listLine = document.querySelector(".list"); // ul
const plus = document.querySelector(".plus");
const check = document.getElementById("check");
// const list = [];

let isInputed = false;

// let num = 0;

// inputNum.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   num = e.target.value;
// });

function inputCheck() {
  if (item.form_item.value == "") {
    alert("Please enter the fields!");
    return false;
  } else {
    return true;
  }
}

add.addEventListener("click", (e) => {
  e.preventDefault(); //ページ遷移防ぐ
  // return inputCheck();
  //出力はできたけど、、
  // if (isInputed) {  //入力されていなかったら
  //   console.log("入力してください");
  // } else {
  const itemName = document.createElement("span"); //span of item
  const itemNum = document.createElement("span"); //span of num
  itemName.textContent = inputAdd.value;
  itemNum.textContent = inputNum.value;
  check.after(itemNum);
  check.after(itemName);

});
