export interface Species {
  id: string;
  name: string;
  scientificName: string;
  status: 'Critically Endangered' | 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Conservation Dependent';
  description: string;
  habitat: string;
  population: string;
  threats: string[];
  imageUrl: string;
  listedSince: string;
  region: string;
}