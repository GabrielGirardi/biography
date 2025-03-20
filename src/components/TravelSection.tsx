import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bike, Map, Navigation, Compass, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParallaxBackground from './ParallaxBackground';

const TravelSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("routes");

  const travels = {
    en: {
      title: "Motorcycle Travels",
      description: "Exploring the world on my Kawasaki Versys 650",
      routesTab: "Favorite Routes",
      experiencesTab: "Experiences",
      statsTab: "Riding Stats",
      kmRidden: "ridden",
      countries: "countries",
      longestRide: "longest ride",
      routes: [
        {
          name: "Urubici, SC - Brasil",
          description: "A breathtaking journey along the mountain with stunning nature views and winding roads.",
          distance: "228 km",
          duration: "2 day",
          difficulty: "Hard",
          highlights: "Nature views, curvy roads, Great view",
          image: "bg-gradient-to-tr from-blue-500/80 to-teal-400/80"
        },
        {
          name: "São Francisco do Sul, SC - Brasil",
          description: "A stunning journey along the road with stunning views of nature, beaches and beautiful roads.",
          distance: "215 km",
          duration: "2 days",
          difficulty: "Mid",
          highlights: "Beaches view, technical riding, nature, unique experience, historical towns",
          image: "bg-gradient-to-tr from-indigo-600/80 to-purple-500/80"
        },
        {
          name: "Lages, SC - Brasil",
          description: "Relaxing and peaceful tour through wonderful landscapes, cold, nature views and charming cities.",
          distance: "131 km",
          duration: "1 day",
          difficulty: "Mid",
          highlights: "Cold scenery, largest municipality in territorial extension in SC, open roads, mountains",
          image: "bg-gradient-to-tr from-green-500/80 to-lime-400/80"
        }
      ],
      experiences: [
        {
          title: "Riding Through Rain",
          description: "The unexpected storm that taught me resilience and preparation on the road.",
          date: "August 2022",
          lesson: "Always check the weather forecast and pack rain gear!"
        },
        {
          title: "Making Friends on the Road",
          description: "The community of riders I've met during my travels and the stories we've shared.",
          date: "Ongoing",
          lesson: "The motorcycle community is one of the best parts of riding."
        },
        {
          title: "Navigating the Unexpected",
          description: "The challenges I've faced on the road, from sudden weather changes to mechanical issues, and how they've shaped my adaptability.",
          date: "Ongoing",
          lesson: "Every obstacle is an opportunity to grow and learn something new about yourself."
        }
      ],
      stats: {
        totalDistance: "+ 21.747 mi",
        countries: "1",
        longestRide: "+248 mi",
        favoriteRoad: "Bom Jardim da Serra, SC-390 - Brasil",
        trips: "24"
      }
    },
    pt: {
      title: "Viagens de Moto",
      description: "Explorando o mundo na minha Kawasaki Versys 650",
      routesTab: "Rotas Favoritas",
      experiencesTab: "Experiências",
      statsTab: "Estatísticas",
      kmRidden: "percorridos",
      countries: "países",
      longestRide: "maior viagem",
      routes: [
        {
          name: "Urubici, SC - Brasil",
          description: "Uma jornada deslumbrante ao longo da montanha com vistas impressionantes da natureza e estradas sinuosas.",
          distance: "228 km",
          duration: "2 dia",
          difficulty: "Difícil",
          highlights: "Vistas da naturza, estradas curvas, vista incrível",
          image: "bg-gradient-to-tr from-blue-500/80 to-teal-400/80"
        },
        {
          name: "São Francisco do Sul, SC - Brasil",
          description: "Uma jornada deslumbrante ao longo da viagem com vistas impressionantes da natureza, praias e estradas lindas.",
          distance: "215 km",
          duration: "2 dias",
          difficulty: "Médio",
          highlights: "Vistas da praia, pilotagem técnica, natureza, experiênia única, cidades históricas",
          image: "bg-gradient-to-tr from-indigo-600/80 to-purple-500/80"
        },
        {
          name: "Lages, SC - Brasil",
          description: "Passeio relaxante e tranquilo por paisagens maravilhosas, frio, vistas da natureza e cidades encantadoras.",
          distance: "131 km",
          duration: "1 dia",
          difficulty: "Fácil",
          highlights: "Cenário frio, maior município em extensão territorial em SC, estradas abertas, montanhas",
          image: "bg-gradient-to-tr from-green-500/80 to-lime-400/80"
        }
      ],
      experiences: [
        {
          title: "Pilotando na Chuva",
          description: "A tempestade inesperada que me ensinou resiliência e preparação na estrada.",
          date: "Agosto 2022",
          lesson: "Sempre verifique a previsão do tempo e leve equipamento para chuva!"
        },
        {
          title: "Fazendo Amigos na Estrada",
          description: "A comunidade de motociclistas que conheci durante minhas viagens e as histórias que compartilhamos.",
          date: "Contínuo",
          lesson: "A comunidade motociclística é uma das melhores partes de pilotar."
        },
        {
          "title": "Navegando pelo Inesperado",
          "description": "Os desafios que enfrentei na estrada, desde mudanças repentinas no clima até problemas mecânicos, e como isso moldou minha adaptabilidade.",
          "date": "Contínuo",
          "lesson": "Todo obstáculo é uma oportunidade para crescer e aprender algo novo sobre si mesmo."
        }
      ],
      stats: {
        totalDistance: "+ 35.000 km",
        countries: "1",
        longestRide: "+400 km",
        favoriteRoad: "Bom Jardim da Serra, SC-390 - Brasil",
        trips: "24"
      }
    }
  };

  const content = travels[t('language') === 'pt-BR' ? 'pt' : 'en'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="travels"
      ref={sectionRef}
      className="relative py-24 bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>

      <ParallaxBackground speed={0.2} direction="up" intensity="light" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-kawasaki-green/10 to-transparent opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-40"></div>
      </ParallaxBackground>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-kawasaki-green/10 text-kawasaki-green text-sm font-medium mb-4 animate-on-scroll opacity-0">
            <Bike className="w-4 h-4 inline-block mr-2" />
            Kawasaki Versys 650
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            {content.description}
          </p>
        </div>

        <Tabs defaultValue="routes" onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="routes" className="data-[state=active]:bg-kawasaki-green/20 data-[state=active]:text-kawasaki-green">
                <Map className="w-4 h-4 mr-2" />
                {content.routesTab}
              </TabsTrigger>
              <TabsTrigger value="experiences" className="data-[state=active]:bg-kawasaki-green/20 data-[state=active]:text-kawasaki-green">
                <Compass className="w-4 h-4 mr-2" />
                {content.experiencesTab}
              </TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-kawasaki-green/20 data-[state=active]:text-kawasaki-green">
                <Navigation className="w-4 h-4 mr-2" />
                {content.statsTab}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="routes" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.routes.map((route, index) => (
                <ParallaxBackground
                  key={index}
                  speed={0.1}
                  direction={index % 2 === 0 ? "up" : "down"}
                  intensity="light"
                  className="animate-on-scroll opacity-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="h-full border-0 bg-gray-800/40 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 overflow-hidden">
                    <div className={`h-32 ${route.image} relative flex items-center justify-center`}>
                      <Bike className="w-12 h-12 text-white/90" />
                      <div className="absolute inset-0 bg-noise opacity-30"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-gray-100">{route.name}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {route.distance} • {route.duration} • {route.difficulty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      <p>{route.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm font-medium text-kawasaki-green">Highlights:</p>
                        <p className="text-sm text-gray-400">{route.highlights}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxBackground>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.experiences.map((exp, index) => (
                <ParallaxBackground
                  key={index}
                  speed={0.1}
                  direction={index % 2 === 0 ? "up" : "down"}
                  intensity="light"
                  className="animate-on-scroll opacity-1"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="h-full border-0 bg-gray-800/40 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300">
                    <CardHeader>
                      <div className="text-kawasaki-green text-sm mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.date}
                      </div>
                      <CardTitle className="text-gray-100">{exp.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      <p>{exp.description}</p>

                      <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                        <p className="text-sm italic text-gray-400">"{exp.lesson}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxBackground>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-8">
            <ParallaxBackground speed={0.2} direction="down" intensity="low">
              <Card className="border-0 bg-gray-800/40 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-100">Riding Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6">
                    <div className="text-center animate-on-scroll opacity-1" style={{ animationDelay: '100ms' }}>
                      <div className="w-16 h-16 rounded-full bg-kawasaki-green/10 flex items-center justify-center mx-auto mb-3">
                        <Bike className="w-8 h-8 text-kawasaki-green" />
                      </div>
                      <div className="text-3xl font-bold text-gray-100">{content.stats.totalDistance}</div>
                      <div className="text-sm text-gray-400">{content.kmRidden}</div>
                    </div>

                    <div className="text-center animate-on-scroll opacity-1" style={{ animationDelay: '200ms' }}>
                      <div className="w-16 h-16 rounded-full bg-kawasaki-green/10 flex items-center justify-center mx-auto mb-3">
                        <Map className="w-8 h-8 text-kawasaki-green" />
                      </div>
                      <div className="text-3xl font-bold text-gray-100">{content.stats.countries}</div>
                      <div className="text-sm text-gray-400">{content.countries}</div>
                    </div>

                    <div className="text-center animate-on-scroll opacity-1" style={{ animationDelay: '300ms' }}>
                      <div className="w-16 h-16 rounded-full bg-kawasaki-green/10 flex items-center justify-center mx-auto mb-3">
                        <Navigation className="w-8 h-8 text-kawasaki-green" />
                      </div>
                      <div className="text-3xl font-bold text-gray-100">{content.stats.longestRide}</div>
                      <div className="text-sm text-gray-400">{content.longestRide}</div>
                    </div>

                    <div className="text-center animate-on-scroll opacity-1" style={{ animationDelay: '400ms' }}>
                      <div className="w-16 h-16 rounded-full bg-kawasaki-green/10 flex items-center justify-center mx-auto mb-3">
                        <Compass className="w-8 h-8 text-kawasaki-green" />
                      </div>
                      <div className="text-3xl font-bold text-gray-100">{content.stats.trips}+</div>
                      <div className="text-sm text-gray-400">trips</div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-300">
                      <span className="text-kawasaki-green font-medium">Favorite Road:</span> {content.stats.favoriteRoad}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ParallaxBackground>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TravelSection;