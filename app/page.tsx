"use client";

import { Inter } from "@next/font/google";
import { useCompanies } from "../hooks/useCompanies";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { companies, loading, error } = useCompanies();

  console.log({ ...companies });

  return (
    <main>
      <h2 className={inter.className}>Quartr</h2>
      <p className={inter.className}>Trending companies</p>
      <p>{}</p>
    </main>
  );
}
