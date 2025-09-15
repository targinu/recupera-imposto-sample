import React, { useState } from "react";
import "./App.css";

function App() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [clientData, setClientData] = useState(null);

  const handleCpfChange = (e) => setCpf(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);
  const toggleShowPassword = () => setShowPassword((s) => !s);

  // Dados simulados
  const mockData = [
    {
      cpf: "123.456.789-00",
      nome: "João Silva",
      entregas: [
        {
          entrega: "2014",
          status: "RECUPERADO",
          d1: "",
          dataD1: "",
          recebidoU: "R$ 18,046.24",
          dataRecU: "1/15/2018",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 3,609.25",
        },
        {
          entrega: "2015",
          status: "RECUPERADO",
          d1: "R$ 9,499.98",
          dataD1: "4/15/2016",
          recebidoU: "R$ 78,244.57",
          dataRecU: "1/15/2018",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 15,648.91",
        },
        {
          entrega: "2016",
          status: "RECUPERADO",
          d1: "",
          dataD1: "",
          recebidoU: "R$ 88,945.27",
          dataRecU: "2/15/2018",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 17,789.05",
        },
        {
          entrega: "2017",
          status: "RECUPERADO",
          d1: "R$ 2,675.44",
          dataD1: "7/17/2017",
          recebidoU: "R$ 70,492.55",
          dataRecU: "9/17/2018",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 14,098.51",
        },
        {
          entrega: "2018",
          status: "RECUPERADO",
          d1: "R$ 2,551.10",
          dataD1: "6/15/2018",
          recebidoU: "R$ 71,862.23",
          dataRecU: "1/15/2020",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 14,372.45",
        },
        {
          entrega: "2019",
          status: "RECUPERADO",
          d1: "",
          dataD1: "",
          recebidoU: "R$ 18,210.22",
          dataRecU: "2/17/2020",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 3,642.04",
        },
        {
          entrega: "2020",
          status: "RECUPERADO",
          d1: "R$ 8,995.14",
          dataD1: "6/30/2020",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "",
        },
        {
          entrega: "2021",
          status: "RECUPERADO",
          d1: "R$ 833.09",
          dataD1: "5/31/2021",
          recebidoU: "R$ 33,461.21",
          dataRecU: "10/29/2021",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 6,692.24",
        },
        {
          entrega: "2022",
          status: "RECUPERADO",
          d1: "R$ 2,657.65",
          dataD1: "6/30/2022",
          recebidoU: "R$ 58,055.47",
          dataRecU: "9/29/2023",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "R$ 11,611.09",
        },
        {
          entrega: "2023",
          status: "FILA DE RESTITUIÇÃO",
          d1: "R$ 775.36",
          dataD1: "6/30/2023",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "R$ 64,784.69",
          honorarios: "",
        },
        {
          entrega: "2024",
          status: "FILA DE RESTITUIÇÃO",
          d1: "R$ 3,589.84",
          dataD1: "6/28/2024",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "R$ 94,961.21",
          honorarios: "",
        },
        {
          entrega: "2025",
          status: "RECUPERADO",
          d1: "R$ 3,687.92",
          dataD1: "5/30/2025",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "R$ 89,153.30",
          honorarios: "",
        },
        {
          entrega: "CONT PREV",
          status: "FALTA REQUERER",
          d1: "",
          dataD1: "",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "",
        },
        {
          entrega: "ISENCAO",
          status: "INDEFERIDO",
          d1: "",
          dataD1: "",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "",
        },
        {
          entrega: "JUDICIAL",
          status: "NAO",
          d1: "",
          dataD1: "",
          recebidoU: "",
          dataRecU: "",
          aReceberD1: "",
          aReceberU: "",
          honorarios: "",
        },
      ],
    },
  ];

  const labels = [
    "ENTREGA",
    "STATUS",
    "V. 1º PAG.",
    "DATA 1º PAG.",
    "RECEBIDO ÚLTIMO PAG.",
    "DATA ÚLTIMO PAG.",
    "A RECEBER 1º PAG.",
    "A RECEBER ÚLTIMO PAG.",
    "HONORÁRIOS",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setClientData(mockData[0]);
  };

  const handleNovaConsulta = () => {
    setClientData(null);
    setCpf("");
    setSenha("");
    setShowPassword(false);
  };

  return (
    <div className="App">
      <header className="main-header">
        <div className="container relative">
          <nav className="navbar">
            <div className="gr-nav">
              <ul>
                <li>
                  <a href="https://recuperaimposto.com.br">Página inicial</a>
                </li>
              </ul>
            </div>
            <div className="wrapper-mobile">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/recuperaimposto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/recuperaimposto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/instagram.png"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://twitter.com/recuperaimposto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/recupera-imposto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
            <div className="dg-logo-principal">
              <a href="https://recuperaimposto.com.br/pagina-inicial/">
                <img
                  src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/src/img/logo/logo-principal.png"
                  alt="Logo Recupera Imposto"
                />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="app-container">
        {!clientData ? (
          <div className="login-container">
            <h2>Consulta de Situação</h2>

            <div className="info-box">
              <p>
                Clique Consultar para exibir os dados ficticios de um cliente.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={handleCpfChange}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="senha">Senha:</label>
                <div className="input-with-icon">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={handleSenhaChange}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button type="submit">Consultar</button>
            </form>
          </div>
        ) : (
          <div className="data-container">
            <h2>Suas Informações</h2>
            <div className="client-info">
              <p>
                <strong>CPF:</strong> {clientData.cpf}
              </p>
              <p>
                <strong>Nome:</strong> {clientData.nome}
              </p>
              <p>
                <strong>Total de Processos:</strong>{" "}
                {clientData.entregas.length}
              </p>
            </div>

            <div className="table-responsive">
              {/* Tabela desktop */}
              <table className="desktop-table">
                <thead>
                  <tr>
                    {labels.map((label, i) => (
                      <th key={i}>{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {clientData.entregas.map((e, i) => (
                    <tr key={i}>
                      <td>{e.entrega}</td>
                      <td
                        className={
                          e.status.toLowerCase().includes("recuperado") ||
                          e.status.toLowerCase().includes("concluído")
                            ? "status-completo"
                            : "status-processamento"
                        }
                      >
                        {e.status}
                      </td>
                      <td>{e.d1}</td>
                      <td>{e.dataD1}</td>
                      <td>{e.recebidoU}</td>
                      <td>{e.dataRecU}</td>
                      <td>{e.aReceberD1}</td>
                      <td>{e.aReceberU}</td>
                      <td>{e.honorarios}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Tabela mobile */}
              <div className="mobile-tables">
                {clientData.entregas.map((e, i) => (
                  <table key={i} className="mobile-table">
                    <thead>
                      <tr>
                        <th className="sticky-col">ENTREGA</th>
                        <th>{e.entrega}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="sticky-col">STATUS</td>
                        <td
                          className={
                            e.status?.toUpperCase()?.includes("RECUPERADO") ||
                            e.status?.toUpperCase()?.includes("CONCLUÍDO") ||
                            e.status?.toUpperCase()?.includes("RECEBIDO")
                              ? "status-completo"
                              : "status-processamento"
                          }
                        >
                          {e.status}
                        </td>
                      </tr>
                      <tr>
                        <td className="sticky-col">V. 1º PAG.</td>
                        <td>{e.d1}</td>
                      </tr>
                      <tr>
                        <td className="sticky-col">DATA 1º PAG.</td>
                        <td>{e.dataD1}</td>
                      </tr>
                      <tr>
                        <td className="sticky-col">RECEBIDO ÚLTIMO PAG.</td>
                        <td>{e.recebidoU}</td>
                      </tr>
                      <tr>
                        <td className="sticky-col">DATA ÚLTIMO PAG.</td>
                        <td>{e.dataRecU}</td>
                      </tr>
                      <tr>
                        <td className="sticky-col">A RECEBER 1º PAG.</td>
                        <td>{e.aReceberD1}</td>
                      </tr>
                      <tr>
                        <td className="sticky-col">A RECEBER ÚLTIMO PAG.</td>
                        <td>{e.aReceberU}</td>
                      </tr>
                      <tr>
                        <td className="sticky-col">HONORÁRIOS</td>
                        <td>{e.honorarios}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>

            <button className="logout-btn" onClick={handleNovaConsulta}>
              Nova Consulta
            </button>
          </div>
        )}
      </div>
      <footer className="footer-cta" id="contato">
        <div className="footer-cta__container">
          <div className="footer-cta__card">
            <div className="footer-cta__info">
              <h2 className="footer-cta__brand">Recupera Imposto</h2>
              <div className="footer-cta__block">
                <p className="footer-cta__line">
                  Luiz Antonio Vergueiro – LTDA
                </p>
                <p className="footer-cta__line">CNPJ: 27898884/0001-08</p>
              </div>
              <div className="footer-cta__block">
                <h3 className="footer-cta__subtitle">Horário de atendimento</h3>
                <p className="footer-cta__line">Segunda à Sexta: 10h – 19h</p>
              </div>
              <div className="footer-cta__block footer-cta__phones">
                <a
                  href="https://api.whatsapp.com/send?phone=5511914806554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-cta__phone"
                  aria-label="Telefone WhatsApp (11) 91480-6554"
                >
                  <img
                    src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/whatsapp.png"
                    className="icon"
                    alt="WhatsApp"
                  />
                  (11) 91480-6554
                </a>
                <a
                  href="tel:+551125393920"
                  className="footer-cta__phone"
                  aria-label="Telefone (11) 2539-3920"
                >
                  <img
                    src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/phone-call.png"
                    className="icon"
                    alt="Telefone"
                  />
                  (11) 2539-3920
                </a>
              </div>
              <div className="footer-cta__bottom">
                <div className="footer-cta__addresses">
                  <address className="footer-cta__address">
                    Rua Comendador Miguel Calfat, 59 – 3º Andar, Vila Nova
                    Conceição, SP – 04537-080
                  </address>
                  <address className="footer-cta__address">
                    Rua Waldomiro Moreira, 120 – 1º Andar, Salto de Pirapora-SP
                    – 18160-000
                  </address>
                  <a
                    className="footer-cta__email"
                    href="mailto:atendimento@recuperaimposto.com.br"
                  >
                    atendimento@recuperaimposto.com.br
                  </a>
                </div>
                <div className="footer-cta__social">
                  <a
                    href="https://www.facebook.com/recuperaimposto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <img
                      src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/facebook.png"
                      className="social-icon"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/recuperaimposto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <img
                      src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/instagram.png"
                      className="social-icon"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://twitter.com/recuperaimposto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                  >
                    <img
                      src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/twitter.png"
                      className="social-icon"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/recupera-imposto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <img
                      src="https://recuperaimposto.com.br/wp-content/themes/recupera-seguro/assets/dist/img/linkedin.png"
                      className="social-icon"
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
