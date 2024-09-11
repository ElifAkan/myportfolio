import React from 'react'; // React kütüphanesini getiriyorum

function Projects() {
  return (
    <section className="projects py-10">
      {/* Projects başlığı. Hover sırasında yazı rengi pembe olacak ve 300ms'lik geçiş süresi uygulanacak */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center dark:text-white hover:text-pink-500 transition-colors duration-300">
        Projects
      </h2>

      {/* Proje kartlarını küçük ekranlarda tek sütun, geniş ekranlarda ortalanacak şekilde düzenliyoruz */}
      <div className="flex justify-center">
        {/* Kartlara hover efekti ekliyorum. Hover sırasında büyüme ve gölge efekti olacak */}
        <div className="max-w-md w-full p-6 bg-blue-50 dark:bg-gray-800 rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <h3 className="text-2xl font-bold mb-2 dark:text-white">WitFlix</h3>
          <p className="mb-4 dark:text-gray-300">
            WitFlix is a modern platform that allows you to discover movies and TV shows. 
            It is developed using React and Redux, offering a user-friendly interface. 
            This project was created as part of the Workintech program.
          </p>

          {/* Teknoloji etiketleri */}
          <div className="flex space-x-2 mb-4">
            <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">react</span>
            <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">redux</span>
            <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">axios</span>
            <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">vercel</span>
          </div>

          {/* GitHub linki */}
          <div className="flex justify-between items-center">
            <a href="https://github.com/ElifAkan/witflix-workintech" className="text-blue-500 dark:text-blue-300 underline">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects; // Projects bileşenini dışa aktarıyorum

