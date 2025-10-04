export function getCountryFlagUrl(countryCode: string): string {
  const code = countryCode.toLowerCase();
  return `/icons/flags/${code}.svg`;
}
