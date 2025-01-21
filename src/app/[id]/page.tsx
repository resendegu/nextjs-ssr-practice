import { todoProps } from "@/types";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const res = await fetch(`https://678f894b49875e5a1a924e5b.mockapi.io/api/todo/todos/${id}`);
    const todo: todoProps = await res.json();
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold">{todo.title}</h1>
                <p>{todo.desc}</p>
            </div>
        </div>
    )
}

export default page
