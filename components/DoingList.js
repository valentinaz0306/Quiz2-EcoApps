class DoingList {

    constructor(tarea) {

        this.tarea = tarea;
    }

    render = () => {

        let component = document.createElement('div');
        component.className = 'ToDoList';

        component.innerHTML = (
            this.tarea.descripcionTarea
           
        );

        let fecha = document.createElement('div');
        fecha.className = 'fecha';
        fecha.innerHTML = this.tarea.date;

        //boton rojo
        let delateBtn = document.createElement('button');
        delateBtn.className = 'delateBtn';
        delateBtn.innerHTML = 'X';
        //boton azul
        let pasarBtn = document.createElement('button');
        pasarBtn.className = 'pasarBtn';
        pasarBtn.innerHTML = 'P';

        //boton amarillo
        let volverBtn = document.createElement('button');
        volverBtn.className = 'volverBtn';
        volverBtn.innerHTML = 'B';

        component.appendChild(delateBtn);
        component.appendChild(volverBtn);
        component.appendChild(pasarBtn);
        component.appendChild(fecha);

        delateBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('tareas/doing/' + this.tarea.id).set(null);


        });

        pasarBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('tareas/done/' + this.tarea.id).set(this.tarea);
            database.ref('tareas/doing/' + this.tarea.id).set(null);


        });

        volverBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('tareas/toDo/' + this.tarea.id).set(this.tarea);
            database.ref('tareas/doing/' + this.tarea.id).set(null);


        });

        return component;
    }

}