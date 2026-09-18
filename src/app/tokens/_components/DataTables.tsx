import type { IconType } from "react-icons";
import Glow from "@/app/_components/Glow";
import PageHeader from "@/app/_components/PageHeader";
import { SiBitcoin, SiEthereum, SiLitecoin, SiSolana } from "react-icons/si";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Token = {
  name: string;
  ticker: string;
  icon: IconType;
  /** Brand colour, used for the icon and its halo. */
  color: string;
  description: string;
  marketCap: string;
  volume: string;
  website: string;
};

const tokens: Token[] = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    icon: SiBitcoin,
    color: "#f7931a",
    description:
      "The original cryptocurrency, and still the largest by market cap.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://bitcoin.org",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    icon: SiEthereum,
    color: "#8ba3f7",
    description:
      "A programmable blockchain that runs smart contracts and apps.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://ethereum.org",
  },
  {
    name: "Litecoin",
    ticker: "LTC",
    icon: SiLitecoin,
    color: "#7aa2dd",
    description: "A faster, lower-fee alternative built on Bitcoin's design.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://litecoin.org",
  },
  {
    name: "Solana",
    ticker: "SOL",
    icon: SiSolana,
    color: "#14f195",
    description:
      "A high-throughput network built for low-cost, high-speed apps.",
    marketCap: "$252,844,036,453 USD",
    volume: "$30,504,879,301 USD",
    website: "https://solana.com",
  },
];

const marketStats = [
  { value: "$1.42T", label: "Total market cap" },
  { value: "$68.9B", label: "24h volume" },
  { value: "350+", label: "Tokens listed" },
  { value: "0.10%", label: "Trading fee" },
];

const TokenIcon = ({ token }: { token: Token }) => {
  const Icon = token.icon;
  return (
    <span
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full ring-1 ring-white/15"
      style={{ backgroundColor: `${token.color}1f`, color: token.color }}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
};

const Ticker = ({ value }: { value: string }) => (
  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] uppercase tracking-wide text-white/80">
    {value}
  </span>
);

export default function TokensTable() {
  return (
    <section className="relative isolate">
      <Glow className="left-1/2 -top-[15vh] h-[min(900px,120vw)] w-[min(900px,120vw)] -translate-x-1/2" />

      <div className="container-page section">
        <PageHeader
          align="center"
          className="mb-12 md:mb-16"
          title="Tokens"
          description="Every coin you can buy, hold and trade on FinanceFlow, with live market size and daily volume."
        />

        <dl className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {marketStats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-3xl bg-surface-2/40 p-5 text-center ring-1 ring-white/10 transition-colors hover:ring-white/25"
            >
              <dt className="text-xl font-bold tabular-nums sm:text-2xl">
                {value}
              </dt>
              <dd className="mt-1 text-[11px] uppercase tracking-widest text-white/50">
                {label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Phones: one card per token, so nothing is cut off. */}
        <ul className="grid gap-4 md:hidden">
          {tokens.map((t) => (
            <li
              key={t.ticker}
              className="rounded-3xl bg-surface-2/40 p-5 ring-1 ring-white/10 transition-colors hover:ring-white/25"
            >
              <div className="flex items-center gap-3">
                <TokenIcon token={t} />
                <span className="font-medium text-white">{t.name}</span>
                <Ticker value={t.ticker} />
              </div>

              <p className="mt-3 text-sm leading-6 text-white/70">
                {t.description}
              </p>

              <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-white/50">
                    Market Cap
                  </dt>
                  <dd className="mt-1 tabular-nums text-white/85">
                    {t.marketCap}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-white/50">
                    Volume
                  </dt>
                  <dd className="mt-1 tabular-nums text-white/85">
                    {t.volume}
                  </dd>
                </div>
              </dl>

              <a
                href={t.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
              >
                Visit Website
              </a>
            </li>
          ))}
        </ul>

        {/* Tablet and up: the full table. */}
        <div className="hidden overflow-hidden rounded-3xl bg-surface-2/40 ring-1 ring-white/10 md:block">
          <Table className="w-full">
            <TableHeader
              className="
              border-b border-white/10 bg-white/5
              [&>tr]:border-0
              [&>tr>th]:px-6
              [&>tr>th]:py-4
              [&>tr>th]:text-[11px]
              [&>tr>th]:uppercase
              [&>tr>th]:tracking-widest
              [&>tr>th]:text-white/50
            "
            >
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[28%] text-left">Name</TableHead>
                <TableHead className="w-[30%] text-left">Description</TableHead>
                <TableHead className="w-[17%] text-right">Market Cap</TableHead>
                <TableHead className="w-[15%] text-right">Volume</TableHead>
                <TableHead className="w-[10%] pr-6 text-right">
                  Website
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody
              className="
              divide-y divide-white/10
              [&>tr>td]:px-6
              [&>tr>td]:py-6
            "
            >
              {tokens.map((t) => (
                <TableRow
                  key={t.ticker}
                  className="border-0 transition-colors hover:bg-white/5"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <TokenIcon token={t} />
                      <span className="text-sm font-medium text-white lg:text-base">
                        {t.name}
                      </span>
                      <Ticker value={t.ticker} />
                    </div>
                  </TableCell>

                  <TableCell className="align-middle">
                    <p className="max-w-[44ch] text-sm leading-6 text-white/70">
                      {t.description}
                    </p>
                  </TableCell>

                  <TableCell className="text-right text-sm font-medium tabular-nums text-white/80">
                    {t.marketCap}
                  </TableCell>

                  <TableCell className="text-right text-sm font-medium tabular-nums text-white/80">
                    {t.volume}
                  </TableCell>

                  <TableCell className="pr-6 text-right">
                    <a
                      href={t.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
                    >
                      Visit Website
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
