console.log("connected");
let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
    count++;
    const inputValue = document.getElementById("input-value").value;
    console.log(inputValue);
    const contentContainer = document.getElementById("content-container");
    const tr = document.createElement("tr");
    tr.innerHTML =
        `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
      <button class="btn btn-primary delete-btn">Delete</button>
      <button class="btn btn-secondary done-btn px-3 ms-1 d-inline-block">Done</button>
    </td>
    `;
    contentContainer.appendChild(tr);
    document.getElementById("input-value").value = "";

    const deleteBtn = document.getElementsByClassName("delete-btn");
    for (let btn of deleteBtn) {
        btn.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.style.display="none";
        })
    }
    const doneBtn=document.getElementsByClassName("done-btn");
    for(let btn of doneBtn)
    {
        btn.addEventListener("click",function(event){
            event.target.parentNode.parentNode.style.textDecoration="line-through";
            event.target.parentNode.parentNode.style.textDecorationThickness="5px";
            event.target.parentNode.parentNode.style.textDecorationColor="red";
            console.log(event.target.parentNode.parentNode.style);
        })
    }
})
