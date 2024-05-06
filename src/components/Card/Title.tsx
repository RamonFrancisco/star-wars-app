import { HtmlHTMLAttributes, ReactNode } from "react";

export interface TitleProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Title(props: TitleProps) {
  return (
    <div
      {...props}
      className="flex items-center mb-2 w-full border-b-2 border-app-gray-500 pb-2"
    />
  );
}
