"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "@/app/_components/Button";
import Glow from "@/app/_components/Glow";
import styles from "./TestimonialCarousel.module.css";

const testimonials = [
  {
    quote:
      "I moved my whole portfolio across in an afternoon. The fees are the lowest I have found anywhere.",
    name: "John Carter",
    role: "Role, Company",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "The charts are quick enough to trade on seriously, but the app is still simple enough for my first coin.",
    name: "Sarah Doe",
    role: "Developer, Company",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "Support answered in under two minutes, at midnight. That is why we moved the company treasury here.",
    name: "Jackson Smith",
    role: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "Daily rewards on tokens I was holding anyway. It adds up to more than my old savings account.",
    name: "Maria Lopez",
    role: "Investor",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    quote:
      "Syncing between my phone and desktop just works, so I can start an order in one place and finish in another.",
    name: "David Chen",
    role: "Product Lead",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="relative isolate">
      <Glow className="left-1/2 top-40 h-[min(400px,80vw)] w-[min(950px,130vw)] -translate-x-1/2" />

      <div className="container-page pt-16 md:pt-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="heading-section">What our users say?</h2>
          <Button content="Download App" isBlue />
        </div>
      </div>

      <div className={`${styles.carWrapper} pb-4`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 12 },
            640: { slidesPerView: 1.6, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className={styles.swiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <figure className={styles.card}>
                <blockquote className={styles.quote}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className={styles.user}>
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    width={45}
                    height={45}
                  />
                  <div>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.role}>{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
