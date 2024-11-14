import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    // Edit customer form
    console.log("customerId: ", customerId);

    if (customerId) {
      const customer = await getCustomer(Number(customerId));
      console.log("customer: ", customer);

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
      return <CustomerForm customer={customer} />;
    } else {
      return <CustomerForm />;
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);

      throw error;
    }
  }
}
