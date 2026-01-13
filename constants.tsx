
import React from 'react';
import { Service, ContactInfo } from './types';

export const CONTACT: ContactInfo = {
  name: "ALLO ZOHAIR",
  phone: "+212650119170",
  whatsapp: "https://wa.me/212650119170",
  city: "Essaouira"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Réparation de Réfrigérateur',
    description: 'Expertise complète pour tous modèles de frigos et congélateurs.',
    icon: '❄️'
  },
  {
    id: '2',
    title: 'Réparation de Lave-linge',
    description: 'Votre machine à laver réparée rapidement avec des pièces de qualité.',
    icon: '🧺'
  },
  {
    id: '3',
    title: 'Réparation de Lave-vaisselle',
    description: 'Ne laissez plus la vaisselle s\'accumuler, nous intervenons vite.',
    icon: '🍽️'
  },
  {
    id: '4',
    title: 'Climatisation',
    description: 'Installation et maintenance de vos systèmes de climatisation.',
    icon: '🌬️'
  },
  {
    id: '5',
    title: 'Chauffage & Chaudière',
    description: 'Réparation de systèmes de chauffage et chaudières pour votre confort.',
    icon: '🔥'
  },
  {
    id: '6',
    title: 'Petites Réparations',
    description: 'Dépannage divers pour tous vos petits appareils domestiques.',
    icon: '🛠️'
  }
];
