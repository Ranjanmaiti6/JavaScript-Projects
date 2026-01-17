const form=document.querySelector('form')
const allTask=document.querySelector('.todo-list')
const input=document.querySelector('#newTask')

allTask.innerHTML = "";

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const text=input.value.trim()
    if(text=="")return;

    const li=document.createElement('li')

    const task=document.createElement('p')
    task.textContent=text;

    const action=document.createElement('div')
    action.className='action';

    const doneButton=document.createElement('button')
    doneButton.textContent='✓';
    doneButton.className='complete';
    doneButton.type = 'button';

    const deleteButton=document.createElement('button')
    deleteButton.textContent='✕';
    deleteButton.className='delete';
    deleteButton.type = 'button';

    action.append(doneButton,deleteButton)
    li.append(task,action)
    allTask.append(li)

    doneButton.addEventListener('click',()=>{
        task.style.textDecoration='line-through';
        task.style.color='grey';
    })

    deleteButton.addEventListener('click',()=>{
        li.remove()
    })

    form.reset()
})