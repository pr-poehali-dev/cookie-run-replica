import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [activeTab, setActiveTab] = useState('battle');

  const characters = [
    {
      name: 'Храбрец',
      rarity: 'Легендарный',
      role: 'Атака',
      image: 'https://cdn.poehali.dev/projects/91b30749-5793-4498-93d5-5a8dbad44913/files/e03e54d3-8dad-4c41-a2e4-013e28cc9d20.jpg',
      power: '⭐⭐⭐⭐⭐'
    },
    {
      name: 'Волшебник',
      rarity: 'Эпический',
      role: 'Магия',
      image: 'https://cdn.poehali.dev/projects/91b30749-5793-4498-93d5-5a8dbad44913/files/e03e54d3-8dad-4c41-a2e4-013e28cc9d20.jpg',
      power: '⭐⭐⭐⭐'
    },
    {
      name: 'Целитель',
      rarity: 'Редкий',
      role: 'Поддержка',
      image: 'https://cdn.poehali.dev/projects/91b30749-5793-4498-93d5-5a8dbad44913/files/e03e54d3-8dad-4c41-a2e4-013e28cc9d20.jpg',
      power: '⭐⭐⭐'
    },
  ];

  const guides = [
    {
      title: 'Как начать играть',
      description: 'Полный гайд для новичков по основам игры',
      icon: 'BookOpen'
    },
    {
      title: 'Лучшие персонажи',
      description: 'Топ героев для прохождения кампании',
      icon: 'Trophy'
    },
    {
      title: 'Строительство королевства',
      description: 'Эффективная стратегия развития базы',
      icon: 'Building'
    },
    {
      title: 'Комбинации команд',
      description: 'Синергия героев и лучшие составы',
      icon: 'Users'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD93D] via-[#FF6B9D] to-[#6BCBB7]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-[#8B4513] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-wiggle">🍪</div>
              <h1 className="text-3xl font-bold text-[#8B4513]">Cookie Run Kingdom</h1>
            </div>
            <div className="hidden md:flex gap-4">
              <Button variant="ghost" className="text-[#8B4513] hover:bg-[#FFD93D]/20 font-semibold">
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button variant="ghost" className="text-[#8B4513] hover:bg-[#FFD93D]/20 font-semibold">
                <Icon name="Users" className="mr-2" size={18} />
                Персонажи
              </Button>
              <Button variant="ghost" className="text-[#8B4513] hover:bg-[#FFD93D]/20 font-semibold">
                <Icon name="Castle" className="mr-2" size={18} />
                Королевство
              </Button>
              <Button variant="ghost" className="text-[#8B4513] hover:bg-[#FFD93D]/20 font-semibold">
                <Icon name="Gamepad2" className="mr-2" size={18} />
                Игра
              </Button>
              <Button variant="ghost" className="text-[#8B4513] hover:bg-[#FFD93D]/20 font-semibold">
                <Icon name="BookOpen" className="mr-2" size={18} />
                Гайды
              </Button>
            </div>
            <Button className="bg-[#FF6B9D] hover:bg-[#FF6B9D]/90 text-white font-bold text-lg px-6 rounded-full shadow-lg hover:scale-105 transition-transform">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="animate-float">
          <h2 className="text-7xl font-bold text-white mb-6 cookie-text-stroke drop-shadow-2xl">
            COOKIE RUN KINGDOM
          </h2>
        </div>
        <p className="text-3xl text-white font-semibold mb-8 drop-shadow-lg">
          Построй своё сладкое королевство! 🏰✨
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Button className="bg-[#FF6B9D] hover:bg-[#FF6B9D]/90 text-white font-bold text-xl px-10 py-6 rounded-full shadow-2xl hover:scale-110 transition-all">
            <Icon name="Play" className="mr-2" size={24} />
            Играть сейчас
          </Button>
          <Button variant="outline" className="bg-white/90 hover:bg-white text-[#8B4513] font-bold text-xl px-10 py-6 rounded-full shadow-2xl border-4 border-[#8B4513] hover:scale-110 transition-all">
            <Icon name="Video" className="mr-2" size={24} />
            Трейлер
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="game-card bg-white/95 border-4 border-[#8B4513] rounded-3xl overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-2">Эпические битвы</h3>
              <p className="text-gray-700">Сражайся с врагами в захватывающих приключениях</p>
            </CardContent>
          </Card>
          <Card className="game-card bg-white/95 border-4 border-[#8B4513] rounded-3xl overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="text-6xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-2">Строительство</h3>
              <p className="text-gray-700">Создай уникальное королевство печенек</p>
            </CardContent>
          </Card>
          <Card className="game-card bg-white/95 border-4 border-[#8B4513] rounded-3xl overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-2">Собери команду</h3>
              <p className="text-gray-700">Коллекционируй легендарных героев</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#8B4513] mb-4">🍪 Персонажи</h2>
            <p className="text-xl text-gray-600">Собери коллекцию уникальных печенек-героев</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((char, idx) => (
              <Card key={idx} className="game-card border-4 border-[#FFD93D] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFD93D]/20 to-[#FF6B9D]/20">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-[#FFD93D] to-[#FF6B9D] p-6 text-center">
                    <img src={char.image} alt={char.name} className="w-48 h-48 mx-auto object-contain animate-float" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-[#8B4513]">{char.name}</h3>
                      <Badge className="bg-[#FF6B9D] text-white font-semibold">{char.role}</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{char.rarity}</p>
                    <p className="text-2xl">{char.power}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#6BCBB7] to-[#3D96FF] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">🏰 Королевство</h2>
              <p className="text-xl text-white/90 mb-6">
                Построй и развивай своё уникальное королевство! Размещай здания, украшай территорию и создавай самое красивое место в мире Cookie Run.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <Icon name="Building2" className="text-white" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Стройте здания</h3>
                    <p className="text-white/80">Развивайте производство и получайте ресурсы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <Icon name="Sparkles" className="text-white" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Украшения</h3>
                    <p className="text-white/80">Персонализируйте королевство декорациями</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <Icon name="TrendingUp" className="text-white" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Прогресс</h3>
                    <p className="text-white/80">Повышайте уровень и открывайте новые возможности</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://cdn.poehali.dev/projects/91b30749-5793-4498-93d5-5a8dbad44913/files/c88a2afc-2519-4612-b04b-e33ff5747c0e.jpg" 
                alt="Kingdom" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#8B4513] mb-4">🎮 Игровой процесс</h2>
            <p className="text-xl text-gray-600">Захватывающие приключения ждут тебя!</p>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-2 bg-[#FFD93D]/30 p-2 rounded-2xl mb-8">
              <Button
                onClick={() => setActiveTab('battle')}
                className={`rounded-xl font-bold text-lg ${
                  activeTab === 'battle' 
                    ? 'bg-[#FF6B9D] text-white hover:bg-[#FF6B9D]/90' 
                    : 'bg-transparent text-[#8B4513] hover:bg-[#FFD93D]/50'
                }`}
              >
                Сражения
              </Button>
              <Button
                onClick={() => setActiveTab('adventure')}
                className={`rounded-xl font-bold text-lg ${
                  activeTab === 'adventure' 
                    ? 'bg-[#FF6B9D] text-white hover:bg-[#FF6B9D]/90' 
                    : 'bg-transparent text-[#8B4513] hover:bg-[#FFD93D]/50'
                }`}
              >
                Приключения
              </Button>
              <Button
                onClick={() => setActiveTab('events')}
                className={`rounded-xl font-bold text-lg ${
                  activeTab === 'events' 
                    ? 'bg-[#FF6B9D] text-white hover:bg-[#FF6B9D]/90' 
                    : 'bg-transparent text-[#8B4513] hover:bg-[#FFD93D]/50'
                }`}
              >
                События
              </Button>
            </div>
            
            {activeTab === 'battle' && (
              <Card className="border-4 border-[#8B4513] rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-7xl">⚔️</div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#8B4513] mb-4">Эпические битвы</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Сражайся с врагами в динамичных боях! Используй уникальные способности каждого персонажа, комбинируй атаки и побеждай боссов.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Авто-режим для быстрого фарма
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Стратегические комбинации способностей
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Множество игровых режимов
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'adventure' && (
              <Card className="border-4 border-[#8B4513] rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-7xl">🗺️</div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#8B4513] mb-4">Приключения</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Исследуй огромный мир Cookie Run Kingdom! Проходи сюжетную кампанию, открывай новые локации и узнавай истории персонажей.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Сотни увлекательных уровней
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Захватывающий сюжет
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Уникальные награды за прохождение
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {activeTab === 'events' && (
              <Card className="border-4 border-[#8B4513] rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-7xl">🎉</div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#8B4513] mb-4">События</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Участвуй в регулярных событиях! Получай эксклюзивные награды, новых персонажей и уникальные предметы.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Сезонные события каждый месяц
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Ограниченные персонажи
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" className="text-green-500" size={20} />
                          Щедрые награды за участие
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#FF6B9D] to-[#FFD93D] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">📱 Скачать игру</h2>
            <p className="text-xl text-white/90">Начни своё приключение прямо сейчас!</p>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <Card className="game-card border-4 border-white rounded-3xl overflow-hidden bg-white/95 max-w-sm">
              <CardContent className="p-8 text-center">
                <Icon name="Smartphone" className="mx-auto text-[#8B4513] mb-4" size={64} />
                <h3 className="text-2xl font-bold text-[#8B4513] mb-3">App Store</h3>
                <p className="text-gray-600 mb-6">Доступно для iPhone и iPad</p>
                <Button className="w-full bg-[#FF6B9D] hover:bg-[#FF6B9D]/90 text-white font-bold text-lg py-6 rounded-full">
                  Скачать для iOS
                </Button>
              </CardContent>
            </Card>
            <Card className="game-card border-4 border-white rounded-3xl overflow-hidden bg-white/95 max-w-sm">
              <CardContent className="p-8 text-center">
                <Icon name="Smartphone" className="mx-auto text-[#8B4513] mb-4" size={64} />
                <h3 className="text-2xl font-bold text-[#8B4513] mb-3">Google Play</h3>
                <p className="text-gray-600 mb-6">Доступно для Android устройств</p>
                <Button className="w-full bg-[#3D96FF] hover:bg-[#3D96FF]/90 text-white font-bold text-lg py-6 rounded-full">
                  Скачать для Android
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#8B4513] mb-4">📚 Гайды и советы</h2>
            <p className="text-xl text-gray-600">Стань мастером Cookie Run Kingdom</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((guide, idx) => (
              <Card key={idx} className="game-card border-4 border-[#FFD93D] rounded-3xl overflow-hidden bg-gradient-to-br from-white to-[#FFD93D]/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF6B9D] rounded-2xl p-4">
                      <Icon name={guide.icon as any} className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#8B4513] mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <Button variant="outline" className="border-2 border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white font-semibold">
                        Читать →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#8B4513] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🍪</span>
                Cookie Run Kingdom
              </h3>
              <p className="text-white/80">Построй своё королевство печенек и отправляйся в эпическое приключение!</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Ссылки</h4>
              <ul className="space-y-2 text-white/80">
                <li>Главная</li>
                <li>Персонажи</li>
                <li>Королевство</li>
                <li>Гайды</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Сообщество</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20 rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20 rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20 rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20 rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Cookie Run Kingdom. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}