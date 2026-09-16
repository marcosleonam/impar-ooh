// Fonte única de verdade dos dados da ímpar.
// É o único arquivo que muda quando o cliente confirmar as informações.
// [CONFIRMAR] = dado ainda não validado com o cliente.

export const cliente = {
  nome: 'ímpar',
  nomeCompleto: 'ímpar Propaganda OOH',
  tagline: 'Um jeito único de fazer campanha',
  cidade: 'São Luís',
  uf: 'MA',
  dominio: 'imparooh.com.br',
  decisor: 'Marcelo Vieira',
  decisorCargo: 'Gestor comercial',
  email: 'imparooh@gmail.com',

  // [CONFIRMAR] apareceram 4 números do cliente:
  //   (98) 98891-9422  Google Maps
  //   (98) 98894-9422  etiqueta dos painéis em campo
  //   (98) 98891-9922  arte de um post do Instagram
  //   (98) 8186-7416   contato do Instagram
  // Até o Marcos confirmar, o botão usa o link curto que o próprio
  // cliente publica na bio — não erra o número, mas não aceita
  // mensagem pré-preenchida. Trocar por `whatsapp` quando confirmar.
  whatsappLinkOficial: 'https://wa.me/message/UJT6WKVBO2YJN1',
  whatsapp: null,
  telefoneExibicao: null,

  instagram: 'impar_ooh',
  instagramUrl: 'https://instagram.com/impar_ooh',

  mensagemPadrao: 'Olá! Vim pelo site da ímpar e quero anunciar em mídia exterior.',
}

// Enquanto `whatsapp` for null, devolve o link oficial da bio.
// Quando o número for confirmado, passa a montar wa.me com texto —
// que é o que permite saber que o lead veio do site.
export function whatsappLink(mensagem = cliente.mensagemPadrao) {
  if (!cliente.whatsapp) return cliente.whatsappLinkOficial
  return `https://wa.me/${cliente.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

// Os sete formatos são exatamente os destaques do perfil do cliente.
export const formatos = [
  {
    id: 'outdoor',
    nome: 'Outdoor',
    resumo: 'O formato 9×3 de sempre, no lugar certo.',
    texto:
      'Papel em estrutura de avenida, trocado a cada bissemana. É o formato que constrói memória de marca pelo tempo de exposição: quem passa todo dia vê todo dia.',
  },
  {
    id: 'frontlight',
    nome: 'Frontlight',
    resumo: 'Grande formato iluminado, visível à noite.',
    texto:
      'Lona tensionada com iluminação frontal. Dobra a janela útil do ponto: continua trabalhando depois que o sol se põe, no horário de maior fluxo de volta pra casa.',
  },
  {
    id: 'led',
    nome: 'Painel de LED',
    resumo: 'Mídia digital, com troca de arte no mesmo dia.',
    texto:
      'DOOH em ponto de alto fluxo. Permite rodar mais de uma peça no mesmo espaço, mudar a mensagem por horário e colocar uma campanha no ar sem esperar produção gráfica.',
  },
  {
    id: 'empena',
    nome: 'Empena',
    resumo: 'A lateral inteira de um prédio.',
    texto:
      'O maior formato disponível na cidade. Não compete por atenção: domina o enquadramento de quem se aproxima e vira ponto de referência da região.',
  },
  {
    id: 'backbus',
    nome: 'Backbus',
    resumo: 'Sua marca circulando pela cidade inteira.',
    texto:
      'Traseira de ônibus. Enquanto o painel espera o público passar, o backbus vai atrás dele — e fica no campo de visão de quem está parado no trânsito.',
  },
  {
    id: 'acoes',
    nome: 'Ações promocionais',
    resumo: 'Mídia que encosta na pessoa.',
    texto:
      'Ativação de rua, panfletagem qualificada e ações com equipe em ponto de fluxo. É o formato que fecha o ciclo: o painel apresenta, a ação conversa.',
  },
  {
    id: 'comunicacao-visual',
    nome: 'Comunicação visual',
    resumo: 'A marca aplicada no ponto de venda.',
    texto:
      'Fachada, testeira, adesivação e sinalização interna. O cliente que a mídia exterior trouxe até a porta precisa reconhecer a loja quando chega nela.',
  },
]

// Fotos reais de pontos da ímpar (extraídas do perfil público do cliente).
export const pontos = [
  { img: 'ponto-avenida.webp', legenda: 'Outdoor em avenida de fluxo, São Luís' },
  { img: 'ponto-valparaiso.webp', legenda: 'Frontlight de grande formato, região do Valparaíso' },
  { img: 'ponto-mae.webp', legenda: 'Campanha sazonal em ponto de corredor comercial' },
  { img: 'ponto-calhau.webp', legenda: 'Painel no Calhau, Av. dos Holandeses' },
]

export const etapas = [
  {
    n: '01',
    titulo: 'A gente entende o que você precisa vender',
    texto:
      'Antes de falar de ponto, a conversa é sobre o seu objetivo: abrir loja, lançar produto, disputar uma data. O formato certo sai daí, não de tabela.',
  },
  {
    n: '02',
    titulo: 'Escolhemos o ponto pelo trajeto do seu cliente',
    texto:
      'Mídia exterior não se compra por preço de metro quadrado, se compra por rota. Indicamos o ponto pelo caminho que o seu público já faz todo dia.',
  },
  {
    n: '03',
    titulo: 'Produção e instalação por nossa conta',
    texto:
      'Impressão, transporte e montagem são nossos. Você aprova a arte e não lida com fornecedor nenhum.',
  },
  {
    n: '04',
    titulo: 'Você recebe a prova de que está no ar',
    texto:
      'Foto do seu anúncio instalado, no ponto contratado, com data. O checking é o que separa mídia exterior de promessa.',
  },
]
