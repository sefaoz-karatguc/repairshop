"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  insertTicketSchema,
  type insertTicketSchemaType,
  type selectTicketSchemaType,
} from "@/zod-schemas/ticket";
import { type selectCustomerSchemaType } from "@/zod-schemas/customer";
type Props = {
  ticket?: selectTicketSchemaType;
  customer: selectCustomerSchemaType;
};

const TicketForm = ({ ticket, customer }: Props) => {
  const {} = useForm();
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id || "(New)",
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title || "",
    completed: ticket?.completed || false,
    tech: ticket?.tech || "new-ticket@example.com",
    description: ticket?.description || "",
  };
  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  });
  async function submitForm(data: insertTicketSchemaType) {
    console.log("data: ", data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {ticket?.id ? "Edit" : "New"} Ticket Form
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

export default TicketForm;
