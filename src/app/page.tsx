import { addTodo } from "@/actions/serverAction";
import Button from "@/components/Button";
import { todoProps } from "@/types";
import Link from "next/link";
export default async function Home() {
  const res = await fetch('https://678f894b49875e5a1a924e5b.mockapi.io/api/todo/todos', {
    next: {
      tags: ["todos"]
    }
  });
  const todos: todoProps[] = await res.json();


  return (

    <div className="text-center p-10 w-full">
      <form action={addTodo} className="grid grid-cols-3 gap-3 my-5">
        <input type="text" name="title" className=" border border-gray-400 rounded-lg px-3" placeholder="Enter Title" />
        <input type="text" name="desc" className=" border border-gray-400 rounded-lg px-3" placeholder="Enter Description" />
        <Button text="Add Todo" />
      </form>
      <h1 className="text-4xl font-bold mt-10">Todos List</h1>
      <div className="flex flex-wrap gap-10 mt-4">
        {
          todos?.length === 0 ? (<div>loading...</div>) :
            (todos?.map((todo: todoProps) => (
              <Link key={todo.id} href={`/${todo.id}`} className="text-blue-700 hover:text-blue-500 text-lg font-medium text-nowrap">
                {todo.title}
              </Link>
            )))

        }
      </div>
    </div>

  );
}
