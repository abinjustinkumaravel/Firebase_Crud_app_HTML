# Firebase CRUD App with HTML, CSS, and JavaScript

This project is a simple web application that allows users to submit and manage their details using a form. It integrates with Firebase Firestore to perform CRUD (Create, Read, Update, Delete) operations. The project uses Vite for development setup, and Firebase configuration is securely managed using environment variables.

## Repository

You can find the project repository on GitHub: [Firebase CRUD App HTML](https://github.com/abinjustinkumaravel/Firebase_Crud_app_HTML.git)

## Project Structure

```
Firebase_Crud_app_HTML/
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.ico
└── src/
    ├── main.js
    ├── script.js
    └── style.css
```

### File Explanation

- **.env**: Contains Firebase configuration keys.
- **vite.config.js**: Vite configuration file to manage environment variables.
- **index.html**: The main HTML file with the form.
- **src/main.js**: Entry point for JavaScript modules.
- **src/script.js**: Handles Firebase setup and form submission logic.
- **src/style.css**: Basic styling for the form.

## Prerequisites

- Node.js installed on your machine.
- A Firebase account with a Firestore database set up.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abinjustinkumaravel/Firebase_Crud_app_HTML.git
   cd Firebase_Crud_app_HTML
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_ID=your_app_id
   ```

## Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start the server, and you can view the app at `http://localhost:5173`.

## Deployment

For production deployment, build the app using:

```bash
npm run build
```

This will generate the production-ready files in the `dist` folder.

## Usage

1. Open the form in your web browser at `http://localhost:5173`.
2. Fill in the details (Name, Email, Age) and click "Submit".
3. The data will be stored in your Firebase Firestore database.

## Technologies Used

- **Vite**: Fast front-end build tool
- **Firebase Firestore**: NoSQL database for data storage
- **HTML/CSS**: Front-end structure and styling
- **JavaScript (Vanilla)**: Logic and Firebase integration

## Environment Variables

- The Firebase configuration is stored in the `.env` file.
- Vite automatically reads variables prefixed with `VITE_` from the `.env` file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
