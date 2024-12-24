import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import GradientIcon from '../components/GradientIcon';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Контакты</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <GradientIcon Icon={Mail} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Для партнерства и листингов</h3>
          <p className="mb-4">Предложения о сотрудничестве и листинге токенов</p>
          <a href="mailto:odyexchange@gmail.com" className="text-blue-600 hover:text-purple-600 transition-colors">
            odyexchange@gmail.com
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <GradientIcon Icon={MessageSquare} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Telegram</h3>
          <p className="mb-4">Следите за новостями и общайтесь с сообществом</p>
          <a 
            href="https://t.me/odysseyexchange_m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-purple-600 transition-colors"
          >
            @odysseyexchange_m
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <GradientIcon Icon={MessageSquare} size={48} className="mb-4" />
          <h3 className="text-xl font-bold mb-3">Twitter</h3>
          <p className="mb-4">Актуальные новости и обновления</p>
          <a 
            href="https://x.com/t_dmi3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-purple-600 transition-colors"
          >
            @t_dmi3
          </a>
        </div>
      </div>
    </div>
  );
}