const createBtn = document.querySelector(".btn");
const containerNotes = document.querySelector(".cont-Notes");
let Notes = document.querySelectorAll(".input-box");
// localStorage.clear();

function showNotes() {
  containerNotes.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateLocalStorage() {

  localStorage.setItem("notes", containerNotes.innerHTML);
  console.log("saved");
}

createBtn.addEventListener("click", function () {
  let Notes = document.createElement("p");
  let img = document.createElement("img");
  img.className = "delete";
  Notes.className = "input-box";
  Notes.setAttribute("contenteditable", "true");
  containerNotes.appendChild(Notes).appendChild(img);
  img.src = "delete.png";
  updateLocalStorage();
});

containerNotes.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateLocalStorage();
  } else if (e.target.tagName === "P"){
      Notes = document.querySelectorAll(".input-box");
      Notes.forEach(nt =>{
        nt.onkeyup = function(){
          updateLocalStorage();
        }
      }) 
    

    // Notes.forEach((nt) => {
    //   nt.onkeyup = function () {
    //     updateLocalStorage();
    //   };
    // });
  }
});
