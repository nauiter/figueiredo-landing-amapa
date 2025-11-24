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

const Privacy = () => {
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
          "name": "Política de Privacidade",
          "item": "https://figueiredoadv.com.br/privacidade"
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
              <Button variant="ghost" className="text-primary-foreground hover:text-accent">
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
                    Política de Privacidade
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
            Política de Privacidade
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Advocacia Figueiredo está comprometida com a proteção da privacidade e dos dados pessoais de seus clientes e visitantes do site. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, 
              em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Coleta de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Coletamos informações pessoais fornecidas voluntariamente por você, incluindo mas não se limitando a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Nome completo, CPF, RG e outros documentos pessoais</li>
              <li>Endereço residencial e comercial</li>
              <li>Telefone, e-mail e outras formas de contato</li>
              <li>Informações relacionadas ao caso jurídico (contratos, processos, documentos)</li>
              <li>Dados de navegação no site (cookies, endereço IP, páginas visitadas)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso das Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos os dados coletados exclusivamente para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Prestação de serviços jurídicos e acompanhamento de processos</li>
              <li>Comunicação sobre o andamento de seu caso</li>
              <li>Agendamento de consultas e reuniões</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Melhoria dos serviços e experiência do usuário</li>
              <li>Envio de informações jurídicas relevantes (com seu consentimento)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Seus dados pessoais não serão vendidos, alugados ou compartilhados com terceiros, exceto nas seguintes hipóteses:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Quando necessário para a prestação do serviço jurídico (tribunais, cartórios, peritos)</li>
              <li>Por determinação legal ou ordem judicial</li>
              <li>Com seu consentimento expresso</li>
              <li>Com prestadores de serviços essenciais (tecnologia, contabilidade) sob acordo de confidencialidade</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança e Armazenamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Adotamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, 
              perda, destruição ou alteração. Todos os dados são armazenados em servidores seguros com criptografia. 
              Mantemos seus dados pelo período necessário para cumprir as finalidades descritas nesta política, 
              ou conforme exigido por lei (prazos prescricionais e processuais).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conforme a LGPD, você tem o direito de:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade de seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Opor-se ao tratamento de dados em determinadas situações</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer seus direitos, entre em contato conosco através dos canais de atendimento.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso site utiliza cookies para melhorar a experiência de navegação e analisar o tráfego. 
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações na Política</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente. 
              A data da última atualização está indicada no topo deste documento.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
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
              <Button size="lg" variant="default">
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

export default Privacy;
