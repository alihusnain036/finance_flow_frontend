"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import { cn } from "@/lib/utils";
import cover1 from "@/assets/images/blog/cover-1.png";
import cover2 from "@/assets/images/blog/cover-2.png";
import cover3 from "@/assets/images/blog/cover-3.png";
import cover4 from "@/assets/images/blog/cover-4.png";
import cover5 from "@/assets/images/blog/cover-5.png";
import cover6 from "@/assets/images/blog/cover-6.png";

const CATEGORIES = ["All", "Apps", "Products", "Tutorial"];

export const posts = [
  {
    id: 1,
    title: "The Basics about Cryptocurrency",
    description:
      "A plain-English introduction to how coins, wallets and exchanges actually fit together.",
    category: "Tutorial",
    date: "August 2, 2021",
    author: "Alex Turner",
    avatar: "https://i.pravatar.cc/80?img=12",
    image: cover1,
  },
  {
    id: 2,
    title: "How to read a candlestick chart",
    description:
      "Open, high, low and close: what each candle tells you, and what it does not.",
    category: "Tutorial",
    date: "August 9, 2021",
    author: "Sophie Moore",
    avatar: "https://i.pravatar.cc/80?img=45",
    image: cover2,
  },
  {
    id: 3,
    title: "Introducing instant withdrawals",
    description:
      "Cash out to your bank in under a minute, any day of the week, including weekends.",
    category: "Products",
    date: "August 16, 2021",
    author: "Priya Nair",
    avatar: "https://i.pravatar.cc/80?img=29",
    image: cover3,
  },
  {
    id: 4,
    title: "What's new in the mobile app",
    description:
      "Home screen widgets, Face ID sign-in and a redesigned portfolio tab.",
    category: "Apps",
    date: "August 23, 2021",
    author: "Marcus Bell",
    avatar: "https://i.pravatar.cc/80?img=52",
    image: cover4,
  },
  {
    id: 5,
    title: "Keeping your wallet secure",
    description:
      "Seed phrases, hardware keys and the habits that stop most account takeovers.",
    category: "Tutorial",
    date: "September 1, 2021",
    author: "John Carter",
    avatar: "https://i.pravatar.cc/80?img=13",
    image: cover5,
  },
  {
    id: 6,
    title: "Staking rewards, explained",
    description:
      "Where daily rewards come from, how they are calculated, and what the risks are.",
    category: "Products",
    date: "September 8, 2021",
    author: "Alex Turner",
    avatar: "https://i.pravatar.cc/80?img=12",
    image: cover6,
  },
  {
    id: 7,
    title: "Desktop terminal beta is open",
    description:
      "Multi-chart layouts, keyboard order entry and hotkeys for power traders.",
    category: "Apps",
    date: "September 15, 2021",
    author: "Sophie Moore",
    avatar: "https://i.pravatar.cc/80?img=45",
    image: cover2,
  },
  {
    id: 8,
    title: "Understanding trading fees",
    description:
      "Maker, taker and spread: the three numbers that decide what a trade really costs.",
    category: "Products",
    date: "September 22, 2021",
    author: "Priya Nair",
    avatar: "https://i.pravatar.cc/80?img=29",
    image: cover1,
  },
];

export default function LatestPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) =>
    category === "All" ? true : post.category === category
  );

  const postsPerPage = 6;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="container-page section">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="heading-section">Latest Posts</h2>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1);
              }}
              className={cn(
                "cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors",
                category === cat
                  ? "bg-blue text-white"
                  : "bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => <PostCard key={post.id} {...post} />)
        ) : (
          <div className="col-span-full flex items-center justify-center py-16">
            <p className="text-xl font-semibold text-white/70">
              No Results Found
            </p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={cn(
              "h-9 w-9 cursor-pointer rounded-full bg-surface-2/60 text-sm text-white ring-1 ring-white/10 transition hover:bg-surface-2",
              currentPage === 1 && "cursor-not-allowed opacity-50"
            )}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={cn(
                  "cursor-pointer px-1 text-base font-medium transition",
                  page === currentPage
                    ? "text-blue-500"
                    : "text-white/60 hover:text-white"
                )}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={cn(
              "h-9 w-9 cursor-pointer rounded-full bg-blue text-sm text-white transition hover:bg-[#031FB4]",
              currentPage === totalPages && "cursor-not-allowed opacity-50"
            )}
          >
            &gt;
          </button>
        </nav>
      )}
    </section>
  );
}
