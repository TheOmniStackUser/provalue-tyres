import { Metadata } from 'next';
import Head from 'next/head';

// SEO Metadaten für Next.js App Router (bei Pages-Router stattdessen den <Head> Tag nutzen)
export const metadata: Metadata = {
  title: 'ProValue Tyres | Premium Wholesale & Direct Import Tyres South Africa',
  description: 'Direct importer of premium tyres at wholesale prices in South Africa. Supplying fleets, dealerships, and retail customers with reliable brands like Wanli and Aptany.',
  keywords: ['Tyres South Africa', 'Wholesale Tyres Cape Town', 'Wanli Tyres SA', 'Aptany Tyres', 'Fleet Tyre Supplier', 'Direct Tyre Importer'],
  openGraph: {
    title: 'ProValue Tyres | Premium Wholesale Tyres in South Africa',
    description: 'Direct importer of premium tyres at wholesale prices. Nationwide shipping from Cape Town.',
    url: 'https://provaluetyres.co.za',
    siteName: 'ProValue Tyres',
    locale: 'en_ZA',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-blue-900">
            PROVALUE<span className="text-orange-600">TYRES</span>
          </div>
          <a
            href="mailto:sales@provaluetyres.co.za"
            className="text-sm font-semibold text-blue-900 hover:text-orange-600 transition-colors"
          >
            sales@provaluetyres.co.za
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start">
          <span className="px-3 py-1 bg-orange-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            B2B Wholesale & Direct Import
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl">
            Premium Quality Tyres at Wholesale Prices.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Direct importers supplying South African fleets, dealerships, and retail customers. 
            Get top performance brands delivered nationwide from Cape Town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg text-center"
            >
              Get a Quote Now
            </a>
            <a
              href="https://wa.me/27123456789" // Hier eigene Nummer im Format 27... eintragen
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Importers</h3>
              <p className="text-slate-600">Cutting out the middleman. We source container loads directly from trusted manufacturers to bring you the best prices.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Brands</h3>
              <p className="text-slate-600">Stocking proven, high-durability brands like Wanli and Aptany. Perfect for commercial fleets and passenger vehicles.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Logistics</h3>
              <p className="text-slate-600">Based in Cape Town, equipped to distribute nationwide efficiently. We handle the logistics so you keep rolling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Quote</h2>
              <p className="text-slate-600 mb-8">Let us know your tyre dimensions and required quantities. We'll get back to you with our wholesale pricing.</p>
              
              <form action="mailto:sales@provaluetyres.co.za" method="POST" encType="text/plain" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company / Full Name</label>
                    <input type="text" name="Name" required className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-slate-900 placeholder:text-slate-500" placeholder="e.g. Acme Transport" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                    <input type="tel" name="Phone" required className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-slate-900 placeholder:text-slate-500" placeholder="082 123 4567" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tyre Size (e.g. 205/55 R16)</label>
                    <input type="text" name="Tyre Size" required className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-slate-900 placeholder:text-slate-500" placeholder="Width / Profile / Rim" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Quantity Required</label>
                    <input type="number" name="Quantity" required className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-slate-900 placeholder:text-slate-500" placeholder="Min. 4" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Additional Requirements</label>
                  <textarea name="Message" rows={4} className="w-full border border-slate-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none text-slate-900 placeholder:text-slate-500" placeholder="Specific brands (Wanli, Aptany), load ratings, or delivery location..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition-all shadow-md">
                  Send Inquiry to sales@provaluetyres.co.za
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-xl font-extrabold tracking-tighter text-white mb-4">
              PROVALUE<span className="text-orange-600">TYRES</span>
            </div>
            <p className="max-w-xs mb-4">
              Importing and supplying premium wholesale tyres for the South African market. 
            </p>
            <p className="text-sm">Based in Cape Town, South Africa.</p>
          </div>
          <div className="md:text-right flex flex-col justify-center">
            <a href="mailto:sales@provaluetyres.co.za" className="text-white hover:text-orange-600 font-medium mb-2">sales@provaluetyres.co.za</a>
            <a href="mailto:info@provaluetyres.co.za" className="text-white hover:text-orange-600 font-medium mb-4">info@provaluetyres.co.za</a>
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} ProValue Tyres. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
