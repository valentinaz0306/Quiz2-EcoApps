class ToDoList {

    constructor(tarea) {

        this.tarea = tarea;
    }

    render = () => {

        let component = document.createElement('div');
        component.className= 'ToDoList';

        component.innerHTML = (
         this.tarea.descripcionTarea
        // '<p>' + this.tarea.descripcionTarea+ '</p>'
        );
        return component;
    }

}