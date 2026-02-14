import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';
import { localServicePageMap } from '@/content/localServicePages';

export default function MobileMechanicPlano() {
  return <CityServicePage {...localServicePageMap.MobileMechanicPlano} />;
}
