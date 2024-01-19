export const parseCurrencyToShow = (amount: number) =>
  amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
