import React from 'react'; // React'i kullanarak Profile bileşenini oluşturuyorum.

function Profile() {
  return (
    <section className="profile py-4">
      {/* Profile başlığı. Hover sırasında yazı rengi pembe olacak ve 300ms'lik geçiş süresi uygulanacak */}
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white hover:text-pink-500 transition-colors duration-300">
        Profile
      </h2> 

      {/* Profil bilgilerini 2 sütun halinde grid yapısıyla diziyorum */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Sol taraf: Temel bilgilerim */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out"> 
          {/* Başlık rengi. Dark mode'da pembe olacak */}
          <h3 className="text-pink-600 dark:text-pink-400 text-xl font-semibold mb-4">Basic Information</h3> 

          {/* Listelenmiş bilgiler. Dark mode'da yazılar gri renkte olacak */}
          <ul className="dark:text-gray-300">
            <li className="mb-2">
              <strong>Doğum tarihi:</strong> 07.01.2002
            </li>
            <li className="mb-2">
              <strong>İkamet Şehri:</strong> İstanbul
            </li>
            <li className="mb-2">
              <strong>Eğitim Durumu:</strong> Bilgi Üniv. Bilgisayar Prog. ÖnLisans, 2023
            </li>
            <li className="mb-2">
              <strong>Tercih Ettiği Rol:</strong> Frontend, UI
            </li>
          </ul>
        </div>
        
        {/* Sağ taraf: Hakkımda kısmı */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out"> 
          {/* Başlık rengi. Dark mode'da mavi renkte olacak, hover olduğunda yazı rengi pembe olacak */}
          <h3 className="text-blue-600 dark:text-blue-400 text-xl font-semibold mb-4 hover:text-pink-500 transition-colors duration-300">
            About me
          </h3> 

          {/* Dark mode'da yazılar gri renkte olacak */}
          <p className="dark:text-gray-300">
            I graduated with a degree in Computer Programming, and I am interested in 
            frontend development. I enjoy creating modern and user-friendly interfaces 
            with technologies like React, JavaScript, and CSS.
          </p>

          {/* Biraz boşluk bırakıyorum ve hakkımda daha fazla bilgi veriyorum */}
          <p className="mt-4 dark:text-gray-300">
            I am always open to learning new things and improving myself. 
            My goal is to be part of a team that develops impressive and 
            functional web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile; // Profile bileşenini dışa aktarıyorum.