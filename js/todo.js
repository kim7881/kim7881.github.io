const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    // Javascript의 object나 array등을 string으로 변환 시키는 것 Json.stringify()
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // 위에 변수설정한 newTodo를 만들어서 밑에 공백설정한 toDoInput.value와 상관없다
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // 다시 string이 아닌 Javascript에서 사용 가능한 object로 만들 수 있다 -> Json.parse()
    // array로 변한다
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
  
    // forEach는 function호출 방법이랑 똑같다
    // forEach함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행
    parsedToDos.forEach(paintToDo); 
}

