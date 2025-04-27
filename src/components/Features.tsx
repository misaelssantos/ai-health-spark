
import { CalendarClock, MonitorCheck, UserRoundCheck } from "lucide-react";

export function Features() {
  return (
    <section className="py-16 px-4 bg-gradient-custom">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Automatize sua Clínica com IA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: CalendarClock,
              title: "Agendamento Automático",
              description:
                "Assistentes que organizam sua agenda e gerenciam remarcações inteligentemente"
            },
            {
              icon: MonitorCheck,
              title: "Análise de Prontuários",
              description:
                "IA que processa históricos médicos e sugere correlações relevantes"
            },
            {
              icon: UserRoundCheck,
              title: "Acompanhamento Contínuo",
              description:
                "Monitoramento automatizado de pacientes com alertas personalizados"
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass-card relative p-6 rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              <div className="absolute -top-6 left-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">{feature.title}</h3>
              <p className="text-blue-100/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
