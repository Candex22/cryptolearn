import React, { useState, useEffect } from 'react';

const CryptoLearnWebsite = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={{...styles.header, background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)'}}>
        <nav style={styles.nav}>
          <div style={styles.logo}>💰 CryptoLearn</div>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <a onClick={() => navigateTo('inicio')} style={{...styles.link, color: currentPage === 'inicio' ? '#f7931a' : '#fff'}}>
                Inicio
              </a>
            </li>
            <li style={styles.navItem}>
              <a onClick={() => navigateTo('bitcoin')} style={{...styles.link, color: currentPage === 'bitcoin' ? '#f7931a' : '#fff'}}>
                Bitcoin
              </a>
            </li>
            <li style={styles.navItem}>
              <a onClick={() => navigateTo('ethereum')} style={{...styles.link, color: currentPage === 'ethereum' ? '#f7931a' : '#fff'}}>
                Ethereum
              </a>
            </li>
            <li style={styles.navItem}>
              <a onClick={() => navigateTo('aprende')} style={{...styles.link, color: currentPage === 'aprende' ? '#f7931a' : '#fff'}}>
                Aprende
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <main style={styles.main}>
        {currentPage === 'inicio' && <InicioPage navigateTo={navigateTo} />}
        {currentPage === 'bitcoin' && <BitcoinPage />}
        {currentPage === 'ethereum' && <EthereumPage />}
        {currentPage === 'aprende' && <AprendePage />}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>💡 <strong>CryptoLearn 2025</strong> - Educación en Blockchain y Criptomonedas</p>
        <p style={{...styles.footerText, marginTop: '0.5rem', fontSize: '0.9rem'}}>"El conocimiento es la mejor inversión en el mundo cripto"</p>
      </footer>
    </div>
  );
};

// PÁGINA INICIO
const InicioPage = ({ navigateTo }) => {
  return (
    <>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Descentraliza Tu Conocimiento</h1>
        <p style={styles.heroText}>Aprende sobre blockchain, criptomonedas y el futuro de las finanzas digitales de forma clara, segura y profesional</p>
        <button style={styles.ctaButton} onClick={() => navigateTo('aprende')}>Comenzar Ahora</button>
      </section>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Fundamentos de Blockchain</h2>

        <div style={styles.blockchainVisual}>
          <BlockComponent number="1" hash="0x3a7f..." />
          <div style={styles.chainLink}>⛓️</div>
          <BlockComponent number="2" hash="0x8c2d..." />
          <div style={styles.chainLink}>⛓️</div>
          <BlockComponent number="3" hash="0x5f91..." />
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Principales Criptomonedas</h2>

        <div style={styles.cardsGrid}>
          <Card icon="₿" title="Bitcoin" badge="Oro Digital" onClick={() => navigateTo('bitcoin')}>
            La primera criptomoneda descentralizada. Creada en 2009 por Satoshi Nakamoto, Bitcoin revolucionó el concepto de dinero digital sin necesidad de intermediarios.
          </Card>

          <Card icon="◆" title="Ethereum" badge="Smart Contracts" onClick={() => navigateTo('ethereum')}>
            Plataforma blockchain programable que permite crear contratos inteligentes y aplicaciones descentralizadas. La base del ecosistema DeFi y Web3.
          </Card>

          <Card icon="🔗" title="Altcoins" badge="Diversidad">
            Criptomonedas alternativas que ofrecen diferentes tecnologías y casos de uso. Incluyen proyectos innovadores pero también requieren análisis cuidadoso.
          </Card>
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Por Qué Aprender Blockchain</h2>

        <div style={styles.cardsGrid}>
          <Card icon="🌐" title="Descentralización">
            Elimina intermediarios y devuelve el control a los usuarios. Mayor transparencia, seguridad y autonomía en las transacciones digitales.
          </Card>

          <Card icon="💻" title="Oportunidades Dev">
            Los programadores web pueden desarrollar dApps, integrar wallets, crear interfaces DeFi y participar en el ecosistema Web3 en crecimiento.
          </Card>

          <Card icon="🛡️" title="Educación Financiera">
            Comprende los riesgos, identifica estafas y toma decisiones informadas en el mundo de las criptomonedas y las finanzas descentralizadas.
          </Card>
        </div>
      </div>
    </>
  );
};

