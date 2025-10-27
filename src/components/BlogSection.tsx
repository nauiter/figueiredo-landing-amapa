import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Como resolver dívidas trabalhistas?",
    excerpt: "Entenda seus direitos e as melhores estratégias para negociar e quitar débitos trabalhistas de forma legal e segura.",
    link: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/direitos-trabalhistas",
  },
  {
    title: "Direitos do consumidor: o que você precisa saber",
    excerpt: "Conheça as principais garantias do Código de Defesa do Consumidor e saiba quando acionar a Justiça.",
    link: "https://www.gov.br/consumidor/pt-br",
  },
  {
    title: "Planejamento sucessório: proteja seu patrimônio",
    excerpt: "Descubra como organizar a herança de forma eficiente, evitando conflitos familiares e custos desnecessários.",
    link: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/heranca-e-doacao",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fique por Dentro
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Aqui você tem acesso a artigos com orientações, dicas e esclarecimentos sobre o universo jurídico. 
            Acompanhe as atualizações e compartilhe conhecimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-rose-glow transition-all duration-300 space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground leading-tight">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-[#b8806e] font-semibold group transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b8806e] after:transition-all after:duration-300 hover:after:w-full"
              >
                Leia mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
