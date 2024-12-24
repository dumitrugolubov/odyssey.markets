import React from 'react';
import { TrendingUp, Zap, Shield } from 'lucide-react';
import GradientIcon from '../components/GradientIcon';

export default function Trading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Торговля на Odyssey Exchange</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <GradientIcon Icon={TrendingUp} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Спот Торговля</h3>
          <p>Торгуйте популярными мем коинами с нулевой комиссией. Мгновенное исполнение ордеров и высокая ликвидность.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <GradientIcon Icon={Zap} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Маржинальная Торговля</h3>
          <p>Используйте кредитное плечо до 777x для увеличения потенциальной прибыли. Уникальные условия на рынке.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <GradientIcon Icon={Shield} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Безопасность</h3>
          <p>Современные системы безопасности и страховой фонд для защиты средств пользователей.</p>
        </div>
      </div>
    </div>
  );
}