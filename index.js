const database = firebase.database();
const descripcion = document.getElementById('descripcion');
const tareaBtn = document.getElementById('tareaBtn');
const toDoContainer = document.getElementById('toDoContainer');
const doingContainer = document.getElementById('doingContainer');
const doneContainer = document.getElementById('doneContainer');

doingContainer

enviarTarea = () => {

    let tareaD = descripcion.value;

    if (tareaD == '') {
        alert('El campo no puede estar vacío');
        return;
    }

    let reference = database.ref('tareas/toDo').push();

    let listaTarea = {
        id: reference.key,
        descripcionTarea: descripcion.value,
    }

    reference.set(listaTarea);
    descripcion.value = '';
}

tareaBtn.addEventListener('click', enviarTarea);

// Lectura

database.ref('tareas/toDo').on('value', function (data) {
    toDoContainer.innerHTML = '';
    data.forEach(

        listaTarea => {

            let valor = listaTarea.val();
            console.log(valor, descripcion);
            //instanciar clase TOdo
            let fila = new ToDoList(valor);
            toDoContainer.appendChild(fila.render());

        });

});

database.ref('tareas/doing').on('value', function (data) {
    doingContainer.innerHTML = '';
    data.forEach(

        listaTarea => {

            let valor = listaTarea.val();
            console.log(valor, descripcion);
            //instanciar clase TOdo
            let fila = new DoingList(valor);
            doingContainer.appendChild(fila.render());

        });

});

database.ref('tareas/done').on('value', function (data) {
    doneContainer.innerHTML = '';
    data.forEach(

        listaTarea => {

            let valor = listaTarea.val();
            console.log(valor, descripcion);
            //instanciar clase TOdo
            let fila = new DoneList(valor);
            doneContainer.appendChild(fila.render());

        });

});

// clase doing

