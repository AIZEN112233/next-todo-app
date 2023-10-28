import prisma from "@/utils";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: any) {
    const id = context.params.id;
    await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ text: "deleted" });
}
