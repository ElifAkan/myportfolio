import React from 'react'; // React kütüphanesini projeme dahil ediyorum.
import ReactDOM from 'react-dom/client'; // React'in DOM ile etkileşime girebilmesi için gerekli olan modülü ekliyorum.
import './index.css'; // Projemde kullanacağım genel CSS dosyasını içe aktarıyorum.
import App from './App'; // App bileşenini ana bileşen olarak projeme dahil ediyorum.
import reportWebVitals from './reportWebVitals'; // Performans ölçümleme fonksiyonlarını ekliyorum, isteğe bağlı olarak kullanılabilir.

const root = ReactDOM.createRoot(document.getElementById('root')); 
// root DOM elementini seçiyorum ve React uygulamamı bu elementin içine render edeceğim.
// 'root' ID'sine sahip HTML elemanını buluyor ve React uygulamamı bu eleman içinde başlatıyorum.
root.render(
  <React.StrictMode>
    <App /> {/* App bileşenini React.StrictMode ile sarıyorum. Bu, olası hataları ve uyarıları daha sıkı bir şekilde kontrol etmemi sağlar */}
  </React.StrictMode>
);

// reportWebVitals fonksiyonunu çağırarak performans ölçümlemeyi başlatıyorum. 
// Bu, uygulamamın performansını ölçmek için kullanılabilir ve sonuçlar konsola gönderir.
reportWebVitals(); // Performans ölçümü için fonksiyon çağrısı