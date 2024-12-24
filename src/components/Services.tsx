import React from 'react';
import { Banknote, Rocket, Users, TrendingUp } from 'lucide-react';
import GradientIcon from './GradientIcon';

const services = [
  {
    icon: <GradientIcon Icon={Banknote} size={48} />,
    title: 'Комиссия 0%',
    description: 'Торгуйте без комиссии на всех спотовых парах'
  },
  {
    icon: <GradientIcon Icon={Rocket} size={48} />,
    title: 'Плечо 777x',
    description: 'Максимизируйте свой потенциал с рекордным кредитным плечом'
  },
  {
    icon: <GradientIcon Icon={TrendingUp} size={48} />,
    title: '10% с ликвидаций',
    description: 'Получайте 10% возврата со всех ликвидаций'
  },
  {
    icon: <GradientIcon Icon={Users} size={48} />,
    title: '50% партнёрам',
    description: 'Лучшие условия партнёрской программы на рынке'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Преимущества</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}