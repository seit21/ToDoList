const form= document.querySelector('form')
const list= document.querySelector('.list')
const userName= document.querySelector('.userName')
const lastName= document.querySelector('.lastName')

const storedNames= JSON.parse(localStorage.getItem("tasks")) || [];
const names=storedNames;

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const newName= userName.value.trim();
    const newLastName= lastName.value.trim();

    if(newName !=="" && lastName !==""){
        const newTask={ Name: newName, lastName: newLastName}
        names.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(names));
        form.reset();

    }
    renderName();
    
})

function renderName(){
    list.innerHTML='';

    names.forEach((name, index)=>{
        const nameElement=document.createElement('h3')
        const lastNameElement=document.createElement('h3')
        const deleteButton=document.createElement('button')
        deleteButton.textContent='delete';
        nameElement.textContent=name.Name;
        lastNameElement.textContent=name.lastName;
        deleteButton.addEventListener('click',()=>{
            console.log(index);
            names.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(names));
            renderName();
        })

        list.appendChild(nameElement);
        list.appendChild(lastNameElement);
        list.appendChild(deleteButton);

    })
}
renderName();

