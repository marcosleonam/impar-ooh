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

  // Número do WhatsApp Business do Marcelo — é o que o próprio cliente
  // registra como contato no perfil do Instagram, e é a mesma conta por trás
  // do link curto da bio (que resolve para "Marcelo Vieira Impar OOH").
  // Os outros três números que circulam (98894-9422 na etiqueta dos painéis,
  // 98891-9422 no Google Maps, 98891-9922 numa arte de post) são anteriores
  // ao rebranding ou de outra linha.
  whatsapp: '5598981867416',
  telefoneExibicao: '(98) 98186-7416',
  whatsappLinkOficial: 'https://wa.me/message/UJT6WKVBO2YJN1', // reserva

  instagram: 'impar_ooh',
  instagramUrl: 'https://instagram.com/impar_ooh',

  mensagemPadrao:
    'Olá! Vim pelo site da ímpar e quero anunciar em mídia exterior. Pode me passar os pontos disponíveis e o valor?',
}

// Monta o link do WhatsApp com a mensagem já escrita.
// O texto pré-preenchido não é enfeite: é o que faz o Marcelo saber, na
// primeira linha da conversa, que aquele lead veio do site e o que ele quer.
export function whatsappLink(mensagem = cliente.mensagemPadrao) {
  return `https://wa.me/${cliente.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

// Mensagem específica por formato — o lead já chega dizendo o que procura.
export function linkFormato(nomeFormato) {
  return whatsappLink(
    `Olá! Vim pelo site da ímpar e quero saber sobre ${nomeFormato}.`,
  )
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

// Seção "A marca". O rebranding foi confirmado pelo Marcos: a ímpar é a marca
// nova da operação que a praça conhecia como Impacto. Os painéis em campo ainda
// carregam a etiqueta antiga — por isso o site explica, em vez de fingir que
// nada aconteceu. Texto escrito na voz do cliente, não copiado.
// [CONFIRMAR] com o Marcelo: desde quando é ímpar, e se cabe citar o nome
// "Impacto" de forma explícita no site.
export const marca = {
  texto: [
    'Se você anda por São Luís, já passou por um painel nosso. Por muito tempo ele levou outro nome — e é o mesmo time, nas mesmas avenidas, cuidando das mesmas estruturas.',
    'A ímpar é o nome novo dessa operação. Trocar a marca não foi trocar a placa: foi a chance de rever como a gente vende, como atende e o que entrega junto com o espaço no painel.',
    'Mídia exterior é um mercado onde é fácil vender um ponto e sumir. A gente resolveu construir o contrário disso — e o nome novo é o compromisso público com esse jeito de trabalhar.',
  ],
  mudancas: [
    {
      titulo: 'A conversa começa pelo seu objetivo',
      texto:
        'Antes era catálogo e tabela. Agora a primeira pergunta é o que você precisa vender — o ponto vem depois, como consequência.',
    },
    {
      titulo: 'Checking em toda campanha',
      texto:
        'Foto do seu anúncio instalado, no ponto contratado, com data. Deixou de ser favor pedido no fim e virou parte da entrega.',
    },
    {
      titulo: 'Padrão de manutenção dos pontos',
      texto:
        'Estrutura, iluminação e estado do material entraram numa rotina de conferência. Painel rasgado ou lâmpada queimada é anúncio pago que não está trabalhando.',
    },
    {
      titulo: 'Um portfólio inteiro, não um formato só',
      texto:
        'Outdoor, frontlight, LED, empena, backbus, ações e comunicação visual na mesma casa — para a indicação ser pelo que funciona, não pelo que temos sobrando.',
    },
  ],
}
