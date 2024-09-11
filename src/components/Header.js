import React from 'react'; // React'i bileşen yazmak için kullanıyorum.
import profileImage from '../assets/profile-image.jpg'; // Profil resmimi assets klasöründen alıyorum.

const Header = () => {
  return (
    <header className="bg-[#F4F4F4] dark:bg-gray-900 text-gray-800 dark:text-white py-10 px-4 lg:px-32 relative">
      
      <div className="text-2xl lg:text-3xl mb-0">Hi! 👋</div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between relative space-x-8">
        
        <div className="max-w-lg"> 
          {/* Başlık üzerine gelindiğinde renk değişikliği ve animasyon */}
          <h1 className="font-inter text-[36px] font-medium leading-[64px] tracking-[0.01em] text-left hover:text-pink-500 transition-colors duration-300">
            I'm Elif Akan. I'm a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!
          </h1>
        </div>

        {/* Profil resmine hover efekti ekliyorum */}
        <div className="w-[200px] h-[200px] lg:w-[341px] lg:h-[341px] relative overflow-hidden rounded-lg lg:ml-16 mt-8 lg:mt-0 hover:scale-105 transition transform duration-500 ease-in-out">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Currently <a href="#" className="text-blue-500 hover:text-blue-700">Freelancing</a> for 
          <a href="#" className="text-blue-500 hover:text-blue-700"> UX</a>, 
          <a href="#" className="text-blue-500 hover:text-blue-700"> UI</a>, & 
          <a href="#" className="text-blue-500 hover:text-blue-700"> Web Design</a> Project.<br/>  
          Invite me to join your team → <a href="mailto:elifakan15@gmail.com" className="text-blue-500 hover:text-blue-700 underline">elifakan15@gmail.com</a>
        </p>
      </div>
    </header>
  );
};
export default Header;