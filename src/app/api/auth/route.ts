import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!user || !user.hashedPassword) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.hashedPassword
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user, message: "Login successful" });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
