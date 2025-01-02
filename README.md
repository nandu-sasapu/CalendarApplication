# Calendar Application

This is a React-based Calendar Application with admin and user functionalities, built with a structured component hierarchy and Redux for state management.

---

## Project Structure

```
src/
├── components/
│   ├── Admin/
│   │   ├── CompanyManagement.js
│   │   ├── CommunicationMethods.js
│   │   └── Admin.js
│   ├── User/
│   │   ├── Dashboard.js
│   │   ├── CalendarView.js
│   │   └── ...
│   ├── Shared/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Home.js
|   |   └── ExampleComponent.js
├── redux/
│   ├── store.js
│   ├── actions/
│   │   ├── communicationActions.js
|   |   ├── companyActions.js
│   └── reducers/
│       ├── companyReducer.js
│       ├── communicationReducer.js
├── App.js
├── index.js
└── App.css
```

---

## Features

### User Features
- **Dashboard**: Displays a general overview for users.
- **Calendar View**: Users can interact with and view calendar events.

### Admin Features
- **Admin Authorization**: Only users with admin privileges can access the admin dashboard.
- **Company Management**: Add, edit, and delete companies.
- **Communication Methods**: Manage different communication methods.
- **Dynamic Data Rendering**: Displays the number of companies added and updates in real-time.

### Shared Features
- **Header**: Dynamic links based on admin authorization.
- **Footer**: Consistent footer across all pages.

---

## Technologies Used

- **Frontend**: React, React Router, Redux
- **State Management**: Redux
- **Styling**: CSS (with gradients and custom styles)

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **View in Browser**:
   Open `http://localhost:3000` in your browser.

---

## Git Commands for Setup

1. Initialize Git:
   ```bash
   git init
   ```
2. Add Files:
   ```bash
   git add .
   ```
3. Commit Changes:
   ```bash
   git commit -m "Initial commit"
   ```
4. Link to Remote Repository:
   ```bash
   git remote add origin <your-github-repo-url>
   ```
5. Push to Repository:
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## Usage

- Navigate to `/` for the **Dashboard**.
- Navigate to `/calendar` for the **Calendar View**.
- Navigate to `/admin` for the **Admin Dashboard** (admin access only).

---

## Future Enhancements

1. Integrate a backend for persistent data storage.
2. Add user authentication for secure access control.
3. Enhance the calendar functionality with drag-and-drop features.
4. Include testing with Jest and React Testing Library.

---

## Contributors

- **Your Name**: Project Lead

---

## License

This project is licensed under the MIT License.

