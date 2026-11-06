// Single source of truth for workshop prices. Rendered on the page and in the JSON-LD.

export interface FormatItem {
  included: boolean;
  text: string;
}

export interface WorkshopFormat {
  id: string;
  mode: string;
  duration: string;
  /** Net price in euros, VAT excluded */
  price: number;
  items: FormatItem[];
}

export const MAX_PARTICIPANTS = 10;

export const formats: WorkshopFormat[] = [
  {
    id: 'remote-halbtag',
    mode: 'Remote',
    duration: 'halber Tag',
    price: 1500,
    items: [
      { included: true, text: 'Einstieg: Konzepte, Tools, erste Schritte' },
      { included: true, text: 'Schulungsunterlagen' },
      { included: false, text: 'Keine Begleitung bei der Integration' },
    ],
  },
  {
    id: 'vor-ort-1-tag',
    mode: 'Vor Ort',
    duration: '1 Tag',
    price: 3500,
    items: [
      { included: true, text: 'Grundlagen und erste Schritte an Ihrem Code' },
      { included: true, text: 'Schulungsunterlagen' },
      { included: true, text: 'Anreise in Deutschland inklusive' },
      { included: true, text: 'Begleitung bei der Integration' },
    ],
  },
  {
    id: 'vor-ort-2-tage',
    mode: 'Vor Ort',
    duration: '2 Tage',
    price: 6000,
    items: [
      { included: true, text: 'Grundlagen und Tiefe, vom Ticket bis zur Freigabe durch einen Menschen' },
      { included: true, text: 'Mehr Zeit an den echten Herausforderungen Ihres Teams' },
      { included: true, text: 'Schulungsunterlagen' },
      { included: true, text: 'Anreise in Deutschland inklusive' },
      { included: true, text: 'Begleitung bei der Integration' },
    ],
  },
];

export function formatEuro(amount: number): string {
  return `${new Intl.NumberFormat('de-DE').format(amount)} €`;
}
