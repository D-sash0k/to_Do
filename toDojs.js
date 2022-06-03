const input = document.querySelector('.write_text');
const list = document.querySelector('.todo_items');
 
const pushItem = (e) => {
    if (e.key === "Enter") {
        if (!input.value.trim()) {
            input.placeholder ='PLS ENTER YOUR TASK...';
            input.style = 'border:5px solid red';
    
        } else{
            list.insertAdjacentHTML('afterbegin', `<li class="todo_item">
            <img class="imagine" src="C:\Users\Laptop\Desktop\ToDo list\images.jpg">
            ${input.value} </li>`); 
           input.value = '';
           input.style = 'border:3px solid rgb(51, 211, 247)';
           input.placeholder = "What do you want to do?...";     
        }
    }
};

const deleteItem = (e) =>{
    if(e.target.classList.contains('imagine')) {
        e.target.parentElement.remove();
    }
};

input.addEventListener("keypress", pushItem)
list.addEventListener('click', deleteItem);


