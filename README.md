# Senior Project
It is called Make 4 You.
Design your dream house on Web Application and calculate the prices and 

This project is non profitable, only just want to share what i've done under 6 months with JavaScript,
Node.js and simple HTML/CSS for my final project.  

To open this project. Please do the following instruction below.
1. Install Node.js following this website https://nodejs.org/en/download/
2. Open Command Line type npm install sails --save to install Sails.js frameworks. (very similar with Node.js)
3. Install MySQL Workbrench(any version) to set the new database.
4. Create new schema and tables following the list of database down below
   - Create new Schema named userbase. 
   - Create new table named categories contanied with 4 column name   
     - id           Datatype int(11)  PK NOTNULL AI 
     - name         Datatype TEXT     
     - open         Datatype TEXT
     - createAt     Datatype DATETIME Default/Expression Current_TIMESTAMP
     - updateAt     Datatype DATETIME Default/Expression Current_TIMESTAMP
   - Create new table named items contained with 13 column name
     - id,          Datatype int(11)  PK NOTNULL AI
     - title,       Datatype TEXT     
     - category_id  Datatype int(11)
     - description  Datatype TEXT
     - width        Datatype TEXT
     - height       Datatype TEXT
     - price        Datatype int(11)
     - type         Datatype TEXT
     - picture_path Datatype TEXT
     - anime_path   Datatype TEXT
     - open         Datatype TEXT
     - createdAt    Datatype DATETIME Default/Expression Current_TIMESTAMP
     - updatedAt    Datatype DATETIME Default/Expression Current_TIMESTAMP
   - Create new table named contactor contained with 8 column name
     - id_contactor Datatype int(11)  PK NOTNULL AI
     - name         Datatype VARCHAR(255) 
     - surname      Datatype VARCHAR(255) 
     - tel          Datatype VARCHAR(255) 
     - email        Datatype VARCHAR(255) 
     - username     Datatype VARCHAR(255) 
     - type         Datatype VARCHAR(255) 
     - user_id      Datatype VARCHAR(255) 
   - Create new table named jobs contained with 11 column name
     - id           Datatype int(11)  PK NOTNULL AI
     - name         Datatype TEXT     
     - user_id      Datatype int(11)
     - user_name    Datatype TEXT
     - width        Datatype TEXT
     - height       Datatype TEXT
     - price        Datatype TEXT
     - job_path     Datatype LONGTEXT
     - picture_name Datatype LONGTEXT
     - createdAt    Datatype DATETIME Default/Expression Current_TIMESTAMP
     - updatedAt    Datatype DATETIME Default/Expression Current_TIMESTAMP
   - Create new table named users contained with 10 column name
     - id           Datatype int(11)  PK NOTNULL AI
     - first_name   Datatype TEXT     
     - last_name    Datatype int(11)
     - username     Datatype TEXT
     - password     Datatype TEXT
     - createdAt    Datatype DATETIME Default/Expression Current_TIMESTAMP
     - updatedAt    Datatype DATETIME Default/Expression Current_TIMESTAMP
     - email        Datatype TEXT
     - contactor_id Datatype varchar
