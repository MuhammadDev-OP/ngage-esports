import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb"; // Import User model if available
import { User } from "@prisma/client";

interface CreateUserInput {
  username: string;
  email: string;
  hashedPassword: string;
  phoneNumber?: string | null;
  userType?: string;
  balance?: number;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password } = body;

  const hashedPassword: string = await bcrypt.hash(password, 12);

  const userData: CreateUserInput = {
    username,
    email,
    hashedPassword,
    phoneNumber: null, // Example
    userType: "Customer", // Example
    balance: 0.0, // Example
  };

  try {
    const user = await prisma.user.create({
      data: userData as User | CreateUserInput, // Cast to User or CreateUserInput
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
