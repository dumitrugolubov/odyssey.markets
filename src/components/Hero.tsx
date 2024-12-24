import React from 'react';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("/images/odyssey-exchange-hero.png")'
    }}>
      <div className="absolute inset-0 bg-black/60">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-6">Первая Мем Коин Биржа</h1>
            <p className="text-2xl mb-8">Торгуйте с комиссией 0%, кредитным плечом 777x и получайте 10% от ликвидаций</p>
            <a 
              href="https://ody.lol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
            >
              <Rocket className="mr-2" />
              Начать торговлю
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}