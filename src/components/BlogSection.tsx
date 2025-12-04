import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
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
    category: "Direito Trabalhista",
    readTime: "5 min",
    publishDate: "28 Nov 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop"
  },
  {
    title: "Direitos do consumidor: o que você precisa saber",
    excerpt: "Conheça as principais garantias do Código de Defesa do Consumidor e saiba quando acionar a Justiça.",
    fullContent: "O Código de Defesa do Consumidor (CDC) é uma das legislações mais importantes do Brasil, protegendo os direitos dos consumidores em todas as relações de consumo. Entre as principais garantias estão: o direito à informação clara e precisa sobre produtos e serviços, a proteção contra publicidade enganosa, o direito de arrependimento em compras online (7 dias), a garantia legal de 30 dias para produtos não duráveis e 90 dias para duráveis, além da garantia contratual oferecida pelo fabricante. Problemas com produtos defeituosos, cobranças indevidas, contratos abusivos e descumprimento de prazos são situações onde o CDC pode ser invocado. É importante documentar todas as reclamações e tentativas de solução junto à empresa. Caso não haja solução, o consumidor pode recorrer aos Procons, Juizados Especiais Cíveis ou contratar um advogado especializado. Nossa equipe está preparada para defender seus direitos e buscar a reparação adequada.",
    category: "Direito Civil",
    readTime: "6 min",
    publishDate: "15 Nov 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
  },
  {
    title: "Planejamento sucessório: proteja seu patrimônio",
    excerpt: "Descubra como organizar a herança de forma eficiente, evitando conflitos familiares e custos desnecessários.",
    fullContent: "O planejamento sucessório é uma ferramenta jurídica essencial para garantir que o patrimônio construído ao longo da vida seja transmitido de forma organizada, respeitando a vontade do titular e minimizando conflitos familiares. Através de instrumentos como testamento, doação com reserva de usufruto, holding familiar e previdência privada, é possível estruturar a sucessão de bens de maneira eficiente. O planejamento adequado pode reduzir significativamente os custos com inventário e impostos, além de preservar a harmonia familiar em momentos delicados. É importante considerar aspectos como legítima dos herdeiros, regime de bens do casamento, incapacidade civil e proteção de patrimônio. Cada família possui necessidades específicas, e por isso a assessoria jurídica personalizada é fundamental. Nossa equipe tem expertise em direito de família e sucessões, oferecendo soluções sob medida para proteger seu patrimônio e garantir o futuro de seus entes queridos.",
    category: "Direito de Família",
    readTime: "7 min",
    publishDate: "02 Nov 2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=500&fit=crop"
  },
];

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const handleWhatsAppConsultation = (title: string) => {
    const message = encodeURIComponent(`Olá, li o artigo sobre "${title}" e gostaria de tirar dúvidas.`);
    window.open(`https://wa.me/5596981293353?text=${message}`, '_blank');
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Blog Jurídico
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Artigos com orientações, dicas e esclarecimentos sobre o universo jurídico. 
            Mantenha-se informado sobre seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-rose-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-accent/90 text-primary text-sm font-semibold rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-accent hover:text-accent/80 font-semibold group/btn"
                      onClick={() => setSelectedArticle(article)}
                    >
                      Leia mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;