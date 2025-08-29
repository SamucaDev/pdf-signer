
# PDF Signer
PDF Signer is a React application developed to sign PDF files in a simple and efficient way. The project follows the Atomic Design methodology to organize components modularly and reusable, making code maintenance and expansion easier.

## Atomic Design in the project
The project structure follows the Atomic Design approach:
- **Atoms**: Basic, reusable components (e.g., Button, Text, Spinner).
- **Molecules**: Combinations of atoms to create small functionalities (e.g., ButtonUpload, FileRow).
- **Organisms**: Larger, more complex components that combine molecules (e.g., UploadPanel).
- **Templates**: Page structures, combining organisms and other elements.
- **Pages**: Application pages (UploadPdf, ViewPdf).

This structure ensures modularity and maintainability, allowing features to be added or modified without affecting other parts of the project.

## Key Libraries and Tools
React & React DOM: Core library for building the interface.
- **TypeScript**: Static typing for greater safety and predictability.
- **Vite**: Fast development and build tool for improved performance.
- **TailwindCSS**: Utility-first CSS framework for rapid styling.
- **React PDF & pdfjs-dist**: Tools for rendering and manipulating PDF files.
- **Mock Server (Node.js & Express)**: Simulates backend APIs for local testing.

  

## Installation and Running
Clone the repository:
```md
git clone <REPOSITORY_URL>
cd pdf-signer
```

Install dependencies:
```md
npm install
```
  
 Start the mock server:
```md
npm run server
```

In another terminal, start the application:
```md
npm run dev
```

Open your browser and access:
```md
http://localhost:5173
```

## Project Structure
```bash
src/
 ├─ components/       # Atomic Design (Atoms, Molecules, Organisms, templates)
 ├─ pages/            # Main pages
 ├─ context/          # React contexts
 ├─ hooks/            # Custom hooks
 ├─ api/              # API calls
 └─ interfaces/       # TypeScript typings
mock-server/          # Mock server for backend

```

## Future Steps
This project is designed to be scalable and maintainable. Some planned improvements include:

- **Unit and Integration Tests** – Using Jest and React Testing Library to ensure code reliability.  
- **Performance Optimizations** – Implement lazy loading, code-splitting, and other best practices for fast rendering.  
- **Enhanced UI/UX** – Add animations, transitions, and improved mobile responsiveness.  
- **API Integration** – Connect with real backend APIs for dynamic data rendering.  
- **Accessibility Improvements** – Ensure compliance with accessibility standards for all users.  

These steps aim to align the project with industry best practices for high-performance, maintainable, and user-friendly front-end applications.