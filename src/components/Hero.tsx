
import { Brain, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Transformando a Saúde com
          <span className="gradient-text block mt-2">Inteligência Artificial</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Soluções inovadoras para diagnósticos mais precisos, tratamentos personalizados e melhores resultados para seus pacientes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg">
            Começar Agora
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Agendar Demo
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Brain,
              title: "IA Avançada",
              description: "Algoritmos de última geração para diagnósticos precisos"
            },
            {
              icon: ShieldCheck,
              title: "Segurança Total",
              description: "Proteção completa dos dados dos pacientes"
            },
            {
              icon: Stethoscope,
              title: "Suporte Médico",
              description: "Equipe especializada disponível 24/7"
            }
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border bg-white/50 backdrop-blur-sm">
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
