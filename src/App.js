import React, { useState, useEffect } from 'react';
import Header from './components/Header';  // Header bileşenini getiriyorum
import Skills from './components/Skills';  // Skills bileşenini getiriyorum
import Projects from './components/Projects';  // Projects bileşenini getiriyorum
import Profile from './components/Profile';  // Profile bileşenini getiriyorum
import Footer from './components/Footer';  // Footer bileşenini getiriyorum
import './App.css';  // Tailwind CSS dosyasını getiriyorum

function App() {
  // Dark Mode state'ini oluşturuyorum. Varsayılan olarak 'false' yani light mode'da başlıyor.
  const [darkMode, setDarkMode] = useState(false);

  // Component ilk kez render edildiğinde (mount) localStorage'dan Dark Mode bilgisini alıyorum.
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));  // LocalStorage'daki değeri kullanarak darkMode state'ini ayarlıyorum.
    }
  }, []);

  // Dark Mode butonuna tıklandığında hem state'i hem de localStorage'ı güncelliyorum.
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;  // Mevcut modun tersini alıyorum.
      localStorage.setItem('darkMode', JSON.stringify(newMode));  // Dark Mode seçimini localStorage'a kaydediyorum.
      return newMode;  // Güncellenmiş mod değerini döndürüyorum.
    });
  };

  return (
    // Dark Mode'a göre body'nin arka plan rengini ve metin rengini ayarlıyorum.
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-[#F4F4F4] text-black'}>
      
      {/* Butonları sağ tarafa taşıyorum */}
      <div className="flex justify-end items-center p-4 space-x-4">
        
        {/* Dark Mode butonu */}
        <button
          onClick={toggleDarkMode}  // Dark Mode state'ini değiştiriyorum
          className="px-4 py-2 bg-gray-500 text-white rounded transition duration-300 ease-in-out hover:bg-gray-700"
        >
          {/* Buton metni duruma göre Light Mode veya Dark Mode gösteriyor */}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Uygulamanın diğer bileşenlerini çağırıyorum */}
      <Header />  
      <Skills />  
      <Profile />  
      <Projects />            
      <Footer />  
    </div>
  );
}

export default App;