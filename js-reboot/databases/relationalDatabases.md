# Relational Databases
#DBMS #DatabaseManagingSystems
- - - -
PostgreSQL is an example of a relational database. So what is a **relational database** exactly? 

### Communication 
How does a db communicate with a server (the backend)? All relational db use SQL, SQL allows us to communicate (similar to how HTTP did between the frontend and the backend. 


### Relational DB Breakdown
* They consist of two or more tables with columns and rows 

One example of this is that you can have a users table (so the table itself will be identified as users) and in this users table you will have many columns that will act as keys of the users. The values of for each user will be stored in rows. 

	* Some columns may be: fullName, username, dateCreated, gender, email.
	* Some rows may be: “Tony Nguyen”, “nguyntony”, “Oct 2020”, “Male”
	
* There may be other tables that have some sort of relation with another table, hence the name relational db. 

To continue our example from above, we may have another table named tweets, and this table will have a relation with our users table of which user tweeted what. Tweets will have columns (or keys) such as user, id, dateCreated, likes and the rows will hold the values. 

It is important to note and understand that you could have a users table along with a tweets columns but then this would get messy because of all the information that a tweet will contain. It is better to create a whole new table to store this information and somehow link the tables, such as by doing the username of the user who created the tweet. 

Another table that may exist is a following/followers table where you can know which users are following who. 

* The relation between tables is known as schema, and the schema must be clearly defined before any information can be added. 

You must know how you would organize your data and how they relate to one another which will allow you to create a structure that best suit your needs. There are many ways to create relations between data but it is up to the user to decide what is the best way to organize that data and still have the relation clearly shown. 

* Foreign keys, because relational db operate on relations between data, that piece of data that may connect one table to another is known as a foreign key.

In the example where we have a users table and a tweets table, the username may be a FK (foreign key) because we have a collection of users who are on twitter but the username will relate to which user tweeted what. 

* Primary keys, this is a unique identifier that represents each row in a table. 

In the users table, a user’s full name be act as a primary key to identify them specifically in that table. (Users may have the same name so an id which we can assign to the user may be a better way of identifying a specific user) 






