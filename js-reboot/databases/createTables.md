# Create Tables
#DBMS #SQL
- - - -
You can do this in your terminal, after installing PostgreSQL, you can launch…

```sql
psql {database_name} 
// you will be taken to the psql environment for that database
CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
```
* `CREATE TABLE` is SQL language 
* if you run this, you will get an error because type datatype does not exist, you will need to specify the datatype that our db knows.

There are a few datatypes: strings, numeric, date & time. 
[Datatypes resource](https://www.postgresqltutorial.com/postgresql-data-types/)


```sql
CREATE TABLE users (name text, age smallint, birthdate date);
```


