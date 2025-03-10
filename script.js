function addTask(sectionClass) {

    const inputTask = document.createElement('input');
    inputTask.type = 'text';
    inputTask.placeholder = "Digite sua tarefa";

    const section = document.querySelector(`.${sectionClass}`);
    section.appendChild(inputTask);
    const buttonSave = document.createElement('button');
            buttonSave.textContent = 'Salvar';
            section.appendChild(buttonSave);
            
            // Adicionar evento ao botão de salvar
            buttonSave.addEventListener('click', function() {
                const taskText = inputTask.value.trim();
                if (taskText) {
                    const taskDiv = document.createElement('div');
                    taskDiv.textContent = taskText;
                    section.appendChild(taskDiv);
                    inputTask.remove();
                    buttonSave.remove();
                }
            });
}