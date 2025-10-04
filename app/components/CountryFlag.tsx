import { getCountryFlagUrl } from "../../utils/getCountryFlags";

export function CountryFlag(countryCode: string) {
  const url = getCountryFlagUrl(countryCode);

  return (
    <img
      src={url}
      alt={`${countryCode} flag`}
      className='flag-icon'
    />
  );
}
