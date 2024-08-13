import prisma from '@/app/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

interface Segments {
    params: {
        id: string;
    }
}

const getTodo = async (id: string): Promise<Todo | null> => {

    const todosById = await prisma.todo.findFirst({ where: { id: id } });
    return todosById;
}

export async function GET(request: Request, { params }: Segments) {

    const todo = await getTodo(params.id)
    if (!todo) {
        return NextResponse.json({ message: `No existe registro con id ${params.id}` }, { status: 404 })
    }

    return NextResponse.json(todo)


}



const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional(),
})
export async function PUT(request: Request, { params }: Segments) {

    const todo = await getTodo(params.id)
    if (!todo) {
        return NextResponse.json({ message: `No existe registro con id ${params.id}` }, { status: 404 })
    }

    try {
        const { complete, description } = await putSchema.validate(await request.json());

        const updatedTodo = await prisma.todo.update({
            where: { id:params.id },
            data: { complete, description }
        })
        return NextResponse.json(updatedTodo)
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}