// PÁGINA BITCOIN
const BitcoinPage = () => {
  return (
    <>
      <section style={{...styles.hero, background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.15) 0%, rgba(22, 33, 62, 1) 100%)'}}>
        <h1 style={styles.heroTitle}>₿ Bitcoin</h1>
        <p style={styles.heroText}>El oro digital que inició la revolución blockchain</p>
      </section>

      <div style={styles.container}>
        <div style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>¿Qué es Bitcoin?</h2>
          <div style={styles.textBlock}>
            <p style={styles.paragraph}>
              Bitcoin es la primera criptomoneda descentralizada del mundo, creada en 2009 por una persona o grupo bajo el seudónimo de <strong>Satoshi Nakamoto</strong>. Es un sistema de dinero electrónico peer-to-peer que permite realizar transacciones sin necesidad de intermediarios como bancos o gobiernos.
            </p>
            <p style={styles.paragraph}>
              A diferencia del dinero tradicional, Bitcoin opera sobre una red descentralizada llamada <strong>blockchain</strong>, donde cada transacción es verificada por miles de nodos en todo el mundo, garantizando transparencia y seguridad.
            </p>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <StatCard icon="📅" title="Creación" value="2009" />
          <StatCard icon="💎" title="Suministro Máximo" value="21 Millones" />
          <StatCard icon="⚡" title="Tiempo de Bloque" value="~10 min" />
          <StatCard icon="🔐" title="Algoritmo" value="SHA-256" />
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Características Principales</h2>

        <div style={styles.cardsGrid}>
          <Card icon="🌍" title="Descentralizado">
            No existe una autoridad central que controle Bitcoin. La red es mantenida por miles de nodos distribuidos globalmente.
          </Card>

          <Card icon="🔒" title="Seguro">
            Utiliza criptografía avanzada (SHA-256) y la prueba de trabajo (Proof of Work) para proteger las transacciones y prevenir fraudes.
          </Card>

          <Card icon="📊" title="Transparente">
            Todas las transacciones son públicas y pueden ser verificadas en la blockchain. Sin embargo, las identidades permanecen pseudónimas.
          </Card>

          <Card icon="💸" title="Divisible">
            Un Bitcoin puede dividirse hasta en 100 millones de unidades llamadas "satoshis", permitiendo microtransacciones.
          </Card>

          <Card icon="🚫" title="Resistente a Censura">
            Ningún gobierno o entidad puede congelar, confiscar o bloquear tus Bitcoins si controlas tus claves privadas.
          </Card>

          <Card icon="📈" title="Escaso">
            Solo existirán 21 millones de Bitcoins, lo que lo convierte en un activo deflacionario similar al oro.
          </Card>
        </div>

        <div style={styles.infoBox}>
          <h3 style={{color: '#f7931a', marginBottom: '1rem'}}>🎯 Caso de Uso Principal</h3>
          <p style={styles.paragraph}>
            Bitcoin funciona principalmente como una <strong>reserva de valor</strong> y un sistema de pago descentralizado. Muchos inversores lo consideran "oro digital" debido a su escasez programada y su capacidad de proteger el valor contra la inflación.
          </p>
        </div>
      </div>
    </>
  );
};

