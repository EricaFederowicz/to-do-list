
document.addEventListener('DOMContentLoaded', function(){
    const inputBox = document.getElementById('input-box');
    const addButton = document.querySelector('.add-button');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', function() {
        const taskName = document.getElementById('input-box').value;

        if (taskName !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-item';
        

        listItem.innerHTML = `
            <button class="complete-button">
                <img src="img/check.png">
            </button>
            <section class="task">
                <span class="task-name">${taskName}</span>
            </section>
        `;

        taskList.appendChild(listItem);

        inputBox.value = '';
    }
});
});

const completeButtons = document.getElementsByClassName('complete-button');

for (const button of completeButtons) {
    button.addEventListener('click', function(){
        this.classList.toggle('marked');
    })
};
