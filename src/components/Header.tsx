import { useState } from 'react'
import { Button } from './ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-blue-400">Trần Minh</span> Quân
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Kỹ năng
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Dự án
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Liên hệ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              Thuê tôi
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                Trang chủ
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                Kỹ năng
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                Dự án
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
              >
                Liên hệ
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                >
                  Thuê tôi
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
