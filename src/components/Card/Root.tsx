import {  HtmlHTMLAttributes, ReactNode } from "react";

export interface RootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Root(props: RootProps) {
  return (
    <div {...props} className="bg-app-gray-100 rounded p-4 mt-2" />
  )
}