import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password } = body;

  const hashedPassword: string = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
        phoneNumber: null,
        userType: "Customer",
        balance: 0.0,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
