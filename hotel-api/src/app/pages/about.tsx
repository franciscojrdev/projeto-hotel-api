// src/pages/about.tsx
import React from 'react';
import Layout from './layout';

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>Sobre</h1>
        <p>Esta é a página de informações sobre o Hotel Booking.</p>
        <a href="/">Home</a>
      </div>
    </Layout>
  );
};

export default AboutPage;