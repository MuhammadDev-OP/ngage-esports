import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { User } from ".prisma/client"; // Adjust import based on Prisma setup

interface CreateUserInput {
  username: string;
  email: string;
  hashedPassword: string; // Include hashedPassword in interface
  phoneNumber: string | null;
  userType: string;
  balance: number;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password } = body;

  const hashedPassword: string = await bcrypt.hash(password, 12);

  try {
    const userData: CreateUserInput = {
      username,
      email,
      hashedPassword,
      phoneNumber: null,
      userType: "Customer",
      balance: 0.0,
    };

    // Since Prisma may not directly accept hashedPassword, we handle it separately
    const user = await prisma.user.create({
      data: userData as User, // Type assertion to User type from Prisma
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
