class ToDoList {

    constructor(tarea) {

        this.tarea = tarea;
    }

    render = () => {

        let component = document.createElement('div');
        component.innerHTML = (
            '<p>' + this.tarea.listaTarea + '</p>'
        );
        return component;
    }

}