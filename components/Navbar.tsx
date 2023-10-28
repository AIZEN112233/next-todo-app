import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="responsive h-80px">
            <div className="flex justify-between items-center h-full">
                <Link
                    href="/"
                    className="text-3xl font-600 text-cyan">
                    TODO APP
                </Link>
                <div>
                    <ul className="flex gap-50px text-xl font-500">
                        <li className="hover:scale-110 hover:text-cyan duration-400">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:scale-110 hover:text-cyan duration-400">
                            <Link href="/add-todo">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
