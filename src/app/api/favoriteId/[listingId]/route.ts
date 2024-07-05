import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
      throw new Error("Invalid ID");
    }

    // Fetch user from database to get current favoriteIds
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.error();
    }

    // Ensure favoriteIds is an array and add the new listingId
    const favoriteIds = Array.isArray(user.favoriteIds)
      ? [...user.favoriteIds, listingId]
      : [listingId];

    const userUpdate = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        favoriteIds,
      },
    });

    return NextResponse.json(userUpdate);
  } catch (error) {
    console.error("Something Went Wrong", error);
    return NextResponse.error();
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
      throw new Error("Invalid ID");
    }

    // Fetch user from database to get current favoriteIds
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.error();
    }

    // Ensure favoriteIds is an array and remove the listingId
    const favoriteIds = Array.isArray(user.favoriteIds)
      ? user.favoriteIds.filter((id) => id !== listingId)
      : [];

    const userUpdate = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        favoriteIds,
      },
    });

    return NextResponse.json(userUpdate);
  } catch (error) {
    console.error("Something Went Wrong", error);
    return NextResponse.error();
  }
}
