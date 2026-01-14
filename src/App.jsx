import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Menu, 
  X,
  Users,
  CheckCircle2
} from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                5151 HOLDINGS<span className="text-blue-900">.</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-900 font-medium transition text-sm uppercase tracking-wide">About</a>
              <a href="#ventures" className="text-slate-600 hover:text-blue-900 font-medium transition text-sm uppercase tracking-wide">Ventures</a>
              <a href="#leadership" className="text-slate-600 hover:text-blue-900 font-medium transition text-sm uppercase tracking-wide">Leadership</a>
              <a href="#contact" className="px-5 py-2 bg-slate-900 text-white font-medium text-sm rounded-sm hover:bg-slate-800 transition uppercase tracking-wide">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a href="#about" className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md" onClick={toggleMenu}>About Us</a>
              <a href="#ventures" className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Ventures</a>
              <a href="#leadership" className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Leadership</a>
              <a href="#contact" className="block px-3 py-3 text-blue-900 font-bold hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:w-3/4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Strategic Development. <br />
              <span className="text-blue-400">Immersive Entertainment.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              5151 Holdings LLC is the engine behind high-impact, community-centered businesses. We acquire, plan, and manage ventures designed for strong growth and lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#ventures" className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-sm hover:bg-blue-600 transition flex items-center justify-center shadow-lg hover:shadow-blue-900/50">
                View Ventures <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-slate-500 text-white font-semibold rounded-sm hover:bg-white hover:text-slate-900 transition text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 rounded-sm">
                About The Company
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Building Foundations for the Future.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Established in November 2025, 5151 Holdings LLC operates as a privately owned business development and entertainment ventures company. Headquartered in Brownstown, Michigan, we serve as the operational backbone for ambitious new market projects.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our scope extends beyond simple ownership. We handle the critical lifecycle of business creation: real estate acquisition, project planning, capital allocation, and long-term management to ensure every venture thrives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                    <Target className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Strategic Planning</h4>
                    <p className="text-sm text-slate-500 mt-1">Comprehensive roadmap development and execution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900">Asset Management</h4>
                    <p className="text-sm text-slate-500 mt-1">Real estate acquisition and capital strategy.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               {/* Decorative Element */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-900/10 rounded-full blur-xl"></div>
              <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 shadow-sm relative z-10">
                <blockquote className="border-l-4 border-blue-900 pl-6 py-2">
                  <p className="text-xl italic text-slate-700 font-medium leading-relaxed">
                    "We are focused on building high-impact, community-centered businesses with strong growth and investment potential."
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="text-sm font-bold text-slate-900">Carl Webster & Kimball Vaughn</div>
                  <span className="mx-2 text-slate-400">•</span>
                  <div className="text-sm text-slate-500">Managing Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTURES SECTION */}
      <section id="ventures" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Current Ventures</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our portfolio focuses on creating spaces that bring people together.
            </p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-slate-200 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-slate-900 flex items-center justify-center p-16 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-50"></div>
              <div className="text-center relative z-10">
                <h3 className="text-5xl font-black text-white tracking-widest uppercase mb-4">NO LIMIT ZONE</h3>
                <div className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Coming Soon
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <Building2 className="h-5 w-5 text-blue-900 mr-2" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Flagship Project</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Indoor Family Entertainment Center</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The No Limit Zone represents the future of local entertainment. Designed to be a safe, high-energy environment for families, this facility will feature state-of-the-art attractions and community gathering spaces.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                  Family-Centric Design
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                  Modern Arcade & Attractions
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                  Event & Party Hosting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Executive Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Guided by experienced entrepreneurs dedicated to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Leader 1 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center hover:shadow-md transition">
              <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-400">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Carl Webster</h3>
              <p className="text-blue-900 font-medium text-sm uppercase tracking-wide mb-4">Owner / Partner</p>
              <p className="text-slate-600 text-sm">
                Driving the strategic vision and acquisition strategies for the holding company.
              </p>
            </div>

            {/* Leader 2 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center hover:shadow-md transition">
              <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-400">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Kimball Vaughn</h3>
              <p className="text-blue-900 font-medium text-sm uppercase tracking-wide mb-4">Owner / Partner</p>
              <p className="text-slate-600 text-sm">
                Overseeing operational execution and project development for new ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-slate-400 mb-10 text-lg">
                For investment inquiries, partnership opportunities, or more information about our upcoming projects, please contact our corporate office.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-white">Headquarters</h4>
                    <p className="text-slate-400 mt-1">
                      20767 Gilbratot Unit 155<br />
                      Brownstown, MI 48183
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <h4 className="font-bold text-white">Phone</h4>
                    <p className="text-slate-400 mt-1">1 800 434 1554</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <p className="text-slate-400 mt-1">info@5151holdings.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-slate-800">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-blue-900 transition" placeholder="Your Full Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-blue-900 transition" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-blue-900 transition" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-sm hover:bg-slate-800 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">
              5151 HOLDINGS<span className="text-blue-500">.</span>
            </span>
            <p className="text-slate-500 text-sm mt-1">
              &copy; {new Date().getFullYear()} 5151 Holdings LLC. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition text-sm">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Website;