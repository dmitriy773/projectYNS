import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Film, 
  Users, 
  Zap, 
  CheckCircle2, 
  Send, 
  Instagram, 
  Youtube, 
  MessageSquare, 
  Menu, 
  X,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

// Custom TikTok icon since lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Новая заявка:', data);
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      alert('Спасибо, заявка принята! Мы свяжемся с вами в ближайшее время.');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const navItems = [
    { name: 'Услуги', href: '#services' },
    { name: 'Наши каналы', href: '#channels' },
    { name: 'Для партнеров', href: '#partners' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <div className="min-h-screen cinematic-gradient">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-lg py-4 border-bottom border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <Film className="w-8 h-8 text-gold group-hover:rotate-12 transition-transform" />
            <span className="font-serif text-2xl font-bold tracking-tighter gold-text-gradient">ZakFoidFilm</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
            <a href="#partners" className="px-5 py-2 border border-gold text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-dark transition-all">
              Стать партнером
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-dark-soft border-t border-white/10 p-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="text-lg font-medium text-white/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              Раскрутка фильмов через <span className="gold-text-gradient">Telegram-бота</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Мы монтируем вирусные нарезки фильмов, публикуем в TikTok, Instagram и YouTube. 
              Зритель переходит в бота, подписывается на ваши каналы и получает название фильма. 
              Вы получаете активных подписчиков!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#partners" className="btn-primary flex items-center justify-center gap-2">
                Стать партнером <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#channels" className="px-8 py-4 border border-white/20 hover:border-gold transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-bold">
                Наши охваты
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card rounded-full flex items-center justify-center p-12 relative z-10">
              <div className="text-center">
                <div className="text-6xl font-bold gold-text-gradient mb-2">10M+</div>
                <div className="text-white/40 uppercase tracking-widest text-sm">Охватов в месяц</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 -right-4 w-32 h-32 bg-gold/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Channels Section */}
      <section id="channels" className="py-24 px-6 bg-dark-soft/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Наши охваты</h2>
          <p className="text-center text-white/40 mb-16 max-w-2xl mx-auto">
            Мы присутствуем на всех популярных платформах, обеспечивая максимальную виральность вашего контента.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TikTok */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-gold/20 transition-colors">
                  <TikTokIcon className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold">TikTok</h3>
              </div>
              <div className="space-y-4">
                <a 
                  href="https://www.tiktok.com/@MaryCicadaFilm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span>@MaryCicadaFilm</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </a>
                <a 
                  href="https://www.tiktok.com/@films99666" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span>@films99666</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </a>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-gold/20 transition-colors">
                  <Instagram className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold">Instagram</h3>
              </div>
              <a 
                href="https://www.instagram.com/goatismovie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>@goatismovie</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </a>
            </motion.div>

            {/* YouTube */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl group-hover:bg-gold/20 transition-colors">
                  <Youtube className="w-6 h-6 text-white group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold">YouTube</h3>
              </div>
              <a 
                href="https://www.youtube.com/@ZakaZakMOVIE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>@ZakaZakMOVIE</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Как это работает</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { icon: Smartphone, title: 'Контент', desc: 'Пользователь видит нарезку фильма в соцсетях.' },
              { icon: MessageSquare, title: 'Переход', desc: 'В описании видит код и ссылку на нашего бота.' },
              { icon: Users, title: 'Задание', desc: 'Переходит в бота, подписывается на ваши каналы.' },
              { icon: Film, title: 'Результат', desc: 'Бот выдает название фильма. Вы получаете подписчика.' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-dark border border-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-card p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif italic mb-4">Выгода для партнера</h3>
            <p className="text-xl text-gold-light">
              "Вы получаете 100% целевых подписчиков, которые готовы выполнять условия ради контента"
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 px-6 bg-dark-soft/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Преимущества</h2>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Вирусный контент</h3>
              <p className="text-white/50">Наши ролики регулярно попадают в рекомендации и набирают миллионы просмотров.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Целевая аудитория</h3>
              <p className="text-white/50">Киноманы — это активная и лояльная аудитория, которая легко подписывается на тематические каналы.</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Автоматизация</h3>
              <p className="text-white/50">Бот работает 24/7. Проверка подписок происходит мгновенно и без вашего участия.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Form */}
      <section id="partners" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Запустить рекламу у нас</h2>
            <p className="text-white/50">
              Заполните форму, и мы обсудим интеграцию. Укажите ваши пожелания, чтобы подобрать оптимальный формат.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Ваше имя</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Имя или Название компании" 
                  className="input-field"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Контактные данные</label>
                <input 
                  required
                  name="contact"
                  type="text" 
                  placeholder="@username или номер телефона" 
                  className="input-field"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Срок рекламы</label>
              <select name="duration" className="input-field appearance-none">
                <option value="test">Тест на 1 день</option>
                <option value="week">Неделя (7 дней)</option>
                <option value="month">Месяц</option>
                <option value="other">Другой вариант</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Пожелания по рекламе</label>
              <textarea 
                name="wishes"
                rows={4} 
                placeholder="Опишите ваш фильм/канал, целевая аудитория, особые пожелания..." 
                className="input-field resize-none"
              ></textarea>
            </div>

            <button 
              disabled={formStatus === 'submitting'}
              type="submit" 
              className="btn-primary w-full flex items-center justify-center gap-3"
            >
              {formStatus === 'submitting' ? 'Отправка...' : (
                <>Отправить заявку <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-12 px-6 border-t border-white/5 bg-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-2">
              <Film className="w-6 h-6 text-gold" />
              <span className="font-serif text-xl font-bold gold-text-gradient">ZakFoidFilm</span>
            </a>
            <p className="text-white/30 text-sm">Сервис привлечения подписчиков через кино-контент</p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.tiktok.com/@MaryCicadaFilm" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/goatismovie" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@ZakaZakMOVIE" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <a href="https://t.me/zakzakmovie" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end gap-2 text-gold hover:text-gold-light transition-colors font-bold">
              <Send className="w-4 h-4" /> t.me/zakzakmovie
            </a>
            <a href="https://t.me/goatsearch1_bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-end gap-2 text-gold hover:text-gold-light transition-colors font-bold">
              <MessageSquare className="w-4 h-4" /> @goatsearch1_bot
            </a>
            <p className="text-white/20 text-xs mt-2">© 2026 ZakFoidFilm. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
