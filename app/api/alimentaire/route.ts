import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { firstName, lastName, size, age, weight } = body;

    const alimentaire = await prisma.alimentaire.create({
      data: {
        firstName,
        lastName,
        size: parseInt(size),
        age: parseInt(age),
        weight: parseFloat(weight),
        userId: session.user.id,
      },
    });

    return NextResponse.json(alimentaire);
  } catch (error) {
    console.error("Error creating alimentaire:", error);
    return NextResponse.json(
      { error: "Failed to create alimentaire" },
      { status: 500 }
    );
  }
} 