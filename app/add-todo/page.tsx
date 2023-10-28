"use client";
import axios from "axios";
import { useState } from "react";

const page = () => {
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const submit = async (e: any) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, desc }),
        });
        setDesc("");
        setTitle("");
    };
    return (
        <main className="my-60px responsive">
            <form
                className="flex flex-col gap-50px items-center"
                onSubmit={submit}>
                <input
                    type="text"
                    placeholder="add todo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-transparent px-8 py-3"
                />
                <textarea
                    cols={30}
                    rows={5}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="bg-transparent border-1 border-gray rounded-xl"
                />
                <button
                    type="submit"
                    className="border-1 border-gray px-7 py-2 rounded-2xl">
                    submit
                </button>
            </form>
        </main>
    );
};

export default page;
