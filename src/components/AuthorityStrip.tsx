const institutions = [
  {
    name: "OAB - Ordem dos Advogados do Brasil",
    logo: "https://placehold.co/200x100/1A1A1A/6B7280?text=OAB",
    colorLogo: "https://placehold.co/200x100/1A1A1A/c99a85?text=OAB"
  },
  {
    name: "IBDFAM - Instituto Brasileiro de Direito de Família",
    logo: "https://placehold.co/200x100/1A1A1A/6B7280?text=IBDFAM",
    colorLogo: "https://placehold.co/200x100/1A1A1A/c99a85?text=IBDFAM"
  },
  {
    name: "TJAP - Tribunal de Justiça do Amapá",
    logo: "https://placehold.co/200x100/1A1A1A/6B7280?text=TJAP",
    colorLogo: "https://placehold.co/200x100/1A1A1A/c99a85?text=TJAP"
  }
];

const AuthorityStrip = () => {
  return (
    <section className="py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-white/60 text-sm font-medium mb-8 uppercase tracking-wider">
            Credenciada e Reconhecida Por
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {institutions.map((institution, index) => (
              <div
                key={index}
                className="group relative grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              >
                <img 
                  src={institution.logo}
                  alt={institution.name}
                  className="h-16 md:h-20 w-auto object-contain group-hover:hidden transition-all"
                />
                <img 
                  src={institution.colorLogo}
                  alt={institution.name}
                  className="h-16 md:h-20 w-auto object-contain hidden group-hover:block transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
