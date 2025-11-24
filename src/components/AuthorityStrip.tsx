import { Scale, Award, Landmark } from "lucide-react";

// TODO: Substituir ícones genéricos pelos logos reais (OAB, IBDFAM, TJAP)
// quando os arquivos estiverem disponíveis na pasta src/assets/
const institutions = [
  {
    name: "OAB - Ordem dos Advogados do Brasil",
    icon: Scale
  },
  {
    name: "IBDFAM - Instituto Brasileiro de Direito de Família",
    icon: Award
  },
  {
    name: "TJAP - Tribunal de Justiça do Amapá",
    icon: Landmark
  }
];

const AuthorityStrip = () => {
  return (
    <section className="py-12 md:py-16 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-white/60 text-sm font-medium mb-8 uppercase tracking-wider">
            Credenciada e Reconhecida Por
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {institutions.map((institution, index) => {
              const Icon = institution.icon;
              return (
                <div
                  key={index}
                  className="group relative transition-all duration-500 opacity-60 hover:opacity-100"
                >
                  <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-500 hover:bg-accent/5">
                    <Icon className="h-12 w-12 md:h-16 md:w-16 text-white/40 group-hover:text-accent transition-colors duration-500" />
                    <span className="text-xs text-white/40 group-hover:text-accent/80 transition-colors duration-500 text-center max-w-[120px]">
                      {institution.name.split(' - ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
