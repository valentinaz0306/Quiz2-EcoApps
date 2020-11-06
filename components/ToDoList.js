class ToDoList {

    constructor(tarea) {

        this.tarea = tarea;
    }

    render = () => {

        let component = document.createElement('div');
        component.className = 'ToDoList';

        component.innerHTML = (
            this.tarea.descripcionTarea
            // '<p>' + this.tarea.descripcionTarea+ '</p>'
        );
        //boton rojo
        let delateBtn = document.createElement('button');
        delateBtn.className = 'delateBtn';
        delateBtn.innerHTML = 'X';
        //boton azul
        let pasarBtn = document.createElement('button');
        pasarBtn.className = 'pasarBtn';
        pasarBtn.innerHTML = 'P';

        component.appendChild(delateBtn);
        component.appendChild(pasarBtn);

        delateBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('tareas/toDo/' + this.tarea.id).set(null);


        });

        pasarBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('tareas/doing/' + this.tarea.id).set(this.tarea);
            database.ref('tareas/toDo/' + this.tarea.id).set(null);


        });

        return component;
    }

}