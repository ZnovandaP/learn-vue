const currencyUSD = (nominal: number) => new Intl.NumberFormat(
  'en-US',
  {
    currency: 'USD',
    maximumFractionDigits: 2,
    style: 'currency',
  },
).format(nominal);

export default currencyUSD;
