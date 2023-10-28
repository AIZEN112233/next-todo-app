import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await prisma.todo.findMany();

    return NextResponse.json({ data });
}

export async function POST(req: Request) {
    const { title, desc } = await req.json();
    console.log(title);
    await prisma.todo.create({ data: { title, desc } });
    return NextResponse.json({ text: "added" });
}
