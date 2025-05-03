
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-100 to-white">
      <div className="container mx-auto px-4 pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Профессиональная сборка ПК на заказ
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Создам игровой или рабочий компьютер любой сложности под ваши задачи и бюджет.
              Персональный подход и гарантия качества.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 shadow-lg"
              >
                Заказать сборку
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-indigo-600 text-indigo-700 hover:bg-indigo-50">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Сборка игрового компьютера" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-medium">Индивидуальные конфигурации с высокой производительностью</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Icon name="Zap" size={28} className="text-indigo-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-900">Высокая производительность</h3>
            <p className="text-gray-600">Подбор комплектующих оптимальных для ваших задач с учетом бюджета</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Icon name="Shield" size={28} className="text-indigo-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-900">Гарантия качества</h3>
            <p className="text-gray-600">Тщательная проверка и тестирование каждой собранной системы</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Icon name="UserCheck" size={28} className="text-indigo-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-900">Персональный подход</h3>
            <p className="text-gray-600">Индивидуальная консультация и поддержка после покупки</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
