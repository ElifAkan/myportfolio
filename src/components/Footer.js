import React from 'react';

function Footer() {
  return (
    // Footer bölümünü oluşturuyorum, arka plan rengi dark mode'a göre değişecek
    <footer className="py-4 bg-gray-100 dark:bg-gray-900 text-center">
      {/* Başlık kısmı, "Let's work together" ifadesiyle kullanıcıya işbirliği daveti yapıyorum 
      ve farklı ekran boyutlarına göre responsive ayarladım */}
      <h3 className="text-2xl lg:text-3xl font-bold mb-4 dark:text-white">
        Let's <span className="text-blue-600">work together</span> on your next product.
      </h3>
      
      {/* İletişim linklerini hizalıyorum */}
      <div className="flex justify-center space-x-4 mb-4">
        {/* GitHub linki */}
        <a href="https://github.com/ElifAkan" className="text-blue-500 hover:underline">Github</a>
        
        {/* LinkedIn linki */}
        <a href="https://www.linkedin.com/in/elif-a-561b9b271/" className="text-blue-500 hover:underline">LinkedIn</a>
        
        {/* E-posta linki */}
        <a href="mailto:elifakan15@gmail.com" className="text-blue-500 hover:underline">Email</a>
      </div>
    </footer>
  );
}

export default Footer;

