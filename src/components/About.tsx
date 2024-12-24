import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/odyssey-exchange-about.png"
              alt="Odyssey Exchange - Первая Мем Коин Биржа"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">О бирже</h2>
            <p className="text-gray-600 mb-6">
              Odyssey Exchange - первая в мире биржа, специализирующаяся на мем коинах. 
              Мы предоставляем уникальные условия для трейдинга, включая максимальное плечо 777x, 
              нулевую комиссию на спот-торговлю и возврат 10% от ликвидаций.
            </p>
            <div className="space-y-4">
              {[
                'Специализация на мем коинах',
                'Максимальное плечо 777x',
                'Комиссия 0% на спот',
                'Возврат 10% от ликвидаций'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}