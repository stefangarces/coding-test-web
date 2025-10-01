"use client";

import { Inter } from "@next/font/google";
import { useCompanies } from "../hooks/useCompanies";
import { Company } from "../types/company";

const inter = Inter({ subsets: ["latin"] });

function CompanyCard({ company }: { company: Company }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      border: '1px solid #ccc',
      padding: '0.5rem',
      borderRadius: '8px',
    }}>
      <img
        src={company.logoLightUrl}
        alt={company.companyName}
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'contain',
        }}
      />
      <div>
        <h3 style={{ margin: 0 }}>{company.displayName}</h3>
        <p style={{ margin: 0 }}>{company.description}</p>
        <a href={company.infoUrl} target="_blank" rel="noopener noreferrer">
          More info
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const { companies, loading, error } = useCompanies();

  if (loading) return <div>loading...</div>
  if (error) return <div>error...</div>


  return (
    <main>
      <h2 className={inter.className}>Quartr</h2>
      <p className={inter.className}>Trending companies</p>
      {companies.map((company: any) => (
        <CompanyCard key={company.companyId} company={company} />
      ))}
    </main>
  );
}
