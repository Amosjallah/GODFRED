
import React from 'react';
import { 
  Building2, 
  Ruler, 
  Layers, 
  Map, 
  ClipboardCheck, 
  Hammer,
  ShieldCheck,
  Lightbulb,
  Target,
  Trees,
  HardHat,
  Compass,
  Zap,
  Leaf,
  Cpu,
  Eye
} from 'lucide-react';
import { Service, Project, Testimonial, LocationInfo } from './types';

export const COLORS = {
  deepGreen: '#064e3b',
  primaryGreen: '#10b981',
  accentGold: '#c5a059',
  white: '#FFFFFF',
  gray: '#4B5563',
  lightMint: '#f0fdf4',
  darkerGreen: '#042f24'
};

export const CONTACT_INFO = {
  email: 'tsalachdesignsandconsult25@gmail.com',
  phone: '+233 59 714 5210',
  address: 'Accra, Ghana'
};

export const LOGO_URL = 'https://chatgpt.com/backend-api/estuary/content?id=120d26acc0a03e3%23file_00000000073071f499e579e290373c85%23md&ts=491641&p=fs&cid=1&sig=b638191004f40cbfeec1597d9454f13e46c292b93b5877ce63203465654c2d57&v=0';

export const CORE_VALUES = [
  { icon: 'ShieldCheck', title: 'Integrity', description: 'Honesty in material sourcing and structural honesty in design.' },
  { icon: 'Zap', title: 'Innovation', description: 'Pushing the boundaries of 3D visualization and modern building techniques.' },
  { icon: 'Target', title: 'Precision', description: 'Meticulous detail from the first sketch to the final brick.' },
  { icon: 'Leaf', title: 'Sustainability', description: 'Designing for Ghana’s climate with passive cooling and energy efficiency.' }
];

