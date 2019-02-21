import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, from, throwError, empty } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Component onInit returns the expected todos', () => {
    const todos = [1, 2, 3];
    spyOn(service, "getTodos").and.callFake(() => {
      return from([todos]);
    })

    component.ngOnInit();

    expect(component.todos).toBe(todos)
  });

  it('Add a todo calls the service method', () => {
    let spy = spyOn(service, 'add').and.returnValue(empty());

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('Add a todo successfully results in adding it to the component todos list', () => {
    const todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(from([todo]));

    component.add()

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('Add a todo failed results in a error message in the component message filed', () => {
    const error = 'Add todo failed';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('Should call service to delete the todo item if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('Should call service to delete the todo item if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('Should NOT call service to delete the todo item if user doesnt confirm', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete');

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  })

});