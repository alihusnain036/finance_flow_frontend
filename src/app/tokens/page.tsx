import { Metadata } from "next";
import TokensTable from "./_components/DataTables";

export const metadata: Metadata = {
  title: "Tokens",
  description: "Every coin you can buy, hold and trade on FinanceFlow.",
};

const page = () => {
  return <TokensTable />;
};

export default page;