// PÁGINA ETHEREUM
const EthereumPage = () => {
  return (
    <>
      <section style={{...styles.hero, background: 'linear-gradient(135deg, rgba(98, 126, 234, 0.15) 0%, rgba(22, 33, 62, 1) 100%)'}}>
        <h1 style={styles.heroTitle}>◆ Ethereum</h1>
        <p style={styles.heroText}>La computadora mundial descentralizada</p>
      </section>

      <div style={styles.container}>
        <div style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>¿Qué es Ethereum?</h2>
          <div style={styles.textBlock}>
            <p style={styles.paragraph}>
              Ethereum es una <strong>plataforma blockchain programable</strong> creada por Vitalik Buterin en 2015. A diferencia de Bitcoin, que se enfoca en transacciones de valor, Ethereum permite ejecutar <strong>contratos inteligentes</strong> (smart contracts): programas que se ejecutan automáticamente cuando se cumplen ciertas condiciones.
            </p>
            <p style={styles.paragraph}>
              Esta capacidad de programación convierte a Ethereum en la base del ecosistema <strong>Web3</strong>, permitiendo crear aplicaciones descentralizadas (dApps), tokens, NFTs, y protocolos DeFi (finanzas descentralizadas).
            </p>
          </div>
        </div>

        <div style={styles.statsGrid}>
          <StatCard icon="📅" title="Lanzamiento" value="2015" />
          <StatCard icon="👨‍💻" title="Creador" value="V. Buterin" />
          <StatCard icon="⚡" title="Tiempo de Bloque" value="~12 seg" />
          <StatCard icon="🔄" title="Consenso" value="Proof of Stake" />
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Smart Contracts</h2>

        <div style={styles.codeBox}>
          <div style={styles.codeHeader}>
            <span>📝 Ejemplo de Smart Contract</span>
            <span style={{fontSize: '0.8rem', color: '#999'}}>Solidity</span>
          </div>
          <pre style={styles.codeContent}>{`pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public storedData;
    
    function set(uint256 x) public {
        storedData = x;
    }
    
    function get() public view returns (uint256) {
        return storedData;
    }
}`}</pre>
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Características de Ethereum</h2>

        <div style={styles.cardsGrid}>
          <Card icon="🤖" title="Contratos Inteligentes">
            Programas autoejecutables que funcionan exactamente como fueron programados, sin posibilidad de censura, fraude o interferencia.
          </Card>

          <Card icon="🪙" title="Tokens ERC-20">
            Estándar para crear tokens fungibles. Miles de criptomonedas como USDT, LINK y UNI están construidas sobre Ethereum.
          </Card>

          <Card icon="🎨" title="NFTs (ERC-721)">
            Tokens no fungibles que representan propiedad única de activos digitales: arte, música, coleccionables, propiedades virtuales.
          </Card>

          <Card icon="🏦" title="DeFi">
            Finanzas descentralizadas: préstamos, intercambios, staking y yield farming sin intermediarios bancarios.
          </Card>

          <Card icon="🌐" title="dApps">
            Aplicaciones descentralizadas que funcionan en la blockchain: juegos, redes sociales, marketplaces, DAOs.
          </Card>

          <Card icon="♻️" title="Proof of Stake">
            Desde 2022, Ethereum usa PoS en lugar de PoW, reduciendo el consumo energético en 99.95%.
          </Card>
        </div>

        <div style={styles.infoBox}>
          <h3 style={{color: '#627eea', marginBottom: '1rem'}}>💼 Para Programadores Web</h3>
          <p style={styles.paragraph}>
            Los desarrolladores pueden usar <strong>Web3.js</strong> o <strong>Ethers.js</strong> para conectar aplicaciones web con la blockchain de Ethereum. Esto permite crear wallets, interfaces para dApps, dashboards DeFi y mucho más.
          </p>
          <p style={styles.paragraph}>
            Ejemplo: conectar MetaMask, firmar transacciones, interactuar con smart contracts desde React o vanilla JavaScript.
          </p>
        </div>
      </div>
    </>
  );
};

