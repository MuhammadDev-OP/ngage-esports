import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

interface RequestBody {
  email: string;
  username: string;
  password: string;
}

interface UserCreateInputExtended extends User {
  hashedPassword: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await req.json();
    const { email, username, password } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword: string = await bcrypt.hash(password, 12);

    const newUser = (await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      } as UserCreateInputExtended,
    })) as User;

    return NextResponse.json({
      user: newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
