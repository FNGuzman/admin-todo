'use client'
import { useRouter } from "next/navigation";
// import { Todo } from "../interfaces/todo.interface";
import { TodosItem } from "./TodosItem";
import * as todosApi from '@/todos/helpers/todos'
import { Todo } from "@prisma/client";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {
    const route = useRouter();

    // const toggleTodo = async (id: string, complete: boolean) => {
    //     const updatedTodo = await todosApi.updateTodo(id, complete);
    //     console.log(updatedTodo)
    //     route.refresh();
    // }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos.map(todo => (
                    <TodosItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                    />
                ))
            }
        </div>
    );
};
