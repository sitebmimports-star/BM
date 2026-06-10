export type ProductCondition = 'Novo' | 'Seminovo';

export interface Product {
  id: string;
  name: string;
  category: 'iphone' | 'macbook' | 'ipad' | 'watch' | 'airpods' | 'acessorios';
  condition: ProductCondition;
  capacity?: string;
  batteryHealth?: string; // e.g. "98%" or "100%" or null for new or watches/macbooks if not shown
  warranty: string;      // e.g. "1 Ano de garantia da loja" or "Garantia Apple até Set/2026"
  priceEstimated?: string; // Option, e.g. "A partir de R$ 4.890" or specific prices
  imageUrl: string;
  specs: string[];       // list of key specifications
  details: {
    color: string;
    physicalCondition?: string; // e.g. "Excelente, sem marcas"
    itemsIncluded: string[];    // e.g. ["Caixa original", "Cabo original USB-C"]
    serialStatus?: string;      // verified
  };
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  avatarText: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
