# ToDoApp

ToDoList App with React and Spring

How to start a project

-------------------------------------------------Steps to run a React Project (Frontend)--------------------------------------------------
Step 1 - Open the ReactProject folder and enter the frontend folder
Step 2 - While inside the frontend file, right click anywhere in the folder by pressing the shift key click "Open with Powershell window"
Step 3 - Type "npm start" on the command line and press enter

Then the application will start working.
\*Required Node.js application

----------------------------------------------------Steps to run a Spring Project (Backend)-----------------------------------------------
Step 1 - Start the Spring Tool Suite or Intellij IDEA application.
Step 2 - For Spring Tool Suite ( Choose "Open Project From File System" and choose "homework" project folder.
For Intellij IDEA ( Choose Open File or Project and choose "homework -> pom.xml" and press OK.
Step 3 - Find the homework -> src/main/java -> com.appcent.homework -> HomeworkApplication.java file
Step 4 - For Spring Tool Suite -> Right click "HomeWorkApplication.java" and choose "Run as -> Spring Boot App "
For Intellij Idea -> Right click "HomeWorkApplication.java" and choose "Run"

-------------------------------------------------------------Api Addresses----------------------------------------------------------------

Users address --> http://localhost:8080/api/1.0/users
ToDo Tasks address --> http://localhost:8080/todo

----------------------------------------------------------Database Access Information-----------------------------------------------------

Database Adress --> http://localhost:8080/h2-console/

JDBC URL --> jdbc:h2:./devdb
username --> sa

------------------------------------------------------------Project Information------------------------------------------------------------

Proje içeriğini ingilizcemin yeterli olmayacağını düşündüğüm için Türkçe anlatmak istedim.
-Sign Up sayfasında üye olurken hatalı bir giriş yapılırsa tüm kontroller ve geri dönüşler mevcut fakat üye olma işlemi başarıyla tamamlandığında uyarı vermiyor.
-Login olduktan sonra açılan sayfada Task box'ına veriyi yazıp kaydettiğimizde de bir uyarı vermiyor ve listeye direkt eklenmiyor. Sayfayı yenileyince ekleniyor.
-Login olduğumuzda sayfa içerisinde gezerken oturum sonlanmıyor fakat sayfayı yenilediğimizde kullanıcı oturumu sonlanıyor.
-Normalde üye girişi yapmayan kullanıcıların giriş yapan kullanıcının verilerine erişememesi olayını tamamladım fakat cevap olarak sadece string olarak mesaj yazdırabildim,
form döndüremedim. Yalın bir mesaj koymak yerine uygulama sayfasını ekledim.

Projeyi tam anlamıyla tamamlayamadım fakat yapmaya çalışırken kısa bir sürede çok şey öğrendim. Her şey için teşekkürler, iyi çalışmalar.
