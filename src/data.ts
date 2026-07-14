import { Product, Differential, Testimonial, FAQItem } from './types';

const COMPANHIA_WHATSAPP_NUMBERS = [
  '5511976359458',
  '5511932651306',
];

function getAssignedWhatsAppNumber(): string {
  if (typeof window === 'undefined') {
    return COMPANHIA_WHATSAPP_NUMBERS[0];
  }

  const storageKey = 'bm-imports-whatsapp-assigned';
  const existingNumber = window.sessionStorage.getItem(storageKey);

  if (
    existingNumber &&
    COMPANHIA_WHATSAPP_NUMBERS.includes(existingNumber)
  ) {
    return existingNumber;
  }

  const selectedNumber =
    COMPANHIA_WHATSAPP_NUMBERS[
      Math.floor(Math.random() * COMPANHIA_WHATSAPP_NUMBERS.length)
    ];

  window.sessionStorage.setItem(storageKey, selectedNumber);

  return selectedNumber;
}

export const COMPANHIA_WHATSAPP_NUMBER =
  getAssignedWhatsAppNumber(); // Número real da loja BM Imports
export const COMPANHIA_WHATSAPP_DEFAULT_MSG = 'Olá! Gostaria de falar com um especialista sobre as soluções em tecnologia e aparelhos disponíveis na BM Imports.';

export const DIFERENCIAIS: Differential[] = [
  {
    id: 'd1',
    title: 'Tendências Globais',
    description: 'Acompanhamos constantemente as novidades e lançamentos globais para trazer soluções atualizadas, relevantes e de ponta em primeiro lugar.',
    iconName: 'Sparkles',
  },
  {
    id: 'd2',
    title: 'Atendimento Personalizado',
    description: 'Nossa equipe de consultores oferece uma experiência humanizada, tirando dúvidas individuais para que você encontre a melhor escolha.',
    iconName: 'UserCheck',
  },
  {
    id: 'd3',
    title: 'Rigorosa Seleção Técnica',
    description: 'Cada dispositivo novo ou seminovo passa por uma avaliação minuciosa de 42 itens para certificar total excelência e durabilidade.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'd4',
    title: 'Garantia e Procedência',
    description: 'Compromisso com o histórico verificado de fábrica, laudo técnico de originalidade e opções de até 1 ano de garantia original ativa.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'd5',
    title: 'Suporte Pós-Venda Ativo',
    description: 'Nossa equipe acompanha você após a recepção do produto, auxiliando no transporte seguro de dados e em configurações iniciais.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'd6',
    title: 'Transparência em Negócio',
    description: 'Sem falsas promessas ou taxas ocultas. Informamos o número de série e as condições exatas de cada aparelho de forma aberta.',
    iconName: 'Award',
  },
];

export const CATEGORIAS = [
  {
    id: 'iphone',
    name: 'IPhone',
    description: 'Modelos novos e seminovos com tecnologia de câmera de ponta.',
    imageUrl: '/images/iphone 17 capa.png',
  },
  {
    id: 'ipad',
    name: 'IPad',
    description: 'Produtividade, estudos e criação artística com a melhor tela portátil.',
    imageUrl: '/images/ipad capa.png',
  },
  {
    id: 'macbook',
    name: 'Mac & MacBook',
    description: 'Desempenho portátil e desktop definitivo. MacBooks, iMac e Mac Mini.',
    imageUrl: '/images/maccapa.png',
  },
  {
    id: 'watch',
    name: 'Apple Watch',
    description: 'Conectividade, saúde e monitoramento de atividades físicas no seu pulso.',
    imageUrl: '/images/watchcaps.png',
  },
  {
    id: 'airpods',
    name: 'AirPods & Som',
    description: 'Abafamento inteligente, som imersivo de alta definição e caixas JBL.',
    imageUrl: '/images/fones capa.png',
  },
  {
    id: 'acessorios',
    name: 'Acessórios & Consoles',
    description: 'Carregadores de alta velocidade, cabos, capinhas, películas e videogame PS5.',
    imageUrl: '/images/acessorios.png',
  },
];

