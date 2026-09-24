import React, { useState, useMemo } from 'react';
import {
  Search,
  ShieldCheck,
  Sparkles,
  Calendar,
  MapPin,
  Stethoscope,
  Plane,
  Building2,
  CheckCircle2,
  DollarSign,
  TrendingDown,
  Clock,
  Award,
  ChevronRight,
  Star,
  Hotel,
  Activity,
  Bot,
  UserCheck,
  FileText,
  PhoneCall,
  Share2,
  Send,
  Zap,
  Check,
  Sliders,
  ExternalLink,
  Info,
  HeartHandshake,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const PROCEDURES_DATA = [
  {
    id: 'limb-lengthening',
    name: 'Precice & Stryde Limb Lengthening Surgery',
    category: 'Orthopedic & Stature Optimization',
    usAvgCost: 98000,
    indiaAvgCost: 17200,
    recoveryDays: 45,
    hospitalStay: '4-5 Days',
    hotelStay: '35-40 Days',
    idealCities: ['Bengaluru', 'Delhi NCR', 'Mumbai'],
    description: 'Internal magnetic intramedullary lengthening nail (Precice 2) executed by UK/US-trained orthopedic reconstruction pioneers. Minimal scarring with controlled 6-8 cm bilateral height gain.',
    popularFor: 'Bilateral Femur / Tibia height enhancement'
  },
  {
    id: 'preservation-rhinoplasty',
    name: 'Preservation & Ultrasonic Rhinoplasty',
    category: 'Facial Aesthetics & Plastic Surgery',
    usAvgCost: 15500,
    indiaAvgCost: 2750,
    recoveryDays: 9,
    hospitalStay: 'Daycare / 1 Day',
    hotelStay: '7-9 Days',
    idealCities: ['Mumbai', 'Delhi NCR', 'Bengaluru'],
    description: 'Piezotome ultrasonic sculpting preserving the dorsal bone and cartilage architecture for zero-breakage natural profiles, 3D anatomical simulations, and rapid bruising resolution.',
    popularFor: 'Refined dorsal profile & structural nasal definition'
  },
  {
    id: 'deep-plane-facelift',
    name: 'Deep Plane High-SMAS Facelift & Neck Lift',
    category: 'Facial Rejuvenation & Luxury Aesthetics',
    usAvgCost: 28000,
    indiaAvgCost: 4800,
    recoveryDays: 14,
    hospitalStay: '1-2 Days',
    hotelStay: '10-12 Days',
    idealCities: ['Mumbai', 'Bengaluru', 'Delhi NCR'],
    description: 'Sub-SMAS anatomic ligament release ensuring 10-15 years of youthful tension-free facial repositioning without the windblown appearance.',
    popularFor: 'Midface, jowl, and neck structural tightening'
  },
  {
    id: 'breast-implants',
    name: 'Dual-Plane Ergonomix Breast Augmentation',
    category: 'Aesthetic Plastic Surgery',
    usAvgCost: 13500,
    indiaAvgCost: 3100,
    recoveryDays: 10,
    hospitalStay: '1 Day',
    hotelStay: '8-10 Days',
    idealCities: ['Bengaluru', 'Mumbai', 'Chennai'],
    description: 'FDA-approved Motiva Ergonomix / Mentor cohesive gel implants via minimal scar axillary or inframammary technique under full high-definition visualization.',
    popularFor: 'Natural projection, fullness, and soft tissue integration'
  },
  {
    id: 'robotic-joint',
    name: 'Stryker Mako Robotic Total Knee Replacement',
    category: 'Orthopedic Robotics',
    usAvgCost: 55000,
    indiaAvgCost: 8200,
    recoveryDays: 21,
    hospitalStay: '3-4 Days',
    hotelStay: '14 Days',
    idealCities: ['Delhi NCR', 'Chennai', 'Kochi'],
    description: '3D CT-based virtual pre-planning and robotic arm boundary guidance for sub-millimeter joint balancing and walk-within-24-hours recovery.',
    popularFor: 'Advanced degenerative joint disease & high-flexion needs'
  },
  {
    id: 'car-t-therapy',
    name: 'NexCAR19 CAR-T Cell Immunotherapy',
    category: 'Precision Oncology & Cellular Therapy',
    usAvgCost: 475000,
    indiaAvgCost: 48000,
    recoveryDays: 30,
    hospitalStay: '14 Days',
    hotelStay: '14-20 Days',
    idealCities: ['Mumbai', 'Bengaluru', 'Delhi NCR'],
    description: 'Indigenously manufactured CD19-targeted autologous CAR-T cell therapy providing breakthrough leukemia and lymphoma remission at 1/10th American pricing.',
    popularFor: 'Relapsed or refractory B-cell malignancies'
  },
  {
    id: 'beating-heart-cabg',
    name: 'Minimally Invasive Beating Heart CABG',
    category: 'Cardiothoracic Surgery',
    usAvgCost: 140000,
    indiaAvgCost: 9900,
    recoveryDays: 21,
    hospitalStay: '5-6 Days',
    hotelStay: '10-14 Days',
    idealCities: ['Chennai', 'Bengaluru', 'Delhi NCR'],
    description: 'Off-pump multi-vessel arterial revascularization executed through a small anterior thoracotomy without stopping the heart or sternal cracking.',
    popularFor: 'Severe multi-vessel coronary artery obstructions'
  }
];

const HOSPITALS_DATA = [
  {
    id: 'medanta-gurugram',
    name: 'Medanta – The Medicity',
    city: 'Delhi NCR',
    accreditation: 'JCI, NABH, NABL',
    specialties: ['Robotic Surgery', 'Cardiothoracic', 'Limb Reconstruction', 'Oncology'],
    rating: 4.92,
    reviewsCount: 4120,
    internationalPatientsAnnual: '21,000+',
    featuredLead: 'Dr. Naresh Trehan & Precision Team',
    airportDistance: '20 mins from Indira Gandhi Intl (DEL)',
    heroImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    bedCount: '1,250 Beds',
    techHighlight: 'Da Vinci Xi Robotic Systems, 256-Slice Dual Source CT'
  },
  {
    id: 'apollo-chennai',
    name: 'Apollo Hospitals Greams Road',
    city: 'Chennai',
    accreditation: 'JCI (Joint Commission International), NABH',
    specialties: ['Cardiology', 'Proton Cancer Therapy', 'Robotic Joint', 'Transplants'],
    rating: 4.96,
    reviewsCount: 5420,
    internationalPatientsAnnual: '26,000+',
    featuredLead: 'Apollo Quaternary Specialty Faculty',
    airportDistance: '35 mins from Chennai Intl (MAA)',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    bedCount: '1,000+ Beds',
    techHighlight: 'South Asia’s Leading Apollo Proton Therapy Centre'
  },
  {
    id: 'aster-cmi-bangalore',
    name: 'Aster CMI Hospital & Spine Institute',
    city: 'Bengaluru',
    accreditation: 'JCI, NABH, Eco-Green Certified',
    specialties: ['Limb Lengthening', 'Aesthetic Plastic Surgery', 'Neurosciences'],
    rating: 4.93,
    reviewsCount: 3340,
    internationalPatientsAnnual: '15,000+',
    featuredLead: 'Prof. Arvind Krishnamoorthy & Reconstructive Fellows',
    airportDistance: '22 mins from Kempegowda Intl (BLR)',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    bedCount: '650 Beds',
    techHighlight: 'Integrated Computer-Navigated Limb Correction Theatres'
  },
  {
    id: 'fortis-mumbai',
    name: 'Fortis Memorial & Hiranandani',
    city: 'Mumbai',
    accreditation: 'JCI, NABH, ISO Accredited',
    specialties: ['Facial Aesthetic Surgery', 'Deep Plane Facelifts', 'CAR-T Cell Hub'],
    rating: 4.89,
    reviewsCount: 3680,
    internationalPatientsAnnual: '16,500+',
    featuredLead: 'Dr. Siddharth Vardhan & Clinical Immuno-Oncology',
    airportDistance: '20 mins from Chhatrapati Shivaji Intl (BOM)',
    heroImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
    bedCount: '800 Beds',
    techHighlight: 'High-Definition Piezotome Ultrasonic Surgical Units'
  },
  {
    id: 'aster-medcity-kochi',
    name: 'Aster Medcity Waterfront Sanctuary',
    city: 'Kochi',
    accreditation: 'JCI, NABH, Medical Tourism Gold Seal',
    specialties: ['Rehabilitative Surgeries', 'Holistic Post-Op Retreat', 'Complex Joints'],
    rating: 4.95,
    reviewsCount: 2200,
    internationalPatientsAnnual: '11,000+',
    featuredLead: 'Dr. Harish Menon & Precision Team',
    airportDistance: '30 mins from Cochin Intl (COK)',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    bedCount: '670 Beds',
    techHighlight: 'Serene lakeside post-operative recuperation pavilions'
  }
];

const DOCTORS_DATA = [
  {
    id: 'doc-arvind',
    name: 'Prof. (Dr.) Arvind Krishnamoorthy, FRCS (Tr & Orth)',
    specialty: 'Limb Lengthening & Complex Stature Optimization',
    hospital: 'Aster CMI Hospital',
    city: 'Bengaluru',
    experience: '24+ Years Experience',
    trainedAt: 'Oxford Orthopaedic Centre (UK) & Baltimore Limb Institute (USA)',
    procedures: ['Precice 2 Limb Lengthening', 'Stryde Protocol', 'Bilateral Femur Gain'],
    rating: 4.99,
    reviews: 520,
    consultFee: 95,
    nextSlot: 'Today at 02:30 PM EST (Direct HD Tele-Consult)',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'doc-siddharth',
    name: 'Dr. Siddharth Vardhan, MS, MCh, FACS',
    specialty: 'Aesthetic Plastic & Craniofacial Surgery',
    hospital: 'Fortis Memorial Research Institute',
    city: 'Delhi NCR',
    experience: '21+ Years Experience',
    trainedAt: 'Harvard Medical Affiliate (Mass General) & Royal College of Surgeons',
    procedures: ['Preservation Rhinoplasty', 'Deep Plane High-SMAS Facelift', 'Dual-Plane Implants'],
    rating: 4.98,
    reviews: 640,
    consultFee: 85,
    nextSlot: 'Tomorrow at 11:00 AM EST (Direct HD Tele-Consult)',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'doc-meenakshi',
    name: 'Dr. Meenakshi Sundaram, MD, DM, FACC',
    specialty: 'Robotic Beating Heart & Minimally Invasive CABG',
    hospital: 'Apollo Hospitals',
    city: 'Chennai',
    experience: '26+ Years Experience',
    trainedAt: 'Cleveland Clinic Cardiovascular & Stanford Medical Centre',
    procedures: ['Beating Heart Bypass', 'Robotic Valve Repair', 'TAVR Transcatheter'],
    rating: 4.97,
    reviews: 1040,
    consultFee: 90,
    nextSlot: 'Friday at 01:00 PM EST (Direct HD Tele-Consult)',
    image: 'https://images.unsplash.com/photo-1594824813620-1a221fdb4980?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'doc-rajesh',
    name: 'Dr. Rajesh Deshmukh, MCh (Surg Onco), ESMO',
    specialty: 'Precision Cellular Oncology & CAR-T Therapy',
    hospital: 'Tata Memorial Network & Fortis Hub',
    city: 'Mumbai',
    experience: '18+ Years Experience',
    trainedAt: 'Memorial Sloan Kettering (MSKCC) & MD Anderson Cancer Center',
    procedures: ['NexCAR19 CAR-T Therapy', 'Robotic Surgical Oncology', 'HIPEC Treatment'],
    rating: 4.95,
    reviews: 410,
    consultFee: 95,
    nextSlot: 'In 2 Days at 10:30 AM EST (Direct HD Tele-Consult)',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
  }
];

const LUXURY_HOTELS = [
  {
    name: 'The Leela Palace Bengaluru',
    city: 'Bengaluru',
    type: 'Art-Deco Royal Wellness Sanctuary',
    highlight: 'Private sanitised medical wings, dedicated round-the-clock licensed nurses, chef-tailored protein & healing diets, 20-min private EV transfer to Aster CMI.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    recoveryRating: '9.9/10 Recovery Comfort Score'
  },
  {
    name: 'The Taj Mahal Palace & Tower',
    city: 'Mumbai',
    type: 'Historic Oceanfront Luxury Haven',
    highlight: 'Overlooking the Arabian Sea, hypoallergenic sterilized suites, private physiotherapy attendants, VIP private transfer to Fortis & South Mumbai surgery wings.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    recoveryRating: '9.9/10 Recovery Comfort Score'
  },
  {
    name: 'The Oberoi New Delhi',
    city: 'Delhi NCR',
    type: 'Hospital-Grade HEPA Clean-Air Sanctuary',
    highlight: 'Clean air filtration systems exceeding WHO standards, 24/7 private on-call medical butler, private clinical liaison to Medanta The Medicity.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    recoveryRating: '9.8/10 Recovery Comfort Score'
  },
  {
    name: 'ITC Grand Chola Luxury Collection',
    city: 'Chennai',
    type: 'Restorative Wellness & Post-Op Oasis',
    highlight: 'LEED Zero Carbon sanctuary with tailored post-cardiac and post-orthopedic therapeutic spa hydro-treatments, 20 mins to Apollo Greams Road.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    recoveryRating: '9.8/10 Recovery Comfort Score'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('marketplace'); // 'marketplace' | 'calculator' | 'ai-triage' | 'hospitals' | 'brandkit'
  
  // Search state
  const [searchProcedure, setSearchProcedure] = useState('');
  const [searchCity, setSearchCity] = useState('All Hubs');
  const [searchDate, setSearchDate] = useState('Immediate (Next 7-14 Days)');

  // Calculator State
  const [selectedCalcProcedure, setSelectedCalcProcedure] = useState(PROCEDURES_DATA[0].id);
  const [currency, setCurrency] = useState('USD');
  const [includeLuxuryHotel, setIncludeLuxuryHotel] = useState(true);
  const [includeChauffeurAndLogistics, setIncludeChauffeurAndLogistics] = useState(true);

  // Autonomous AI Concierge State
  const [aiChatMessages, setAiChatMessages] = useState([
    {
      role: 'assistant',
      text: 'Greetings. I am the Netraa Autonomous Clinical Concierge, supported by the OpenAI Collective & Anthropic AI Ecosystem. Whether you require aesthetic enhancement (Precice Limb Lengthening, Preservation Rhinoplasty, Deep Plane Facelift) or tertiary interventions (Robotic Joint, CAR-T, Beating Heart CABG), I can calculate your real-time 5X cost savings and map your stay itinerary in India.'
    }
  ]);
  const [userChatInput, setUserChatInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState(null);
  const [bookingFormData, setBookingFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    procedureInterest: 'Precice & Stryde Limb Lengthening Surgery',
    preferredDate: '',
    medicalNotes: '',
    needVisaAssistance: true
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Currency Conversions
  const currencyMultipliers = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 }
  };

  const formatPrice = (usdAmount) => {
    const info = currencyMultipliers[currency];
    const converted = Math.round(usdAmount * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  const activeProcedure = useMemo(() => {
    return PROCEDURES_DATA.find((p) => p.id === selectedCalcProcedure) || PROCEDURES_DATA[0];
  }, [selectedCalcProcedure]);

  const hotelAddon = includeLuxuryHotel ? 2800 : 750;
  const logisticsAddon = includeChauffeurAndLogistics ? 1900 : 400;
  const totalNetraaIndiaCost = activeProcedure.indiaAvgCost + hotelAddon + logisticsAddon;
  const totalSavings = activeProcedure.usAvgCost - totalNetraaIndiaCost;
  const savingsPercent = Math.round((totalSavings / activeProcedure.usAvgCost) * 100);

  const handleSendAiMessage = () => {
    if (!userChatInput.trim()) return;

    const newMsgs = [...aiChatMessages, { role: 'user', text: userChatInput }];
    setAiChatMessages(newMsgs);
    const query = userChatInput.toLowerCase();
    setUserChatInput('');
    setIsAiTyping(true);

    setTimeout(() => {
      let reply = '';
      if (query.includes('limb') || query.includes('height') || query.includes('stryde') || query.includes('precice')) {
        reply = `✨ Netraa Clinical Route: For Precice Limb Lengthening, our benchmark surgical lead is Prof. Arvind Krishnamoorthy (Oxford/Baltimore Fellow) at Aster CMI Bengaluru. All-inclusive quote: ~$17,200 USD (versus $98,000 in the US). Includes intramedullary implant, 40 days of supervised robotic physiotherapy, 5-Star Leela Palace recovery suite, and 48-hour Medical M-Visa processing.`;
      } else if (query.includes('nose') || query.includes('rhino') || query.includes('face') || query.includes('breast') || query.includes('plastic')) {
        reply = `✨ Netraa Aesthetic Protocol: Ultrasonic Preservation Rhinoplasty & Deep Plane Facelifts are directed by Dr. Siddharth Vardhan (FACS, Harvard affiliate) in Delhi/Mumbai. Expected investment: $2,750 - $4,800 USD including luxury recuperation at The Oberoi New Delhi. Total trip length: 9 to 12 days before final cast removal and flight clearance.`;
      } else if (query.includes('cancer') || query.includes('car-t') || query.includes('heart') || query.includes('knee') || query.includes('cardiac')) {
        reply = `✨ Quaternary Protocol: For complex oncology (NexCAR19 CAR-T Therapy) or Minimally Invasive CABG, India provides JCI-accredited excellence governed by ICMR & FDA clinical parallels at an 82% to 90% direct price reduction. Netraa assigns you a dedicated US-registered nurse liaison throughout your entire stay.`;
      } else {
        reply = `✨ Netraa Route Generated: Based on your clinical profile, we have identified 3 JCI-accredited chief surgeons in Bengaluru, Mumbai, and Delhi NCR. Projected net savings: ~80% (5X value multiplier). Would you like to transmit your medical files for an autonomous 24-hour evaluation?`;
      }
      setAiChatMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsAiTyping(false);
    }, 850);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setIsBookingModalOpen(false);
    }, 3200);
  };

  const openBookingModal = (doctor = null, procedureName = null) => {
    setSelectedDoctorForBooking(doctor);
    if (procedureName) {
      setBookingFormData((prev) => ({ ...prev, procedureInterest: procedureName }));
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black antialiased">
      {}
      <header className="border-b border-cyan-500/20 bg-gradient-to-r from-[#06101E] via-[#081528] to-[#06101E] py-2 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-cyan-300">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[11px] font-mono font-semibold">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              Autonomous Healthcare Access Infrastructure
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300 text-[11px]">
              FDA & ICMR Compliance Standards • JCI & NABH Accredited Hospital Network
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>5X Savings Guarantee vs. US Cash Rates</span>
          </div>
        </div>
      </header>

      {}
      <nav className="sticky top-0 z-40 backdrop-blur-2xl bg-[#06080F]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo - High tech Cartesia-style aesthetic */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('marketplace')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-600 to-emerald-400 p-[1.5px] shadow-lg shadow-cyan-500/25 group">
              <div className="w-full h-full bg-[#080D18] rounded-2xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white font-mono">
                  Netraa<span className="text-cyan-400">.app</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                  Global
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider">
                Autonomous Cross-Border Surgical Access
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800">
            {[
              { id: 'marketplace', label: 'Procedures & Specialists', icon: Stethoscope },
              { id: 'calculator', label: '5X Savings Engine', icon: DollarSign },
              { id: 'ai-triage', label: 'Autonomous AI Triage', icon: Bot },
              { id: 'hospitals', label: 'JCI Hubs & 5★ Recovery', icon: Building2 },
              { id: 'brandkit', label: 'Fellowship & Brand Story', icon: Zap }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Currency Switcher & Primary Action */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
              {['USD', 'EUR', 'GBP'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    currency === c
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <button
              onClick={() => openBookingModal()}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-extrabold text-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:opacity-95 shadow-lg shadow-cyan-400/20 transition-all hover:scale-[1.02]"
            >
              Instant Package Quote
            </button>
          </div>
        </div>
      </nav>

      {}
      <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-900">
        {/* Glow backdrop styling inspired by Cartesia.ai */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-cyan-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -top-32 right-10 w-80 h-80 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Fellowship and Ecosystem Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs text-cyan-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono font-semibold">Selected: Microsoft for Startups Founders Hub Fellow</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-indigo-500/40 text-xs text-indigo-300 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-mono font-semibold">Anthropic AI Ecosystem Partner</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs text-emerald-300 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono font-semibold">OpenAI Collective</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
            Elite American & European Care.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-400">
              1/5th The Price Tag.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Netraa is the autonomous healthcare access infrastructure connecting international patients directly to premier JCI-accredited surgeons across Bengaluru, Delhi NCR, and Mumbai. From precision Limb Lengthening and Deep Plane Facelifts to CAR-T Cell Immunotherapy—complete with 5-star recovery suites and 48-hour medical visas.
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl font-black text-cyan-400 font-mono">80% (5X)</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Average Savings vs US PPO</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-400 font-mono">18,500+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">International Surgical Journeys</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl font-black text-indigo-400 font-mono">48-72 Hours</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Medical M-Visa Concierge</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <div className="text-2xl font-black text-amber-400 font-mono">100% JCI</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Board-Certified Chiefs</div>
            </div>
          </div>

          {}
          <div className="mt-10 max-w-5xl mx-auto p-2.5 sm:p-3 rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-left">
              {/* Procedure Selector */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <label className="block text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1 flex items-center gap-1">
                  <Stethoscope className="w-3 h-3" />
                  Specialty or Procedure
                </label>
                <select
                  value={searchProcedure}
                  onChange={(e) => setSearchProcedure(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white font-medium focus:outline-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900 text-slate-400">All Operations Across India...</option>
                  {PROCEDURES_DATA.map((p) => (
                    <option key={p.id} value={p.name} className="bg-slate-900 text-white">
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Medical Hub Selector */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <label className="block text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Indian Medical Hub
                </label>
                <select
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All Hubs" className="bg-slate-900">All Hubs (Bengaluru, Delhi, BOM)</option>
                  <option value="Bengaluru" className="bg-slate-900">Bengaluru (Aster CMI, Manipal)</option>
                  <option value="Delhi NCR" className="bg-slate-900">Delhi NCR (Medanta, Fortis)</option>
                  <option value="Mumbai" className="bg-slate-900">Mumbai (Fortis, Tata Memorial Hub)</option>
                  <option value="Chennai" className="bg-slate-900">Chennai (Apollo Greams, Proton)</option>
                  <option value="Kochi" className="bg-slate-900">Kochi (Aster Medcity Waterfront)</option>
                </select>
              </div>

              {/* Travel Window */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <label className="block text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Travel Window
                </label>
                <select
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white font-medium focus:outline-none cursor-pointer"
                >
                  <option value="Immediate (Next 7-14 Days)" className="bg-slate-900">Immediate (Next 7-14 Days)</option>
                  <option value="Within 30 Days" className="bg-slate-900">Within 30 Days</option>
                  <option value="Next 60-90 Days" className="bg-slate-900">Next 60-90 Days</option>
                  <option value="Evaluating Options" className="bg-slate-900">Evaluating Options</option>
                </select>
              </div>

              {/* Action Button */}
              <div className="flex items-center">
                <button
                  onClick={() => {
                    setActiveTab('marketplace');
                    window.scrollTo({ top: 680, behavior: 'smooth' });
                  }}
                  className="w-full h-full min-h-[48px] px-6 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/30 transition-all hover:scale-[1.01]"
                >
                  <Search className="w-4 h-4 text-black" />
                  <span>Search Direct Care</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {activeTab === 'calculator' && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <TrendingDown className="w-3.5 h-3.5 text-cyan-400" />
              Netraa 5X Transparent Pricing Calculator
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              US Private Cash Price vs. <span className="text-cyan-400">Netraa All-Inclusive India</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              No hidden anesthesia or facility add-ons. Netraa bundles lead surgeon honorariums, JCI inpatient hospitalization, 5-star hotel recovery suites, and private airport transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Select Procedure & Recovery Tier
              </h3>

              <div className="space-y-2 mb-6 max-h-[350px] overflow-y-auto pr-1">
                {PROCEDURES_DATA.map((p) => {
                  const isSelected = selectedCalcProcedure === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedCalcProcedure(p.id)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400 shadow-md shadow-cyan-950'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-white">{p.name}</span>
                        <span className="font-mono text-xs font-bold text-cyan-300">
                          {formatPrice(p.indiaAvgCost)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                        <span>{p.category}</span>
                        <span className="text-red-400 line-through">US {formatPrice(p.usAvgCost)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Addon Toggles */}
              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-white">5-Star Taj / Leela Recovery Sanctuary</div>
                      <div className="text-[10px] text-slate-400">Post-op nursing & tailored clinical nutrition</div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeLuxuryHotel}
                    onChange={(e) => setIncludeLuxuryHotel(e.target.checked)}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs font-bold text-white">VIP Chauffeur & Medical Visa Expediter</div>
                      <div className="text-[10px] text-slate-400">Direct 48-hour M-Visa clearance + airport BMW escort</div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeChauffeurAndLogistics}
                    onChange={(e) => setIncludeChauffeurAndLogistics(e.target.checked)}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right Cost Summary Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Transparent Surgical Plan
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{activeProcedure.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-md">{activeProcedure.description}</p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center">
                  <div className="text-2xl font-mono font-black">{savingsPercent}%</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider">Direct Savings</div>
                </div>
              </div>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                {/* US Side */}
                <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/40">
                  <div className="flex items-center justify-between text-xs text-red-300 font-semibold mb-2">
                    <span>Average United States Private Fee</span>
                    <span className="px-2 py-0.5 rounded bg-red-900/40 text-red-200 text-[10px]">Out-of-Pocket</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-red-300">
                    {formatPrice(activeProcedure.usAvgCost)}
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> Surgeon fee only (Hospital bed billed separately)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> Anesthesia surcharge ($3,500 - $7,000 extra)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✕</span> Zero dedicated recovery sanctuary nursing
                    </li>
                  </ul>
                </div>

                {/* Netraa India Side */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900 border border-cyan-500/40 relative">
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-semibold mb-2">
                    <span>Netraa Curated India Fee</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                      All-Inclusive
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-cyan-300">
                    {formatPrice(totalNetraaIndiaCost)}
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Lead Surgeon + JCI Operating Suite
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Inpatient Hospitalization ({activeProcedure.hospitalStay})
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {includeLuxuryHotel ? '5-Star Leela/Taj Recovery Suite' : 'Standard recovery suite'}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      48-Hour Medical Visa & Airport Chauffeur
                    </li>
                  </ul>
                </div>
              </div>

              {/* Total Savings Highlight */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-emerald-400 font-mono uppercase font-bold">
                    Net Disposable Capital Preserved
                  </div>
                  <div className="text-2xl font-mono font-black text-white">
                    You Save {formatPrice(totalSavings)} ({currency})
                  </div>
                </div>
                <button
                  onClick={() => openBookingModal(null, activeProcedure.name)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-400 text-black font-extrabold text-xs hover:bg-cyan-300 transition-all shadow-md shadow-cyan-400/20 whitespace-nowrap"
                >
                  Lock In Guaranteed Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {}
      {activeTab === 'ai-triage' && (
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              Autonomous Clinical Route Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Netraa Autonomous <span className="text-cyan-400">Surgical Navigator</span>
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm">
              Integrated with models trained on international patient itineraries. Receive direct surgery quotes, hospital accreditations, and hotel stays in seconds.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[580px]">
            {/* Chat header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-600 to-emerald-400 flex items-center justify-center text-black font-bold">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Netraa Surgical Navigator Agent v4.8</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Anthropic & OpenAI Ecosystem Infrastructure • JCI / ICMR Compliant
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-xs">
                {['Precice Limb Lengthening', 'Preservation Rhinoplasty', 'Deep Plane Facelift', 'NexCAR19'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setUserChatInput(`What is the total package cost & recovery plan for ${t}?`)}
                    className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat message feed */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              {aiChatMessages.map((msg, index) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={index}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-start gap-2.5`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                    )}
                    <div
                      className={`max-w-lg p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-cyan-500 text-slate-950 font-semibold rounded-tr-none'
                          : 'bg-slate-950/90 border border-slate-800 text-slate-200 rounded-tl-none font-light'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isAiTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-slate-500">Querying Indian JCI surgical databases & visa pipelines...</span>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={userChatInput}
                onChange={(e) => setUserChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendAiMessage()}
                placeholder="Ask e.g. 'I want 3-inch height gain with Stryde nails in Bengaluru. What is the breakdown?'"
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleSendAiMessage}
                disabled={!userChatInput.trim()}
                className="px-4 py-2.5 rounded-xl bg-cyan-400 text-black font-extrabold text-xs hover:bg-cyan-300 disabled:opacity-40 transition-all flex items-center gap-1.5"
              >
                <span>Inquire</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {}
      {activeTab === 'marketplace' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Netraa Direct Tele-Surgical Access
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Board-Certified Super-Specialists & Direct Slots
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Virtual consultations from the comfort of your home prior to flight booking. Certified credentials from US & UK fellowships.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span>Hub Filter:</span>
              <span className="text-cyan-400 font-bold">
                {searchCity === 'All Hubs' ? 'Pan-India Super-Centers' : searchCity}
              </span>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCTORS_DATA.filter((doc) => searchCity === 'All Hubs' || doc.city.includes(searchCity)).map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-cyan-500/30 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                          {doc.city}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-amber-300 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                          <span>{doc.rating}</span>
                          <span className="text-slate-500 font-normal">({doc.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mt-1.5">{doc.name}</h3>
                      <p className="text-xs text-slate-300 font-medium">{doc.specialty}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{doc.hospital}</p>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{doc.trainedAt}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Tenure: <strong className="text-slate-200">{doc.experience}</strong> • HIPAA & GDPR Confidential
                    </div>
                  </div>

                  {/* Procedures Tag List */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {doc.procedures.map((p, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer slot */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{doc.nextSlot}</span>
                    </div>
                    <div className="font-mono text-cyan-300 font-bold text-sm mt-0.5">
                      Tele-Consult: {formatPrice(doc.consultFee)}
                    </div>
                  </div>

                  <button
                    onClick={() => openBookingModal(doc)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-black text-xs hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Direct Slot</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Procedure Catalog Cards */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Full Pan-India Surgical & Aesthetic Portfolio</h3>
                <p className="text-xs text-slate-400">All prices include hospital, lead surgeon, implants, and 5-star recovery</p>
              </div>
              <button
                onClick={() => setActiveTab('calculator')}
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Launch 5X Calculator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROCEDURES_DATA.map((proc) => (
                <div
                  key={proc.id}
                  className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-indigo-400 font-mono text-[10px] uppercase font-bold">{proc.category}</span>
                      <span className="text-slate-400 text-[10px]">{proc.hospitalStay}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{proc.name}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{proc.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Netraa All-Inclusive From</div>
                      <div className="text-base font-mono font-black text-cyan-400">
                        {formatPrice(proc.indiaAvgCost)}
                      </div>
                    </div>
                    <button
                      onClick={() => openBookingModal(null, proc.name)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-white text-xs font-bold transition-all"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {}
      {activeTab === 'hospitals' && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              JCI Indian Quaternary Centers & Luxury Stays
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Surgical Hubs & <span className="text-cyan-400">5-Star Healing Havens</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              We connect patients directly with leading Indian clinical systems and elite hotel recovery suites (Taj, Oberoi, The Leela, ITC Grand) across Bengaluru, Delhi NCR, Mumbai, Chennai, and Kochi.
            </p>
          </div>

          {/* Hospitals list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {HOSPITALS_DATA.map((hosp) => (
              <div
                key={hosp.id}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={hosp.heroImage}
                      alt={hosp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-cyan-300 text-xs font-mono border border-cyan-500/30">
                      {hosp.city}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/90 text-black text-[10px] font-bold">
                      {hosp.accreditation}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-bold text-white">{hosp.name}</h4>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{hosp.airportDistance}</span>
                    </p>

                    <div className="mt-3 text-xs text-slate-300 space-y-1">
                      <div>
                        <strong className="text-slate-400">Capacity:</strong> {hosp.bedCount} • {hosp.internationalPatientsAnnual} Global Patients/yr
                      </div>
                      <div>
                        <strong className="text-slate-400">Clinical Focus:</strong> {hosp.techHighlight}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {hosp.specialties.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950 text-cyan-300 border border-slate-800"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => openBookingModal(null, `Direct Referral at ${hosp.name}`)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-black text-white text-xs font-bold transition-all text-center"
                  >
                    Connect with Surgical Division
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 5-Star Hotel Recovery Suites */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-amber-400" />
                  Luxury 5-Star Post-Op Healing Suites
                </h3>
                <p className="text-xs text-slate-400">
                  Supervised recovery with licensed English-speaking nursing and customized post-surgical menus.
                </p>
              </div>
              <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30">
                The Leela • Taj • The Oberoi • ITC Grand
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LUXURY_HOTELS.map((hotel, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <img src={hotel.image} alt={hotel.name} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">{hotel.city}</span>
                      <h4 className="text-sm font-bold text-white mt-1">{hotel.name}</h4>
                      <div className="text-[11px] text-emerald-400 font-mono mt-0.5">{hotel.recoveryRating}</div>
                      <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">{hotel.highlight}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-2 flex items-center gap-1">
                      <HeartHandshake className="w-3 h-3 text-cyan-400" />
                      <span>Includes daily nurse visits & chauffeur</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {}
      {activeTab === 'brandkit' && (
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Netraa Architecture & Fellowship Credentials
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-mono">
              Netraa.app: Healthcare Access Infrastructure
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              Headquartered in Bengaluru, India. Engineered for American, European, and Asian patients seeking top-tier surgical outcomes at 1/5th US costs.
            </p>
          </div>

          {/* Futuristic LinkedIn Banner Mockup */}
          <div className="mb-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0A101D] to-slate-950 border border-cyan-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400 flex items-center justify-center text-black font-black text-xl">
                  N
                </div>
                <div>
                  <h3 className="text-xl font-mono font-black text-white tracking-wider">Netraa.app</h3>
                  <p className="text-xs text-slate-400">Technology, Information and Healthcare Infrastructure • Bengaluru</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/30">
                  Microsoft for Startups Fellow
                </span>
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/30">
                  Anthropic Partner
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/30">
                  OpenAI Collective
                </span>
              </div>
            </div>

            {/* LinkedIn About Section Body */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              <p className="text-base sm:text-lg font-medium text-white">
                Netraa is the autonomous healthcare access infrastructure that connects global patients to great surgical care in India, everywhere they search.
              </p>
              <p>
                By building autonomous AI triage, real-time transparent cross-border pricing, and direct scheduling with JCI-accredited surgical pioneers in Bengaluru, Mumbai, and Delhi, Netraa helps patients move from being stuck with six-figure US healthcare debt to being seen and healed with 5X savings.
              </p>
              <p>
                Operating with clinical protocols guided by FDA & ICMR standards, Netraa unifies fragmented cross-border medical travel: from instant video consults and expedited 48-72 hour Medical M-Visas to five-star post-operative convalescence suites at Taj and Leela properties.
              </p>
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono text-cyan-300">
                ⚡ Signature Procedures: Precice 2 Limb Lengthening • Ultrasonic Preservation Rhinoplasty • Deep Plane High-SMAS Facelifts • NexCAR19 CAR-T Cell Immunotherapy • Minimally Invasive Beating Heart CABG
              </div>
            </div>
          </div>

          {/* Positioning Matrix */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Target Audience Taglines
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  Target: US & European Aesthetic Patients (Millennial & Luxury)
                </div>
                <h4 className="text-white font-bold text-sm mt-1">
                  "Beverly Hills precision. Indian master surgeons. 1/5th the price tag."
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Preservation Rhinoplasty and Deep Plane Facelifts performed by FACS-accredited surgeons with 10 days in a serene Taj or Oberoi luxury healing retreat.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-xs font-mono text-indigo-400 font-bold uppercase">
                  Target: Stature Optimization & Limb Lengthening
                </div>
                <h4 className="text-white font-bold text-sm mt-1">
                  "Gain 3 inches in height with Precice magnetic nails. Save $80,000 on hospital costs."
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Supervised by Oxford/Baltimore fellows in Bengaluru with daily physical therapy and full concierge accommodation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {}
      <section className="py-14 border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">How Your Medical Trip Works in 4 Steps</h3>
            <p className="text-xs text-slate-400 mt-1">Autonomous coordination from booking to return home.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Tele-Consultation',
                desc: 'Speak directly with your Indian super-specialist over HD video. Review 3D scans and confirm your package quote.',
                icon: Stethoscope
              },
              {
                step: '02',
                title: '48h Medical e-Visa',
                desc: 'Netraa issues the official Hospital Invitation Letter for expedited Medical M-Visa processing in 48-72 hours.',
                icon: FileText
              },
              {
                step: '03',
                title: 'VIP Chauffeur & JCI Care',
                desc: 'Airport meet-and-greet in Bengaluru, Delhi, or Mumbai. Chauffeur to hospital for admission and treatment.',
                icon: Plane
              },
              {
                step: '04',
                title: '5-Star Hotel Recovery',
                desc: 'Recuperate in luxury at Taj, Leela, or Oberoi with round-the-clock nursing until you are certified fit to fly.',
                icon: Hotel
              }
            ].map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
                  <div className="text-xs font-mono font-black text-cyan-400 mb-2">{item.step}</div>
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5">
                    <StepIcon className="w-4 h-4 text-cyan-400" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 text-sm font-mono"
            >
              ✕
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Consultation Request Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your clinical inquiry and travel preferences have been transmitted to our autonomous concierge. Our US-RN medical coordinator will contact you via WhatsApp / Phone within 2 hours.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 text-xs font-mono text-cyan-400 inline-block">
                  Reference: NETRAA-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                    Direct Patient Gateway
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedDoctorForBooking
                      ? `Book Virtual Slot with ${selectedDoctorForBooking.name}`
                      : 'Schedule Your Confidential Treatment Evaluation'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Complimentary initial review by JCI-accredited surgical boards with 5X savings estimate.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Full Legal Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        value={bookingFormData.fullName}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, fullName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={bookingFormData.email}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">
                        Phone / WhatsApp (with Country Code)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (415) 890-2134"
                        value={bookingFormData.phone}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-semibold mb-1">Country of Residence</label>
                      <select
                        value={bookingFormData.country}
                        onChange={(e) => setBookingFormData({ ...bookingFormData, country: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany / EU</option>
                        <option value="Australia">Australia</option>
                        <option value="UAE / Gulf">UAE / Gulf</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">Procedure of Interest</label>
                    <input
                      type="text"
                      value={bookingFormData.procedureInterest}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, procedureInterest: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-semibold mb-1">
                      Clinical Notes / Current Condition
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention past surgeries, aesthetic goals, or travel date preferences..."
                      value={bookingFormData.medicalNotes}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, medicalNotes: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={bookingFormData.needVisaAssistance}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, needVisaAssistance: e.target.checked })}
                      className="w-4 h-4 accent-cyan-400 cursor-pointer"
                    />
                    <span>Include 48-Hour Medical M-Visa Concierge & Airport Transfer</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 text-black font-black text-sm uppercase tracking-wider hover:opacity-90 shadow-lg shadow-cyan-500/25 transition-all"
                  >
                    Confirm & Request Video Evaluation
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {}
      <footer className="border-t border-slate-900 bg-[#05070A] py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <div className="text-base font-black text-white font-mono flex items-center gap-1.5">
                <span>Netraa</span>
                <span className="text-cyan-400">.app</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Autonomous cross-border healthcare infrastructure bridging American and European patients with accredited Indian centers of medical excellence.
              </p>
              <div className="text-[10px] text-slate-500">
                Bengaluru • Delhi NCR • Mumbai • Chennai • Kochi
              </div>
            </div>

            <div>
              <div className="text-white font-semibold mb-2">High-Demand Surgeries</div>
              <ul className="space-y-1.5 text-[11px]">
                <li>Precice Limb Lengthening (Height Gain)</li>
                <li>Preservation Rhinoplasty (Nose Job)</li>
                <li>Deep Plane High-SMAS Facelift</li>
                <li>Dual-Plane Ergonomix Breast Implants</li>
                <li>NexCAR19 CAR-T Immunotherapy</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-2">Ecosystem Partners</div>
              <ul className="space-y-1.5 text-[11px]">
                <li>Microsoft for Startups Founders Hub Fellow</li>
                <li>Anthropic AI Ecosystem Partner</li>
                <li>OpenAI Collective</li>
                <li>Medanta The Medicity & Apollo Network</li>
                <li>Aster CMI & Fortis Research Hubs</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-semibold mb-2">Accreditation & Quality</div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                All partnered hospitals maintain active JCI (Joint Commission International) or NABH accreditations. All clinical operations adhere to ICMR regulations and HIPAA-compliant privacy standards.
              </p>
              <span className="text-emerald-400 font-mono text-[10px]">● 256-Bit Encrypted Patient Medical Pipeline</span>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <div>© 2026 Netraa Health Technologies Inc. All rights reserved.</div>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <span className="hover:text-slate-400 cursor-pointer">HIPAA & Privacy</span>
              <span className="hover:text-slate-400 cursor-pointer">Medical Visa Protocols</span>
              <span className="hover:text-slate-400 cursor-pointer">Clinical Advisory Board</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}