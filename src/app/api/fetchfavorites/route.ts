// pages/api/fetchfavorites.ts

import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  userid: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();
    const { userid } = body;

    if (!userid) {
      console.error("User id is missing");
      return NextResponse.error();
    }

    const userDetails = await prisma.user.findFirst({
      where: { id: userid },
    });

    if (!userDetails) {
      console.error("User not found");
      return NextResponse.error();
    }

    return NextResponse.json(userDetails);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.error();
  }
}