export const PRODUTOS: Product[] = [
  {
    id: 'p0',
    name: 'Linha IPhones 17',
    category: 'iphone',
    condition: 'Novo',
    capacity: '256GB / 512GB / 1TB',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/linha 17.png',
    specs: [
      'Modelos disponíveis na BM Imports: IPhone 17, 17 Plus, 17 Pro, 17 Pro Max',
      'Inovador processador Apple A19 / A19 Pro com poder de processamento neural focado em soluções nativas de IA',
      'Nova tela ProMotion Ultra XDR de alta fluidez com bordas incrivelmente finas',
      'Câmera sob o display para uma navegação visual totalmente desimpedida e limpa',
      'Titânio Aeroespacial de alta durabilidade e cores sofisticadas de última tendência',
    ],
    details: {
      color: 'Titânio Aeroespacial / Titânio Mineral / Platina / Bronze Cobre / Cores Padrão',
      physicalCondition: 'Modelos totalmente novos, lacrados de fábrica com integridade absoluta de embalagem.',
      itemsIncluded: ['IPhone 17 Série Oficial Lacrado', 'Cabo trançado de alta performance USB-C original', 'Kit de documentação institucional'],
      serialStatus: 'Número de série gravado e coberto com 1 ano de garantia original mundial ativada no primeiro iCloud.',
    }
  },
  {
    id: 'p23',
    name: 'Linha IPhones 16',
    category: 'iphone',
    condition: 'Novo',
    capacity: '128GB / 256GB / 512GB / 1TB',
    batteryHealth: '100% / Saúde sob Consulta',
    warranty: 'Até 1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/linha 16.png',
    specs: [
      'Modelos disponíveis na BM Imports: IPhone 16, 16 Plus, 16 Pro, 16 Pro Max',
      'Inovador botão capacitivo de Controle de Câmera na lateral com resposta tátil instantânea',
      'Poderosos chips Apple A18 e A18 Pro com suporte nativo de fábrica à Apple Intelligence',
      'Sistema de câmeras duplas e triplas de até 48MP com o novo modo de gravação imersiva espacial',
      'Acabamento primoroso com vidro colorido por infusão ou titânio jateado de grande resistência',
    ],
    details: {
      color: 'Titânio Deserto / Titânio Natural / Preto / Branco / Ultramarinho / Azul / Rosa',
      physicalCondition: 'Opções em estado novo/lacrado ou seminovos rigorosamente selecionados em estado de vitrine.',
      itemsIncluded: ['Aparelho Selecionado', 'Cabo de alta velocidade trançado USB-C original', 'Manuais de início rápido'],
      serialStatus: 'Série limpa e liberada com selo BM Imports de verificação técnica 42 pontos.',
    }
  },
  {
    id: 'p1',
    name: 'Linha IPhones 15',
    category: 'iphone',
    condition: 'Novo',
    capacity: '128GB / 256GB / 512GB / 1TB',
    batteryHealth: '90% a 100% (Sob Consulta)',
    warranty: 'Garantia Oficial Apple ou BM Imports',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/iphones 15.png',
    specs: [
      'Modelos disponíveis na BM Imports: IPhone 15, 15 Plus, 15 Pro, 15 Pro Max',
      'Inovadora porta de conexão universal USB-C para carregamento rápido e transferência ativa de arquivos',
      'Navegação interativa inteligente através da Dynamic Island na parte superior da tela',
      'Poderosos chips A16 Bionic e A17 Pro (estrutura de Titânio de alta classe apenas nos modelos Pro)',
      'Conjunto de câmeras de alta precisão técnica com sensor principal ultra nítido de 48 megapixels',
    ],
    details: {
      color: 'Titânio Natural / Azul-Gelo / Preto-Espacial / Prateado / Azul / Amarelo / Rosa / Verde',
      physicalCondition: 'Selecione entre modelos novos oficiais lacrados ou seminovos premium em estado impecável.',
      itemsIncluded: ['Aparelho Selecionado', 'Cabo original USB-C de tecido', 'Caixa oficial de transporte'],
      serialStatus: 'IMEI e número de série verificáveis diretamente no portal de cobertura e suporte Apple.',
    }
  },
  {
    id: 'p3',
    name: 'Linha IPhones 14',
    category: 'iphone',
    condition: 'Seminovo',
    capacity: '128GB / 256GB / 512GB',
    batteryHealth: '85% a 100% (Sob Consulta)',
    warranty: 'Garantia de 3 meses da BM Imports',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/iphone14.png',
    specs: [
      'Modelos disponíveis na BM Imports: IPhone 14, 14 Plus, 14 Pro, 14 Pro Max',
      'Excelente tela de altíssimo brilho com recursos Always-On Display nos modelos Pro',
      'Primeira aparição da Dynamic Island interativa e de sensores SOS inteligentes por satélite',
      'Conjunto óptico duplo e triplo avançado com sensor de 48 Megapixels e modo de Ação super estabilizado',
      'Processadores Apple A15 Bionic avançado e Apple A16 Bionic de performance extrema',
    ],
    details: {
      color: 'Roxo Profundo / Prateado / Preto / Dourado / Azul / Estelar / Meia-noite',
      physicalCondition: 'Seminovos impecáveis sem marcas mecânicas significas e baterias com excelente retenção.',
      itemsIncluded: ['Aparelho de alta integridade', 'Cabo original de carregamento', 'Kit de autenticação BM Imports'],
      serialStatus: 'Dispositivos 100% livres de restrições ou bloqueios, homologados e chancelados pela Anatel.',
    }
  },
  {
    id: 'p4',
    name: 'IPad Pro',
    category: 'ipad',
    condition: 'Novo',
    capacity: '256GB / 512GB',
    batteryHealth: '100% (Novo)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/ipad pro.png',
    specs: [
      'Inovador processador Apple M4 de nova geração',
      'Tela espetacular com tecnologia Ultra Retina XDR OLED',
      'Design incrivelmente fino, leve e de alta portabilidade',
      'Alta compatibilidade com a caneta Apple Pencil Pro',
      'Câmeras avançadas com scanner LiDAR de profundidade 3D',
    ],
    details: {
      color: 'Preto-espacial / Prateado',
      physicalCondition: 'Produto 100% novo, lacrado acompanhando o invólucro do fabricante.',
      itemsIncluded: ['IPad Pro M4 original', 'Cabo de tecido rápido USB-C', 'Carregador original Apple', 'Manuais completos'],
      serialStatus: 'Ativação direta da cobertura de garantia mundial vinculada ao ID Apple do comprador.',
    }
  },
  {
    id: 'p5',
    name: 'IPad Air',
    category: 'ipad',
    condition: 'Novo',
    capacity: '128GB',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/ipad air.png',
    specs: [
      'Processador Apple M2 de altíssima velocidade operacional',
      'Tela Liquid Retina brilhante de alta fidelidade de cores',
      'Câmera frontal horizontal de 12MP voltada para videoconferências',
      'Conexão estável ultrarrápida Wi-Fi 6E de longo alcance',
      'Compatível com Magic Keyboard e Apple Pencil Pro',
    ],
    details: {
      color: 'Estelar / Cinza-espacial / Azul / Roxo',
      physicalCondition: 'Unidade original lacrada direto de fábrica.',
      itemsIncluded: ['IPad Air M2', 'Cabo USB-C de carregamento original', 'Manual oficial de início'],
      serialStatus: 'Seguro de fábrica original válido nacionalmente e internacionalmente por 12 meses.',
    }
  },
  {
    id: 'p6',
    name: 'MacBook Pro 14" M3 Pro',
    category: 'macbook',
    condition: 'Novo',
    capacity: '256GB / 512GB / 1TB',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/MAC PRO 14.png',
    specs: [
      'Opções de Armazenamento de alto nível disponíveis: 256GB, 512GB ou 1TB SSD',
      'Excelente processador M3 Pro que oferece extrema eficiência térmica e desempenho extraordinário',
      'Cores disponíveis: Preto-espacial (Space Black) de excelente acabamento ou Prateado (Silver) clássico',
      'Brilhante tela Liquid Retina XDR de 14 polegadas com pretos profundos e taxa adaptiva ProMotion 120Hz',
    ],
    details: {
      color: 'Preto-espacial (Space Black) / Prateado',
      physicalCondition: 'Lacrado de fábrica com fita de abertura intacta.',
      itemsIncluded: ['MacBook Pro M3 Pro', 'Carregador Apple original rápido', 'Cabo MagSafe 3 trançado de cor correspondente'],
      serialStatus: 'Número de série original garantido para validação direta no console Apple.',
    }
  },
  {
    id: 'p7',
    name: 'MacBook Air 13.6" M2',
    category: 'macbook',
    condition: 'Seminovo',
    capacity: '256GB / 512GB / 1TB',
    batteryHealth: '97% (Baixos Ciclos)',
    warranty: 'Garantia de 3 meses da BM Imports',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/MAC AIR M2.png',
    specs: [
      'Opções de Armazenamento SSD: 256 GB (capacidade padrão de entrada), 512 GB ou 1 TB SSD',
      'Excelente processador Apple M2 que oferece extrema eficiência térmica e desempenho silencioso',
      'Tela líquida Liquid Retina de 13,6 polegadas com brilho espetacular e cores super realistas',
      'Incrível bateria de longa duração com autonomia para até 18 horas de uso contínuo de trabalho',
    ],
    details: {
      color: 'Meia-noite (Midnight) / Cinza-espacial / Estelar',
      physicalCondition: 'Excelente conservação, livre de avarias mecânicas ou marcas de impacto.',
      itemsIncluded: ['Carregador de tomada original Apple', 'Cabo trançado MagSafe 3', 'Caixa original do aparelho'],
      serialStatus: 'Dispositivo integralmente testado, limpo de travas de segurança icloud.',
    }
  },
  {
    id: 'p8',
    name: 'iMac 24" Apple M3',
    category: 'macbook',
    condition: 'Novo',
    capacity: '256GB / 512GB / 1TB',
    batteryHealth: 'Alimentação Direta (N/A)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/imac.png',
    specs: [
      'Opções Oficiais organizadas por Especificação de SSD da fabricante: 256GB, 512GB ou 1TB',
      'Espetacular tela Retina de 24 polegadas com resolução 4.5K nítida e mais de 1 bilhão de cores vivas',
      'Acompanha Magic Keyboard e Magic Mouse originais nos tons coordenados do desktop iMac',
    ],
    details: {
      color: 'Azul / Verde / Rosa / Prateado',
      physicalCondition: 'Caixa de varejo lacrada com selos oficiais de integridade.',
      itemsIncluded: ['iMac 24" M3', 'Magic Keyboard combinado', 'Magic Mouse combinado', 'Fonte de alimentação com cabo trançado de energia de 2 metros'],
      serialStatus: 'Procedência documentada com nota fiscal internacional e elegível para AppleCare.',
    }
  },
  {
    id: 'p9',
    name: 'Mac Mini M2',
    category: 'macbook',
    condition: 'Novo',
    capacity: '256GB / 512GB / 1TB',
    batteryHealth: 'Alimentação Direta (N/A)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/mac mini m2.png',
    specs: [
      'Armazenamento SSD de alta performance de 256GB, 512GB ou 1TB',
      'Gabinete ultra-resistente e compacto perfeito para setups modernos de trabalho e alta produtividade',
    ],
    details: {
      color: 'Prateado',
      physicalCondition: 'Equipamento novo, em caixa original vedada de fábrica.',
      itemsIncluded: ['Mac Mini M2', 'Cabo de energia original de tomada', 'Manuais originais'],
      serialStatus: 'Segurança absoluta do hardware com ativação em portal oficial da Apple.',
    }
  },
  {
    id: 'p10',
    name: 'Apple Watch Ultra GPS + Cellular',
    category: 'watch',
    condition: 'Novo',
    capacity: '',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/watch ultra.png',
    specs: [
      'Caixa ultra-resistente em Titânio de alta resistência contra impactos (Tamanho único de 49mm)',
      'Tela brilhante de retina de até 3000 nits para visualização sob sol forte',
      'Bateria excepcional com até 36 horas em modo de uso regular',
      'Gps de dupla frequência de alta precisão métrica para esportes outdoor',
      'Completo suporte para dados de celular eletrônicos em chip eSim',
    ],
    details: {
      color: 'Titânio Natural com pulseiras esportivas variadas',
      physicalCondition: 'Kit estojado lacrado de fábrica de forma individual.',
      itemsIncluded: ['Apple Watch Ultra', 'Pulseira original Apple do modelo comprado', 'Carregador magnético ultra rápido USB-C trançado', 'Manuais explicativos'],
      serialStatus: 'Pronto para pareamento com iPhone de forma original imediata.',
    }
  },
  {
    id: 'p11',
    name: 'Apple Watch Series 9 GPS + Cellular',
    category: 'watch',
    condition: 'Seminovo',
    capacity: '',
    batteryHealth: '96%',
    warranty: 'Garantia da Loja ativa por 3 meses',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/watch 9.png',
    specs: [
      'Disponível nos tamanho 41mm and 45mm com GPS + Cellular integrados',
      'Poderoso processador Apple S9 SiP com fluidez superior',
      'Tela de exibição retina Always-On de altíssima nitidez e cores ricas',
      'Gesto inteligente inovador de toque duplo físico no ar',
      'Práticos sensores de oxigênio no sangue, temperatura e sono detalhados',
      'Sensor elétrico de coração com função de eletrocardiograma',
    ],
    details: {
      color: 'Alumínio Estelar / Meia-noite / Prateado',
      physicalCondition: 'Estado de cuidado exemplar, sem qualquer arranhão perceptível no visor e caixa de alumínio.',
      itemsIncluded: ['Apple Watch Series 9', 'Pulseira de silicone esportiva original correspondente', 'Cabo por indução magnética USB-C original'],
      serialStatus: 'Número de identificação limpo, livre de qualquer trave icloud.',
    }
  },
  {
    id: 'p24',
    name: 'Linha IPhones 13',
    category: 'iphone',
    condition: 'Seminovo',
    capacity: '128GB / 256GB',
    batteryHealth: '85% a 100% (Sob Consulta)',
    warranty: 'Garantia da Loja ativa por 3 meses',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/iphone 13.png',
    specs: [
      'Modelos disponíveis na BM Imports: IPhone 13 Mini, IPhone 13, 13 Pro, 13 Pro Max',
      'Espetacular tela OLED Super Retina XDR com pretos perfeitos e legibilidade sob o sol',
      'Excelente autonomia de energia com maior duração diária de bateria na categoria',
      'Poderoso processador Apple A15 Bionic que roda todas as tarefas modernas com fluidez total',
      'Fascinante modo Cinema de focagem automática para gravações de vídeo profissionais',
    ],
    details: {
      color: 'Meia-noite / Estelar / Azul / Verde / Rosa / Azul-Sierra / Grafite',
      physicalCondition: 'Excelente proporção de cuidado. Laterais e telas selecionadas sem batidas.',
      itemsIncluded: ['Aparelho com higienização técnica', 'Cabo Lightning original', 'Declaração de originalidade BM'],
      serialStatus: 'Totalmente desbloqueado para operadoras nacionais, pronto para uso com iCloud livre.',
    }
  },
  {
    id: 'p2',
    name: 'Linha IPhones 12',
    category: 'iphone',
    condition: 'Seminovo',
    capacity: '64GB / 128GB / 256GB',
    batteryHealth: '82% a 100% (Sob Consulta)',
    warranty: 'Garantia de 3 meses da BM Imports',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/iphone 12.png',
    specs: [
      'Modelos disponíveis na BM Imports: IPhone 12 Mini, IPhone 12, 12 Pro, 12 Pro Max',
      'Design icônico atemporal com bordas retas e escudo protetor Ceramic Shield no visor',
      'Poderoso chip Apple A14 Bionic com excelente velocidade operacional e suporte nativo ao 5G',
      'Compatibilidade total com o sistema magnético MagSafe para carregadores por indução e acessórios',
      'Conjunto fotográfico impecável com lentes grande-angular, ultra-angular e modo Noite ativo',
    ],
    details: {
      color: 'Meia-noite / Branco / Azul / Verde / Vermelho / Roxo / Azul-Pacífico / Grafite / Prata',
      physicalCondition: 'Peças em ótimo estado estético, testadas e aprovadas internamente em 42 itens de hardware.',
      itemsIncluded: ['Aparelho no padrão de procedência BM', 'Cabo de porta Lightning', 'Termo de garantia e laudo técnico'],
      serialStatus: 'Procedência documentada com serial livre e iCloud desbloqueado.',
    }
  },
  {
    id: 'p25',
    name: 'iPad 10ª Geração',
    category: 'ipad',
    condition: 'Novo',
    capacity: '64GB / 256GB',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/10gen.png',
    specs: [
      'Design moderno com tela Liquid Retina de 10.9" de ponta a ponta',
      'Potente processador Apple A14 Bionic para ótimo desempenho multitarefa',
      'Câmera traseira de 12MP e câmera frontal horizontal com Palco Central',
      'Conector prático USB-C para carregamento e conexões de acessórios',
      'Compatível com Apple Pencil e Magic Keyboard Folio',
    ],
    details: {
      color: 'Azul / Rosa / Amarelo / Prateado',
      physicalCondition: 'Produto totalmente novo, lacrado e selado de fábrica.',
      itemsIncluded: ['iPad 10ª Geração original', 'Cabo de recarga USB-C original', 'Carregador USB-C original'],
      serialStatus: 'Ativação direta da cobertura internacional após login na primeira configuração.',
    }
  },
  {
    id: 'p26',
    name: 'MacBook Air 13" Apple M3',
    category: 'macbook',
    condition: 'Novo',
    capacity: '256GB / 512GB / 1TB',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/MAC AIR M2.png',
    specs: [
      'Armazenamento SSD disponível de 256GB, 512GB ou 1TB',
      'Inovador chip Apple M3 de alta eficiência operacional focado em IA',
      'Suporta conexão simultânea de até duas telas externas com a tela do laptop fechada',
      'Design sem ventoinhas e de funcionamento extremamente silencioso',
    ],
    details: {
      color: 'Meia-noite (Midnight) / Estelar / Prateado / Cinza-espacial',
      physicalCondition: 'Novo e lacrado em sua embalagem de papel de varejo oficial Apple.',
      itemsIncluded: ['MacBook Air M3', 'Adaptador de tomada USB-C correspondente', 'Cabo MagSafe 3 de 2m trançado'],
      serialStatus: 'Procedência assegurada elegível para contratação de cobertura adicional AppleCare+.',
    }
  },
  {
    id: 'p27',
    name: 'Apple Watch SE GPS + Cellular',
    category: 'watch',
    condition: 'Novo',
    capacity: '',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/watch se.png',
    specs: [
      'Disponível nos tamanhos 40mm e 44mm com funcionalidade completa de GPS + Celular',
      'Excelente custo-benefício com recursos de treino aprimorados',
      'Mecanismo de Detecção de Quedas e Detecção de Acidentes graves',
      'Monitoramento cardíaco com alertas de frequência alta ou baixa',
      'Acompanhamento do sono profundo, REM e essencial com gráficos úteis',
      'Estrutura em alumínio leve e de altíssima portabilidade esportiva',
    ],
    details: {
      color: 'Alumínio Estelar / Meia-noite / Prateado',
      physicalCondition: 'Artigo lacrado de fábrica com fechos de segurança físicos íntegros.',
      itemsIncluded: ['Apple Watch SE', 'Pulseira esportiva original correspondente', 'Cabo magnético USB-C original', 'Guias explicativos'],
      serialStatus: 'Série limpa elegível para ativação e pareamento imediato com o app Fitness.',
    }
  },
  {
    id: 'p28',
    name: 'AirPods Pro 3',
    category: 'airpods',
    condition: 'Novo',
    capacity: '',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/airpods pro 3.png',
    specs: [
      'Inovador chip Apple H3 com poder de processamento de áudio acústico de última geração',
      'Cancelamento de Ruído Ativo inteligente com tecnologia de som tridimensional dinâmico',
      'Áudio Espacial Personalizado com rastreamento ativo de cabeça para imersão única',
      'Monitoramento cardíaco passivo em tempo real integrado nos sensores internos',
      'Estojo MagSafe USB-C com alto-falante integrado e busca de precisão habilitada',
      'Bateria ampliada com até 6.5 horas de áudio contínuo e mais de 30 horas com estojo',
    ],
    details: {
      color: 'Branco Brilhante',
      physicalCondition: 'Original novo, em sua embalagem de celofane intacta de fábrica.',
      itemsIncluded: ['AirPods Pro 3', 'Estojo MagSafe USB-C', 'Conjunto de ponteiras de silicone (PP, P, M, G)', 'Cabo USB-C de carregamento', 'Manuais de instruções'],
      serialStatus: 'Procedência oficial rastreável no portal oficial de suporte Apple.',
    }
  },
  {
    id: 'p12',
    name: 'AirPods 4 com Cancelamento de Ruído',
    category: 'airpods',
    condition: 'Novo',
    capacity: '',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/airpods 4 cancelamento de ruido.png',
    specs: [
      'Poderoso processador Apple H2 que viabiliza Cancelamento Ativo de Ruído em fone open-ear',
      'Áudio Adaptativo inteligente e Detecção de Conversa automática de alta performance',
      'Som Espacial Personalizado com rastreamento dinâmico de cabeça integrado',
      'Estojo de recarga super compacto com porta USB-C e alto-falante para busca rápida Buscar',
      'Certificação IP54 resistente à poeira, suor e água nos fones e estojo de recarga',
      'Interações inteligentes por gestos práticos com a Siri balançando levemente a cabeça',
    ],
    details: {
      color: 'Branco Brilhante',
      physicalCondition: 'Produto novo lacrado, original de fábrica.',
      itemsIncluded: ['Fones AirPods 4', 'Estojo de recarga com alto-falante', 'Cabo original USB-C para carregamento', 'Manuais explicativos'],
      serialStatus: 'Número de série homologado oficial para ativação e registro de garantia Apple.',
    }
  },
  {
    id: 'p13',
    name: 'AirPods Max',
    category: 'airpods',
    condition: 'Novo',
    capacity: '',
    batteryHealth: '100% (Lacrado)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/AIRPODS MAX.png',
    specs: [
      'Confortável arco de fones em tela de malha respirável tecida',
      'Conchas de encaixes articulados em alumínio anodizado de luxo',
      'Cancelamento de ruído industrial poderoso e som espacial',
      'Equalização de som adaptiva que ajusta o áudio ao formato do ouvido',
      'Econômico estojo Smart Case que conserva a carga da bateria de forma passiva',
    ],
    details: {
      color: 'Preto-espacial / Prateado / Azul / Verde / Rosa',
      physicalCondition: 'Artigo premium lacrado de forma firme em caixa original.',
      itemsIncluded: ['AirPods Max', 'Smart Case protetora oficial', 'Cabo Lightning para USB-C original', 'Documentação oficial'],
      serialStatus: 'Identificador individual autenticado e ativo no painel oficial.',
    }
  },
  {
    id: 'p14',
    name: 'Caixa de Som JBL Boombox 3',
    category: 'airpods',
    condition: 'Novo',
    capacity: '',
    batteryHealth: '100% (Lacrada)',
    warranty: '1 Ano de Garantia Oficial JBL',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/JBL BOOMBOX.png',
    specs: [
      'Forte e encorpado som JBL Original Pro Sound com graves marcantes',
      'Incrível autonomia de bateria de até 24 horas contínuas de reprodução',
      'Certificação internacional IP67 à prova d\'água e poeira',
      'Moderna alça metálica estilosa com debrum de silicone antiderrapante',
      'Função integrada PartyBoost para pareamento coletivo de som',
    ],
    details: {
      color: 'Preto Clássico / Camuflado',
      physicalCondition: 'Caixa selada pelo controle oficial da distribuidora JBL.',
      itemsIncluded: ['JBL Boombox 3', 'Cabo carregador e adaptador de força AC original', 'Certificado de garantia original', 'Guia do usuário rápido'],
      serialStatus: 'Equipamento original homologado e certificado com faturamento nacional.',
    }
  },
  {
    id: 'p15',
    name: 'PlayStation 5 Slim 1TB SSD',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Alimentação de Tomada (N/A)',
    warranty: '',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/ps5.png',
    specs: [
      'Incrível console PS5 com leitor físico de mídias de jogos em blu-ray',
      'Unidade SSD nativa de 1TB de ultra-velocidade para loadings imperceptíveis',
      'Tecnologia gráfica Ray Tracing de nova geração em resolução 4K fluida',
      'Acompanha 1 controle sem fio oficial DualSense com feedback tátil ativo',
      'Áudio imersivo Tempest 3D para máxima envolvência sonora em jogo',
    ],
    details: {
      color: 'Branco Clássico / Placas cinza fósicas de fábrica',
      physicalCondition: 'Console lacrado completo na embalagem oficial.',
      itemsIncluded: ['PlayStation 5 Slim Console', 'Controle sem fio DualSense original', 'Cabo HDMI rápido original', 'Cabo de energia', 'Suporte metálico horizontal', 'Astro\'s Playroom pré-instalado'],
      serialStatus: 'Procedência oficial Sony nacional com selos de validação de garantia brasileira.',
    }
  },
  {
    id: 'p16',
    name: 'AirTag (Pack com 4 Unidades)',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Bateria CR2032 inclusa',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/airtag.png',
    specs: [
      'Práticos rastreadores que integram com perfeição seu chaveiro à rede Buscar da Apple',
      'Prática busca precisa acionando alto-falante integrado para emitir bips',
      'Rastreador preciso alimentador por bateria acessível e substituível de longa duração',
      'Proteção total e privacidade: os dados trocados são totalmente criptografados de ponta a ponta',
      'Facilidade de pareamento no iPhone através de um único clique',
    ],
    details: {
      color: 'Branco Prateado Cromado',
      physicalCondition: 'Pacote com 4 peças lacrado em blister original.',
      itemsIncluded: ['4 Unidades do Localizador AirTag em suporte interno original', 'Manuais de uso integrado', 'Baterias originais de fábrica'],
      serialStatus: 'Dispositivo elegível de ativação direto no app nativo Buscar.',
    }
  },
  {
    id: 'p17',
    name: 'Fonte Carregador 20W USB-C Oficial',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Acessório (N/A)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/adaptador de tomada.png',
    specs: [
      'Carregamento ultra-rápido de alto nível e proteção ativa contra sobrecorrente',
      'Compatível com toda a linha de iPhones, iPads e relógios Apple',
      'Carrega eficientemente até 50% de bateria do seu smartphone em menos de 30 minutos',
      'Pinos em conformidade com o padrão brasileiro de tomadas elétricas',
      'Estrutura em polímero antichama de alta densidade mecânica',
    ],
    details: {
      color: 'Branco Puro',
      physicalCondition: 'Caixa de acessório fechada de fábrica, original nacional Apple.',
      itemsIncluded: ['Fonte Adaptadora de Tomada 20W USB-C', 'Manuais de especificações técnicas do produto'],
      serialStatus: 'Selo de originalidade com código QR legível e registrado.',
    }
  },
  {
    id: 'p18',
    name: 'Cabo USB-C para Lightning Oficial Apple (1m)',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Acessório (N/A)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/cabo c e ligh.png',
    specs: [
      'Cabo ultra-resistente fabricado para recarga e transferência de arquivos',
      'Certificação MFi oficial garantindo pleno funcionamento pós atualizações de sistema',
      'Excelente velocidade para a transferência de imagens e backup no Mac ou PC',
      'Comprimento de esticamento ideal de 1 metro para mesa ou cabeceira',
    ],
    details: {
      color: 'Branco Clássico',
      physicalCondition: 'Lançamento original em caixa de papel de varejo oficial Apple.',
      itemsIncluded: ['Cabo USB-C para Lightning Oficial original', 'Manuais técnicos de uso'],
      serialStatus: 'Garantia expressa assegurada na rede de assistências oficiais Apple.',
    }
  },
  {
    id: 'p19',
    name: 'Cabo Magnético de Apple Watch Fast Charge (1m)',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Acessório (N/A)',
    warranty: '1 Ano de Garantia Oficial Apple',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/cabo watch.png',
    specs: [
      'Tecnologia magnética que conecta por indução no verso do relógio',
      'Mecanismo de carga de velocidade rápida compatível com Series 7 em diante',
      'Placa protetora de indução durável contra curto-circuito e superaquecimento',
      'Revestido em fibra trançada ultra resiliente aos movimentos',
    ],
    details: {
      color: 'Branco e Prata Cromado',
      physicalCondition: 'Novo em caixa oficial correspondente lacrada.',
      itemsIncluded: ['Cabo Magnético USB-C Rápido para Apple Watch', 'Manual de instruções'],
      serialStatus: 'Acessório autêntico validado contra desgastes prematuros de hardware.',
    }
  },
  {
    id: 'p20',
    name: 'Carregador Xiaomi 33W Fast Charger',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Acessório (N/A)',
    warranty: '3 meses de Garantia da Loja',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/carregador xiaomi.png',
    specs: [
      'Potência máxima de recarga de até 33W com grande economia de energia',
      'Controle de carregamento inteligente que protege a integridade das baterias',
      'Suporta voltagens de 100V a 240V, seguro para transporte em viagens',
      'Ideal para recarga rápida de alta potência em celulares de marcas parceiras',
    ],
    details: {
      color: 'Branco Brilhante',
      physicalCondition: 'Lacrado em blister oficial da marca importado.',
      itemsIncluded: ['Fonte Rápida Xiaomi 33W USB-A/C', 'Manual de especificações técnicas do carregador'],
      serialStatus: 'Selo de originalidade no verso do produto contra falsificação.',
    }
  },
  {
    id: 'p21',
    name: 'Capinha Magnética MagSafe Premium',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Acessório (N/A)',
    warranty: '3 meses de Garantia da Loja',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/capa.png',
    specs: [
      'Forte anel de ímãs de Neodímio internos para acoplagem magnética sem falhas',
      'Proteção contra quedas de nível militar com cantos traseiros reforçados',
      'Tratamento químico protetor contra amarelamento precoce provocado por raios UV',
      'Recortes precisos para botoeiras, caixas acústicas superiores e conector de carga',
    ],
    details: {
      color: 'Transparente Cristal / Bordas pretas / Grafite',
      physicalCondition: 'Nova na caixa de embalagem original da linha.',
      itemsIncluded: ['Capinha Protetora Integrada MagSafe'],
      serialStatus: 'Padrão garantido de alta resistência ao desgaste das cores e ímã.',
    }
  },
  {
    id: 'p22',
    name: 'Películas Premium',
    category: 'acessorios',
    condition: 'Novo',
    capacity: '',
    batteryHealth: 'Acessório (N/A)',
    warranty: 'Garantia de Encaixe e Aplicação Sem Bolhas',
    priceEstimated: 'Sob Consulta',
    imageUrl: '/images/pelicula.png',
    specs: [
      'Vidro temperado quimicamente reforçado de dureza extrema de 9H',
      'Alta transparência e excelente deslizamento suave de toque de dedos',
      'Revestimento com propriedades oleofóbicas para evitar marcas excessivas de gordura',
      'Excelente resistência contra quebras decorrentes de impactos acidentais no visor',
    ],
    details: {
      color: 'Bordas Ultra-finas Pretas Invisíveis / Totalmente Transparente',
      physicalCondition: 'Filme novo com aplicador auxiliar na embalagem.',
      itemsIncluded: ['Película de Vidro Premium', 'Kit completo de limpeza e preparação de vidro para aplicação'],
      serialStatus: 'Aderência perfeita garantida pelo nosso laboratório técnico de suporte físico.',
    }
  }
];

