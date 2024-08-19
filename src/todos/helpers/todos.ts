import { Todo } from "../interfaces/todo.interface";

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const body = { complete: complete };

    const dbTodo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    console.log({ dbTodo })
    return dbTodo;

}

export const createTodo = async (description: string): Promise<Todo> => {

    const body = { description: description };

    const dbNewTodo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    console.log({ dbNewTodo })
    return dbNewTodo;

}