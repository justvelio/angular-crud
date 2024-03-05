

## Angular CRUD Operations	
Simple project made with TypeScript, Angular and Json-Server. Users can manipulate the database with creating, reading, updating and deleting entries. All entries are shown on the home page, while adding new ones are routed to another page. As a bonus, users can search by ID for exact entries.

## Overview
![Homepage](https://i.ibb.co/hXYmBkx/Screenshot-2024-03-05-220646.png)

## Getting Started
To run the project locally, follow these steps:
1. Clone this repository: `git clone https://github.com/justvelio/angular-crud.git `
2.  Navigate to the project directory: `cd angular-task`
3.  Install all dependencies: `npm install`
4.  Run the Json-Server in a new terminal, navigating to the project directory like in step 2 and typing: `npm run json-server`
5.  In your main terminal run the project: `ng serve`

## Key Functionalities
**Adding users**: From the navigation bar go to 'Add User' to fill in the form and click on 'Save' button.
![Add page](https://i.ibb.co/Gdj9JX9/Screenshot-2024-03-05-221111.png)
If everythig is filled correctly, a snackbar will appear:
![snackbar-success](https://i.ibb.co/xSpJ8ZW/Screenshot-2024-03-05-221454.png)

**Update users**: To edit entries information click on the pen icon and the update form modal will appear.
![edit-users](https://i.ibb.co/2880tdf/Screenshot-2024-03-05-221735.png)
If everything is filled correctly, a snackbar will appear.

**Delete users**: To delete entries click on the trash icon. A snackbar will appear if deleting is successfull: 
![delete-success](https://i.ibb.co/42d7T70/Screenshot-2024-03-05-222031.png)

**Search users by ID**: To search for a specific entry, type the desired ID in the searchbar:
![searchbar](https://i.ibb.co/xqM0W5S/Screenshot-2024-03-05-222214.png)
The list will be updated only with user's IDs containing the specific characters.

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Angular](https://angular.io/)
- [Json-Server](https://www.npmjs.com/package/json-server)
- [Angular Material UI](https://www.npmjs.com/package/@angular/material)
