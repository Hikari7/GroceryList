const inputAdd = document.getElementById("add_item");
const inputNum = document.getElementById("add_num");
// const inputItem = document.getElementsByClassName("input_item");
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

add.addEventListener("click", (e) => {
    if(isInputed) {
        console.log("入力してください");
    } 
  e.preventDefault(); //ページ遷移防ぐ
  const itemName = document.createElement("span"); //span of item
  const itemNum = document.createElement("span"); //span of num
  itemName.textContent = inputAdd.value;
  itemNum.textContent = inputNum.value;
  check.after(itemName);
  plus.before(itemNum);
  list.push(list_item);
  this.reset();
});

