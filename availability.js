// Aggiorna qui prezzi e periodi occupati. Formato date: AAAA-MM-GG.
window.BOOKING_CONFIG = {
  currency: 'CHF',
  cleaningFee: 90,
  minimumNights: 2,
  rates: [
    { months: [12, 1, 2, 3, 7, 8], nightly: 175 },
    { months: [4, 5, 6, 9, 10, 11], nightly: 135 }
  ],
  unavailableRanges: [
    // Esempio: { start: '2026-08-08', end: '2026-08-15' }
  ]
};
