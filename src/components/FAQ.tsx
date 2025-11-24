import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como agendar uma consulta?",
    answer: "Agendar uma consulta é simples e rápido! Você pode entrar em contato conosco através do WhatsApp clicando no botão verde na parte inferior da tela ou nos botões 'Falar com Advogada' espalhados pelo site. Também aceitamos agendamentos por telefone no (96) 98129-3353. Nosso horário de atendimento é de segunda a sexta, das 8h às 18h. A primeira consulta serve para entendermos sua situação e apresentarmos as melhores estratégias jurídicas para o seu caso."
  },
  {
    question: "O atendimento é online ou presencial?",
    answer: "Oferecemos ambas as modalidades para sua comodidade! Nosso escritório está localizado em Macapá-AP, onde realizamos atendimentos presenciais em um ambiente acolhedor e profissional. Também disponibilizamos consultas online via videoconferência para clientes que preferem o atendimento remoto ou que estão em outras cidades. A escolha é sua - priorizamos sempre a forma que for mais conveniente para você, mantendo a mesma qualidade e dedicação em ambos os formatos."
  },
  {
    question: "Quais documentos preciso levar para a primeira consulta?",
    answer: "Para otimizar o atendimento, recomendamos trazer: documentos pessoais (RG, CPF), comprovante de residência, e qualquer documentação relacionada ao seu caso jurídico (contratos, notificações, processos anteriores, e-mails, mensagens, fotos, etc.). Se for um caso trabalhista, traga carteira de trabalho e comprovantes de pagamento. Para questões imobiliárias, escrituras e contratos de compra/venda. Em casos de família, certidões de casamento/nascimento. Não se preocupe se não tiver tudo - traremos orientações específicas após o primeiro contato."
  },
  {
    question: "Vocês atuam em quais cidades e regiões?",
    answer: "Nosso escritório está sediado em Macapá-AP e atendemos clientes em todo o estado do Amapá, incluindo Santana, Laranjal do Jari, Oiapoque, e demais municípios. Através do atendimento online, também prestamos consultoria jurídica para clientes em outras regiões do Brasil, especialmente em questões que envolvem legislação federal (direito trabalhista, civil, família e consumidor). Para processos judiciais, avaliamos a viabilidade de atuação conforme a comarca e complexidade do caso."
  },
  {
    question: "Como funciona o pagamento de honorários advocatícios?",
    answer: "Trabalhamos com total transparência nos honorários. Os valores são definidos após a análise inicial do caso, considerando sua complexidade, urgência e tempo estimado. Oferecemos diferentes modalidades de pagamento: honorários fixos (valor acordado no início), honorários por hora trabalhada, ou êxito (percentual sobre o resultado obtido - comum em ações trabalhistas e de cobrança). Parcelamento e formas de pagamento são flexíveis e discutidos na consulta inicial. Fornecemos sempre contrato de honorários detalhado antes de iniciarmos qualquer trabalho."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex p-3 rounded-full bg-accent/10 mb-4">
              <HelpCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Perguntas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre nossos serviços jurídicos. 
              Caso sua pergunta não esteja aqui, entre em contato conosco.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-lg px-6 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="text-lg md:text-xl font-bold text-white group-data-[state=open]:text-accent transition-colors pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Footer */}
          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">Ainda tem dúvidas?</p>
            <a
              href="https://wa.me/5596981293353?text=Ol%C3%A1%2C+tenho+algumas+d%C3%BAvidas+sobre+os+servi%C3%A7os+jur%C3%ADdicos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
