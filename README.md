# 🧑‍💼 Employee Management Web Application

This is a self-hosted Employee Management System built using **Angular 15** and **Nebular UI**, featuring employee and title management with smart tables, search, filter, export, and modular dialogs.

## 🚀 Features

### 👨‍💼 Employee List
- View all employees in a smart-table with:
  - Search by any field
  - Column toggle
  - Export to Excel
- Add new employees via dialog form
- Supports fields like Name, Title, Salary, Phone, SSN, Address, DOB, Join Date, Exit Date

### 📋 Title List
- Displays list of job titles with:
  - Min/Max Salary
  - Search and Excel Export
- Dynamically fetched via API

### 📦 Other Highlights
- Fully responsive layout using Nebular and Angular Flex Layout
- Modular architecture: reusable components, services, and pop-ups
- Custom smart table configuration with ng2-smart-table
- Date formatting, ID indexing, and safe data mapping
- Dialog-based Add/Edit employee support
- Configurable API endpoints for different environments

## 📁 Project Structure

src/
├── app/
│ ├── pages/
│ │ ├── employee-list/
│ │ ├── title-list/
│ │ └── shared/
│ ├── services/
│ ├── models/
│ └── ...
├── assets/
└── environments/



---

## ⚙️ Tech Stack

| Layer       | Tech Stack                              |
|-------------|------------------------------------------|
| Frontend    | Angular 15, Nebular, SCSS                |
| UI Tables   | ng2-smart-table                          |
| Export      | XLSX, FileSaver                          |
| Dialogs     | NbDialogService                          |
| Backend API | ASP.NET Core (`https://localhost:7151`)  |

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/employee-management.git
cd employee-management

**### 2. Install dependencies**
npm install

**3. Configure environment**
Update src/environments/environment.ts as needed:
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7151/api'
};

**4. Start the app**
ng serve

**5. Visit in browser**
http://localhost:4200

