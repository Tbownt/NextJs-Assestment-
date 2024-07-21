export interface ApiResponse {
  status: boolean;
  message: string;
  data: {
    rows: Item[];
    metadata: Metadata;
  };
}

export interface Item {
  tenantId: number;
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  hidden: boolean;
  comingSoon: boolean;
  views: number;
  hideWhenOutOfStock: boolean;
  media: Media;
  createdAt: string;
  deletedAt: string | null;
  categories: Category[];
}

export interface Media {
  images: Image[];
}

export interface Image {
  key: string;
  date: string;
  url: string;
}

export interface Category {
  tenantId: number;
  id: number;
  name: string;
}

export interface Metadata {
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
  currentPage: number;
  nextPage: number | null;
  searchTerm: string;
}

declare module "*.ttf";
