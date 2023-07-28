import React, { ElementType, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  variant: Variant;
  children: React.ReactNode;
  as?: ElementType;
}

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "span";

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  span: "span",
};

const sizes: Record<Variant, string> = {
  h1: `text-[36px] font-bold sm:text-[72px] leading-[150%] tracking-[-2.88px]`,
  h2: `text-[28px] sm:text-[40px] leading-[150%] tracking-[-1.2px]`,
  h3: `text-[24px] sm:text-[36px] leading-[150%] tracking-[-1.08px]`,
  h4: `text-base sm:text-[28px] leading-[150%] tracking-[-0.64px] font-semibold`,
  p: `text-base sm:text-[20px] leading-[150%] tracking-[-0.4px]`,
  span: `text-base sm:text-[18px] leading-[150%] tracking-[-0.4px]`,
};

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  const classes = `${sizeClasses} ${className}`;

  return <Tag className={`${classes} `}>{children}</Tag>;
};
