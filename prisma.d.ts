import { Prisma } from "@prisma/client";

declare module "@prisma/client" {
  interface UserCreateInput {
    hashedPassword?: string;
  }
}
