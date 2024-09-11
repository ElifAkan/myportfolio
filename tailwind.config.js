// Bu dosya, Tailwind CSS'i projemde kullanmak için yapılandırıyorum.
// "darkMode" seçeneği ile sınıf bazlı karanlık mod desteğini sağlıyorum.
// Ayrıca hangi dosyaların Tailwind tarafından taranacağını ve stillerin uygulanacağını belirtiyorum.
module.exports = {
  darkMode: 'class',  // classla karanlık mod kullanımı
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Tailwind'in bu dosyalardaki sınıfları kullanmasını sağlıyorum
    './public/index.html',  // Public dizinindeki HTML dosyasını dahil ediyorum
  ],
  theme: {
    extend: {},  // Varsayılan temayı genişletmek için burayı kullanacağım
  },
  plugins: [],  // Eğer ek Tailwind eklentileri kullanırsam, buraya ekleyeceğim
}
