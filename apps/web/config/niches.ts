import { Scissors, Beer, Car, Flower2, Syringe, GraduationCap, Building2, Briefcase, Camera, Utensils, Waves, Dumbbell, Gavel, Truck, Heart, Home, Settings, ShoppingBag, Music, Palette, Zap, Dog, Stethoscope } from "lucide-react";

export type NicheConfig = {
  id: string;
  name: string;
  label: string;
  icon: any;
  themeColor: string;
  shadowColor: string;
  description: string;
};

export const NICHES_CONFIG: Record<string, NicheConfig> = {
  barber: {
    id: "barber",
    name: "Barbearia",
    label: "Barbearia",
    icon: Scissors,
    themeColor: "amber-600",
    shadowColor: "rgba(220,38,38,0.5)",
    description: "Gestão inteligente para Barbearia",
  },
  brewery: {
    id: "brewery",
    name: "Cervejaria",
    label: "Cervejaria",
    icon: Beer,
    themeColor: "orange-600",
    shadowColor: "rgba(249,115,22,0.5)",
    description: "Gestão para Microcervejarias",
  },
  car_wash: {
    id: "car_wash",
    name: "Lava Jato",
    label: "Lava Jato",
    icon: Car,
    themeColor: "blue-600",
    shadowColor: "rgba(37,99,235,0.5)",
    description: "Gestão para Estética Automotiva",
  },
  // ... outros nichos seriam mapeados aqui
};

export const getNicheConfig = (nicheId: string): NicheConfig => {
  return NICHES_CONFIG[nicheId] || NICHES_CONFIG['barber']; // fallback
};