export const SERVICES: Service[] = [
  {
    id: 'arch',
    title: 'Architectural Designs',
    description: 'Bespoke conceptual and detailed architectural plans tailored to your specific lifestyle or corporate needs.',
    fullDescription: 'At TSALACH DESIGNS, architecture is where imagination meets engineering. We specialize in modern minimalist bungalows and luxury multi-story residences.',
    icon: 'Building2',
    details: ['Conceptual Design', '3D Modeling', 'Interior Design', 'Master Planning', 'Landscape Integration'],
    process: [
      { step: '01', title: 'Consultation', description: 'Deep dive into your lifestyle, vision, and project budget.' },
      { step: '02', title: 'Schematic Design', description: 'Initial sketches, flow analysis, and spatial planning.' },
      { step: '03', title: 'Design Development', description: 'Refining materials, textures, and technical specifications.' },
      { step: '04', title: 'Construction Docs', description: 'Detailed drawings for building permits and contractor bidding.' }
    ]
  },
  {
    id: 'struct',
    title: 'Structural Designs',
    description: 'Precision engineering ensuring the integrity and safety of every project, from residential villas to high-rises.',
    fullDescription: 'Safety and longevity are the hallmarks of our structural engineering department. We specialize in foundation systems for Ghanaian terrain.',
    icon: 'ShieldCheck',
    details: ['Reinforced Concrete', 'Steel Framing', 'Foundation Engineering', 'Seismic Analysis', 'Structural Audits'],
    process: [
      { step: '01', title: 'Load Assessment', description: 'Calculating dead, live, wind, and seismic loads.' },
      { step: '02', title: 'System Selection', description: 'Choosing the most efficient structural framework.' },
      { step: '03', title: 'Detailing', description: 'Precise reinforcement and connection detailing.' },
      { step: '04', title: 'Site Inspection', description: 'Regular verification of structural elements during build.' }
    ]
  },
  {
    id: 'visuals',
    title: '3D Designs & Visualizations',
    description: 'Hyper-realistic 3D walkthroughs and renders that allow you to see your project before a single brick is laid.',
    fullDescription: 'Our 3D department produces photorealistic renders that capture every detail—from neon accents to granite cladding.',
    icon: 'Layers',
    details: ['Photorealistic Rendering', '3D Animation', 'Virtual Reality Tours', 'Product Visualization'],
    process: [
      { step: '01', title: 'Model Creation', description: 'Building a precise 1:1 digital twin of the design.' },
      { step: '02', title: 'Texturing', description: 'Applying realistic material properties and finishes.' },
      { step: '03', title: 'Lighting', description: 'Simulating natural sun paths and artificial light sources.' },
      { step: '04', title: 'Final Render', description: 'Producing ultra-high-resolution stills and videos.' }
    ]
  },
  {
    id: 'construction',
    title: 'General Construction Works',
    description: 'Full-cycle construction management where we handle everything from groundbreaking to the final finishes.',
    fullDescription: 'TSALACH DESIGNS translates blueprints into physical reality with clinical precision.',
    icon: 'Hammer',
    details: ['Residential Construction', 'Commercial Builds', 'Renovations', 'Project Management'],
    process: [
      { step: '01', title: 'Mobilization', description: 'Setting up site offices, security, and material storage.' },
      { step: '02', title: 'Sub-Structure', description: 'Execution of earthworks and foundations.' },
      { step: '03', title: 'Super-Structure', description: 'Erecting the main skeleton and walls.' },
      { step: '04', title: 'Finishes', description: 'Interior plumbing, electrical, and aesthetic detailing.' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'airban-home-a108',
    title: 'The Airban Home (A-108)',
    category: 'Residential',
    location: 'Accra, Ghana',
    year: '2024',
    client: 'Private Client',
    status: 'Completed',
    description: 'Signature minimalist bungalow featuring premium stone-cladding and an expansive open courtyard.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    slug: 'crimson-peak-estate',
    title: 'Crimson Peak Estate',
    category: 'Residential',
    location: 'Kumasi',
    year: '2024',
    client: 'Private Investor',
    status: 'Ongoing',
    description: 'Modern single-story residence with a bold crimson roof and contemporary stone-wash finishes.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    slug: 'neon-edge-villa',
    title: 'Neon-Edge Luxury Villa',
    category: 'Residential',
    location: 'East Legon, Accra',
    year: '2024',
    client: 'Private Client',
    status: 'Completed',
    description: 'A futuristic 2-story villa with integrated neon lighting accents and floor-to-ceiling glass balconies.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    slug: 'timber-contemporary-residence',
    title: 'Timber & Stone Contemporary',
    category: 'Residential',
    location: 'Airport Residential, Accra',
    year: '2023',
    client: 'Private Entity',
    status: 'Completed',
    description: 'Elegant 2-story home combining natural wood textures with minimalist white architectural planes.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    slug: 'stone-peak-apartments',
    title: 'Stone-Peak Executive Block',
    category: 'Mixed-Use',
    location: 'Ridge, Accra',
    year: '2024',
    client: 'Corporate Group',
    status: 'Conceptual',
    description: 'A 3-story high-end multi-unit block with vertical stone-textured pillars and recessed balconies.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Samuel Mensah',
    role: 'CEO, Mensah Real Estate',
    content: 'TSALACH DESIGNS exceeded our expectations. Their ability to manage both the creative and the structural engineering in-house saved us months of back-and-forth.',
    projectType: 'Commercial Complex',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Akosua Boakye',
    role: 'Homeowner',
    content: 'The 3D visualizations were so realistic that when I finally walked into my finished home, I knew exactly where everything was. Exceptional attention to detail.',
    projectType: 'Private Villa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    name: 'Accra',
    coords: { lat: 5.6037, lng: -0.1870 },
    description: 'Head Office & Design Hub',
    address: '15 Independence Ave, Ridge, Accra',
    phone: '+233 59 714 5210'
  },
  {
    name: 'Kumasi',
    coords: { lat: 6.6666, lng: -1.6163 },
    description: 'Ashanti Regional Hub',
    address: 'Nhyiaeso Business Center, Kumasi',
    phone: '+233 59 714 5210'
  },
  {
    name: 'Koforidua',
    coords: { lat: 6.0945, lng: -0.2591 },
    description: 'Eastern Regional Support',
    address: 'Main Market Square, Koforidua',
    phone: '+233 59 714 5210'
  }
];

export const ICON_MAP: Record<string, any> = {
  Building2: <Building2 className="w-8 h-8" />,
  Ruler: <Ruler className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Map: <Map className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-[#10b981]" />,
  Target: <Target className="w-6 h-6 text-[#10b981]" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6 text-[#10b981]" />,
  Trees: <Trees className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Zap: <Zap className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />
};
