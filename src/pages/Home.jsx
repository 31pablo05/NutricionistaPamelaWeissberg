import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/home/Banner.jsx';
import SectionFood from '../components/home/SectionFood.jsx';
import SectionVideo from '../components/home/SectionVideo.jsx';
import ProductsSection from '../components/home/ProductsSection.jsx';
import SectionInbody from '../components/home/SectionInbody.jsx';
const Home = () => {
  return (
    <>
      {/* SEO Optimizado para la página principal */}
      <Helmet>
        <title>Pamela Weissberg - Nutricionista en Trelew | Planes Personalizados</title>
        <meta
          name="description"
          content="Nutricionista profesional en Trelew. Planes de alimentación personalizados, consultas online y presenciales. Mejora tu salud con asesoramiento nutricional especializado."
        />
        <meta
          name="keywords"
          content="nutricionista Trelew, planes alimentación, consulta nutricional, Pamela Weissberg, nutrición deportiva, dietas especiales"
        />
        <meta property="og:title" content="Pamela Weissberg - Nutricionista en Trelew" />
        <meta property="og:description" content="Planes de alimentación personalizados y asesoramiento nutricional profesional" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="home">
        {/* Hero Section */}
        <section className="relative">
          <Banner />
        </section>

        {/* Contenido principal con mejor espaciado */}
        <div className="relative z-10 space-y-16 py-8">
          <section className="container mx-auto px-4">
            <SectionFood />
          </section>

          <section className="container mx-auto px-4">
            <SectionVideo />
          </section>
          <SectionInbody />
          <section className="container mx-auto px-4">
            <ProductsSection />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