export const DEPOIMENTOS: Testimonial[] = [
  {
    id: 't1',
    name: 'Lucio Henrique',
    role: 'Cliente Verificado',
    rating: 5,
    comment: 'Bom o que falar dessa loja do meu amigo Bruno está de parabéns super indico na ocasião comprei um iPhone e um PS5, mas lá tem todos modelos de celulares e vários itens que possa te atender no ramo de informática. Que Deus continue te abençoando sempre abraço',
    date: 'Clientes Google',
    avatarText: 'LH',
    avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUQfUx43D9TcO4oOzTn56gGb_347iqUJZ_VJN2MToCCpUuhlmQ=w72-h72-p-rp-mo-ba5-br100'
  },
  {
    id: 't2',
    name: 'Scarlet Alves',
    role: 'Cliente VIP',
    rating: 5,
    comment: 'Eu confio de olhos fechados, já troquei de celular, comprei tablet, carregador! Eu amo não só os produtos mas o atendimento!!!!! Já me salvaram fazendo entrega tarde da noite, são pontuais e excelentes! Parabéns BM pelo trabalho impecável que vocês fazem 👏🏽👏🏽👏🏽👏🏽',
    date: 'Clientes Google',
    avatarText: 'SA',
    avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUTx4-R32CodsIALCfAC6uihOxFRXLydHuaqCJoUZ_WDfv3vpJLUg=w72-h72-p-rp-mo-br100'
  },
  {
    id: 't3',
    name: 'Zeyla Mendes',
    role: 'Cliente Satisfeita',
    rating: 5,
    comment: 'Super recomendo à loja! São atenciosos demais, comprometidos com o cliente e esse gesto, gera segurança e qualidade. Quanto ao iPhone comprei um super intacto e em perfeito funcionamento. Gratidão pela atenção.',
    date: 'Clientes Google',
    avatarText: 'ZM',
    avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUmSw-efb36Zt0-xQ-CV0kPfjfDV6goiOgCDfZzZQakFNG24lufrw=w72-h72-p-rp-mo-br100'
  },
  {
    id: 't4',
    name: 'Sergio Nunes',
    role: 'Cliente Verificado',
    rating: 5,
    comment: 'Muito bom o atendimento do Bruno , super paciente pra ajudar com as configurações do aparelho, adorei o meu primeiro iPhone , voltarei pra comprar os próximos com essa loja super indico.',
    date: 'Clientes Google',
    avatarText: 'SN',
    avatarUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUwteLZGylSHCUf04ujR2o6InPlzmKc8NJaZIH9wcyJzINKCfB2xA=w72-h72-p-rp-mo-br100'
  }
];

