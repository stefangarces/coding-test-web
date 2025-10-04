import { useRouter } from "next/navigation";
import { Company } from "../../types/company";
import { ChevronRight } from 'lucide-react';

export function CompanyCard({ company }: { company: Company }) {
  const router = useRouter();
  const getCompanyInfo = () => {
    router.push(`/companyInfo?companyId=${company.companyId}`);
  };

  return (
    <div
      onClick={getCompanyInfo}
      className="hover-push"
    >
      <div style={{
        backgroundColor: company.colorSettings.brandColor,
      }} className='company-logo-background'>
        <img
          src={company.logoLightUrl}
          alt={company.companyName}
          className="company-logo-img"
        />
      </div>
      <div>
        <h3>{company.displayName}</h3>
        <p className="company-description">{company.description}</p>
      </div>
      <ChevronRight
        size={24}
        style={{ flexShrink: 0 }}
      />
    </div>
  );
}

