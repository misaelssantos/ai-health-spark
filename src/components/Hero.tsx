
import React from 'react';

export function Hero() {
  return (
    <div className="relative pt-24 pb-16 bg-gradient-custom min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight">
            Inovação em saúde começa com inteligência
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-8">
            Nossa plataforma combina inteligência artificial avançada com conhecimento médico para oferecer insights personalizados e melhorar sua qualidade de vida.
          </p>
        </div>
      </div>
    </div>
  );
}
