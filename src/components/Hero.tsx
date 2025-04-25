import React from 'react';

export function Hero() {
  return (
    <div className="relative pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Transforme sua saúde com o poder da IA
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Nossa plataforma combina inteligência artificial avançada com conhecimento médico para oferecer insights personalizados e melhorar sua qualidade de vida.
        </p>
      </div>
    </div>
  );
}
