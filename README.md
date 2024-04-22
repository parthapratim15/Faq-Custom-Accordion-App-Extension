# Faq Custom Accordion App Extension

# Steps To Install

1. Download or clone the repo with all the required file for your extension

2. Create a folder in your laravel application or anywhere you want to keep your app extension
   Example - Create a new folder called <b>app_extension</b>

3. Copy the <b>package.json</b> file of the downloaded repository and paste it in the root of the created folder of Step 2.

4. After that go to the folder (app_extension) and run the below command

   - npm install

5. Now please run the app generate extension by below command.

   - npm run scaffold

   It will prompt you to choose whether you want to create new app or No, Commect to an existing app. Please choose n (No)
   After that it will show you list of your existing app connected to your shopify account. Choose your preferred app.
   After that it will show the list of types of extesion. Please choose Theme app extension and press enter

6. Give a name of your extension

   - Example: Faq Custom Accordion

7. Finally run the extension by below command

   - npm run dev

   If toggle develoment store preview shows off please on it by pressing d

   If everything goes well it will create the full theme app extension folder structure where we need to put 3 files we have clone from the repository.

8. Copy 3 files and paste it in below folder

   - copy <b>faq.js</b>, <b>faq.css</b> file in assets folder
   - copy/replace <b>star_rating.liquid</b> file in blocks folder

9. After that go to the theme app extension editor which you can find in console build message

10. In Theme page, Click on Add Seciton + icon and you can find in App section there is a app called FAQ. Please select and add where you want to see the FAQ Custom Accordion in the page and it will show Vertical accordion with 3 default FAQ.

11. From left/right menu, user can change Faq Title 1,2,3 & Faq Decription 1,2,3 along with color of the custom accordion theme. If you change the value of these parameter it will affect immediately in the custom accordion.
