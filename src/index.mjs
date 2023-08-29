import "./styles.css";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const div = document.createElement("div");
    div.className = "list-row"

    const li = document.createElement("li");
    li.innerText = inputText

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.parentNode;

        const text = completeTarget.firstElementChild.innerText;

        completeTarget.textContent = null;

        const li = document.createElement("li")
        li.innerText = text

        const returnButton = document.createElement("button")
        returnButton.innerText ="戻す"
        returnButton.addEventListener("click", () => {
            const returnTarget = returnButton.parentNode;
            returnTarget.textContent = null;

           returnTarget.appendChild(li)
           returnTarget.appendChild(completeButton);
           returnTarget.appendChild(deleteButton);
           document.getElementById("incomplete-list").appendChild(returnTarget);
        })

        completeTarget.appendChild(li);
        completeTarget.appendChild(returnButton)

        document.getElementById("complete-list").appendChild(completeTarget);
        document.getElementById("incomplete-list").removeChild(completeTarget);

    })

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());