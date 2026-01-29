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
      content: <p>EXPOSÉ HISTOIRE - La conquête spatiale durant la guerre froide</p>,
    },
    {
      id: 1,
      title: 'Introduction',
      content: (
        <p>
          Pendant la guerre froide, les deux grandes puissances, les États‑Unis et l’Union soviétique,
          s’opposent sans s’affronter directement, en menant une compétition dans de nombreux domaines, 
          dont la conquête de l’espace. Chaque réussite spatiale est alors perçue comme la preuve de 
          la force d’un modèle politique et économique, communiste pour l’URSS et capitaliste pour les États‑Unis, 
          et sert à impressionner le reste du monde. On peut donc se demander comment la conquête de l’espace 
          prolonge cette rivalité tout en préparant, à terme, de nouvelles formes de coopération entre les anciennes puissances ennemies.
        </p>
      ),
    },
    {
      id: 2,
      title: 'I. Les débuts de la conquête spatiale',
      content: (
        <p>
          À l’origine, la conquête spatiale repose sur les progrès réalisés pendant la Seconde Guerre mondiale,
          en particulier les missiles V2 allemands, dont les technologies sont récupérées et améliorées par 
          les États‑Unis et l’URSS après 1945. Ces fusées, d’abord pensées comme des armes, servent ensuite 
          de base au développement des premiers lanceurs capables d’envoyer des engins au‑delà de l’atmosphère terrestre. 
          Dès 1949, les États-Unis testent leurs fusées en envoyant dans l’espace le singe Albert II, premier animal 
          américain à franchir la limite de l’atmosphère. Cet essai marque une étape dans la compréhension des effets du vol spatial sur les êtres vivants. 

          Le véritable tournant survient le 4 octobre 1957, lorsque l’Union soviétique lance Spoutnik‑1, le premier satellite artificiel de l’histoire. 
          Ce petit objet, mis en orbite autour de la Terre, prouve que l’URSS maîtrise des fusées suffisamment puissantes pour atteindre l’espace, 
          ce qui suscite un choc et une grande inquiétude aux États‑Unis, sur le plan militaire comme symbolique. Quelques semaines plus tard, 
          l’URSS envoie à bord de Spoutnik-2 la chienne Laïka, premier être vivant placé en orbite autour de la Terre, 
          marquant une étape scientifique et un puissant succès de propagande.  

          En réaction, les États‑Unis créent en 1958 la NASA, une agence spatiale chargée de coordonner l’ensemble de leurs programmes d’exploration spatiale 
          et de combler leur retard. La même année, ils lancent leur premier satellite, Explorer 1, qui marque leur entrée officielle 
          dans la course à l’espace et ouvre une période de rivalité intense entre les deux superpuissances.
        </p>
      ),
    },
    {
      id: 3,
      title: 'II. La course à l’espace : une compétition USA/URSS',
      content: (
        <p>
          Dans un premier temps, l’URSS conserve une avance nette dans cette course à l’espace. 
          Le 12 avril 1961, elle envoie le cosmonaute Youri Gagarine à bord de la capsule Vostok 1, 
          faisant de lui le premier homme à voyager dans l’espace et à effectuer une orbite complète autour de la Terre. 
          Cet exploit est utilisé par les autorités soviétiques comme une démonstration spectaculaire de la supériorité de leur système politique et de leurs capacités scientifiques. 

          Les Soviétiques enchaînent ensuite plusieurs « premières » : ils envoient notamment les premières sondes Luna vers la Lune, 
          réalisent les premiers vols avec plusieurs cosmonautes à bord, ainsi que le premier vol d’une femme dans l’espace avec Valentina Terechkova en 1963. 
          Ces succès renforcent l’image d’une URSS en avance sur son rival américain, à un moment où la compétition idéologique est particulièrement forte.

          Face à cette série de succès soviétiques, les États‑Unis réagissent en se fixant un objectif encore plus ambitieux. 
          En 1961, le président John F. Kennedy annonce la volonté d’envoyer un Américain sur la Lune avant la fin des années 1960, 
          afin de reprendre l’avantage dans la course à l’espace et de frapper l’opinion mondiale par un exploit sans précédent. 
          Cet objectif donne naissance au programme Apollo, qui mobilise des moyens financiers, techniques et humains considérables pour atteindre la Lune. 

          Dans le cadre de ce programme, la mission Apollo 8, en 1968, réalise le premier vol habité autour de la Lune, 
          ce qui montre que les États‑Unis rattrapent puis dépassent progressivement leur rival. 
          L’apogée de cette compétition est atteinte le 20 juillet 1969, lorsque la mission Apollo 11 permet à Neil Armstrong 
          de devenir le premier homme à marcher sur la surface lunaire, sous les yeux de centaines de millions de téléspectateurs à travers le monde. 

          Cet événement est présenté par les États‑Unis comme la preuve éclatante de leur supériorité technologique et de la réussite de leur modèle économique et politique. 
          L’URSS ne parvient jamais à envoyer un équipage sur la Lune, ce qui consacre durablement l’avantage américain dans le domaine des vols habités interplanétaires. 
          Néanmoins, la compétition ne se limite pas à la Lune : elle touche aussi les satellites d’observation, les sondes automatiques et les stations spatiales, 
          qui ont des implications militaires et stratégiques importantes. 

          Tout au long de cette période, la conquête spatiale est donc à la fois un outil de propagande et un instrument de dissuasion. 
          Chaque lancement ou mission réussie vise à impressionner les alliés et les pays non alignés, et à montrer que le camp victorieux 
          est capable de maîtriser les technologies liées aux missiles nucléaires. La course à l’espace prolonge ainsi la logique de confrontation de la guerre froide, 
          tout en contribuant à d’importants progrès scientifiques et techniques.
        </p>
      ),
    },
    {
      id: 4,
      title: 'III. De la rivalité à la coopération',
      content: (
        <p>
          À partir des années 1970, la dynamique de la conquête spatiale commence à évoluer. 
          Le coût extrêmement élevé des grands programmes, comme Apollo côté américain ou les projets lunaires côté soviétique, 
          pousse les deux superpuissances à réduire leurs ambitions les plus spectaculaires. 
          Dans le même temps, la détente dans les relations internationales atténue la tension directe entre les blocs, 
          ce qui rend moins nécessaire une compétition aussi frontale dans l’espace. 

          L’URSS choisit alors de se concentrer sur les stations spatiales en orbite terrestre, avec les programmes Saliout puis Mir, 
          qui permettent de réaliser des séjours de plus en plus longs dans l’espace et de nombreuses expériences scientifiques. 
          De leur côté, les États‑Unis mettent fin au programme Apollo et réorientent leurs efforts vers d’autres projets, 
          comme la mise en place de navettes spatiales réutilisables. 

          Un moment symbolique de cette évolution est la mission Apollo‑Soyouz de 1975. 
          Lors de cette mission, un vaisseau américain Apollo et un vaisseau soviétique Soyouz s’amarrent en orbite et les astronautes 
          des deux pays échangent une poignée de main historique dans l’espace. Cette rencontre est largement médiatisée 
          comme un signe de détente et de volonté de coopération entre les deux anciennes rivales. 

          À partir de la fin de la guerre froide, l’espace devient de plus en plus un domaine de collaboration internationale. 
          De nouvelles puissances, comme l’Europe avec l’Agence spatiale européenne, la Chine ou encore l’Inde, développent leurs propres programmes spatiaux et participent à des projets communs. 
          La Station spatiale internationale, qui associe notamment les États‑Unis, la Russie et plusieurs autres partenaires, illustre cette nouvelle phase 
          d’une conquête spatiale davantage tournée vers la coopération scientifique, l’observation de la Terre et l’exploration lointaine. 

          La conquête de l’espace reste toutefois un enjeu de puissance pour les États, mais elle s’ouvre aussi à des acteurs privés 
          et à des objectifs plus variés, comme les télécommunications, la navigation par satellite ou l’étude du climat. 
          L’espace demeure donc à la fois un lieu de rivalités et un champ d’expérimentation pour de nouvelles formes de collaboration mondiale.
        </p>
      ),
    },
    {
      id: 5,
      title: 'Conclusion',
      content: (
        <p>
          Ainsi, la conquête spatiale a d’abord prolongé la logique de la guerre froide en opposant les États‑Unis et l’URSS 
          dans une course symbolique et technologique, dont le point culminant est le premier pas de l’homme sur la Lune en 1969. 
          Cette compétition a servi à affirmer la puissance et à défendre des modèles idéologiques antagonistes, 
          tout en stimulant des progrès techniques considérables. 

          Progressivement, cependant, l’espace est devenu un terrain de coopération, comme le montre la mission Apollo‑Soyouz 
          puis la création de la Station spatiale internationale, annonçant une conquête spatiale plus partagée à l’échelle de l’humanité. 
          Aujourd’hui encore, l’espace demeure un enjeu stratégique et scientifique majeur, 
          où se mêlent rivalités, innovations et projets communs entre nations et acteurs privés.
        </p>
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
