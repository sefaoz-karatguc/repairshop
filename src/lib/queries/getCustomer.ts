import { db } from "@/db";
import { customers } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function getCustomer(id: number) {
  try {
    const customer = await db
      .select()
      .from(customers)
      .where(and(eq(customers.id, id), eq(customers.active, true)));
    return customer[0];
  } catch (error) {
    console.log("get customer failed: ", error);
    return null;
  }
}
