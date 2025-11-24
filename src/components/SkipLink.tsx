const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-accent focus:text-primary focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all"
    >
      Pular para o conteúdo principal
    </a>
  );
};

export default SkipLink;
