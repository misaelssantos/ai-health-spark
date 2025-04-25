
import { Bot, Brain, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Automatize o Atendimento com
          <span className="gradient-text block mt-2">Assistentes de IA</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Revolucione sua clínica com assistentes virtuais inteligentes que otimizam o fluxo de pacientes e auxiliam médicos na tomada de decisões
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg">
            Agendar Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Fale com Especialista
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Bot,
              title: "Atendimento 24/7",
              description: "Assistentes virtuais que gerenciam agendamentos e dúvidas dos pacientes"
            },
            {
              icon: Brain,
              title: "Suporte à Decisão",
              description: "IA que auxilia médicos na análise de casos e recomendações de tratamento"
            },
            {
              icon: Stethoscope,
              title: "Triagem Inteligente",
              description: "Automação do processo de triagem com análise prévia dos sintomas"
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

export default Hero;
