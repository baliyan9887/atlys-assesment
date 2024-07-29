interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  padding?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  maxWidth = "xl",
  padding = "md",
}) => {
  const maxWidthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  }[maxWidth];

  const paddingClass = {
    xs: "p-2",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  }[padding];

  return (
    <div
      className={`container mx-auto ${maxWidthClass} ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
