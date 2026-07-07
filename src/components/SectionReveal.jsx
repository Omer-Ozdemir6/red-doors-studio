function SectionReveal({ children, className = "", delay = 0, style = "lift" }) {
  return (
    <div
      data-scroll
      data-scroll-repeat="false"
      data-scroll-call="reveal"
      data-reveal
      data-reveal-wrap
      data-reveal-delay={delay}
      data-reveal-style={style}
      className={className}
    >
      {children}
    </div>
  );
}

export default SectionReveal;
