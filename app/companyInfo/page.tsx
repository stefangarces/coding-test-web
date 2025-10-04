"use client";

import { useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { useCompanies } from '../../hooks/useCompanies';
import { CountryFlag } from '../components/CountryFlag';
import { Company } from '../../types/company';

export default function CompanyInfo() {
  const { companies, loading, error } = useCompanies();
  const router = useRouter();
  const searchParams = useSearchParams();
  const companyIdParam = searchParams.get('companyId');

  const targetCompanyId = companyIdParam ? parseInt(companyIdParam, 10) : null;

  const selectedCompany: Company | undefined = useMemo(() => {
    if (targetCompanyId !== null) {
      return companies.find((c: Company) => c.companyId === targetCompanyId);
    }
    return undefined;
  }, [companies, targetCompanyId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedCompany) return <div>Company not found</div>;

  return (
    <div className="company-info-container">
      <ChevronLeft
        onClick={() => router.push('/')}
        className="company-back-button"
      />
      <h1 className="company-name">{selectedCompany.displayName}</h1>

      <div
        className="logo-container"
        style={{
          backgroundColor: selectedCompany.colorSettings.brandColor,
        }}
      >
        <img
          src={selectedCompany.logoLightUrl}
          alt={selectedCompany.companyName}
          className="logo-image"
        />
      </div>

      <div className="spacing" />

      <div className="info-section">
        <p>
          <span className="info-label">Country:</span> {CountryFlag(selectedCompany.companyCountry)}
        </p>
        <p>
          <span className="info-label">Ticker:</span> {selectedCompany.companyTicker}
        </p>
      </div>

      <div className="spacing" />

      <div className="info-section">
        <p>
          <span className="info-label">Description:</span> {selectedCompany.description}
        </p>
      </div>

      <div className="spacing" />

      <div className="info-section">
        <p>
          <span className="info-label">Reporting Currency:</span> {selectedCompany.reportingCurrency}
        </p>
        <p>
          <span className="info-label">Info URL:</span>{' '}
          <a href={selectedCompany.infoUrl} target="_blank" rel="noopener noreferrer">
            {selectedCompany.infoUrl}
          </a>
        </p>
        <p>
          <span className="info-label">Live URL:</span>{' '}
          <a href={selectedCompany.liveUrl} target="_blank" rel="noopener noreferrer">
            {selectedCompany.liveUrl}
          </a>
        </p>
      </div>

      {selectedCompany.events && selectedCompany.events.length > 0 && (
        <div className="events-section">
          <h2>Events</h2>
          {selectedCompany.events.map((event) => (
            <div key={event.eventId} className="event-card">
              <p><span className="info-label">Title:</span> {event.eventTitle}</p>
              <p><span className="info-label">Date:</span> {new Date(event.eventDate).toLocaleString()}</p>
              <p><span className="info-label">Fiscal Period:</span> {event.fiscalPeriod}</p>
              <p><span className="info-label">Fiscal Year:</span> {event.fiscalYear}</p>
              {event.reportUrl && (
                <p>
                  <span className="info-label">
                    <a
                      href={event.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      Report: <ExternalLink size={16} />
                    </a>
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
