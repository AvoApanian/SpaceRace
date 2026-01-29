import React, { useState, useEffect } from 'react';
import { Camera, Rocket, Users, Globe, Satellite, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './SpaceConquest.css';

interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface StarProps {
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

const StarElement: React.FC<StarProps> = ({ left, top, delay, duration, size }) => (
  <div
    className="star"
    style={{
      left: `${left}%`,
      top: `${top}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
    }}
  />
);

const ShootingStar: React.FC<{ delay: number }> = ({ delay }) => (
  <div
    className="shooting-star"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 50}%`,
      animationDelay: `${delay}s`,
    }}
  />
);

const TimelineItem: React.FC<{ year: string; children: React.ReactNode; delay?: number }> = ({ 
  year, 
  children, 
  delay = 0 
}) => (
  <div 
    className="timeline-item"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="timeline-year">{year}</div>
    <div className="timeline-content">{children}</div>
  </div>
);

const Card: React.FC<{ 
  title: string; 
  icon?: React.ReactNode; 
  children: React.ReactNode;
  delay?: number;
}> = ({ title, icon, children, delay = 0 }) => (
  <div 
    className="card"
    style={{ animationDelay: `${delay}s` }}
  >
    {icon && <div className="card-icon">{icon}</div>}
    <h3 className="card-title">{title}</h3>
    <div className="card-content">{children}</div>
  </div>
);

    const SpaceConquest: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [stars, setStars] = useState<StarProps[]>([]);
    const [shootingStars, setShootingStars] = useState<number[]>([]);

    useEffect(() => {
        const generatedStars: StarProps[] = Array.from({ length: 200 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
        size: Math.random() * 2 + 1,
        }));
        setStars(generatedStars);

        const generatedShootingStars = Array.from({ length: 5 }, (_, i) => i * 2);
        setShootingStars(generatedShootingStars);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };


    const slides: SlideData[] = [
    {
        id: 0,
        title: 'EXPOSÉ HISTOIRE',
        subtitle: 'La conquête spatiale durant la guerre froide',
        icon: <Rocket className="main-icon" size={80} />,
        content: (
        <p>
            EXPOSÉ HISTOIRE - La conquête spatiale durant la guerre froide
        </p>
        ),
    },

    {
        id: 1,
        title: 'Introduction',
        content: (
        <>
            <p>
            Pendant la guerre froide, les deux grandes puissances, les États-Unis et l’Union soviétique,
            s’opposent sans s’affronter directement, en menant une compétition dans de nombreux domaines,
            dont la conquête de l’espace.
            </p>
            <p>
            Chaque réussite spatiale est alors perçue comme la preuve de la force d’un modèle politique
            et économique, communiste pour l’URSS et capitaliste pour les États-Unis, et sert à impressionner
            le reste du monde.
            </p>
            <p>
            On peut donc se demander comment la conquête de l’espace prolonge cette rivalité tout en préparant,
            à terme, de nouvelles formes de coopération entre les anciennes puissances ennemies.
            </p>
        </>
        ),
    },

    {
        id: 2,
        title: 'I. Les débuts de la conquête spatiale',
        content: (
        <>
            <p>
            À l’origine, la conquête spatiale repose sur les progrès réalisés pendant la Seconde Guerre mondiale,
            en particulier les missiles V2 allemands, dont les technologies sont récupérées et améliorées par
            les États-Unis et l’URSS après 1945.
            </p>
            <p>
            Ces fusées, d’abord pensées comme des armes, servent ensuite de base au développement des premiers
            lanceurs capables d’envoyer des engins au-delà de l’atmosphère terrestre.
            </p>
            <p>
            Dès 1949, les États-Unis testent leurs fusées en envoyant dans l’espace le singe Albert II,
            premier animal américain à franchir la limite de l’atmosphère.
            </p>
            <p>
            Cet essai marque une étape dans la compréhension des effets du vol spatial sur les êtres vivants.
            </p>
        </>
        ),
    },

    {
        id: 3,
        title: 'Spoutnik et Laïka',
        content: (
        <>
            <p>
            Le véritable tournant survient le 4 octobre 1957, lorsque l’Union soviétique lance Spoutnik-1,
            le premier satellite artificiel de l’histoire.
            </p>
            <p>
            Ce petit objet, mis en orbite autour de la Terre, prouve que l’URSS maîtrise des fusées suffisamment
            puissantes pour atteindre l’espace, ce qui suscite un choc et une grande inquiétude aux États-Unis,
            sur le plan militaire comme symbolique.
            </p>
            <p>
            Quelques semaines plus tard, l’URSS envoie à bord de Spoutnik-2 la chienne Laïka, premier être vivant
            placé en orbite autour de la Terre, marquant une étape scientifique et un puissant succès de propagande.
            </p>
        </>
        ),
    },

    {
        id: 4,
        title: 'Création de la NASA',
        content: (
        <>
            <p>
            En réaction, les États-Unis créent en 1958 la NASA, une agence spatiale chargée de coordonner
            l’ensemble de leurs programmes d’exploration spatiale et de combler leur retard.
            </p>
            <p>
            La même année, ils lancent leur premier satellite, Explorer 1, qui marque leur entrée officielle
            dans la course à l’espace et ouvre une période de rivalité intense entre les deux superpuissances.
            </p>
        </>
        ),
    },

    {
        id: 5,
        title: 'Conclusion',
        content: (
        <>
            <p>
            Ainsi, la conquête spatiale a d’abord prolongé la logique de la guerre froide en opposant
            les États-Unis et l’URSS dans une course symbolique et technologique, dont le point culminant
            est le premier pas de l’homme sur la Lune en 1969.
            </p>
            <p>
            Cette compétition a servi à affirmer la puissance et à défendre des modèles idéologiques
            antagonistes, tout en stimulant des progrès techniques considérables.
            </p>
            <p>
            Progressivement, cependant, l’espace est devenu un terrain de coopération, comme le montre
            la mission Apollo-Soyouz puis la création de la Station spatiale internationale.
            </p>
            <p>
            Aujourd’hui encore, l’espace demeure un enjeu stratégique et scientifique majeur, où se mêlent
            rivalités, innovations et projets communs entre nations et acteurs privés.
            </p>
        </>
        ),
    },
    ];


  return (
    <div className="space-conquest-app">
      <div className="stars-background">
        {stars.map((star, index) => (
          <StarElement key={`star-${index}`} {...star} />
        ))}
        {shootingStars.map((delay, index) => (
          <ShootingStar key={`shooting-${index}`} delay={delay} />
        ))}
      </div>

      <div className="planet planet-1" />
      <div className="planet planet-2" />

      <nav className="top-nav">
        <button onClick={() => goToSlide(0)} className="nav-button">
          Accueil
        </button>
        <div className="nav-arrows">
          <button onClick={prevSlide} className="nav-button">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="nav-button">
            <ChevronRight size={20} />
          </button>
        </div>
      </nav>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="slides-container">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slide ${currentSlide === slide.id ? 'active' : ''}`}
          >
            <div className="slide-content">
              {slide.icon && <div className="slide-icon">{slide.icon}</div>}
              <h1 className="slide-title">{slide.title}</h1>
              {slide.subtitle && <h2 className="slide-subtitle">{slide.subtitle}</h2>}
              <div className="content-wrapper">{slide.content}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <button onClick={prevSlide} className="nav-button-large">
          <ChevronLeft size={24} />
          <span>Précédent</span>
        </button>
        <span className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </span>
        <button onClick={nextSlide} className="nav-button-large">
          <span>Suivant</span>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SpaceConquest;