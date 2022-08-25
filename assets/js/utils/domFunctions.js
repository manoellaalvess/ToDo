// SOLID

// Princípios de boas práticas de programação.

// S - SRP - Single Responsability Principle
// Princípio da Responsabilidade Única.

// Funções bem escritas devem ser mantidas simples, curtas e realizando um único objetivo.

// Quando precisamos usar uma função em outro arquivo, é necessário exportá-la.

// Quando for importar do arquico domFunctions o JS não sabe quantas funções estão disponíveis.
// Quando eu preciso extrair qualquer recurso, usamos a desestruturação
// import { addTask } from './domFunctions.js';

// CRUD - Create Read Update Delete

export function addTask(db, title="") {
//Criando uma nova tarefa
    const task = document.createElement('div'); //cria div e coloca na variavel task
    // const id = Number(db.length) + 1;
    task.classList.add('task');
    task.setAttribute('id', db.id);

    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}"> </div>

    <div>

        <div>
            <span class="title-task">${title?title:db.title}</span>
        </div>

    </div>
    <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);
}

export function removeTask() {
    alert("Removendo uma tarefa");
}

export function updateTask() {
    alert("Alterando uma tarefa");
}

export function getAllTasks(db) {
    db.forEach((item) => {
        addTask(item);
    });
    
}

export function getTaskById() {
    alert("Exibindo uma tarefa");
}
