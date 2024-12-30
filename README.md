# Portfolio

A personal portfolio built with React and modern web development tools. The portfolio includes sections like Hero, About, Skills, Projects, and Contact, with a dynamic background and customizable themes.

## Project Setup

To set up the project on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Dineshbabu290904/portfolio.git
```

### 2. Install Dependencies

```bash
cd portfolio
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

### 4. Start the Development Server

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
portfolio/
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── assets/
│    └── images/
├── src/
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Navbar/
│ │ │ ├── Footer/
│ │ │ └── Layout/
│ │ ├── sections/
│ │ │ ├── Hero/
│ │ │ ├── About/
│ │ │ ├── Skills/
│ │ │ ├── Projects/
│ │ │ └── Contact/
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ ├── Card/
│ │ │ └── Input/
│ │ └── 3d/
│ │    └── Background3D/
│ ├── context/
│ │ └── ThemeContext/
│ ├── hooks/
│ │ ├── useTheme.js
│ │ └── useScrollPosition.js
│ ├── styles/
│ │ ├── theme.js
│ │ ├── variables.css
│ │ └── global.css
│ ├── utils/
│ │ ├── animations.js
│ │ └── helpers.js
│ ├── assets/
│ │ ├── images/
│ │ └── icons/
│ └── App.jsx
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json (optional)
├── vite.config.js
└── package.json
```

## Customization

You can easily customize the themes, components, and styles of the portfolio.

### 1. Themes

There are two main themes: light and dark. You can define custom colors for each theme in `src/styles/theme.js`.

#### Light Theme

```javascript
export const lightTheme = {
  primary: '#2575fc',
  secondary: '#6a11cb',
  background: '#ffffff',
  text: '#2c3e50',
  // Add custom colors
};
```

#### Dark Theme

```javascript
export const darkTheme = {
  primary: '#2575fc',
  secondary: '#6a11cb',
  background: '#0f1624',
  text: '#ffffff',
  // Add custom colors
};
```

#### Example Code (Stars Animation):

```javascript
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

function Stars(props) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <pointsMaterial size={0.02} color="#ffffff" />
    </mesh>
  );
}
```

## Styles

The portfolio is responsive and uses media queries to adapt to different screen sizes:

```css
/* Mobile */
@media (max-width: 767px) {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop styles */
}
```

## Scripts

Here are the available npm scripts to manage your development and production workflow:

- **Start Development Server**

```bash
npm run dev
```

- **Build for Production**

```bash
npm run build
```

- **Preview Production Build**

```bash
npm run preview
```

- **Lint Code**

```bash
npm run lint
```

- **Format Code**

```bash
npm run format
```

- **Run Tests**

```bash
npm run test
```

## Troubleshooting

### Common Issues and Solutions

- **Issue**: The development server is not starting.
  - **Solution**: Ensure all dependencies are installed by running `npm install` and try again.

- **Issue**: The app looks broken on mobile.
  - **Solution**: Check for missing media query styles or use Chrome Developer Tools to simulate mobile view.

### Performance Optimization

- **Code Splitting**: Use dynamic imports to split the code into smaller bundles for faster loading.
- **Image Optimization**: Use WebP images for better compression and faster load times.

## Deployment

You can deploy your portfolio on various platforms. Here are a few options:

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployment.
- **Netlify**: Similar to Vercel, connect your repository and deploy with Netlify.
- **GitHub Pages**: Deploy using `gh-pages` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React for building the user interface
- Vite for fast development and build process
- Bootstrap for styling and responsive layout

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Dinesh Babu Surapaneni - [@dineshbabusurapaneni](https://linkedin.com/in/dinesh-babu-surapaneni) - dineshbabusurapaneni@gmail.com

Project Link: [https://github.com/Dineshbabu290904/portfolio](https://github.com/Dineshbabu290904/portfolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [FontAwesome](https://fontawesome.com/)
- [Create React App](https://create-react-app.dev/)