export const PERGUNTAS_FREQUENTES: FAQItem[] = [
  {
    id: 'f1',
    question: 'Os produtos possuem garantia?',
    answer: 'Sim, todos os nossos produtos contam com garantia assegurada. Dispositivos Novos e Lacrados possuem 1 ano de garantia original mundial dada pela fabricante oficial (Apple). Os produtos Seminovos acompanham garantia da BM Imports (de 3 meses para todo o hardware) e, adicionalmente, em várias ofertas recentes de nosso estoque de circulação, a garantia internacional original de fábrica segue válida.',
  },
  {
    id: 'f2',
    question: 'Vocês trabalham com produtos originais?',
    answer: 'Nós repudiamos qualquer tipo de peça de reposição paralela, carcaças trocadas por terceiros ou recondicionamento alternativo. Oferecemos apenas tecnologia 100% original de fábrica Apple, preservando o Face ID/Touch ID original e o True Tone intactos. Compartilhamos o número de série e o IMEI com antecedência para conferência direto nos portais de autoria da marca.',
  },
  {
    id: 'f3',
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Oferecemos condições estratégicas atrativas com descontos especiais de pagamento à vista por PIX, além de viabilizarmos o parcelamento facilitado em até 12x ou 18x no cartão de crédito físico (com tarifas operacionais competitivas detalhadas previamente pelo time de especialistas no WhatsApp).',
  },
  {
    id: 'f4',
    question: 'Como funciona a logística de frete e entrega?',
    answer: 'Efetuamos entregas por e-commerce por transportadoras nacionais seguradas de ponta com código de rastreamento imediato. Para as regiões metropolitanas elegíveis, viabilizamos a segurança extrema de entrega em mãos através de portadores treinados, oportunizando que você analise o dispositivo pessoalmente antes de concluir o envio dos valores.',
  },
  {
    id: 'f5',
    question: 'Qual o papel da BM Imports no pós-venda?',
    answer: 'Acreditamos no pós-venda como pilar central de relacionamento. Dispomos de um canal prioritário no WhatsApp para auxiliar na migração de todas as fotos, contatos, logs e configurações para seu novo dispositivo e também fornecemos acompanhamento remoto de qualquer dúvida no uso habitual do equipamento.',
  }
];
