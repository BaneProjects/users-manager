# Users Manager App

This Angular application is designed for user management. It is built with Angular 18, incorporates Elf for state management, utilizes RxJS for handling reactive data streams, and uses SCSS for styling.

## Capabilities

This application provides the following capabilities for managing users.

1. **Table of Users**: Displays a list of users with the columns `id`,`name` and `activate`
   - Each row has a toggle button for changing the `active` status.

2. **Add User Modal**: Allows users to add a new user through a modal form.
   - Fields: `name` (with async validation for uniqueness name), `active` (default: false)
   - A "Create" button which becomes enabled only when the form is valid and the async validation has passed

3. **Button Enable Conditions**: The "Add User" button is only enabled if:
   - All users are active.
   - The total number of users is less than 5.

## Technologies

  **Angular 18**
  **Elf** (state managment libary)
  **RxJS**
  **SCSS**

  ## Setup
  1. Clone the repository.
  2. Run command for install dependencies: `npm install`
  3. Run the app: `ng serve`
