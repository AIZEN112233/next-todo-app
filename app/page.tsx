// "use client";
import Card from "@/components/Card";
import { Todo } from "@/types";

const fetchTodos = async () => {
    const data = await fetch("http://localhost:3000/api", { cache: "no-cache" });
    return data.json();
};

const page = async () => {
    const data = await fetchTodos();
    console.log(data);
    return (
        <main className="responsive my-30px">
            <div className="text-3xl flex items-center justify-between my-50px">
                <div>Todos</div>
                <div>{data?.data.length}</div>
            </div>
            <div className="grid grid-cols-4 gap-30px">
                {data?.data.map((todo: Todo) => (
                    <Card
                        key={todo.id}
                        title={todo.title}
                        desc={todo.desc}
                        id={todo.id}
                    />
                ))}
            </div>
        </main>
    );
};

export default page;
