function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <div
      data-scroll
      data-scroll-repeat="false"
      data-scroll-call="reveal"
      data-reveal
      data-reveal-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
}

export default SectionReveal;
