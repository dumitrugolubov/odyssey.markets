import React from 'react';

export default function Fees() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Комиссии</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип операции</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Комиссия</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Примечание</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Спот торговля</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-600 font-bold">0%</td>
              <td className="px-6 py-4">На всех торговых парах</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Маржинальная торговля</td>
              <td className="px-6 py-4 whitespace-nowrap">0.075%</td>
              <td className="px-6 py-4">Плечо до 777x</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Вывод средств</td>
              <td className="px-6 py-4 whitespace-nowrap">Зависит от сети</td>
              <td className="px-6 py-4">Минимальная комиссия в сети</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}