import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const articles = [
  {
    title: "Como resolver dívidas trabalhistas?",
    excerpt: "Entenda seus direitos e as melhores estratégias para negociar e quitar débitos trabalhistas de forma legal e segura.",
    fullContent: "As dívidas trabalhistas podem ser um grande problema tanto para empregadores quanto para empregados. É fundamental entender que a legislação trabalhista brasileira protege os direitos dos trabalhadores, mas também prevê mecanismos de negociação. Primeiramente, é importante identificar a natureza da dívida: verbas rescisórias, salários atrasados, FGTS não depositado, ou outras pendências. A Consolidação das Leis do Trabalho (CLT) estabelece prazos e procedimentos específicos para cada situação. Em muitos casos, a negociação extrajudicial pode ser uma alternativa viável, evitando custos e tempo de um processo judicial. Porém, é essencial contar com assessoria jurídica especializada para garantir que seus direitos sejam preservados e que o acordo seja justo e legal. Nossa equipe tem mais de uma década de experiência em direito trabalhista, auxiliando tanto trabalhadores quanto empresas a resolverem seus conflitos de forma ética e eficiente.",
  },
  {
    title: "Direitos do consumidor: o que você precisa saber",
    excerpt: "Conheça as principais garantias do Código de Defesa do Consumidor e saiba quando acionar a Justiça.",
    fullContent: "O Código de Defesa do Consumidor (CDC) é uma das legislações mais importantes do Brasil, protegendo os direitos dos consumidores em todas as relações de consumo. Entre as principais garantias estão: o direito à informação clara e precisa sobre produtos e serviços, a proteção contra publicidade enganosa, o direito de arrependimento em compras online (7 dias), a garantia legal de 30 dias para produtos não duráveis e 90 dias para duráveis, além da garantia contratual oferecida pelo fabricante. Problemas com produtos defeituosos, cobranças indevidas, contratos abusivos e descumprimento de prazos são situações onde o CDC pode ser invocado. É importante documentar todas as reclamações e tentativas de solução junto à empresa. Caso não haja solução, o consumidor pode recorrer aos Procons, Juizados Especiais Cíveis ou contratar um advogado especializado. Nossa equipe está preparada para defender seus direitos e buscar a reparação adequada.",
  },
  {
    title: "Planejamento sucessório: proteja seu patrimônio",
    excerpt: "Descubra como organizar a herança de forma eficiente, evitando conflitos familiares e custos desnecessários.",
    fullContent: "O planejamento sucessório é uma ferramenta jurídica essencial para garantir que o patrimônio construído ao longo da vida seja transmitido de forma organizada, respeitando a vontade do titular e minimizando conflitos familiares. Através de instrumentos como testamento, doação com reserva de usufruto, holding familiar e previdência privada, é possível estruturar a sucessão de bens de maneira eficiente. O planejamento adequado pode reduzir significativamente os custos com inventário e impostos, além de preservar a harmonia familiar em momentos delicados. É importante considerar aspectos como legítima dos herdeiros, regime de bens do casamento, incapacidade civil e proteção de patrimônio. Cada família possui necessidades específicas, e por isso a assessoria jurídica personalizada é fundamental. Nossa equipe tem expertise em direito de família e sucessões, oferecendo soluções sob medida para proteger seu patrimônio e garantir o futuro de seus entes queridos.",
  },
];

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const handleWhatsAppConsultation = (title: string) => {
    const message = encodeURIComponent(`Olá, li o artigo sobre "${title}" e gostaria de tirar dúvidas.`);
    window.open(`https://wa.me/5596981293353?text=${message}`, '_blank');
  };

  return (
    <section id="blog" className="py-20 bg-background">
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
              
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center text-accent hover:text-[#b8806e] font-semibold group transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#b8806e] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Leia mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {article.title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-4">
                      {article.fullContent}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mt-6">
                    <Button
                      onClick={() => handleWhatsAppConsultation(article.title)}
                      className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold"
                    >
                      Agendar Consulta sobre este tema
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
