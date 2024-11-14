import { customers } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.firstName.min(1, "First name is required"),
  lastName: (schema) => schema.lastName.min(1, "Last name is required"),
  address1: (schema) => schema.address1.min(15, "Address section is required"),
  city: (schema) => schema.city.min(15, "Address section is required"),
  email: (schema) => schema.email.email("Invalid email address"),
  zip: (schema) => schema.zip.regex(/^\d{5}/, "Invalid Zip Code"),
  phone: (schema) =>
    schema.phone.regex(
      /^\d{2}-\d{3}-\d{3}-\d{4}/,
      "Invalid Phone Number Use XX-XXX-XXXX format."
    ),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
