# TFC - Trybe football club

The project's goal was to create a restful API that connects to a mySQL database via Sequelize in order to read, create, filter, update, the data and so on. The following routes were created: login, matches, teams, and leaderboard.

## Technologies used:

> ⚠️ Front: React.js and RTL. (Because the front-end was done by trybe staff, I did not write any of the code in the application's front-end. Therefore, will not be included in this repository

> Back: TypeScript, Node.js, Docker, Express, MySQL, Sequelize, JWT, bcrypt, and Mocha / Chai serve as the backend. TDD was used as an API development tool. Since I created the backend, you can find everything in the SRC folder.

# Final result:

> We begin by logging in: The validation is made by using jwt and bcrypt to encript the password when sending to the database.
> Then, we are able to search for matches, teams, and the ranking. As an admin, we are also allowed to update and create data.

<div>
   <img align="center" alt="capa" src="https://user-images.githubusercontent.com/95686401/199350760-ee1ae808-06e7-42d0-9efd-64ca8a2a663a.gif" />
</div>

<div>
   <img align="center" alt="capa" src="https://user-images.githubusercontent.com/95686401/199350834-f0328802-db26-4a87-97f2-f48dbe02bc4c.gif" />
</div>

## Tasks developed:

*task* | *status*
--- | :---:
1 - Develop in /app/backend/src/database in the corresponding masses, a migration and a model the table of users | :heavy_check_mark:
2 - Develop tests that cover at least 5 percent of the backend files in /src with a minimum of 7 lines covered | :heavy_check_mark:
3 - Develop the /login endpoint on the backend in a way that allows access with valid data on the frontend | :heavy_check_mark:
4 - Develop tests that cover at least 10 percent of the backend files in /src with a minimum of 19 lines covered | :heavy_check_mark:
5 - Develop the /login endpoint on the backend so that it does not allow access without providing an email on the frontend | :heavy_check_mark:
6 - Develop tests that cover at least 10 percent of the backend files in /src with a minimum of 19 lines covered | :heavy_check_mark:
7 - Develop the /login endpoint on the backend so it doesn't allow access without a password on the frontend | :heavy_check_mark:
8 - Develop tests that cover at least 20 percent of the backend files in /src with a minimum of 35 lines covered | :heavy_check_mark:
9 - Develop the /login endpoint on the backend so that it does not allow access with an invalid email on the frontend | :heavy_check_mark:
10 - Develop tests that cover at least 30 percent of the backend files in /src with a minimum of 45 lines covered | :heavy_check_mark:
11 - Develop the /login endpoint on the backend so that it does not allow access with an invalid password on the frontend | :heavy_check_mark:
12 - Develop the /login/validate endpoint on the backend so it pays data correctly on the frontend | :heavy_check_mark:
13 - Develop tests that cover at least 45 percent of the backend files in /src with a minimum of 70 lines covered | :heavy_check_mark:
14 - Develop in /app/backend/src/database in the corresponding masses, a migration and a template for the team table | :heavy_check_mark:
15 - Develop the /teams endpoint in the backend so that it can return all teams correctly | :heavy_check_mark:
16 - Develop the /teams/:id endpoint in the backend so that it can return data from a specific team | :heavy_check_mark:
17 - Develop tests that cover at least 60 percent of the backend files in /src with a minimum of 80 lines covered | :heavy_check_mark:
18 - Develop in /app/backend/src/database in the corresponding folders, a migration and a model for the matches table | :heavy_check_mark:
19 - Develop the /matches endpoint so that the data appears correctly on the matches screen in the frontend | :heavy_check_mark:
20 - Develop the /matches endpoint so that it is possible to filter the matches in progress in the frontend matches screen | :heavy_check_mark:
21 - Develop the /matches endpoint so that it is possible to filter the finished matches in the frontend matches screen | :heavy_check_mark:
22 - Develop tests that cover at least 80 percent of the backend files in /src with a minimum of 100 lines covered | :heavy_check_mark:
23 - Develop the /matches endpoint so that you can save a match with the inProgress status as true in the database | :heavy_check_mark:
24 - Develop the `/matches/:id/finish` endpoint so that you can change the inProgress status of a match to false in the database | :heavy_check_mark:
25 - Develop the /matches endpoint so that it is not possible to enter a match with equal teams | :heavy_check_mark:
26 - Develop the /matches endpoint so that it is not possible to enter a match with a team that does not exist in the teams table | :heavy_check_mark:
27 - Develop the /matches endpoint so that it is not possible to enter a match without a valid token | :heavy_check_mark:
28 - Develop the /matches endpoint so that you can update matches in progress | :heavy_check_mark:
29 - Develop the /leaderboard/home endpoint so that it is possible to filter the rankings of the teams when sending in the frontend ranking screen with the initial data from the database | :heavy_check_mark:
30 - Develop the /leaderboard/home endpoint so that it is possible to filter the rankings of the teams when they are home in the frontend ranking screen and when entering the match Corinthians 2 X 1 Internacional the table will be updated | :heavy_check_mark:

# 


<div>
   <img align="center" alt="capa" src="https://user-images.githubusercontent.com/95686401/201725174-cbebb21b-7951-4231-a898-ce52503c459e.png" />
</div>




