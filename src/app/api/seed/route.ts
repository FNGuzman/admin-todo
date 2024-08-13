import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {


    await prisma.todo.deleteMany();//delete * from todo

    await prisma.todo.createMany({
        data: [
            {
                description: 'Piedra del alma', complete: true
            },
            {
                description: 'Piedra del Poder'
            },
            {
                description: 'Piedra del Tiempo'
            },
            {
                description: 'Piedra del Espacio'
            },
        ]
    })

    return NextResponse.json({
        message: 'Seed Execute'
    })



}