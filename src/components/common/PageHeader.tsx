"use client";

/* eslint-disable react/display-name */
import { PropsWithChildren } from "react";

export const PageHeader = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between gap-4">{children}</div>
  );
};

PageHeader.Heading = ({ children }: PropsWithChildren) => {
  return <h1 className="text-2xl font-bold tracking-tighter">{children}</h1>;
};

PageHeader.Actions = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-4">{children}</div>;
};
