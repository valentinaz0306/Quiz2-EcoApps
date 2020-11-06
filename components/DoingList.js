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
            database.ref('tareas/' + this.tarea.id).set(null);


        });

        return component;
    }

}