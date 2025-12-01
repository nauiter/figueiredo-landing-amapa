import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Terms = () => {
  // Add BreadcrumbList Schema.org structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://figueiredoadv.com.br"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Termos de Uso",
          "item": "https://figueiredoadv.com.br/termos"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Breadcrumbs */}
      <header className="bg-primary border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <Link to="/">
              <Button variant="outline" className="text-primary-foreground border-accent hover:bg-accent hover:text-accent-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Início
              </Button>
            </Link>
            
            {/* Breadcrumbs */}
            <Breadcrumb>
              <BreadcrumbList className="text-primary-foreground/80">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1 hover:text-accent transition-colors">
                      <Home className="h-4 w-4" />
                      <span>Início</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent font-medium">
                    Termos de Uso
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Termos de Uso
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ao acessar e utilizar o site da Advocacia Figueiredo, você concorda em cumprir e estar vinculado aos seguintes 
              Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Serviços Oferecidos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Advocacia Figueiredo oferece serviços jurídicos nas seguintes áreas:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Direito Civil (contratos, responsabilidade civil, indenizações)</li>
              <li>Direito Trabalhista (reclamações, acordos, processos trabalhistas)</li>
              <li>Direito Imobiliário (compra, venda, regularização de imóveis)</li>
              <li>Direito de Família (divórcio, pensão alimentícia, guarda de filhos)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Os serviços são prestados mediante contratação formal e pagamento de honorários conforme acordado.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso do Site</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O conteúdo deste site é fornecido apenas para fins informativos gerais. Ele não constitui aconselhamento jurídico 
              e não deve ser usado como substituto de consultoria jurídica profissional. Para orientação específica sobre seu caso, 
              entre em contato conosco para agendar uma consulta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Você concorda em utilizar o site apenas para fins legais e de acordo com todas as leis aplicáveis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens e software, é propriedade da 
              Advocacia Figueiredo ou de seus licenciadores e é protegido por leis de propriedade intelectual brasileiras e internacionais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              É proibida a reprodução, distribuição ou uso comercial de qualquer conteúdo sem autorização expressa por escrito.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Advocacia Figueiredo não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Decisões tomadas com base exclusivamente nas informações disponíveis neste site</li>
              <li>Interrupções, erros ou imprecisões no site</li>
              <li>Links externos que possam ser acessados através deste site</li>
              <li>Danos diretos ou indiretos resultantes do uso ou incapacidade de usar o site</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Recomendamos sempre buscar aconselhamento jurídico profissional para situações específicas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidencialidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As informações compartilhadas conosco através do site (formulários de contato, e-mail, WhatsApp) 
              são tratadas com confidencialidade, em conformidade com o sigilo profissional da advocacia e a LGPD. 
              No entanto, a relação advogado-cliente formal só é estabelecida mediante contratação expressa.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Links Externos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este site pode conter links para sites externos. A Advocacia Figueiredo não tem controle sobre 
              o conteúdo desses sites e não assume responsabilidade por eles. A inclusão de links não implica 
              endosso ou recomendação.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Advocacia Figueiredo reserva-se o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade 
              revisar periodicamente estes termos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Lei Aplicável e Jurisdição</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais 
              de Macapá, Estado do Amapá.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para dúvidas sobre estes Termos de Uso ou para contratar nossos serviços, entre em contato:
            </p>
            <div className="bg-secondary/30 border border-border rounded-lg p-6 mt-4">
              <p className="text-foreground font-semibold mb-2">Advocacia Figueiredo</p>
              <p className="text-muted-foreground">Av. José do Espírito Santo Araújo, n° 492</p>
              <p className="text-muted-foreground">Perpétuo Socorro, Macapá - AP, 68905-627</p>
              <p className="text-muted-foreground mt-3">Telefone: (96) 98129-3353</p>
              <p className="text-muted-foreground">E-mail: contato@figueiredoadvocacia.com.br</p>
            </div>
          </section>

          <div className="border-t border-border pt-8 mt-12">
            <Link to="/">
              <Button size="lg" variant="outline" className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o Início
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Terms;