type PageHeaderProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const PageHeader = ({
  title,
  description,
  align = "left",
  className = "",
}: PageHeaderProps) => {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>

      {description && (
        <p className={`text-body mt-4 ${isCentered ? "mx-auto max-w-xl" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
