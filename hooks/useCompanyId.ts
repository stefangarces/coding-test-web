import { useState, useEffect } from 'react';
import { useCompanies } from '../hooks/useCompanies'; // adjust the path as needed
import { Company } from '../types/company';

export function useCompanyById(targetCompanyId: number): { company: Company | null, loading: boolean, error: string | null } {
  const { companies, loading, error } = useCompanies();
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (!loading && !error && companies.length > 0) {
      const found = companies.find((c: Company) => c.companyId === targetCompanyId) || null;
      setCompany(found);
    }
  }, [companies, loading, error, targetCompanyId]);

  return { company, loading, error };
}
