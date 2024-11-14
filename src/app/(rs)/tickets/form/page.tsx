import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import * as Sentry from "@sentry/nextjs";
import TicketForm from "./TicketForm";
export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Tickt Id or Customer Id required to load ticket form!
          </h2>
          <BackButton title="Go Back" variant="outline" />
        </>
      );
    }
    if (customerId) {
      const customer = await getCustomer(Number(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id #{customerId} not found
            </h2>
            <BackButton title="Go Back" variant="outline" />
          </>
        );
      }
      return <TicketForm customer={customer} />;
    }

    if (ticketId) {
      const ticket = await getTicket(Number(ticketId));
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket Id #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="outline" />
          </>
        );
      }
      const customer = await getCustomer(ticket.customerId);
      return <TicketForm customer={customer!} ticket={ticket} />;
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
