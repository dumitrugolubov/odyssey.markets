import React from 'react';
import { Mail, MessageSquare, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientIcon from './GradientIcon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ODYSSEY EXCHANGE</h3>
            <p className="text-gray-400 mb-6">
              Первая в мире биржа, специализирующаяся на мем коинах. Торгуйте с плечом до 777x и комиссией 0%.
            </p>
            <a 
              href="https://ody.lol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Rocket className="mr-2" />
              Начать торговлю
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <GradientIcon Icon={Mail} size={20} />
                <div>
                  <span className="block text-sm text-gray-400">Для партнерства и листингов:</span>
                  <a href="mailto:odyexchange@gmail.com">odyexchange@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <GradientIcon Icon={MessageSquare} size={20} />
                <a href="https://t.me/odysseyexchange_m" target="_blank" rel="noopener noreferrer">Telegram</a>
              </div>
              <div className="flex items-center space-x-3">
                <GradientIcon Icon={MessageSquare} size={20} />
                <a href="https://x.com/t_dmi3" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">О бирже</Link></li>
              <li><Link to="/trading" className="hover:text-blue-400">Торговля</Link></li>
              <li><Link to="/fees" className="hover:text-blue-400">Комиссии</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400">Политика конфиденциальности</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Odyssey Exchange. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}