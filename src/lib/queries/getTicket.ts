import { db } from "@/db";
import { tickets } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getTicket(id: number) {
  try {
    const ticket = await db.select().from(tickets).where(eq(tickets.id, id));
    return ticket[0];
  } catch (error) {
    console.log("get ticket failed: ", error);
    return null;
  }
}
