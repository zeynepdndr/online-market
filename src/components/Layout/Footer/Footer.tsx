export default function Footer() {
  return (
    <footer
      data-testid="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f5f5f5",
        fontSize: "13px",
        lineHeight: "24px",
      }}
    >
      <article>
        <div>
          <span style={{ color: "#525252" }}>© 2022 Getir</span>
          <span style={{ color: "#5d3ebc" }}>Information Society Services</span>
          <div>
            <span>Facebook</span>
          </div>
        </div>
      </article>
    </footer>
  );
}
