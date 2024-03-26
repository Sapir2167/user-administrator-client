# User Amdinistrator Application Client

## Features

- **Display Users**: All Users are displayed in UserList component using MUI table.
- **Delete Users**: Users can be deleted by clicking the delete button in their row inside the table.
- **Add Users**: Users are added by using UserForm component utilizing MUI form. All the feilds are mandatory. Email is being validated as valid.

## Installation

To run the application locally, follow these steps:

1. Clone this repository to your local machine:

   git clone https://github.com/Sapir2167/user-administrator-client.git

2. Navigate to the project directory:

   cd user-administrator-client

3. Install dependencies using npm:

   npm install

## Usage

Once you've installed the dependencies, you can start the development server:

npm start

## Configuration

The application can be configured via environment variables. Create a `.env` file in the root directory of the project and add the following variables:

REACT_APP_API_URL=http://localhost:3000/api

## Deployment

To deploy the application to production, follow these steps:

1. Build the production-ready bundle:

   npm run build

2. Deploy the contents of the `build` directory to your web server.

## Features for future development

**Security**: Passwords are not being send back to the client. In the DB there are stored hashed as extra security measure.

- **Enhance User Experience**: Display Users more efficiently - Users will be displayed in optimized way, rendering to the DOM under usersList only the part of the users array that can fit in the view port. In order ro enhance client performance.
  Add designed success/error/info/warning notifications in a unite unility to be served in the entire application. We can think about adding pagination, or adding a max height for the users table and do the scroll mechanism I described earlier.

  **Generic Development (hooks)**: More effectice rror handeling, raise relevant error for each usecase as detailed as possible for better user experience. Costomise own hooks such useFetch to wrap communication with the server.

- **Testings**: Add unit testing for components, functions using Jest. Add integration testings, snapshot testings, accessability testings, performanc testings and E2E testings using cypress.

- **Desing**: A better design for the app is creating a seperate page for each functionality. With additional routing we can add a menu for our app and each logic part of the application sits seperatly. I united them here for simplicity.
