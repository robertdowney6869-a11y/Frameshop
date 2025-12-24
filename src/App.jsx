import React, { useState, useMemo,useEffect } from 'react';
import { ShoppingCart, X, Check, Search, Phone, Mail, MapPin, ArrowRight, Trash2, Send, Star,Home,LayoutGrid,Loader2, Clock } from 'lucide-react';
import ContactSection from './componets/ContactSection.jsx'
import Classicoak from "../src/assets/classicoak.png"
import Mattblack from  "../src/assets/mattblack.png"
import Goldleaf from  "../src/assets/Goldleaf.jpg"
import Barnwood from  "../src/assets/Barnwood.png"
import GalleryWhite from  "../src/assets/GalleryWhite.jpg"
import BrushedSilver from  "../src/assets/BrushedSilver.jpg"
import MahoganyGold from  "../src/assets/MahoganyGold.png"
import ChampagneSlim from  "../src/assets/ChampagneSlim.png"

// --- Mock Data: Your Shop's Inventory with Images ---
const FRAME_CATALOG = [
  { 
    id: 1, 
    name: "Classic Oak", 
    category: "Wood", 
    priceLevel: "$$", 
    image: Classicoak,
    description: "Timeless natural oak finish, perfect for family portraits and nature photography." 
  },
  { 
    id: 2, 
    name: "Modern Matte Black", 
    category: "Modern", 
    priceLevel: "$", 
    image: Mattblack,
    description: "Sleek, thin profile for contemporary art and photography. A gallery staple." 
  },
  { 
    id: 3, 
    name: "Vintage Gold Leaf", 
    category: "Ornate", 
    priceLevel: "$$$", 
    image: Goldleaf,
    description: "Luxurious gold finish with intricate detailing. Adds grandeur to any piece." 
  },
  { 
    id: 4, 
    name: "Rustic Barnwood", 
    category: "Wood", 
    priceLevel: "$$", 
    image: Barnwood,
    description: "Reclaimed wood look, great for farmhouse decor and vintage prints." 
  },
  { 
    id: 5, 
    name: "Brushed Silver", 
    category: "Metal", 
    priceLevel: "$$", 
    image: BrushedSilver,
    description: "Industrial chic aluminum with a soft brushed texture. Minimalist and strong." 
  },
  { 
    id: 6, 
    name: "Gallery White", 
    category: "Modern", 
    priceLevel: "$", 
    image: GalleryWhite,
    description: "Wide, clean white profile for a museum-quality look. Keeps the focus on the art." 
  },
  { 
    id: 7, 
    name: "Mahogany & Gold", 
    category: "Wood", 
    priceLevel: "$$$", 
    image: MahoganyGold,
    description: "Deep red wood with an inner gold accent line. Traditional and sophisticated." 
  },
  { 
    id: 8, 
    name: "Champagne Slim", 
    category: "Metal", 
    priceLevel: "$$", 
    image: ChampagneSlim,
    description: "Ultra-minimalist metallic finish with a warm champagne tint." 
  },
];

// --- Components ---

const FramePreview = ({ image, name }) => (
  <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden relative group  border-b border-gray-100">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const Badge = ({ children, color = 'bg-blue-100 text-blue-800' }) => (
  <span className={`px-2.5 py-1 rounded-full text-xs 2xl:text-sm font-bold uppercase tracking-wider ${color}`}>
    {children}
  </span>
);

