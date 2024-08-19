'use client'

import { useEffect } from "react";

export default function RestTodosPage() {
    useEffect(() => {
        fetch('/api/todos')
            .then(resp => resp.json())
            .then(console.log)


    }, []);

    return (
        <div>
            <h1>Hello Page RestTodosPage</h1>
        </div>
    );
}