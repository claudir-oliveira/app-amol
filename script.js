// Função para criar um card com o conteúdo da tarefa
function createCard(taskContent) {
    const card = document.createElement('div');
    card.classList.add('kanban-card');
    card.setAttribute('draggable', 'true');
    card.innerText = taskContent;

    // Evento de início de arraste
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    // Evento de fim de arraste
    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });

    return card;
}

// Função para adicionar um card à coluna
function addCardToColumn(column, taskContent) {
    const card = createCard(taskContent);
    column.querySelector('.kanban-cards').appendChild(card);
}

// Adicionando evento de click nos botões de adicionar card
document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', () => {
        const taskContent = prompt('Digite o conteúdo da tarefa:');  // Prompt para inserir o conteúdo da tarefa

        if (taskContent) {
            const column = button.closest('.kanban-column');  // Seleciona a coluna correspondente
            addCardToColumn(column, taskContent);
        }
    });
});

// Seleciona todas as colunas e adiciona o evento de "drag over" e "drop"
document.querySelectorAll('.kanban-cards').forEach(column => {
    // Evento quando um card arrastado passa sobre a coluna
    column.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    });

    // Evento quando o card sai da coluna
    column.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cards-hover');
    });

    // Evento quando o card é solto dentro da coluna
    column.addEventListener('drop', e => {
        e.preventDefault();
        e.currentTarget.classList.remove('cards-hover');

        const draggingCard = document.querySelector('.kanban-card.dragging');
        if (draggingCard) {
            e.currentTarget.appendChild(draggingCard);
        }
    });
});
