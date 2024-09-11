import React, { createContext, useState } from 'react';

// LanguageContext'i oluşturuyorum
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN'); // Varsayılan dil İngilizce olarak ayarlanmış

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children} {/* Uygulamanın geri kalan kısmını buraya ekliyorum */}
    </LanguageContext.Provider>
  );
};