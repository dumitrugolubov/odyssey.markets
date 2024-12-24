import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import GradientIcon from './GradientIcon';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Контакты</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <GradientIcon Icon={Mail} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Email поддержка</h3>
          <p className="mb-4">Круглосуточная поддержка пользователей</p>
          <a href="mailto:odyexchange@gmail.com" className="text-blue-600 hover:text-blue-700">
            odyexchange@gmail.com
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <GradientIcon Icon={MessageSquare} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Социальные сети</h3>
          <p className="mb-4">Следите за новостями в наших социальных сетях</p>
          <div className="space-y-2">
            <a href="https://t.me/odysseyexchange_m" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
              Telegram
            </a>
            <a href="https://x.com/t_dmi3" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}