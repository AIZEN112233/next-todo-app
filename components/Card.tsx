"use client";

import { CardProps } from "@/types";
import React from "react";

const Card = ({ title, desc, id }: CardProps) => {
    const handle = async () => {
        await fetch(`http://localhost:3000/api/${id}`, {
            method: "delete",
        });
    };

    return (
        <div
            onClick={handle}
            className="w-20rem h-20rem border-1 border-gray rounded-xl flex flex-col text-center justify-around">
            <strong className="text-2xl">{title}</strong>
            <p className="text-base font-300">{desc}</p>
        </div>
    );
};

export default Card;
