import Image from "next/image";

const teamMembers = [
  { name: "John Carter", title: "CEO & Co-Founder", photo: 12, highlighted: true },
  { name: "Sophie Moore", title: "Community Lead", photo: 45, highlighted: false },
  { name: "Alex Turner", title: "Operations", photo: 33, highlighted: false },
  { name: "Priya Nair", title: "Head of Engineering", photo: 29, highlighted: false },
  { name: "Marcus Bell", title: "Customer Support", photo: 52, highlighted: false },
];

const OurTeam = () => {
  return (
    <section className="container-page section">
      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="heading-section">Our Team</h2>
        <p className="text-body max-w-md">
          The people behind the product, spread across six countries and one
          very busy support channel.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {teamMembers.map((member) => (
          <li
            key={member.name}
            className={`group overflow-hidden rounded-3xl bg-surface-2/40 transition-transform duration-300 hover:-translate-y-1 ${
              member.highlighted
                ? "ring-2 ring-blue"
                : "ring-1 ring-white/10 hover:ring-white/25"
            }`}
          >
            <div className="relative m-2 overflow-hidden rounded-xl">
              <Image
                src={`https://i.pravatar.cc/400?img=${member.photo}`}
                alt={member.name}
                width={400}
                height={520}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-70"
              />
            </div>

            <div className="px-4 pb-4">
              <h3 className="text-[13px] font-semibold uppercase">
                {member.name}
              </h3>
              <p className="text-[12px] text-white/60">{member.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurTeam;
