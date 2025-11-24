import { Scale, FileText, Briefcase } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import ladyJusticeBanner from "@/assets/lady-justice-banner.png";

const metrics = [
  {
    icon: Scale,
    value: 750,
    label: "Clientes Atendidos",
  },
  {
    icon: FileText,
    value: 599,
    label: "Contratos Feitos",
  },
  {
    icon: Briefcase,
    value: 1000,
    label: "Processos Executados",
  },
];

const MetricCard = ({ metric, index }: { metric: typeof metrics[0]; index: number }) => {
  const Icon = metric.icon;
  const { count, elementRef } = useCounter(metric.value, 2000, index * 200);

  return (
    <div 
      ref={elementRef}
      className="text-center space-y-4 animate-fade-in"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className="flex justify-center">
        <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
          <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {count.toLocaleString('pt-BR')}+
        </h3>
        <p className="text-lg text-white font-medium">
          {metric.label}
        </p>
      </div>
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${ladyJusticeBanner})`,
          backgroundAttachment: 'scroll'
        }}
      ></div>
      
      {/* Copper Overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(184, 128, 110, 0.7)' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
