# Personal Website

This project is a personal website that includes a basic structure for a content management system (CMS). The website is built using TypeScript and includes various components, pages, and styles.

## Project Structure

```
personal-website
├── src
│   ├── cms
│   │   ├── admin.ts          # Manages the admin interface for the CMS
│   │   ├── models
│   │   │   └── content.ts    # Defines the Content model
│   │   └── services
│   │       └── contentService.ts # Provides services for managing content
│   ├── components
│   │   └── header.ts         # Renders the website's header
│   ├── pages
│   │   ├── about.ts          # Displays information about the website
│   │   ├── contact.ts        # Provides a contact form for users
│   │   └── home.ts           # Serves as the landing page
│   ├── styles
│   │   └── main.css          # Main styles for the website
│   └── index.ts              # Entry point of the application
├── public
│   └── index.html            # Main HTML file for the website
├── package.json               # Configuration file for npm
├── tsconfig.json             # Configuration file for TypeScript
└── README.md                 # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Build the project:
   ```
   npm run build
   ```

5. Start the development server:
   ```
   npm start
   ```

## Usage Guidelines

- The website consists of multiple pages including Home, About, and Contact.
- The CMS allows for content management through an admin interface.
- Customize the styles in `src/styles/main.css` to change the appearance of the website.
- Modify the components in `src/components` to update the website's layout and functionality.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.