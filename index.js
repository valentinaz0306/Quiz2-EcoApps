const database = firebase.database();
const descripcion = document.getElementById('descripcion');
const tareaBtn = document.getElementById('tareaBtn');
const toDoContainer = document.getElementById('toDoContainer');


enviarTarea = () => {

    let tareaD = descripcion.value;

    if (tareaD == '') {
        alert('El campo no puede estar vacío');
        return;
    }

    let reference = database.ref('tareas').push();

    let listaTarea = {
        id: reference.key,
        descripcionTarea: descripcion.value,
    }

    reference.set(listaTarea);
    descripcion.value = '';
}

tareaBtn.addEventListener('click', enviarTarea);

// Lectura

database.ref('tareas').on('value', function (data) {

    data.forEach(

        listaTarea => {

            let valor = listaTarea.val();
            console.log(valor, descripcion);
            //instanciar clase TOdo
            let fila= new ToDoList(valor);
            toDoContainer.appendChild(fila.render());

        });

});