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

  // console.dir(listItem.childNodes);
  listItem.childNodes[13].addEventListener("click", editBtn); //listItemの13番目のchildNode
  //NodeListからeditのアイコンを取ってくる
  //forEachだったら他の要素も芋づる式にとって来ちゃうので

  // const editArgs = { listItem, inputedName, inputedNum, textEdit, numEdit };
  const delAll = document.querySelector(".delete_lists");
  delAll.addEventListener("click", deleteAll);

  // const delAll = document
  // .querySelector(".delete_lists")
  // .addEventListener("click", () => delAll(editArgs));
}

function editBtn() {
  const currentNode = this.parentNode; //liを取ってくる childNodes[13]のparentNodeはliなので

  //↓直接nodeにアクセスしている
  const inputedName = currentNode.childNodes[3]; //nodeアクセスする
  const inputedNum = currentNode.childNodes[5]; //span.inputed_num

  //editした時用
  const textEdit = currentNode.childNodes[7]; //input.inputed_name_edit
  const numEdit = currentNode.childNodes[9]; //<input type="number" class="inputed_num_edit">
  const editBtn = currentNode.childNodes[13];
  // console.dir(currentNode.childNodes);

  inputedName.textContent = "";
  inputedNum.textContent = "";

  // console.dir(currentNode.childNodes); //inputed_name_edit
  // console.dir(textEdit.classList[0]);

  if (textEdit.classList[0] === "text_edit") {
    //inputタグの部分
    //textEdit(innerHTML)のクラスの０番目を取ってる（classListでも配列にすればそのn番目を取得できる）
    //text_edit(テキストを編集する場所と同じだったら)
    textEdit.classList.add("inputed_name_edit");
    textEdit.classList.remove("text_edit"); //inputタグの部分
    numEdit.classList.add("inputed_num_edit"); //追加のinputタグがaddされる
    numEdit.classList.remove("num_edit"); //大元のspanタグのinputed_numがremoveされる
    editBtn.innerHTML = `<span class="material-symbols-outlined">done</span>`;
  } else {
    textEdit.classList.remove("inputed_name_edit");
    textEdit.classList.add("text_edit");
    numEdit.classList.remove("inputed_num_edit");
    numEdit.classList.add("inputed_num");
    textEdit.classList.add("save_text");
    editBtn.innerHTML = `<span class="material-symbols-outlined">edit_note</span>`;
    console.log("SAVE");
  }

  //3回目でtoggleなくなっちゃう
}

function delBtn() {
  console.log("I'm deleting now!");
  lists.removeChild(this.parentNode); //parentNode = "ul"
  //ちなみにアロー関数で定義すると、定義した時点でどこから呼ばれたかで指すthisが決まる
}

function deleteAll() {
  // const children = lists.childNodes;
  // console.log(children);

  // for (let i = 0; i < children.length; i++) {
  //   // lists.removeChild(children[i]);
  //   console.log(children[i]);
  // }
  while(lists.lastChild){
    lists.removeChild(lists.lastChild);
  }


  // console.log(lists.childNodes.length);
  // remove.lists.children;
  // console.log(parentNode);
  // lists.remove(this.parentNode);
  // console.dir(lists.childNodes);
}

//👇メモ
// オブジェクトで収納することもできる
//(今回はforEachで１つの要素を取ると芋づる式にli全部の要素も取って来てしまう
//ことになるから、使えなかった)

// const editArgs = { listItem, inputedName, inputedNum, textEdit, numEdit };
// ↑のオブジェクトをfunctionの引数に渡せばfunctionの外でこのconstを使うことができる
//function
// const edits = document.querySelectorAll(".edit_btn").forEach((edit) => {
//   edit.addEventListener("click", editBtn(editArgs));みたいな感じで
// });
//editArgsはオブジェクトをまとめているだけなので、const editArgsにしなくても、
//listItem, inputed Name, textEdit, numEditをそれぞれ引数に渡すのもOK
//constの名前が同じだったら:省略できる
//const editArgs = {x: listItem,....みたいな}
//const person = {name:name} = {name}/shorthand
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
