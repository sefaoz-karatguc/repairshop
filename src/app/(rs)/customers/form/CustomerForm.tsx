"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  insertCustomerSchema,
  type insertCustomerSchemaType,
  type selectCustomerSchemaType,
} from "@/zod-schemas/customer";
type Props = {
  customer?: selectCustomerSchemaType;
};

const CustomerForm = ({ customer }: Props) => {
  const {} = useForm();
  const defaultValues: insertCustomerSchemaType = {
    id: customer?.id || 0,
    firstName: customer?.firstName || "",
    lastName: customer?.lastName || "",
    address1: customer?.address1 || "",
    address2: customer?.address2 || "",
    city: customer?.city || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
    notes: customer?.notes || "",
    state: customer?.state || "",
    zip: customer?.zip || "",
  };
  const form = useForm<insertCustomerSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  });
  async function submitForm(data: insertCustomerSchemaType) {
    console.log("data: ", data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {customer?.id ? "Edit" : "New"} Customer Form
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
};

export default CustomerForm;
