
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Cpu" size={24} className="text-purple-300" />
          <span className="text-xl font-bold">ПК Мастер</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
            }
          >
            Главная
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
            }
          >
            Услуги
          </NavLink>
          <NavLink 
            to="/reviews" 
            className={({isActive}) => 
              isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
            }
          >
            Отзывы
          </NavLink>
          <NavLink 
            to="/contacts" 
            className={({isActive}) => 
              isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
            }
          >
            Контакты
          </NavLink>
          <Button 
            variant="outline" 
            className="bg-transparent border-purple-300 text-white hover:bg-purple-300 hover:text-indigo-900 transition-colors"
          >
            Оставить заявку
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:bg-indigo-700"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/services" 
              className={({isActive}) => 
                isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </NavLink>
            <NavLink 
              to="/reviews" 
              className={({isActive}) => 
                isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </NavLink>
            <NavLink 
              to="/contacts" 
              className={({isActive}) => 
                isActive ? "text-purple-300 font-medium" : "text-white hover:text-purple-300 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </NavLink>
            <Button 
              variant="outline" 
              className="w-full bg-transparent border-purple-300 text-white hover:bg-purple-300 hover:text-indigo-900 transition-colors"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