export default function FrameShop() {
  const [cart, setCart] = useState([]); // Array of items in quote
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [filter, setFilter] = useState('All');
  
  // Form State

  const [isLoading, setIsLoading] = useState(true);

  const [showMobileNav, setShowMobileNav] = useState(false); 

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const categories = ['All', ...new Set(FRAME_CATALOG.map(f => f.category))];

  const filteredFrames = useMemo(() => {
    return filter === 'All' 
      ? FRAME_CATALOG 
      : FRAME_CATALOG.filter(f => f.category === filter);
  }, [filter]);

  // --- NEW: Handle Category Change with Loader ---
  const handleCategoryChange = (selectedCategory) => {
    setIsLoading(true); // 1. Start loading
    setFilter(selectedCategory); // 2. Change the filter
    
    // 3. Stop loading after delay (simulating network request)
    setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms delay for category switch
  };

  useEffect(() => {
    // Simulate Loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Scroll Logic
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowMobileNav(true);
      } else {
        setShowMobileNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const addToQuote = (frame) => {
    if (!cart.find(item => item.id === frame.id)) {
      setCart([...cart, frame]);
    }
    setIsCartOpen(true);
  };

  const removeFromQuote = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    console.log("Submitting quote for:", cart, formData);
    setShowSuccess(true);
    setCart([]);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setShowSuccess(false);
      setIsCartOpen(false);
    }, 3000);
  };

  const getPriceColor = (level) => {
    switch(level) {
      case '$': return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      case '$$': return 'bg-blue-100 text-blue-700 border border-blue-200';
      case '$$$': return 'bg-amber-100 text-amber-700 border border-amber-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">

      {isLoading && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[60] flex flex-col items-center justify-center transition-all duration-300">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-indigo-600">F</span>
            </div>
          </div>
          <p className="mt-4 text-gray-500 font-medium animate-pulse">Loading Collection...</p>
        </div>
      )}
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        {/* Adjusted Container: Wider on 2xl and up */}
        <div className="container mx-auto max-w-7xl 2xl:max-w-[90%] min-[1920px]:max-w-[2400px] px-4 h-16 2xl:h-18 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 2xl:w-12 2xl:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg 2xl:text-2xl shadow-lg">F</div>
             <span className="text-xl 2xl:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">
               FrameWorks
             </span>
          </div>

          <div className="flex items-center gap-6 2xl:gap-10">
            <div className="hidden md:flex items-center gap-6 2xl:gap-10 text-sm 2xl:text-lg font-medium text-gray-500">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-indigo-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-indigo-600 transition-colors">Collections</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
            </div>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 2xl:p-4 bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-full transition-all duration-200 group"
            >
              <ShoppingCart size={22} className="2xl:w-8 2xl:h-8" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 2xl:w-6 2xl:h-6 bg-pink-500 text-white text-xs 2xl:text-sm flex items-center justify-center rounded-full font-bold shadow-md animate-bounce">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white py-16 md:py-24 2xl:py-40 min-[1920px]:py-52 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
        {/* Decorative blobs - Larger on TV */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 min-[1920px]:w-[800px] min-[1920px]:h-[800px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 min-[1920px]:w-[800px] min-[1920px]:h-[800px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        {/* Adjusted Container */}
        <div className="container mx-auto max-w-7xl 2xl:max-w-[90%] min-[1920px]:max-w-[2400px] px-4 relative z-10">
          <div className="max-w-2xl 2xl:max-w-4xl min-[1920px]:max-w-6xl pb-20 md:pb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 2xl:px-5 2xl:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs 2xl:text-base font-bold uppercase tracking-wider mb-6 text-pink-100">
              <Star size={12} className="text-yellow-300 fill-yellow-300 2xl:w-5 2xl:h-5" /> Custom Framing Specialist
            </div>
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl min-[1920px]:text-9xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-sm">
              Frame Your <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-200">Masterpiece.</span>
            </h1>
            <p className="text-indigo-100 text-lg 2xl:text-1xl min-[1920px]:text-2xl mb-8 max-w-xl 2xl:max-w-2xl leading-relaxed">
              Browse our curated collection of premium wood, metal, and ornate frames. Select your favorites and request a personalized quote today.
            </p>
            <button 
              onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-900 px-8 py-4 2xl:px-10 2xl:py-5 rounded-full font-bold text-base 2xl:text-lg hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg shadow-indigo-900/20 inline-flex items-center gap-2"
            >
              Browse Catalog <ArrowRight size={18} className="2xl:w-6 2xl:h-6" />
            </button>
          </div>
        </div>
      </div>

       {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" 
             onClick={() => document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })}>
           <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
              <ArrowRight size={20} className="rotate-90" />
           </div>
        </div>

      {/* --- Catalog Section --- */}
      {/* Adjusted Container */}
      <div id="catalog" className="container mx-auto max-w-7xl xl:max-w-full xl:px-12 px-4 py-8 2xl:py-12 scroll-mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div>
            <h2 className="pt-3 text-3xl 2xl:text-4xl font-bold text-gray-900">Our Collection</h2>
            <p className="text-gray-500 2xl:text-l mt-1">Found <span className="font-bold text-indigo-600">{filteredFrames.length}</span> styles for you</p>
          </div>
          <div className="flex flex-wrap gap-2 2xl:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 2xl:px-8 2xl:py-4 rounded-full text-xs 2xl:text-md font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CHANGED: 
            - grid-cols-1 (Mobile)
            - sm:grid-cols-2 (Tablet)
            - lg:grid-cols-4 (Laptop)
            - xl:grid-cols-5 (Laptop L)
            - 2xl:grid-cols-6 (Desktop)
            - min-[1800px]:grid-cols-8 (TV - full single row)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-[1800px]:grid-cols-8 gap-4 2xl:gap-8">
          {filteredFrames.map(frame => (
            <div key={frame.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 flex flex-col border border-gray-100">
              <FramePreview image={frame.image} name={frame.name} />
              
              <div className="p-4 2xl:p-6 flex flex-col flex-grow relative">
                <div className="flex items-start justify-between mb-2">
                  <Badge color="bg-indigo-50 text-indigo-700 border border-indigo-100">{frame.category}</Badge>
                  <Badge color={getPriceColor(frame.priceLevel)}>{frame.priceLevel}</Badge>
                </div>
                <h3 className="text-base 2xl:text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{frame.name}</h3>
                <p className="text-gray-500 text-[10px] 2xl:text-sm mb-3 line-clamp-2 leading-relaxed">{frame.description}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => addToQuote(frame)}
                    disabled={cart.find(i => i.id === frame.id)}
                    className={`w-full py-2 2xl:py-3 rounded-xl font-bold text-xs 2xl:text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      cart.find(i => i.id === frame.id)
                        ? '!bg-emerald-100 text-emerald-700 cursor-default border border-emerald-200'
                        : '!bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg shadow-indigo-200'
                    }`}
                  >
                    {cart.find(i => i.id === frame.id) ? (
                      <><Check size={14} /> Added</>
                    ) : (
                      <>Add</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ContactSection --- */}
      <ContactSection />

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-12 relative overflow-hidden">
        {/* Color bar top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        {/* Adjusted Container */}
        <div className="container mx-auto max-w-7xl 2xl:max-w-[90%] min-[1920px]:max-w-[2400px] px-4 grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-24 text-sm 2xl:text-lg">
          <div>
             <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 2xl:w-10 2xl:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg shadow-md">F</div>
                 <span className="text-xl 2xl:text-2xl font-bold text-gray-900">FrameWorks</span>
             </div>
            <p className="text-gray-500 leading-relaxed mb-6">Premium custom framing services for artists, galleries, and collectors. We bring color to your memories.</p>
            <div className="flex gap-4">
               {[1,2,3].map(i => <div key={i} className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-gray-100 hover:bg-indigo-100 text-gray-500 hover:text-indigo-600 flex items-center justify-center transition-colors cursor-pointer"><ArrowRight size={14} className="-rotate-45 2xl:w-5 2xl:h-5"/></div>)}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base 2xl:text-xl mb-6">Contact Us</h4>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3"><span className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center"><Phone size={14} className="2xl:w-5 2xl:h-5"/></span> (555) 123-4567</p>
              <p className="flex items-center gap-3"><span className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center"><Mail size={14} className="2xl:w-5 2xl:h-5"/></span> quote@frameworks.com</p>
              <p className="flex items-center gap-3"><span className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center"><MapPin size={14} className="2xl:w-5 2xl:h-5"/></span> 123 Gallery Row, Art District</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base 2xl:text-xl mb-6">Shop Hours</h4>
            <div className="space-y-3 text-gray-600 border-l-2 border-indigo-100 pl-4">
              <p><span className="font-semibold text-gray-900">Mon - Fri:</span> 9:00 AM - 6:00 PM</p>
              <p><span className="font-semibold text-gray-900">Saturday:</span> 10:00 AM - 4:00 PM</p>
              <p><span className="font-semibold text-gray-900">Sunday:</span> Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="container mx-auto max-w-7xl px-2 mt-2 pt-2 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} FrameWorks. All rights reserved. |  <span className="font-medium text-gray-500">Designed by <a href="https://www.linkedin.com/in/lohith-mandla" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Lohith Mandla</a></span>
            </p>
        </div>
      </footer>
      

      {/* --- Mobile Bottom Nav --- */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 px-6 py-2 flex justify-between items-center text-xs font-medium text-gray-500 transition-transform duration-300 ${showMobileNav ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-center gap-1 p-2 hover:text-indigo-600 transition-colors">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button onClick={() => scrollToSection('catalog')} className="flex flex-col items-center gap-1 p-2 hover:text-indigo-600 transition-colors">
          <LayoutGrid size={20} />
          <span>Collections</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className="flex flex-col items-center gap-1 p-2 hover:text-indigo-600 transition-colors">
          <MapPin size={20} />
          <span>Contact</span>
        </button>
      </div>

      {/* --- Quote Drawer/Modal --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-indigo-900/20 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer: Max width increased for 2xl/TV screens */}
          <div className="relative w-full max-w-md 2xl:max-w-xl min-[1920px]:max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
            
            <div className="p-6 2xl:p-8 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div>
                <h2 className="text-xl 2xl:text-3xl font-bold">Request Quotation</h2>
                <p className="text-indigo-100 text-sm 2xl:text-base">Review your selected frames</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
              >
                <X size={20} className="2xl:w-8 2xl:h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 2xl:p-8 space-y-6">
              
              {showSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                    <Check size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                  <p className="text-gray-500 max-w-xs mx-auto">
                    Thank you, {formData.name || 'valued customer'}. We have received your request for <span className="font-bold text-indigo-600">{cart.length} items</span>.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Items List */}
                  <div className="space-y-4">
                    <h3 className="text-xs 2xl:text-sm font-bold text-gray-400 uppercase tracking-wider">Selected Items ({cart.length})</h3>
                    
                    {cart.length === 0 ? (
                      <div className="text-center py-12 px-4 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                        <ShoppingCart size={40} className="mx-auto mb-3 opacity-20" />
                        <p className="2xl:text-lg">No frames selected yet.</p>
                        <p className="text-xs 2xl:text-sm mt-1">Go back and explore our collection!</p>
                      </div>
                    ) : (
                      cart.map(item => (
                        <div key={item.id} className="flex gap-4 p-3 border border-gray-100 rounded-xl hover:shadow-md hover:border-indigo-100 transition-all bg-white group">
                           <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-gray-50 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="flex-1 py-1">
                             <h4 className="font-bold text-gray-800 text-sm 2xl:text-lg mb-1">{item.name}</h4>
                             <div className="flex gap-2">
                               <Badge color="bg-gray-100 text-gray-500 text-[10px] 2xl:text-xs py-0">{item.category}</Badge>
                             </div>
                           </div>
                           <button 
                             onClick={() => removeFromQuote(item.id)}
                             className="text-white-300 hover:text-red-500 transition-colors p-2"
                           >
                             <Trash2 size={18} className="2xl:w-6 2xl:h-6" />
                           </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Customer Details Form */}
                  {cart.length > 0 && (
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                      <h3 className="text-xs 2xl:text-sm font-bold text-gray-400 uppercase tracking-wider">Your Details</h3>
                      
                      <div className="space-y-4">
                        <div className="group">
                          <label className="block text-xs 2xl:text-sm font-semibold text-gray-700 mb-1.5 ml-1">Full Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full px-4 py-3 2xl:py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm 2xl:text-base transition-all"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-xs 2xl:text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
                          <input 
                            type="email" 
                            required
                            className="w-full px-4 py-3 2xl:py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm 2xl:text-base transition-all"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-xs 2xl:text-sm font-semibold text-gray-700 mb-1.5 ml-1">Phone (Optional)</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 2xl:py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm 2xl:text-base transition-all"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-xs 2xl:text-sm font-semibold text-gray-700 mb-1.5 ml-1">Message / Specific Sizes</label>
                          <textarea 
                            className="w-full px-4 py-3 2xl:py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm 2xl:text-base h-28 2xl:h-40 resize-none transition-all"
                            placeholder="I need a 24x36 frame for the Classic Oak..."
                            value={formData.message}
                            onChange={e => setFormData({...formData, message: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer Action */}
            <div className="p-6 2xl:p-8 border-t border-gray-100 bg-gray-50">
              {!showSuccess && (
                <button
                  onClick={handleSubmitQuote}
                  disabled={cart.length === 0 || !formData.name || !formData.email}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-3.5 2xl:py-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-0.5 text-sm 2xl:text-lg"
                >
                  <Send size={18} className="2xl:w-6 2xl:h-6" /> Send Request
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}