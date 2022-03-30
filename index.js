const save = document.querySelector('#button');
save.addEventListener('click', add);

function add(){
    
    const name= document.querySelector('input[type=text]').value;
    const date= document.querySelector('input[type=date]').value;
    

   const listContainer=document.getElementById('list-container');

//create the new div to append to container
    const taskName = document.createElement("div");
    taskName.classList.add('task-list');
    const listName=document.createElement('p');
    
    listName.innerHTML=name;

    taskName.appendChild(listName);
    listContainer.appendChild(taskName);
    console.log(taskName);


    const taskDate = document.createElement("div");
    taskDate.classList.add('task-list');
    const listDate=document.createElement('p');
    
    listDate.innerHTML=date;

    taskDate.appendChild(listDate);
    listContainer.appendChild(taskDate);
     console.log(taskDate);

     const taskStatus = document.createElement("div");
    taskStatus.classList.add('task-list');
    const listStatus=document.createElement('p');
    

    const completed=document.querySelector('#completed');
    const notCompleted=document.querySelector('#not-completed');
    if(notCompleted.checked){
        listStatus.innerHTML='not completed';
        taskDate.style.background='green';
        taskDate.style.textDecoration='line-through';
        taskName.style.textDecoration='line-through';
        taskStatus.style.textDecoration='line-through';
        taskStatus.style.background='green';
        taskName.style.background='green';



    
    }else if(completed.checked){
        listStatus.innerHTML='completed';
    }else{
        listStatus.innerHTML='';
    }
    

    taskStatus.appendChild(listStatus);
    listContainer.appendChild(taskStatus);
     console.log(taskStatus);

    // const form = document.querySelector('form');
    // form.submit;
    // e.preventDefault();
    // name.forEach( input=> input.value='')
    save.addEventListener('click', ()=>{
        save.querySelectorAll('input').value="";
    })
    
    
        
}






    



