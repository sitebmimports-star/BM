import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, HeartHandshake, Package, Sparkles } from 'lucide-react';
import { COMPANHIA_WHATSAPP_NUMBER } from '../data';
import WhatsAppIcon from './WhatsAppIcon';
// @ts-ignore
import iphone17Video from '../assets/videos/video IPHONE 17.mp4';
// @ts-ignore
import iphone16Video from '../assets/videos/iPHONE 16 PRO LOOPING.mp4';
// @ts-ignore
import iphone15Video from '../assets/videos/iphone 15.mp4';
// @ts-ignore
import iphone14Video from '../assets/videos/iphone 14.mp4';
// @ts-ignore
import iphone13Video from '../assets/videos/iphone 13 video.mp4';
// @ts-ignore
import iphone12Video from '../assets/videos/iphone 12.mp4';

// @ts-ignore
import coresIphoneAir from '../assets/images/cores iphone air.jpg';
// @ts-ignore
import coresIphone17e from '../assets/images/cores iphone 17e.jpg';
// @ts-ignore
import coresIphone17 from '../assets/images/cores iphone 17.png';
// @ts-ignore
import coresIphone17pro from '../assets/images/cores iphone 17 pro.png';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

interface IPhoneModel {
  id: string;
  name: string;
  tagline: string;
  image?: string; // Optional custom color/model image
  description: string;
  specs: {
    tela: string;
    processador: string;
    cameras: string;
    diferencial: string;
    pesoMaterial: string;
  };
  cores: { name: string; hex: string }[];
}

