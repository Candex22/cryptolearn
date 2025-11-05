# 💰 CryptoLearn - Portal Educativo de Blockchain y Criptomonedas

> *"El conocimiento es la mejor inversión en el mundo cripto"*

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📋 Descripción

**CryptoLearn** es un sitio web informativo y educativo que explora la tecnología blockchain y el ecosistema de criptomonedas. El proyecto incluye información detallada sobre Bitcoin, Ethereum, contratos inteligentes, DeFi y recursos de aprendizaje para desarrolladores web interesados en Web3.

### 🎯 Objetivos del Proyecto

- Comprender los conceptos básicos de blockchain y descentralización
- Identificar la estructura de transacciones y bloques en blockchain
- Reconocer riesgos y beneficios del uso de criptomonedas
- Analizar el rol del programador web en proyectos blockchain
- Promover educación financiera digital y prevención de estafas

---

## ✨ Características

### 🌐 Páginas Principales

1. **Inicio**
   - Hero section con CTA
   - Visualización interactiva de blockchain (3 bloques conectados)
   - Cards informativas de Bitcoin, Ethereum y Altcoins
   - Sección "Por qué aprender Blockchain"

2. **Bitcoin** 
   - Historia y funcionamiento de Bitcoin
   - Estadísticas clave (Creación 2009, 21M supply, SHA-256)
   - 6 características principales (Descentralizado, Seguro, Transparente, etc.)
   - Caso de uso como reserva de valor

3. **Ethereum**
   - Explicación de la plataforma programable
   - Ejemplo de Smart Contract en Solidity
   - Características (Tokens ERC-20, NFTs, DeFi, dApps, PoS)
   - Información para desarrolladores web (Web3.js, Ethers.js)

4. **Aprende**
   - 3 rutas de aprendizaje (Principiante, Intermedio, Avanzado)
   - Recursos recomendados (Bitcoin.org, Ethereum.org, Binance Academy, Bit2Me)
   - Advertencia sobre estafas y seguridad
   - Glosario con 6 términos esenciales

### 🎨 Diseño y UX

- **Colores Corporativos**: Naranja Bitcoin (#f7931a), Azul Ethereum (#627eea)
- **Fondo Oscuro Profesional**: Gradiente azul marino a negro
- **Navegación SPA**: Cambio de páginas sin recargar
- **Animaciones Suaves**: Efectos hover, transiciones, scroll
- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Glassmorphism**: Efectos de transparencia y blur en cards

---

## 🚀 Instalación y Uso

### Prerequisitos

- Node.js v16 o superior
- npm o yarn

### Opción 1: Con Vite (Recomendado)

```bash
# 1. Crear proyecto con Vite
npm create vite@latest cryptolearn -- --template react

# 2. Entrar al directorio
cd cryptolearn

# 3. Instalar dependencias
npm install

# 4. Reemplazar src/App.jsx con el código del proyecto

# 5. Iniciar servidor de desarrollo
npm run dev
```

### Opción 2: Con Create React App

```bash
# 1. Crear proyecto
npx create-react-app cryptolearn

# 2. Entrar al directorio
cd cryptolearn

# 3. Reemplazar src/App.js con el código del proyecto

# 4. Iniciar servidor
npm start
```

### Opción 3: HTML Standalone

Si querés usar el sitio sin instalar nada, podés convertirlo a HTML puro usando las CDN de React:

```html
<!DOCTYPE html>
<html>
<head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        // Pegar aquí el código del componente
    </script>
</body>
</html>
```

---

## 📁 Estructura del Proyecto

```
cryptolearn/
├── src/
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globales (opcional)
├── public/
│   └── index.html              # HTML base
├── package.json                # Dependencias
├── vite.config.js              # Configuración Vite
└── README.md                   # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **React 18** | Framework principal para UI componetizada |
| **JavaScript ES6+** | Lenguaje de programación |
| **CSS-in-JS** | Estilos inline con objetos JavaScript |
| **React Hooks** | `useState`, `useEffect` para manejo de estado |
| **SPA Navigation** | Navegación sin recarga de página |

---

## 📚 Recursos Adicionales

### Documentación Oficial
- [Bitcoin.org](https://bitcoin.org/es/) - Documentación oficial de Bitcoin
- [Ethereum.org](https://ethereum.org/es/) - Guías de Ethereum en español

### Academias y Cursos
- [Binance Academy](https://academy.binance.com/es) - Cursos gratuitos
- [Bit2Me Academy](https://academy.bit2me.com/) - Formación completa
- [CriptoNoticias](https://www.criptonoticias.com/) - Actualidad cripto

### Para Desarrolladores
- [Web3.js Docs](https://web3js.readthedocs.io/)
- [Ethers.js Docs](https://docs.ethers.org/)
- [Solidity Docs](https://docs.soliditylang.org/)
- [Hardhat](https://hardhat.org/) - Framework de desarrollo

---

## ⚠️ Advertencias Importantes

### Seguridad
- ❌ **Nunca compartas tus claves privadas**
- ❌ **No caigas en promesas de "ganancias garantizadas"**
- ❌ **Verifica siempre las URLs** (cuidado con phishing)
- ✅ **Usa solo exchanges regulados y conocidos**
- ✅ **Investiga antes de invertir** (DYOR - Do Your Own Research)

### Inversión Responsable
> Este proyecto es **únicamente educativo**. No constituye asesoramiento financiero. Las criptomonedas son volátiles y pueden implicar pérdida total del capital invertido.

---

## 📞 Contacto

Para consultas sobre el proyecto:
- GitHub: Candex22
- Email: candemolinari20@gmail.com

---

<div align="center">

**Made with 💛 and ₿**

</div>
