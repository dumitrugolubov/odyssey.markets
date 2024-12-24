import React from 'react';
import AboutSection from '../components/About';

export default function About() {
  return (
    <div className="py-12">
      <AboutSection />
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
        <p className="text-gray-600 mb-8">
          Odyssey Exchange стремится сделать торговлю мем коинами доступной и выгодной для всех. 
          Мы первыми предложили уникальные условия, включая максимальное плечо 777x и нулевую комиссию на спот-торговлю, 
          что делает нас лидером в этом сегменте рынка.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Инновации</h3>
            <p className="text-gray-600">
              Мы постоянно развиваем нашу платформу, внедряя передовые технологии 
              для обеспечения быстрой и безопасной торговли.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Безопасность</h3>
            <p className="text-gray-600">
              Безопасность средств наших пользователей - наш главный приоритет. 
              Мы используем передовые системы защиты и страховой фонд.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}