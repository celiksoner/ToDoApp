import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <h1>To Do App</h1>
      <p>Merhabalar, projenin bazı eksikleri var. Bunları ana ekrana listelemek istedim</p>
      <ul>
        <li><p>Sign Up sayfasında üye olurken hatalı bir giriş yapılırsa tüm kontroller ve geri dönüşler mevcut fakat üye olma işlemi başarıyla tamamlandığında uyarı vermiyor.</p></li>
        <li><p>Login olduktan sonra açılan sayfada Task box'ına veriyi yazıp kaydettiğimizde de bir uyarı vermiyor ve listeye direkt eklenmiyor. Sayfayı yenileyince ekleniyor.</p></li>
        <li><p>Login olduğumuzda sayfa içerisinde gezerken oturum sonlanmıyor fakat sayfayı yenilediğimizde kullanıcı oturumu sonlanıyor.</p></li>
        <li><p>Normalde üye girişi yapmayan kullanıcıların giriş yapan kullanıcının verilerine erişememesi olayını tamamladım fakat cevap olarak sadece string olarak mesaj yazdırabildim, form döndüremedim. Yalın bir mesaj koymak yerine uygulama sayfasını ekledim.</p></li>
      </ul>
      
      </div>
  );
};

export default HomePage;
