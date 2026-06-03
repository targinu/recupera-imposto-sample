"use client";

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Entrega {
  processo: string;
  status: string;
  vlrRestituido: string | number;
  dataRestFinal: string;
  vlrProvavelPReceber: string | number;
  dataPrevistRestituicao: string;
  porcentHon: string | number;
}

interface ClientData {
  cpf: string;
  nome: string;
  dataNascimento: string;
  entregas: Entrega[];
  colNames: {
    vlrRestituido: string;
    dataRestFinal: string;
    vlrProvavelPReceber: string;
    dataPrevistRestituicao: string;
    porcentHon: string;
  };
}

const formatarMoeda = (v: string | number): string => {
  if (v === "" || v === null || v === undefined) return "—";
  const num = typeof v === "number" ? v : parseFloat(String(v).replace(",", "."));
  if (isNaN(num)) return "—";
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const formatarPorcentagem = (v: string | number): string => {
  if (v === "" || v === null || v === undefined) return "—";
  const num = typeof v === "number" ? v : parseFloat(String(v).replace(",", "."));
  if (isNaN(num)) return "—";
  const pct = num <= 1 ? num * 100 : num;
  return `${pct.toFixed(0)}%`;
};

const formatarCampo = (v: string | number): string => {
  if (v === "" || v === null || v === undefined) return "—";
  return String(v);
};

const mockClientData: ClientData = {
  cpf: "123.456.789-00",
  nome: "João Silva",
  dataNascimento: "15/03/1955",
  entregas: [
    { processo: "2014",      status: "RECUPERADO",          vlrRestituido: 18046.24, dataRestFinal: "15/01/2018", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2015",      status: "RECUPERADO",          vlrRestituido: 78244.57, dataRestFinal: "15/01/2018", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2016",      status: "RECUPERADO",          vlrRestituido: 88945.27, dataRestFinal: "15/02/2018", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2017",      status: "RECUPERADO",          vlrRestituido: 70492.55, dataRestFinal: "17/09/2018", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2018",      status: "RECUPERADO",          vlrRestituido: 71862.23, dataRestFinal: "15/01/2020", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2019",      status: "RECUPERADO",          vlrRestituido: 18210.22, dataRestFinal: "17/02/2020", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2020",      status: "RECUPERADO",          vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: "" },
    { processo: "2021",      status: "RECUPERADO",          vlrRestituido: 33461.21, dataRestFinal: "29/10/2021", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2022",      status: "RECUPERADO",          vlrRestituido: 58055.47, dataRestFinal: "29/09/2023", vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: 20 },
    { processo: "2023",      status: "FILA DE RESTITUIÇÃO", vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: 64784.69, dataPrevistRestituicao: "2025", porcentHon: "" },
    { processo: "2024",      status: "FILA DE RESTITUIÇÃO", vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: 94961.21, dataPrevistRestituicao: "2026", porcentHon: "" },
    { processo: "2025",      status: "RECUPERADO",          vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: 89153.30, dataPrevistRestituicao: "",     porcentHon: "" },
    { processo: "CONT PREV", status: "FALTA REQUERER",      vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: "" },
    { processo: "ISENCAO",   status: "INDEFERIDO",          vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: "" },
    { processo: "JUDICIAL",  status: "NAO",                 vlrRestituido: "",       dataRestFinal: "",            vlrProvavelPReceber: "",       dataPrevistRestituicao: "",     porcentHon: "" },
  ],
  colNames: {
    vlrRestituido: "VLR RESTITUIDO",
    dataRestFinal: "DATA REST FINAL",
    vlrProvavelPReceber: "VLR PROVAVEL P/ RECEBER",
    dataPrevistRestituicao: "DATA PREVISTA RESTITUIÇÃO",
    porcentHon: "% HON",
  },
};

const getStatusClass = (status: string): string => {
  const s = status?.toUpperCase() || "";
  if (s.includes("RECUPERADO") || s.includes("CONCLUÍDO") || s.includes("RECEBIDO")) {
    return "text-green-700 bg-green-50 border border-green-200";
  }
  return "text-amber-700 bg-amber-50 border border-amber-200";
};

export default function Consulta() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientData, setClientData] = useState<ClientData | null>(null);

  const formatarCPF = (value: string): string => {
    let n = value.replace(/\D/g, "").slice(0, 11);
    if (n.length > 9) return n.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    if (n.length > 6) return n.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    if (n.length > 3) return n.replace(/(\d{3})(\d+)/, "$1.$2");
    return n;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setClientData(mockClientData);
    setLoading(false);
  };

  const handleNovaConsulta = () => {
    setClientData(null);
    setCpf("");
    setSenha("");
    setShowPassword(false);
  };

  return (
    <div className="bg-brand5 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand7 rounded-lg sm:rounded-2xl shadow-lg p-4 sm:p-8 border border-brand1/20">

          {!clientData ? (
            /* ── Formulário ── */
            <div className="max-w-md mx-auto">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-lg sm:text-2xl font-bold text-brand2">Consulta de Situação</h2>
                <p className="mt-1 text-sm sm:text-base text-brand6">
                  Digite seu CPF e senha para consultar suas informações
                </p>
                <div className="mt-3 p-3 bg-brand1/20 border border-brand1/40 rounded-lg">
                  <p className="text-xs sm:text-sm text-brand2">
                    Clique em <strong>Consultar</strong> para exibir os dados fictícios de um cliente.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-brand2 mb-1 sm:mb-2">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(formatarCPF(e.target.value))}
                    placeholder="000.000.000-00"
                    disabled={loading}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-brand1 rounded-lg focus:ring-2 focus:ring-brand2 focus:border-brand2 transition-colors disabled:opacity-50"
                                      />
                </div>

                <div>
                  <label htmlFor="senha" className="block text-sm font-medium text-brand2 mb-1 sm:mb-2">Senha</label>
                  <div className="relative">
                    <input
                      id="senha"
                      type={showPassword ? "text" : "password"}
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="Digite sua senha ou data de nascimento"
                      disabled={loading}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-brand1 rounded-lg focus:ring-2 focus:ring-brand2 focus:border-brand2 transition-colors disabled:opacity-50"
                                          />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      disabled={loading}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1 text-brand4 hover:text-brand2 focus:outline-none rounded"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-brand4">Informe a senha fornecida para acesso</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand2 text-brand7 font-semibold py-2 sm:py-3 px-4 rounded-lg hover:bg-brand6 focus:outline-none focus:ring-2 focus:ring-brand2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-brand7 rounded-full animate-spin" />
                      Consultando...
                    </div>
                  ) : "Consultar"}
                </button>
              </form>
            </div>
          ) : (
            /* ── Resultados ── */
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-brand5/80 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-brand1/30">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg sm:text-2xl font-bold text-brand2">Informações do Cliente</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {[
                        { label: "CPF",               value: clientData.cpf },
                        { label: "Nome",              value: clientData.nome },
                        { label: "Data de Nascimento", value: clientData.dataNascimento },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-brand7 rounded-lg p-3 sm:p-4 shadow-sm border border-brand1/20">
                          <p className="text-xs sm:text-sm text-brand4 font-medium">{label}</p>
                          <p className="text-sm sm:text-lg font-semibold text-brand2 mt-1">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-brand7 rounded-lg p-3 sm:p-4 shadow-sm border border-brand1">
                    <p className="text-xs sm:text-sm text-brand4 font-medium">Total de Processos</p>
                    <p className="text-xl sm:text-3xl font-bold text-brand2 mt-1">{clientData.entregas.length}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {clientData.entregas.map((entrega, index) => {
                  const processoUpper = entrega.processo?.toUpperCase() || "";
                  const isIsencaoP1 = processoUpper.includes("ISENCAO P1") || processoUpper.includes("ISENÇÃO P1");

                  return (
                    <div key={index} className="bg-brand7 border border-brand1/30 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                      <div className="bg-brand2 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                        <h3 className="text-xs sm:text-sm font-bold text-brand7 opacity-80">PROCESSO</h3>
                        <span className="text-sm sm:text-base font-bold text-brand7">{formatarCampo(entrega.processo)}</span>
                      </div>

                      <div>
                        <div className="border-b border-brand1/30 flex">
                          <div className="w-1/3 bg-brand5 px-4 sm:px-6 py-3 sm:py-4 border-r border-brand1/30">
                            <span className="font-medium text-brand2 text-xs sm:text-sm">STATUS</span>
                          </div>
                          <div className="w-2/3 px-4 sm:px-6 py-3 sm:py-4">
                            <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-center text-xs sm:text-sm ${getStatusClass(entrega.status)}`}>
                              {formatarCampo(entrega.status)}
                            </div>
                          </div>
                        </div>

                        {!isIsencaoP1 && [
                          { label: clientData.colNames.vlrRestituido,         value: formatarMoeda(entrega.vlrRestituido) },
                          { label: clientData.colNames.dataRestFinal,          value: formatarCampo(entrega.dataRestFinal) },
                          { label: clientData.colNames.vlrProvavelPReceber,    value: formatarMoeda(entrega.vlrProvavelPReceber) },
                          { label: clientData.colNames.dataPrevistRestituicao, value: formatarCampo(entrega.dataPrevistRestituicao) },
                          { label: clientData.colNames.porcentHon,             value: formatarPorcentagem(entrega.porcentHon) },
                        ].map(({ label, value }) => (
                          <div key={label} className="border-b border-brand1/30 last:border-b-0 flex">
                            <div className="w-1/3 bg-brand5 px-4 sm:px-6 py-3 sm:py-4 border-r border-brand1/30">
                              <span className="font-medium text-brand2 text-xs sm:text-sm">{label}</span>
                            </div>
                            <div className="w-2/3 px-4 sm:px-6 py-3 sm:py-4">
                              <p className="font-medium text-brand6 text-xs sm:text-base">{value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleNovaConsulta}
                className="w-full bg-brand2 text-brand7 font-semibold py-2 sm:py-3 px-4 rounded-lg hover:bg-brand6 focus:outline-none focus:ring-2 focus:ring-brand2 focus:ring-offset-2 transition-all duration-200 text-sm sm:text-base"
              >
                Nova Consulta
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
