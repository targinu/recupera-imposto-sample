"use client";

export default function Footer() {
  return (
    <footer
      onClick={(e) => { const a = (e.target as HTMLElement).closest("a"); if (a) e.preventDefault(); }}
      className="bg-[#1B1C4E] text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Coluna 1 — Logo + descrição */}
        <div>
          <img
            src="/images/logo/logo-principal.webp"
            alt="Logo"
            className="h-12 mb-6"
          />

          <p className="font-semibold mb-3">
            Recupera Imposto — Justiça Fiscal.
          </p>

          <p className="text-sm leading-relaxed text-gray-300">
            Somos especializados em obter a isenção e recuperação do imposto de
            renda de aposentados, reformados, pensionistas e seus herdeiros.
            Atuamos na área administrativa e judicial, junto à RECEITA FEDERAL,
            SPPREV e todas as fontes pagadoras.
          </p>

          {/* Redes sociais */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/recuperaimposto/"
              className="hover:opacity-75 transition invert hover:invert-0"
            >
              <img src="/images/social/facebook.webp" className="h-6" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/recuperaimposto/"
              className="hover:opacity-75 transition invert hover:invert-0"
            >
              <img src="/images/social/instagram.webp" className="h-6" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/recupera-imposto/"
              className="hover:opacity-75 transition invert hover:invert-0"
            >
              <img src="/images/social/linkedin.webp" className="h-6" alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/recuperaimposto"
              className="hover:opacity-75 transition invert hover:invert-0"
            >
              <img src="/images/social/twitter.webp" className="h-6" alt="Twitter" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511966159619"
              className="hover:opacity-75 transition invert hover:invert-0"
            >
              <img src="/images/social/whatsapp.webp" className="h-6" alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Coluna 2 — Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Links</h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="/#solucoes" className="hover:text-white transition">
                Soluções
              </a>
            </li>
            <li>
              <a href="/#patologias" className="hover:text-white transition">
                Quem tem direito
              </a>
            </li>
            <li>
              <a href="/#calculadora" className="hover:text-white transition">
                Calculadora
              </a>
            </li>
            <li>
              <a href="/#sobre" className="hover:text-white transition">
                Quem somos
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-white transition">
                Dúvidas frequentes
              </a>
            </li>
            <li>
              <a href="/blog/" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/area-do-cliente/" className="hover:text-white transition">
                Área do cliente
              </a>
            </li>
            <li>
              <a href="/assistente-virtual/" className="hover:text-white transition">
                Fale com um consultor
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 — Contato da empresa */}
        <div className="space-y-8">
          {/* Telefone */}
          <div className="flex items-start gap-4">
            <a
              href="https://wa.me/5511966159619"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 flex-shrink-0 hover:invert-0 transition"
            >
              <div className="w-12 flex-shrink-0 invert hover:invert-0">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                  <img src="/images/social/whatsapp.webp" className="h-6" alt="WhatsApp" />
                </div>
              </div>
            </a>

            <div className="flex-1">
              <p className="font-semibold text-sm">Telefone / WhatsApp</p>
              <p className="text-gray-300 text-sm">(11) 96615-9619</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <a
              href="mailto:atendimento@recuperaimposto.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 flex-shrink-0 hover:invert-0 transition"
            >
              <div className="w-12 flex-shrink-0 invert hover:invert-0">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                  <img src="/images/social/mail.webp" className="h-10" alt="Email" />
                </div>
              </div>
            </a>
            <div className="flex-1">
              <p className="font-semibold text-sm">E-mail</p>
              <p className="text-gray-300 text-sm break-all">
                atendimento@recuperaimposto.com.br
              </p>
            </div>
          </div>

          {/* Endereços */}
          <div className="flex items-start gap-4">
            <a
              href="https://maps.app.goo.gl/w2ezU8iH6wV2M8Ep9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 flex-shrink-0 invert hover:invert-0 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                <img
                  src="/images/social/maps.webp"
                  className="h-6 filter grayscale brightness-0"
                  alt="Maps"
                />
              </div>
            </a>

            <div className="flex-1">
              <p className="font-semibold text-sm">Endereços</p>

              <p className="text-gray-300 text-sm">
                Rua Comendador Miguel Calfat, 59 – 3º Andar, Vila Nova
                Conceição, SP – 04537-080
              </p>

              <br />

              <p className="text-gray-300 text-sm">
                Rua Luis Delfino, 95 – Sala 3, Vila Bastos, Santo André - SP
                09041-010
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 Recupera Imposto – Luiz Antonio Vergueiro LTDA
        <br />
        CNPJ: 27.898.884/0001-08
      </div>
    </footer>
  );
}
