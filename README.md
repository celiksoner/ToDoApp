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
Step 2 - For Spring Tool Suite ( Choose "Import Projects" and choose "Maven -> Existing Maven Projects" press Next after clik Browse and add SpringProject folder after click Finish button.
For Intellij IDEA ( Choose Open File or Project and choose "homework -> pom.xml" and press OK.
Step 3 - Find the homework -> src/main/java -> com.appcent.homework -> HomeworkApplication.java file
Step 4 - For Spring Tool Suite -> Right click "HomeWorkApplication.java" and choose "Run as -> Spring Boot App "
For Intellij Idea -> Right click "HomeWorkApplication.java" and choose "Run"

-------------------------------------------------------------Api Addresses----------------------------------------------------------------

Users address --> http://localhost:8080/api/1.0/users
ToDo Tasks address --> http://localhost:8080/todo

-----------Add Task Sample (with Postman choose POST method) (Format: JSON)-------------

{
"task" : "Task text",
}

Tasks default added status = false

--------------Get Tasks Sample (with Postman GET method) (Format: JSON)

-Request Address : http://localhost:8080/todo

----------Delete Task Sample (with Postman choose DELETE method) (Format: JSON)-------------

{
"id":"Enter Tasks Id"
}

------------Update Task Sample (with Postman choose PUT) (Format: JSON)---------

{
"id": "Enter Tasks Id" ,
"task" : "Updated",
"status": true
}

----------------------------------------------------------Database Access Information-----------------------------------------------------

Database Adress --> http://localhost:8080/h2-console/

JDBC URL --> jdbc:h2:./devdb
username --> sa

------------------------------------------------------------Project Information------------------------------------------------------------

Proje i??eri??ini ingilizcemin yeterli olmayaca????n?? d??????nd??????m i??in T??rk??e anlatmak istedim.
-Sign Up sayfas??nda ??ye olurken hatal?? bir giri?? yap??l??rsa t??m kontroller ve geri d??n????ler mevcut fakat ??ye olma i??lemi ba??ar??yla tamamland??????nda uyar?? vermiyor.
-Login olduktan sonra a????lan sayfada Task box'??na veriyi yaz??p kaydetti??imizde de bir uyar?? vermiyor ve listeye direkt eklenmiyor. Sayfay?? yenileyince ekleniyor.
-Login oldu??umuzda sayfa i??erisinde gezerken oturum sonlanm??yor fakat sayfay?? yeniledi??imizde kullan??c?? oturumu sonlan??yor.
-Normalde ??ye giri??i yapmayan kullan??c??lar??n giri?? yapan kullan??c??n??n verilerine eri??ememesi olay??n?? tamamlad??m fakat cevap olarak sadece string olarak mesaj yazd??rabildim,
form d??nd??remedim. Yal??n bir mesaj koymak yerine uygulama sayfas??n?? ekledim.
-Delete, Update metodlar?? backend taraf??nda kullan??ma haz??r fakat frontend taraf??na ekleyemedim.

Projeyi tam anlam??yla tamamlayamad??m fakat yapmaya ??al??????rken k??sa bir s??rede ??ok ??ey ????rendim. Her ??ey i??in te??ekk??rler, iyi ??al????malar.
