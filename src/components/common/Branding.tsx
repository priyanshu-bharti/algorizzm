"use client";

import { Infinity } from "lucide-react";
import Link from "next/link";

interface BrandingProps {
  hideLogo?: boolean;
  hideBrandName?: boolean;
}

export const Branding = ({
  hideLogo = false,
  hideBrandName = false,
}: BrandingProps) => {
  return (
    <Link
      href="/"
      className="flex items-center justify-start gap-1 text-2xl font-bold tracking-tighter shadow-violet-500/25 text-shadow-lg hover:scale-105 ease-in-out transition-transform"
    >
      {!hideLogo && (
        <Infinity className="aspect-square h-full w-10 stroke-violet-700 shadow-violet-500/25 drop-shadow-lg dark:stroke-violet-300" />
      )}
      {!hideBrandName && <span>Algorizzm</span>}
    </Link>
  );
};
