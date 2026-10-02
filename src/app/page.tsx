import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ProValue Tyres | Premium Tyres for B2B & Retail in South Africa',
  description: 'Direct importer of premium tyres at wholesale prices in South Africa. Supplying fleets, dealerships, and retail customers with reliable brands like Wanli and Aptany.',
  keywords: ['Tyres South Africa', 'Wholesale Tyres Cape Town', 'Retail Tyres SA', 'Wanli Tyres SA', 'Aptany Tyres', 'Fleet Tyre Supplier', 'Direct Tyre Importer'],
  openGraph: {
    title: 'ProValue Tyres | Premium Tyres in South Africa',
    description: 'Direct importer of premium tyres. Great value for B2B wholesale and B2C retail. Nationwide shipping from Cape Town.',
    url: 'https://provaluetyres.co.za',
    siteName: 'ProValue Tyres',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="ProValue Tyres Logo" 
              width={250} 
              height={80} 
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#b2b" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">Wholesale</a>
            <a href="#b2c" className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">Retail</a>
            <a
              href="mailto:sales@provaluetyres.co.za"
              className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
            >
              sales@provaluetyres.co.za
            </a>
            <a href="#quote" className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white overflow-hidden">
        {/* Subtle background pattern/overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider rounded-full mb-6 border border-orange-500/30">
              Direct Importer • Exceptional Value
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Premium Tyres for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Every Journey.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              We cut out the middleman. Whether you are managing a commercial fleet or driving your family, we deliver top-tier performance brands at unbeatable direct prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-orange-600/30 text-center flex items-center justify-center gap-2"
              >
                Request Pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="https://wa.me/27123456789" // Hier eigene Nummer im Format 27... eintragen
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-3 px-8 rounded-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative h-full min-h-[400px]">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-500 rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 flex items-center justify-center p-8">
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full border border-white/20 shadow-xl">
                 <div className="flex justify-between items-center mb-8">
                   <div className="h-3 w-1/3 bg-white/30 rounded-full"></div>
                   <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                 </div>
                 <div className="space-y-4">
                   <div className="h-4 w-3/4 bg-white/20 rounded-full"></div>
                   <div className="h-4 w-full bg-white/20 rounded-full"></div>
                   <div className="h-4 w-5/6 bg-white/20 rounded-full"></div>
                 </div>
                 <div className="mt-10 grid grid-cols-2 gap-4">
                   <div className="bg-blue-900/40 rounded-xl p-5 text-center border border-blue-400/20">
                     <div className="text-3xl font-extrabold text-white mb-1">10k+</div>
                     <div className="text-xs text-blue-200 uppercase tracking-wider font-bold">Tyres Sold</div>
                   </div>
                   <div className="bg-orange-500/20 rounded-xl p-5 text-center border border-orange-400/20">
                     <div className="text-3xl font-extrabold text-white mb-1">100%</div>
                     <div className="text-xs text-orange-200 uppercase tracking-wider font-bold">Direct Value</div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Target Audiences: B2B & B2C */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">Dedicated Solutions For You</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Whether you're stocking a workshop or just replacing the tyres on your personal car, we have structured our business to give you the best deal possible.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* B2B Card */}
            <div id="b2b" className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all group">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">B2B Wholesale & Fleets</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We supply dealerships, tyre fitment centers, and commercial fleets across South Africa. Buy in bulk and benefit from our highly competitive importer pricing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Volume discounts & wholesale pricing
                </li>
                <li className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Consistent supply of container loads
                </li>
                <li className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Durable commercial & passenger brands
                </li>
              </ul>
              <a href="#quote" className="text-blue-700 font-bold hover:text-blue-900 flex items-center">
                Open a Dealer Account <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>

            {/* B2C Card */}
            <div id="b2c" className="bg-orange-50 rounded-3xl p-8 lg:p-12 border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Retail Customers</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Why pay retail markup? Buy your tyres directly from the importer. Get premium safety and durability for your personal vehicle at a fraction of the cost.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Massive savings compared to chain stores
                </li>
                <li className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Premium brands like Wanli & Aptany
                </li>
                <li className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Expert advice and fast nationwide delivery
                </li>
              </ul>
              <a href="#quote" className="text-orange-600 font-bold hover:text-orange-700 flex items-center">
                Get Tyres for My Car <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Direct Importers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">No middlemen. We source directly from top manufacturers globally, allowing us to pass incredible savings on to you.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Reliable Brands</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We stock proven, high-durability brands engineered for tough South African road conditions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Fast Logistics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Based in Cape Town, we are equipped to distribute nationwide efficiently to keep your vehicles rolling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-slate-900 h-64"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-blue-950 mb-3">Get Your Pricing</h2>
                <p className="text-slate-600">Tell us what you need, and our team will get back to you with a competitive quote.</p>
              </div>
              
              <form action="mailto:sales@provaluetyres.co.za" method="POST" encType="text/plain" className="space-y-6">
                
                {/* Customer Type Selector */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-800 mb-3">I am looking for: <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                      <input type="radio" name="Customer Type" value="B2B Wholesale" className="peer sr-only" defaultChecked />
                      <div className="text-center p-4 rounded-xl border-2 border-slate-200 peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:bg-slate-50 transition-all">
                        <span className="block font-bold text-slate-800">Wholesale / Fleet</span>
                        <span className="text-xs text-slate-500">Bulk orders & dealers</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="Customer Type" value="B2C Retail" className="peer sr-only" />
                      <div className="text-center p-4 rounded-xl border-2 border-slate-200 peer-checked:border-orange-500 peer-checked:bg-orange-50 hover:bg-slate-50 transition-all">
                        <span className="block font-bold text-slate-800">Personal / Retail</span>
                        <span className="text-xs text-slate-500">For my own vehicle</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Company / Full Name <span className="text-red-500">*</span></label>
                    <input type="text" name="Name" required className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-0 focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-500 bg-slate-50 focus:bg-white transition-colors" placeholder="e.g. Acme Transport or John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Contact Number <span className="text-red-500">*</span></label>
                    <input type="tel" name="Phone" required className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-0 focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-500 bg-slate-50 focus:bg-white transition-colors" placeholder="082 123 4567" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Tyre Size <span className="text-red-500">*</span></label>
                    <input type="text" name="Tyre Size" required className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-0 focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-500 bg-slate-50 focus:bg-white transition-colors" placeholder="e.g. 205/55 R16" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">Quantity <span className="text-red-500">*</span></label>
                    <input type="number" name="Quantity" required className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-0 focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-500 bg-slate-50 focus:bg-white transition-colors" placeholder="Number of tyres" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">Additional Requirements / Location</label>
                  <textarea name="Message" rows={4} className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-0 focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-500 bg-slate-50 focus:bg-white transition-colors resize-none" placeholder="Let us know your delivery area, specific brand preferences (Wanli, Aptany), or vehicle type..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg text-lg flex items-center justify-center gap-2 mt-4">
                  Request Quote via Email
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="bg-white p-3 rounded-lg inline-block mb-6">
              <Image 
                src="/logo.jpg" 
                alt="ProValue Tyres Logo" 
                width={180} 
                height={55} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="max-w-sm mb-6 leading-relaxed">
              Importing and supplying premium value tyres for both the B2B wholesale market and B2C retail customers in South Africa.
            </p>
            <div className="flex gap-4">
              <span className="flex items-center text-sm"><svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Cape Town, South Africa</span>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              <li><a href="#b2b" className="hover:text-orange-500 transition-colors">Wholesale Supply</a></li>
              <li><a href="#b2b" className="hover:text-orange-500 transition-colors">Fleet Management</a></li>
              <li><a href="#b2c" className="hover:text-orange-500 transition-colors">Direct to Public</a></li>
              <li><a href="#quote" className="hover:text-orange-500 transition-colors">National Delivery</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sales@provaluetyres.co.za" className="flex items-center hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-900 transition-colors">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  sales@provaluetyres.co.za
                </a>
              </li>
              <li>
                <a href="mailto:info@provaluetyres.co.za" className="flex items-center hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-900 transition-colors">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  info@provaluetyres.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ProValue Tyres. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
