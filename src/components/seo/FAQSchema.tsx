import { useEffect } from 'react';

const FAQSchema = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como funciona a consulta inicial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Realizamos uma análise detalhada do seu caso, podendo ser presencial em nosso escritório em Macapá ou online via videochamada. Durante a consulta, ouvimos sua situação, analisamos a documentação e apresentamos as melhores estratégias jurídicas para resolver seu caso."
          }
        },
        {
          "@type": "Question",
          "name": "Quais áreas vocês atendem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Somos especialistas em Direito Civil, Direito Trabalhista, Direito Imobiliário e Direito de Família e Sucessões. Atuamos em processos judiciais, negociações extrajudiciais, elaboração de contratos e consultoria preventiva."
          }
        },
        {
          "@type": "Question",
          "name": "O atendimento é apenas para Macapá?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossa sede física está localizada em Macapá-AP, mas atendemos clientes de todo o Brasil através de consultas digitais por videochamada. Utilizamos tecnologia para oferecer o mesmo padrão de excelência e atendimento humanizado, independentemente da sua localização."
          }
        },
        {
          "@type": "Question",
          "name": "Quais documentos devo levar para a consulta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recomendamos trazer RG, CPF, comprovante de residência e todos os documentos relacionados ao seu caso ou processo (contratos, notificações, e-mails, mensagens, comprovantes, certidões, etc.). Quanto mais informações você trouxer, melhor será nossa análise inicial."
          }
        },
        {
          "@type": "Question",
          "name": "Aceitam parcelamento de honorários?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Entendemos que cada situação é única e buscamos sempre oferecer condições justas e acessíveis. Analisamos cada caso individualmente para estabelecer um plano de pagamento que se adeque à sua realidade financeira."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default FAQSchema;
