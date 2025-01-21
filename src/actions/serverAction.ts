'use server'
import { revalidateTag } from "next/cache";

export const addTodo = async (e: FormData) => {
    const title = e.get("title")?.toString()
    const desc = e.get("desc")?.toString()
    if (!title || !desc) return;
    const newTodo = {
        title,
        desc,
    }
    await fetch('https://678f894b49875e5a1a924e5b.mockapi.io/api/todo/todos', {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json",
        }
    })
    revalidateTag('todos')
}