// Complete authentic Apple specifications dictionary
const IPHONE_LINES_DATA: Record<string, IPhoneModel[]> = {
  // Linha iPhones 17
  'p0': [
    {
      id: '17',
      name: 'iPhone 17',
      tagline: 'O equilíbrio perfeito entre inteligência avançada e alta fluidez.',
      image: coresIphone17,
      description: 'Lente selfie otimizada de 24MP e tela ProMotion de 120Hz finalmente disponível no modelo padrão para navegação e rolagem ultrarrápidas.',
      specs: {
        tela: 'Super Retina XDR de 6.1 polegadas com ProMotion 120Hz',
        processador: 'Apple A19 Bionic (tecnologia de 3 nm)',
        cameras: 'Sistema Duplo: Principal de 48MP e Ultra-Angular de 24MP',
        diferencial: 'Primeira vez com tela de 120Hz de alta fluidez no modelo de entrada',
        pesoMaterial: 'Estrutura refinada em Alumínio Aeroespacial Reciclado'
      },
      cores: [
        { name: 'Lavanda', hex: '#ded3f5' },
        { name: 'Sálvia', hex: '#ccdccd' },
        { name: 'Azul Névoa', hex: '#ccdbe3' },
        { name: 'Branco', hex: '#ffffff' },
        { name: 'Preto', hex: '#000000' }
      ]
    },
    {
      id: '17e',
      name: 'iPhone 17e',
      tagline: 'Design moderno, funcional e extremamente durável para o cotidiano.',
      image: coresIphone17e,
      description: 'Estrutura moderna e alto processamento diário. Ideal para quem procura ingressar no ecossistema com tecnologias atuais.',
      specs: {
        tela: 'Super Retina XDR de 6.1 polegadas com taxa adaptativa de 60/90Hz',
        processador: 'Apple A18 Bionic otimizado com IA fundamental',
        cameras: 'Câmera Principal de 48MP de alto contraste noturno',
        diferencial: 'Dispositivo mais acessível da linha com design atualizado e bordas finas',
        pesoMaterial: 'Alumínio de alta resistência mecânica e leveza'
      },
      cores: [
        { name: 'Preto', hex: '#000000' },
        { name: 'Branco', hex: '#ffffff' },
        { name: 'Rosa-Pálido', hex: '#fbdbe2' }
      ]
    },
    {
      id: '17air',
      name: 'iPhone Air',
      tagline: 'O iPhone mais fino e conceitual já projetado na história da Apple.',
      image: coresIphoneAir,
      description: 'Engenharia de precisão com espessura nunca antes vista. Um perfil extremamente leve com display amplo de 6.6 polegadas e de altíssima fluidez.',
      specs: {
        tela: 'Super Retina XDR de 6.6 polegadas com ProMotion de 120Hz',
        processador: 'Apple A19 Bionic com foco em eficiência térmica máxima',
        cameras: 'Câmera única avançada traseira de 48MP com lentes de foco rápido',
        diferencial: 'Espessura recorde ultra-fina (menos de 5mm) e peso extremamente reduzido',
        pesoMaterial: 'Liga especial de Titânio-Alumínio de classe aeroespacial'
      },
      cores: [
        { name: 'Azul-Céu', hex: '#bae6fd' },
        { name: 'Dourado-Claro', hex: '#fbf0d9' },
        { name: 'Branco-Nuvem', hex: '#f3f4f6' },
        { name: 'Preto-Espacial', hex: '#171717' }
      ]
    },
    {
      id: '17pro',
      name: 'iPhone 17 Pro',
      tagline: 'Inteligência generativa nativa extraordinária com chip Pro de 2nm.',
      image: coresIphone17pro,
      description: 'Com o inovador processador A19 Pro em 2nm para renderização local e processador neural estendido. Bordas mais finas nas laterais com sobriedade estética.',
      specs: {
        tela: 'Super Retina XDR de 6.3 polegadas com ProMotion 120Hz e molduras reduzidas',
        processador: 'Apple A19 Pro (tecnologia revolucionária de 2 nm)',
        cameras: 'Sistema Triplo: Principal 48MP, Ultra-Angular 48MP e Teleobjetiva 10x Zoom de 48MP',
        diferencial: 'Incrível Zoom óptico de 10x sem perdas e sensores Face ID sob a tela',
        pesoMaterial: 'Chassis refinado em Titânio Aeroespacial Polido de Grade 5'
      },
      cores: [
        { name: 'Laranja-Cósmico', hex: '#ea580c' },
        { name: 'Azul-Intenso', hex: '#25456e' },
        { name: 'Prateado', hex: '#d1d5db' }
      ]
    },
    {
      id: '17promax',
      name: 'iPhone 17 Pro Max',
      tagline: 'O ápice da tecnologia mobile mundial. Tela máxima e zoom avançado.',
      image: coresIphone17pro,
      description: 'A maior autonomia de bateria já vista e tela espetacular de 6.9". Indicado para workflows profissionais, criadores de conteúdo e entusiastas.',
      specs: {
        tela: 'Super Retina XDR de 6.9 polegadas com ProMotion 120Hz',
        processador: 'Apple A19 Pro (2 nm) com maior desempenho do ecossistema',
        cameras: 'Sistema Triplo Pro: Novo sensor telescópico com gravação imersiva profissional',
        diferencial: 'Autonomia máxima extrema e tela ultra expansiva de bordas minimalistas',
        pesoMaterial: 'Estrutura refinada em Titânio Polido de altíssima fusão'
      },
      cores: [
        { name: 'Laranja-Cósmico', hex: '#ea580c' },
        { name: 'Azul-Intenso', hex: '#25456e' },
        { name: 'Prateado', hex: '#d1d5db' }
      ]
    }
  ],

  // Linha iPhones 16
  'p23': [
    {
      id: '16',
      name: 'iPhone 16 / 16 Plus',
      tagline: 'O início de uma nova era com foco em Apple Intelligence nativa.',
      description: 'Traz o controle capacitivo na lateral para câmeras instantâneas e o chip A18 adaptado para criar textos, inteligência de escrita e edições inteligentes.',
      specs: {
        tela: 'Super Retina XDR de 6.1" ou 6.7" (OLED, 60Hz)',
        processador: 'Apple A18 Bionic (litografia avançada de 3nm)',
        cameras: 'Sistema Duplo Vertical: Principal de 48MP e Ultra-Angular de 12MP',
        diferencial: 'Novo Botão de Controle de Câmera lateral e Botão de Ação inclusos',
        pesoMaterial: 'Alumínio aeroespacial com vidro texturizado colorido por infusão'
      },
      cores: [
        { name: 'Ultramarino', hex: '#8ea1e6' },
        { name: 'Verde-acinzentado', hex: '#a3c2be' },
        { name: 'Rosa', hex: '#f0b5cc' },
        { name: 'Branco', hex: '#ffffff' },
        { name: 'Preto', hex: '#000000' }
      ]
    },
    {
      id: '16e',
      name: 'iPhone 16e',
      tagline: 'O design moderno e compacto que une inteligência e custo-benefício.',
      description: 'Estrutura refinada com desempenho de chip avançado, focado em alta eficiência e durabilidade de bateria no cotidiano.',
      specs: {
        tela: 'Super Retina XDR de 6.1" OLED de elevado contraste',
        processador: 'Apple A18 Bionic eficiente',
        cameras: 'Câmera Traseira Principal de 48MP de incrível estabilização',
        diferencial: 'Dispositivo acessível premium e excelente portabilidade de display',
        pesoMaterial: 'Alumínio aeroespacial resistente e durável'
      },
      cores: [
        { name: 'Preto', hex: '#000000' },
        { name: 'Branco', hex: '#ffffff' }
      ]
    },
    {
      id: '16pro',
      name: 'iPhone 16 Pro / Pro Max',
      tagline: 'Titânio jateado incomparável e áudio com nível de estúdio.',
      description: 'Grave em 4K a 120 quadros e capture som tridimensional refinado. Processador topo de linha A18 Pro com aceleração máxima de Inteligência Apple.',
      specs: {
        tela: 'Super Retina XDR de 6.3" (Pro) ou 6.9" (Pro Max) ProMotion 120Hz',
        processador: 'Apple A18 Pro com maior aceleração Ray Tracing físico',
        cameras: 'Sistema Triplo Pro: Principal de 48MP, Ultra-Angular de 48MP e Zoom óptico de 5x',
        diferencial: 'Bordas ultrafinas, gravação de vídeo 4K 120fps Dolby Vision e áudio espacial',
        pesoMaterial: 'Titânio de Grade 5 com acabamento jateado de extrema leveza e durabilidade'
      },
      cores: [
        { name: 'Titânio-deserto', hex: '#cbbda7' },
        { name: 'Titânio natural', hex: '#9d9990' },
        { name: 'Titânio branco', hex: '#f2f1ed' },
        { name: 'Titânio preto', hex: '#3c3d3a' }
      ]
    }
  ],

  // Linha iPhones 15
  'p1': [
    {
      id: '15',
      name: 'iPhone 15 / 15 Plus',
      tagline: 'O salto de tecnologia do cotidiano facilitado pela Dynamic Island.',
      description: 'Agora com ilha interativa para acompanhar alertas em tempo real. Primeira geração de smartphones Apple com a confiável porta USB-C universal.',
      specs: {
        tela: 'Super Retina XDR de 6.1" ou 6.7" (OLED, 60Hz com brilho de até 2000 nits)',
        processador: 'Apple A16 Bionic (com GPU poderosa de 5 núcleos)',
        cameras: 'Sistema Duplo Integrado: Principal de 48MP e Ultra-Angular de 12MP',
        diferencial: 'Dynamic Island no topo do display e integração universal com porta USB-C',
        pesoMaterial: 'Alumínio de liga aeroespacial com vidro traseiro fosco texturizado'
      },
      cores: [
        { name: 'Rosa', hex: '#f7c7d0' },
        { name: 'Amarelo', hex: '#fdf3bf' },
        { name: 'Verde', hex: '#d4e7df' },
        { name: 'Azul', hex: '#d2e3eb' },
        { name: 'Preto', hex: '#232426' }
      ]
    },
    {
      id: '15pro',
      name: 'iPhone 15 Pro / Pro Max',
      tagline: 'Primeira geração esculpida em ligas premium de titânio aeroespacial.',
      description: 'Extremamente leve and rígido. Adota o processador A17 Pro perfeito para experiências intensas e suporte a Ray Tracing acelerado por hardware.',
      specs: {
        tela: 'Super Retina XDR de 6.1" (Pro) ou 6.7" (Pro Max) ProMotion 120Hz',
        processador: 'Apple A17 Pro (o pioneiro chip em litografia de 3 nanômetros)',
        cameras: 'Sistema Triplo Pro: Principal 48MP, Ultra-Wide 12MP e Teleobjetiva 3x (Pro) ou 5x (Pro Max)',
        diferencial: 'Botão de Ação reconfigurável nativo e conexão USB-C de alta velocidade de 10Gbps',
        pesoMaterial: 'Acabamento inovador em Titânio Escovado leve'
      },
      cores: [
        { name: 'Titânio natural', hex: '#ada79b' },
        { name: 'Titânio azul', hex: '#2f3c4c' },
        { name: 'Titânio branco', hex: '#eae9e5' },
        { name: 'Titânio preto', hex: '#38393b' }
      ]
    }
  ],

  // Linha iPhones 14
  'p3': [
    {
      id: '14',
      name: 'iPhone 14 / 14 Plus',
      tagline: 'Performance testada de alta durabilidade e estabilização de movimento.',
      description: 'Excelente custo-benefício. Possui maior duração de carga diária e detecção eletrônica integrada de acidentes graves para segurança ampliada.',
      specs: {
        tela: 'Super Retina XDR de 6.1" ou 6.7" OLED de alta vivacidade',
        processador: 'Apple A15 Bionic (GPU potente de 5 núcleos)',
        cameras: 'Sistema Duplo Standard: Lentes grande-angular e ultra-angular altamente calibradas',
        diferencial: 'Incrível Modo de Ação em vídeo para gravações incrivelmente estáveis sem gimbal',
        pesoMaterial: 'Alumínio de aviação resistente e vidro traseiro brilhante protetor'
      },
      cores: [
        { name: 'Azul', hex: '#a1caf1' },
        { name: 'Roxo', hex: '#e6e6fa' },
        { name: 'Amarelo', hex: '#fffdd0' },
        { name: 'Meia-noite', hex: '#1c1e21' },
        { name: 'Estelar', hex: '#faf0e6' },
        { name: '(PRODUCT)RED', hex: '#e60026' }
      ]
    },
    {
      id: '14pro',
      name: 'iPhone 14 Pro / Pro Max',
      tagline: 'O marcante pioneiro da Dynamic Island e câmera avançada de 48 megapixels.',
      description: 'Uma enorme revolução visual ao substituir o entalhe clássico pela ilha interativa e incorporar o visor Sempre Ativo de claridade sob sol.',
      specs: {
        tela: 'Super Retina XDR de 6.1" ou 6.7" Always-On ProMotion 120Hz',
        processador: 'Apple A16 Bionic focado em balanço energético refinado',
        cameras: 'Sistema Triplo Pro: Primeira lente traseira principal de 48MP com sensor quad-pixel',
        diferencial: 'Tela Always-On Display com pico brilhante inédito de até 2000 nits externos',
        pesoMaterial: 'Laterais robustas espelhadas em Aço Inoxidável cirúrgico de alto padrão'
      },
      cores: [
        { name: 'Roxo-profundo', hex: '#3d3447' },
        { name: 'Dourado', hex: '#faebd7' },
        { name: 'Prateado', hex: '#ebebeb' },
        { name: 'Preto-espacial', hex: '#292929' }
      ]
    }
  ],

  // Linha iPhones 13
  'p24': [
    {
      id: '13',
      name: 'iPhone 13 / 13 Mini',
      tagline: 'O absoluto campão do dia a dia em autonomia e usabilidade diária.',
      description: 'Notável estabilização por deslocamento de sensor, bateria aumentada e o clássico entalhe 20% menor para maximizar seu espaço de tela útil.',
      specs: {
        tela: 'Super Retina XDR de 5.4" (Mini) ou 6.1" (OLED de grande eficiência)',
        processador: 'Apple A15 Bionic (motor neural de 16 núcleos)',
        cameras: 'Sistema Duplo diagonal de 12MP com lentes de foco rápido e modos profundos',
        diferencial: 'Exclusivo Modo Cinema com mudança de foco inteligente em gravações de vídeo',
        pesoMaterial: 'Alumínio de alta resistência mecânica com Corning Ceramic Shield integrado'
      },
      cores: [
        { name: 'Verde', hex: '#2e4c34' },
        { name: 'Rosa', hex: '#f3c7ce' },
        { name: 'Azul', hex: '#4ca3ec' },
        { name: 'Meia-noite', hex: '#1d2024' },
        { name: 'Estelar', hex: '#f5f5dc' },
        { name: '(PRODUCT)RED', hex: '#dd1c1a' }
      ]
    },
    {
      id: '13pro',
      name: 'iPhone 13 Pro / Pro Max',
      tagline: 'A introdução triunfal de 120Hz dinâmicos e modo macro fotográfico.',
      description: 'Sinta a fluidez esmagadora na navegação e fotografe com nível microscópico a distâncias de até 2 centímetros do seu aparelho.',
      specs: {
        tela: 'Super Retina XDR de 6.1" ou 6.7" com tecnologia ProMotion de 120Hz',
        processador: 'Apple A15 Bionic com GPU estendida',
        cameras: 'Sistema Triplo Pro: Sensores de pixel amplificado e zoom estendido de 3x',
        diferencial: 'Disponibilidade de taxa a 120Hz e modo de fotografia macro de altíssima precisão',
        pesoMaterial: 'Aço inoxidável cirúrgico premium escovado e resistente à corrosão'
      },
      cores: [
        { name: 'Verde-alpino', hex: '#506e5d' },
        { name: 'Prateado', hex: '#ebebeb' },
        { name: 'Dourado', hex: '#fad69d' },
        { name: 'Grafite', hex: '#4e5154' },
        { name: 'Azul-Sierra', hex: '#adc7db' }
      ]
    }
  ],

  // Linha iPhones 12
  'p2': [
    {
      id: '12',
      name: 'iPhone 12 / 12 Mini',
      tagline: 'Estética com bordas planas icônica e implantação total do sinal 5G.',
      description: 'O relançamento do design reto clássico com painéis OLED de contraste infinito e encaixe traseiro por atração magnética MagSafe.',
      specs: {
        tela: 'Super Retina XDR de 5.4" (Mini) ou 6.1" OLED de enorme contraste e brilho habitual',
        processador: 'Apple A14 Bionic (um marco extraordinário em eficiência)',
        cameras: 'Sistema Duplo de 12MP com modo Noite disponível em todas as câmeras',
        diferencial: 'Compatibilidade com redes ultrarrápidas 5G nacionais e acessórios MagSafe magnéticos',
        pesoMaterial: 'Chassis leve em Alumínio de alta resistência com vidro Ceramic Shield'
      },
      cores: [
        { name: 'Roxo', hex: '#ded2f5' },
        { name: 'Azul', hex: '#1f3e5a' },
        { name: 'Verde', hex: '#daeed3' },
        { name: '(PRODUCT)RED', hex: '#cf142b' },
        { name: 'Branco', hex: '#fcfcfc' },
        { name: 'Preto', hex: '#1c1c1c' }
      ]
    },
    {
      id: '12pro',
      name: 'iPhone 12 Pro / Pro Max',
      tagline: 'Inclusão pioneira de Scanner LiDAR e fotografias em padrão ProRAW.',
      description: 'O início de registros estáticos perfeitos e profissionais com tecnologia de medição à laser 3D LiDAR para focar no escuro absoluto.',
      specs: {
        tela: 'Super Retina XDR de 6.1" ou 6.7" OLED de excelente nitidez diurna',
        processador: 'Apple A14 Bionic com arquitetura de processador neural estendido',
        cameras: 'Sistema Triplo Pro: Lentes telefoto, grande-angular, ultra-larga e sensor LiDAR',
        diferencial: 'Scanner LiDAR integrado focado em foco escuro acelerado e realidade aumentada',
        pesoMaterial: 'Laterais polidas esculpidas em Aço Inox luxuoso de durabilidade extrema'
      },
      cores: [
        { name: 'Azul-Pacífico', hex: '#2b4d59' },
        { name: 'Grafite', hex: '#4c4e52' },
        { name: 'Dourado', hex: '#eedbad' },
        { name: 'Prateado', hex: '#f0f1f2' }
      ]
    }
  ]
};

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(0);
  const [activeColorIdx, setActiveColorIdx] = useState<number>(0);
  const [activeCapacity, setActiveCapacity] = useState<string>('');

  // Reset indices whenever product changes
  useEffect(() => {
    setSelectedModelIndex(0);
    setActiveColorIdx(0);
  }, [product]);

  // Adjust activeCapacity based on product & model selection to prevent invalid / out-of-bounds capacities
  useEffect(() => {
    if (product) {
      const isIphoneLine = product.id in IPHONE_LINES_DATA;
      const models = isIphoneLine ? IPHONE_LINES_DATA[product.id] : [];
      const activeModel = isIphoneLine ? models[selectedModelIndex] : null;

      let caps = (product.capacity || '').split('/').map(s => s.trim()).filter(Boolean);
      if (isIphoneLine && activeModel && product.id === 'p0') {
        if (activeModel.id === '17promax') {
          caps = ['256GB', '512GB', '1TB', '2TB'];
        } else {
          caps = ['256GB', '512GB', '1TB'];
        }
      }

      if (!caps.includes(activeCapacity)) {
        setActiveCapacity(caps[0] || '256GB');
      }
    }
  }, [product, selectedModelIndex, activeCapacity]);

  if (!product) return null;

  const isIphoneLine = product.id in IPHONE_LINES_DATA;
  const models = isIphoneLine ? IPHONE_LINES_DATA[product.id] : [];
  const activeModel = isIphoneLine ? models[selectedModelIndex] : null;

  // Helper to check if it's an Apple product to distinguish from JBL/Xiaomi
  const isAppleProduct = 
    product.category !== 'acessorios' || 
    product.name.toLowerCase().includes('apple') || 
    product.name.toLowerCase().includes('airtag') || 
    product.name.toLowerCase().includes('cabo') || 
    product.name.toLowerCase().includes('tomada') || 
    product.name.toLowerCase().includes('carregador original') || 
    product.name.toLowerCase().includes('adaptador');

  const getWarrantyLabel = () => {
    if (isAppleProduct) {
      return product.condition === 'Novo' 
        ? '1 Ano de Garantia Oficial Apple' 
        : '3 Meses de Garantia BM Imports';
    }
    // For non-Apple products (e.g. JBL, Xiaomi, Capas, Películas) return their defined warranty from data.ts
    return product.warranty || '3 Meses de Garantia BM Imports';
  };

  const getConditionLabel = () => {
    if (product.condition === 'Novo') {
      return isAppleProduct ? 'Lacrado' : 'Novo';
    }
    return 'Seminovo';
  };

  let productCapacities = (product.capacity || (isIphoneLine ? '128GB / 256GB / 512GB / 1TB' : ''))
    .split('/')
    .map(s => s.trim())
    .filter(Boolean);

  if (isIphoneLine && activeModel && product.id === 'p0') {
    if (activeModel.id === '17promax') {
      productCapacities = ['256GB', '512GB', '1TB', '2TB'];
    } else {
      productCapacities = ['256GB', '512GB', '1TB'];
    }
  }

  const handleWhatsAppConsult = () => {
    let message = '';
    
    if (isIphoneLine && activeModel) {
      const selectedColor = activeModel.cores[activeColorIdx]?.name || 'Preto Clássico';
      message = `Olá! Gostaria de consultar a disponibilidade do seguinte aparelho:\n\n*${product.name}*\nModelo específico: *${activeModel.name}*\n• Capacidade desejada: *${activeCapacity}*\n• Cor preferencial selecionada: *${selectedColor}*\n• Condição sugerida: ${getConditionLabel()}\n• Cobertura: ${getWarrantyLabel()}\n\nComo posso prosseguir com o pedido e valores?`;
    } else {
      const capacityLine = productCapacities.length > 0
        ? `\n• Capacidade desejada: *${activeCapacity || product.capacity || 'Sob Consulta'}*`
        : '';
      message = `Olá! Gostaria de verificar a disponibilidade do seguinte aparelho:\n\n*${product.name}*${capacityLine}\n• Condição técnica: ${getConditionLabel()}\n• Garantia: ${getWarrantyLabel()}\n• Cor em exposição: ${product.details.color}\n\nQual é o valor e prazo de retirada ou entrega?`;
    }

    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${COMPANHIA_WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-8">
        
        {/* Dynamic backdrop trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 -z-10 bg-black/50 cursor-pointer"
        />

        {/* Global Modal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.12 }}
          className="relative w-full max-w-5xl mt-6 sm:mt-12 mb-12 rounded-none bg-black border border-neutral-900 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.85)]"
        >
          {/* Sleek Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[60] p-2 rounded-full backdrop-blur-md bg-black/60 text-white/80 hover:bg-black/85 hover:text-white lg:bg-neutral-100 lg:text-neutral-500 lg:hover:bg-neutral-200 lg:hover:text-black border border-white/10 lg:border-none transition-all outline-none cursor-pointer shadow-lg active:scale-95"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* LEFT COLUMN: Visual display (Black themed) - Dynamic 3D spinning Pro video is shown here CONSTANTLY for p0, p23 and p1 */}
            <div className="lg:col-span-6 bg-black p-6 sm:p-10 flex flex-col justify-start items-center border-b lg:border-b-0 lg:border-r border-neutral-900/60 relative">
              
              {['p0', 'p23', 'p1', 'p3', 'p24', 'p2'].includes(product.id) ? (
                <div className="w-full lg:sticky lg:top-8 flex flex-col items-center justify-start py-6">
                  <div className="relative w-full aspect-[9/16] max-h-[500px] lg:max-h-[580px] flex items-center justify-center bg-transparent overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain mix-blend-screen scale-105 pointer-events-none"
                    >
                      <source src={
                        product.id === 'p0' ? iphone17Video : 
                        product.id === 'p23' ? iphone16Video : 
                        product.id === 'p1' ? iphone15Video : 
                        product.id === 'p3' ? iphone14Video : 
                        product.id === 'p24' ? iphone13Video : 
                        iphone12Video
                      } type="video/mp4" />
                    </video>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 mt-5 tracking-widest uppercase">
                    3D PREVIEW: {
                      product.id === 'p0' ? 'LINHA IPHONE 17 PRO' : 
                      product.id === 'p23' ? 'LINHA IPHONE 16 PRO' : 
                      product.id === 'p1' ? 'LINHA IPHONE 15' : 
                      product.id === 'p3' ? 'LINHA IPHONE 14' :
                      product.id === 'p24' ? 'LINHA IPHONE 13' :
                      'LINHA IPHONE 12'
                    }
                  </span>
                </div>
              ) : (
                <div className="w-full lg:sticky lg:top-8 flex flex-col items-center justify-start py-0 px-4">
                  <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.4)] border border-neutral-950 w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] flex justify-center overflow-hidden mb-5 ${
                    product.category === 'ipad' 
                      ? 'items-end pt-6 px-6 sm:pt-8 sm:px-8 pb-0 override-paddings-bottom' 
                      : 'items-center p-8 sm:p-12'
                  }`}
                  style={product.category === 'ipad' ? { paddingBottom: 0 } : {}}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className={`transition-transform duration-500 ease-out z-10 hover:scale-103 ${
                        product.category === 'ipad'
                          ? 'max-h-full max-w-full object-contain object-bottom rounded-b-none'
                          : 'max-h-[82%] max-w-[82%] object-contain'
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase text-center">
                    {getWarrantyLabel()}
                  </span>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Full specification and model tabs (Pristine Apple Store Light Canvas) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-9 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">
              
              <div className="space-y-6">
                {/* Horizontal navigation tabs inside the modal for iPhone ranges */}
                {isIphoneLine && (
                  <div>
                    <h3 className="text-[13px] font-sans font-semibold text-neutral-500 tracking-tight leading-tight mb-2.5">
                      Selecione um modelo da linha para visualizar
                    </h3>
                    <div className="flex flex-wrap gap-1.5 bg-gray-100 p-1 border border-gray-200/60 rounded-2xl">
                      {models.map((model, idx) => (
                        <button
                          key={model.id}
                          onClick={() => {
                            setSelectedModelIndex(idx);
                            setActiveColorIdx(0);
                          }}
                          className={`flex-1 min-w-[95px] text-center text-xs py-2 px-3 rounded-xl transition-all font-sans font-bold cursor-pointer ${
                            selectedModelIndex === idx
                              ? 'bg-white text-gray-900 shadow-sm'
                              : 'text-gray-500 hover:text-gray-900/80'
                          }`}
                        >
                          {model.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {isIphoneLine && activeModel ? (
                  <div className="space-y-6">
                    {/* Header info */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-gray-530 bg-neutral-100 border border-neutral-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {getWarrantyLabel()}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-gray-950 tracking-tight leading-none mt-2">
                          {activeModel.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed mt-2.5">
                          {activeModel.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-650 leading-relaxed font-sans pb-4 border-b border-gray-100">
                      {activeModel.description}
                    </p>

                    {/* Integrated Colors Image, selector and quick premium tools box (NO BORDERS OR BLACK LINES) */}
                    <div>
                      <h3 className="text-base font-sans text-gray-950 tracking-tight mb-3">
                        <span className="font-extrabold">Cor</span> — <span className="text-gray-500 font-normal">{activeModel.cores[activeColorIdx]?.name || 'Preto'}</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        
                        {/* Floating render of the selected device with absolutely no border line or shadow frames */}
                        <div className="flex flex-col items-center justify-center bg-transparent py-2.5">
                          <img 
                            src={activeModel.image || product.imageUrl} 
                            alt={`Cores ${activeModel.name}`}
                            referrerPolicy="no-referrer"
                            className="max-h-[160px] w-auto object-contain mix-blend-multiply drop-shadow-md hover:scale-[1.03] transition-transform duration-300"
                          />
                          <span className="text-[10px] font-sans text-gray-400 mt-2 block font-extrabold uppercase tracking-widest text-center">
                            Disponível em Cores Oficiais
                          </span>
                        </div>
                        
                        <div className="flex flex-col justify-center">
                          <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider mb-2 font-sans">
                            Escolha sua cor preferida:
                          </span>
                          <div className="flex gap-2.5 flex-wrap mb-3">
                            {activeModel.cores.map((cor, idx) => (
                              <button
                                key={cor.name}
                                onClick={() => setActiveColorIdx(idx)}
                                style={{ backgroundColor: cor.hex }}
                                className={`w-7.5 h-7.5 rounded-full cursor-pointer relative ring-offset-2 ring-offset-white transition-all duration-200 ${
                                  activeColorIdx === idx ? 'ring-2 ring-neutral-900 scale-110' : 'ring-1 ring-neutral-200 hover:scale-105'
                                }`}
                                title={cor.name}
                              >
                                {activeColorIdx === idx && (
                                  <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mix-blend-difference" />
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>

                          <div className="mt-3.5 pt-3.5 border-t border-gray-100">
                            <span className="text-[9px] uppercase tracking-wider font-extrabold text-neutral-400 block">
                              Destaque Principal
                            </span>
                            <span className="text-xs font-bold text-gray-900 mt-1 flex items-center leading-tight">
                              {activeModel.specs.diferencial}
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Integrated Apple Store Style Storage Capacities Selector */}
                    <div>
                      <h3 className="text-[13px] font-sans font-semibold text-neutral-400 tracking-tight leading-tight mb-2.5">
                        <span className="text-gray-900 font-bold">Armazenamento.</span> De quanto espaço você precisa?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {productCapacities.map((cap) => {
                          const isSelected = activeCapacity === cap;
                          return (
                            <div
                              key={cap}
                              onClick={() => {
                                setActiveCapacity(cap);
                              }}
                              className={`rounded-2xl p-4 flex flex-col justify-center cursor-pointer transition-all duration-200 min-h-[75px] ${
                                isSelected
                                  ? 'border-2 border-[#0071e3] bg-gray-50/10'
                                  : 'border border-gray-200 bg-white hover:border-gray-300'
                              }`}
                            >
                              <div className="flex justify-between items-center w-full">
                                <div>
                                  <span className="text-base font-extrabold text-gray-950 block leading-tight">
                                    {cap}
                                  </span>
                                  <span className="text-[10px] text-[#0071e3] font-semibold tracking-wide block mt-1 font-sans">
                                    Capacidade recomendada
                                  </span>
                                </div>
                              </div>
                            </div>

                          );
                        })}
                      </div>
                    </div>

                    {/* Technical Comparison Parameters (Apple Oficial) */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-3">
                        Ficha Técnica Completa (Apple Oficial)
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <span className="text-[8.5px] uppercase tracking-wider font-extrabold text-gray-400 block">
                            Tela / Brilho
                          </span>
                          <span className="text-xs font-sans font-bold text-gray-800 mt-0.5 block leading-tight">
                            {activeModel.specs.tela}
                          </span>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <span className="text-[8.5px] uppercase tracking-wider font-extrabold text-gray-400 block">
                            Processamento
                          </span>
                          <span className="text-xs font-sans font-bold text-gray-800 mt-0.5 block leading-tight">
                            {activeModel.specs.processador}
                          </span>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <span className="text-[8.5px] uppercase tracking-wider font-extrabold text-gray-400 block">
                            Câmeras Recurso
                          </span>
                          <span className="text-xs font-sans font-bold text-gray-800 mt-0.5 block leading-tight">
                            {activeModel.specs.cameras}
                          </span>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <span className="text-[8.5px] uppercase tracking-wider font-extrabold text-gray-400 block">
                            Construção / Acabamento
                          </span>
                          <span className="text-xs font-sans font-bold text-gray-800 mt-0.5 block leading-tight">
                            {activeModel.specs.pesoMaterial}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  // Fallback white display card for regular items (iPads, Watches, Macs)
                  <div className="space-y-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-gray-550 bg-neutral-100 border border-gray-200 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                          {getConditionLabel()}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-gray-950 tracking-tight leading-none mt-2">
                          {product.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-2">
                          Categoria: {product.category} • Garantia: {getWarrantyLabel()}
                        </p>
                      </div>
                    </div>

                    {/* Integrated Apple Store Style Storage Capacities Selector for Regular Items too */}
                    {productCapacities.length > 0 && (
                      <div>
                        <h3 className="text-[13px] font-sans font-semibold text-neutral-400 tracking-tight leading-tight mb-2.5">
                          <span className="text-gray-900 font-bold">Armazenamento.</span> Escolha a capacidade desejada:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {productCapacities.map((cap) => {
                            const isSelected = activeCapacity === cap;
                            return (
                              <div
                                key={cap}
                                onClick={() => {
                                  setActiveCapacity(cap);
                                }}
                                className={`rounded-2xl p-4 flex flex-col justify-center cursor-pointer transition-all duration-200 min-h-[75px] ${
                                  isSelected
                                    ? 'border-2 border-[#0071e3] bg-gray-50/10'
                                    : 'border border-gray-200 bg-white hover:border-gray-300'
                                }`}
                              >
                                <div className="flex justify-between items-center w-full">
                                  <div>
                                    <span className="text-base font-extrabold text-gray-950 block leading-tight">
                                      {cap}
                                    </span>
                                    <span className="text-[10px] text-[#0071e3] font-semibold block mt-1 font-sans">
                                      Capacidade disponível
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-3">
                        Ficha Técnica de Destaque
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-650">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* CAPACITY TEXT: Temos todas as capacidades - WITHOUT ANY EMOJI */}
                {productCapacities.length > 0 && (
                  <div className="p-3.5 bg-neutral-50 rounded-2xl border border-gray-100">
                    <p className="text-xs text-neutral-800 font-medium leading-relaxed font-sans text-center">
                      Temos todas as capacidades disponíveis para encomenda ou pronta-entrega. Consulte nossa equipe!
                    </p>
                  </div>
                )}

                {/* Included Items inside package */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-2 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-gray-400 font-sans" />
                    Caixa e Acessórios Inclusos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.details.itemsIncluded.map((item, id) => (
                      <span
                        key={id}
                        className="inline-flex items-center text-[10px] font-bold text-gray-650 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* INTEGRATED DIRECT WHATSAPP ACTION INSIDE WHITE COLUMN FOR CONVERSION */}
                <div className="pt-5 border-t border-gray-100">
                  <button
                    onClick={handleWhatsAppConsult}
                    className="w-full inline-flex items-center justify-center p-4 bg-black hover:bg-neutral-800 text-white rounded-2xl text-xs font-black uppercase tracking-wider gap-2.5 transition-all cursor-pointer shadow-md active:scale-98"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5" />
                    <span>GARANTIR {(isIphoneLine && activeModel ? activeModel.name : product.name).toUpperCase()} PELO WHATSAPP</span>
                  </a>
                </div>

              </div>

              {/* Bottom solid footer block */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between text-gray-400 font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="block font-bold text-gray-900">
                      {getWarrantyLabel()}
                    </span>
                    {isAppleProduct && <span className="text-gray-400">Migração de dados Apple inclusa</span>}
                  </div>
                </div>
              </div>

            </div>

          </div>



        </motion.div>
      </div>
    </AnimatePresence>
  );
}