// PÁGINA APRENDE
const AprendePage = () => {
  return (
    <>
      <section style={{...styles.hero, background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(22, 33, 62, 1) 100%)'}}>
        <h1 style={styles.heroTitle}>📚 Aprende Blockchain</h1>
        <p style={styles.heroText}>Recursos y guías para comenzar tu viaje en el mundo cripto</p>
      </section>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Rutas de Aprendizaje</h2>

        <div style={styles.cardsGrid}>
          <Card icon="🌱" title="Nivel Principiante" badge="Comienza aquí">
            <ul style={styles.list}>
              <li>¿Qué es blockchain?</li>
              <li>Bitcoin y criptomonedas básicas</li>
              <li>Cómo usar una wallet</li>
              <li>Seguridad y mejores prácticas</li>
            </ul>
          </Card>

          <Card icon="📈" title="Nivel Intermedio" badge="Profundiza">
            <ul style={styles.list}>
              <li>Smart contracts en Ethereum</li>
              <li>DeFi: Uniswap, Aave, Compound</li>
              <li>Tokens ERC-20 y ERC-721</li>
              <li>DAOs y gobernanza</li>
            </ul>
          </Card>

          <Card icon="🚀" title="Nivel Avanzado" badge="Desarrolla">
            <ul style={styles.list}>
              <li>Desarrollo con Solidity</li>
              <li>Web3.js y Ethers.js</li>
              <li>Integración con React</li>
              <li>Deploy de dApps</li>
            </ul>
          </Card>
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Recursos Recomendados</h2>

        <div style={styles.resourcesGrid}>
          <ResourceCard
            title="📖 Bitcoin.org"
            description="Documentación oficial de Bitcoin"
            link="bitcoin.org"
            color="#f7931a"
          />
          <ResourceCard
            title="📘 Ethereum.org"
            description="Guías oficiales de Ethereum"
            link="ethereum.org"
            color="#627eea"
          />
          <ResourceCard
            title="🎓 Binance Academy"
            description="Cursos gratuitos en español"
            link="academy.binance.com"
            color="#f0b90b"
          />
          <ResourceCard
            title="📚 Bit2Me Academy"
            description="Formación completa cripto"
            link="academy.bit2me.com"
            color="#00d4aa"
          />
        </div>

        <div style={styles.infoBox}>
          <h3 style={{color: '#f7931a', marginBottom: '1rem'}}>⚠️ Advertencia Importante</h3>
          <p style={styles.paragraph}>
            <strong>Evita estafas:</strong> Nunca compartas tus claves privadas, desconfía de promesas de "ganancias garantizadas", verifica siempre las URLs (phishing), y usa solo exchanges regulados. Si suena demasiado bueno para ser verdad, probablemente sea una estafa.
          </p>
        </div>

        <h2 style={{...styles.sectionTitle, marginTop: '4rem'}}>Glosario Rápido</h2>

        <div style={styles.glossaryGrid}>
          <GlossaryItem term="Blockchain" definition="Cadena de bloques donde se registran todas las transacciones de forma inmutable." />
          <GlossaryItem term="Wallet" definition="Cartera digital para almacenar criptomonedas. Puede ser software o hardware." />
          <GlossaryItem term="Hash" definition="Código único generado criptográficamente que identifica un bloque o transacción." />
          <GlossaryItem term="Mining" definition="Proceso de validar transacciones y crear nuevos bloques usando poder computacional." />
          <GlossaryItem term="Gas Fee" definition="Comisión pagada en Ethereum para ejecutar transacciones o smart contracts." />
          <GlossaryItem term="DeFi" definition="Finanzas Descentralizadas. Servicios financieros sin intermediarios tradicionales." />
        </div>
      </div>
    </>
  );
};

// COMPONENTES REUTILIZABLES
const Card = ({ icon, title, badge, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        borderColor: isHovered ? '#f7931a' : 'rgba(247, 147, 26, 0.3)',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: isHovered ? '0 20px 40px rgba(247, 147, 26, 0.3)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span style={styles.cardIcon}>{icon}</span>
      <h3 style={styles.cardTitle}>{title}</h3>
      <div style={styles.cardContent}>{children}</div>
      {badge && <span style={styles.cardBadge}>{badge}</span>}
    </div>
  );
};

const BlockComponent = ({ number, hash }) => {
  return (
    <div style={styles.block}>
      <div style={styles.blockNumber}>Bloque {number}</div>
      <p style={styles.blockHash}>Hash: {hash}</p>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div style={styles.statCard}>
      <div style={styles.statIcon}>{icon}</div>
      <div style={styles.statTitle}>{title}</div>
      <div style={styles.statValue}>{value}</div>
    </div>
  );
};

const ResourceCard = ({ title, description, link, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        ...styles.resourceCard, 
        borderLeftColor: color,
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 style={{color: color, marginBottom: '0.5rem', fontSize: '1.1rem'}}>{title}</h4>
      <p style={{color: '#d0d0d0', fontSize: '0.9rem', marginBottom: '0.5rem'}}>{description}</p>
      <span style={{color: '#999', fontSize: '0.8rem'}}>🔗 {link}</span>
    </div>
  );
};

const GlossaryItem = ({ term, definition }) => {
  return (
    <div style={styles.glossaryItem}>
      <strong style={{color: '#f7931a', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>{term}</strong>
      <p style={{color: '#d0d0d0', fontSize: '0.95rem', margin: 0, lineHeight: 1.6}}>{definition}</p>
    </div>
  );
};

// ESTILOS
const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    backdropFilter: 'blur(10px)',
    padding: '1.2rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    borderBottom: '2px solid #f7931a',
    transition: 'background 0.3s ease',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#f7931a',
    textShadow: '0 0 20px rgba(247, 147, 26, 0.5)',
  },
  navLinks: {
    display: 'flex',
    gap: '2.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
    padding: 0,
  },
  link: {
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1.05rem',
    textDecoration: 'none',
  },
  main: {
    paddingTop: '80px',
    width: '202vh',
  },
  hero: {
    padding: '6rem 2rem 5rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(247, 147, 26, 0.1) 0%, rgba(98, 126, 234, 0.1) 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    color: '#f7931a',
    textShadow: '0 0 30px rgba(247, 147, 26, 0.5)',
    fontWeight: 700,
  },
  heroText: {
    fontSize: '1.3rem',
    maxWidth: '750px',
    margin: '0 auto 2.5rem',
    color: '#e0e0e0',
    lineHeight: 1.6,
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #f7931a 0%, #ff6b35 100%)',
    color: '#fff',
    padding: '1.2rem 3.5rem',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(247, 147, 26, 0.4)',
    transition: 'all 0.3s ease',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#f7931a',
    fontWeight: 700,
  },
  blockchainVisual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    margin: '3rem 0',
    flexWrap: 'wrap',
  },
  block: {
    background: 'rgba(98, 126, 234, 0.15)',
    border: '2px solid #627eea',
    borderRadius: '12px',
    padding: '1.5rem',
    width: '160px',
    textAlign: 'center',
  },
  blockNumber: {
    fontWeight: 'bold',
    color: '#627eea',
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  blockHash: {
    fontSize: '0.85rem',
    color: '#999',
    margin: 0,
  },
  chainLink: {
    color: '#f7931a',
    fontSize: '2rem',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(247, 147, 26, 0.3)',
    borderRadius: '20px',
    padding: '2rem',
    transition: 'all 0.4s ease',
  },
  cardIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.6rem',
    marginBottom: '1rem',
    color: '#f7931a',
    fontWeight: 600,
  },
  cardContent: {
    lineHeight: 1.7,
    color: '#d0d0d0',
    fontSize: '1rem',
  },
  cardBadge: {
    display: 'inline-block',
    background: 'rgba(247, 147, 26, 0.2)',
    color: '#f7931a',
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    marginTop: '1rem',
    fontWeight: 'bold',
  },
  footer: {
    background: 'rgba(0, 0, 0, 0.8)',
    textAlign: 'center',
    padding: '2.5rem 2rem',
    marginTop: '4rem',
    borderTop: '2px solid #f7931a',
  },
  footerText: {
    color: '#d0d0d0',
    margin: 0,
  },
  contentSection: {
    marginBottom: '3rem',
  },
  textBlock: {
    background: 'rgba(255, 255, 255, 0.04)',
    padding: '2rem',
    borderRadius: '15px',
    border: '1px solid rgba(247, 147, 26, 0.2)',
  },
  paragraph: {
    lineHeight: 1.8,
    color: '#d0d0d0',
    marginBottom: '1rem',
    fontSize: '1.05rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    margin: '3rem 0',
  },
  statCard: {
    background: 'rgba(247, 147, 26, 0.08)',
    border: '2px solid rgba(247, 147, 26, 0.3)',
    borderRadius: '15px',
    padding: '2rem 1.5rem',
    textAlign: 'center',
  },
  statIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.8rem',
  },
  statTitle: {
    color: '#999',
    fontSize: '0.95rem',
    marginBottom: '0.5rem',
  },
  statValue: {
    color: '#f7931a',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  infoBox: {
    background: 'rgba(247, 147, 26, 0.06)',
    border: '2px solid rgba(247, 147, 26, 0.3)',
    borderRadius: '15px',
    padding: '2rem',
    marginTop: '3rem',
  },
  codeBox: {
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '12px',
    overflow: 'hidden',
    marginTop: '2rem',
    border: '1px solid rgba(247, 147, 26, 0.2)',
  },
  codeHeader: {
    background: 'rgba(247, 147, 26, 0.15)',
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(247, 147, 26, 0.3)',
    color: '#f7931a',
    fontWeight: 600,
  },
  codeContent: {
    padding: '1.5rem',
    color: '#e0e0e0',
    fontSize: '0.9rem',
    overflowX: 'auto',
    margin: 0,
    fontFamily: "'Courier New', monospace",
  },
  list: {
    color: '#d0d0d0',
    lineHeight: 2,
    paddingLeft: '1.5rem',
    margin: 0,
  },
  resourcesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  resourceCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.8rem',
    borderRadius: '12px',
    borderLeft: '4px solid',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  glossaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  glossaryItem: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid rgba(247, 147, 26, 0.2)',
    transition: 'all 0.3s ease',
  },
};

export default CryptoLearnWebsite;