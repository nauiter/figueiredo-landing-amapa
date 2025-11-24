import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a consulta inicial?",
    answer: "Realizamos uma análise detalhada do seu caso, podendo ser presencial em nosso escritório em Macapá ou online via videochamada. Durante a consulta, ouvimos sua situação, analisamos a documentação e apresentamos as melhores estratégias jurídicas para resolver seu caso. É um momento para tirar todas as suas dúvidas e entender como podemos ajudá-lo."
  },
  {
    question: "Quais áreas vocês atendem?",
    answer: "Somos especialistas em Direito Civil, Direito Trabalhista, Direito Imobiliário e Direito de Família e Sucessões. Atuamos em processos judiciais, negociações extrajudiciais, elaboração de contratos, consultoria preventiva e todas as demandas relacionadas a essas áreas do direito."
  },
  {
    question: "O atendimento é apenas para Macapá?",
    answer: "Nossa sede física está localizada em Macapá-AP, mas atendemos clientes de todo o Brasil através de consultas digitais por videochamada. Utilizamos tecnologia para oferecer o mesmo padrão de excelência e atendimento humanizado, independentemente da sua localização. Para processos judiciais, avaliamos a viabilidade conforme a comarca."
  },
  {
    question: "Quais documentos devo levar para a consulta?",
    answer: "Recomendamos trazer RG, CPF, comprovante de residência e todos os documentos relacionados ao seu caso ou processo (contratos, notificações, e-mails, mensagens, comprovantes, certidões, etc.). Quanto mais informações você trouxer, melhor será nossa análise inicial. Caso não tenha toda a documentação, não se preocupe - orientaremos você sobre o que será necessário reunir."
  },
  {
    question: "Aceitam parcelamento de honorários?",
    answer: "Sim! Entendemos que cada situação é única e buscamos sempre oferecer condições justas e acessíveis. Analisamos cada caso individualmente para estabelecer um plano de pagamento que se adeque à sua realidade financeira, sem comprometer a qualidade do serviço prestado. Os valores e formas de pagamento são acordados de forma transparente antes do início dos trabalhos."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex p-3 rounded-full bg-accent/10 mb-4">
              <HelpCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
                className="bg-card border border-border rounded-lg px-6 hover:border-accent/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="text-lg md:text-xl font-bold text-foreground group-data-[state=open]:text-accent transition-colors pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Footer */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
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
