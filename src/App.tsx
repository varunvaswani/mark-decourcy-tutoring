
function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-900 font-sans antialiased p-0 md:p-6 lg:p-12 flex items-center justify-center">
      <main className="max-w-6xl w-full bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[800px] border border-stone-200 overflow-hidden">
        
        {/* Sidebar: The Authority Column */}
        <aside className="lg:w-[380px] bg-[#450a0a] text-stone-100 p-10 flex flex-col shrink-0 border-r border-stone-200">
          <div className="mb-10 text-center lg:text-left">
            <div className="w-48 h-64 bg-stone-800 mx-auto lg:mx-0 mb-8 overflow-hidden transition-all duration-700 shadow-2xl border-4 border-stone-100/20">
              <img 
                src="/mark-photo.jpg" 
                alt="Mark DeCourcy" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h1 className="font-serif text-4xl mb-2 tracking-tight text-stone-50">Mark DeCourcy</h1>
            <p className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
              AP Macroeconomics Specialist
            </p>
          </div>

          {/* Quick Credentials */}
          <div className="space-y-8 mb-12 border-t border-stone-100/10 pt-10">
            <div>
              <div className="text-3xl font-serif text-amber-200 mb-1">30+ Years</div>
              <p className="text-stone-400 text-[10px] uppercase tracking-widest font-black">Teaching Experience</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-amber-200 mb-1">28 Years</div>
              <p className="text-stone-400 text-[10px] uppercase tracking-widest font-black">Fayette County AP Macro</p>
            </div>
          </div>

          {/* Investment & Policies - Re-integrated into the sidebar flow */}
          <div className="space-y-8 mb-12 border-t border-stone-100/10 pt-10">
            <div>
              <h3 className="text-stone-500 uppercase tracking-widest text-[10px] font-black mb-5">Instructional Investment</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-300 font-serif">Hourly Session</span>
                  <span className="text-2xl font-serif text-amber-200">$80</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-300 font-serif">Half-Hour Session</span>
                  <span className="text-2xl font-serif text-amber-200">$50</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-400 leading-relaxed">
              <p className="flex items-start">
                <span className="text-amber-200 mr-3">•</span>
                <span>Group sessions (up to 3 students) available at no extra cost.</span>
              </p>
              <p className="flex items-start">
                <span className="text-amber-200 mr-3">•</span>
                <span>Serving Fayette County and surrounding local radius.</span>
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <a 
              href="mailto:mark_decourcy@yahoo.com" 
              className="block bg-amber-200 hover:bg-amber-100 text-red-950 font-black py-4 px-6 text-center transition-all duration-300 uppercase tracking-widest text-xs shadow-xl"
            >
              Request Consultation
            </a>
          </div>
        </aside>

        {/* Main: The Content Column */}
        <article className="flex-1 p-8 md:p-16 lg:p-20 overflow-y-auto">
          {/* Philosophy */}
          <section className="mb-20">
            <h2 className="text-[#991b1b] font-black text-[10px] uppercase tracking-[0.4em] mb-6">Pedagogical Philosophy</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-slate-900 mb-8 leading-[1.15] max-w-2xl">
              Teacher-led instruction meets <span className="italic text-stone-500">student-centered mastery.</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
              With three decades in the classroom, I’ve refined a methodology that simplifies complex aggregate models into intuitive concepts. I specialize in bridging the gap between theory and the <strong>graphical precision</strong> required for AP success.
            </p>
          </section>

          {/* Specializations Grid - 3x2 Layout */}
          <section className="mb-12">
            <h2 className="text-stone-400 font-black text-[10px] uppercase tracking-[0.4em] mb-10">Strategic Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="border-l-2 border-amber-200 pl-8">
                <h4 className="font-serif text-xl mb-3 text-slate-900">AP Macro Test Prep</h4>
                <p className="text-slate-500 text-sm leading-relaxed">High-weight curriculum mastery focused on scoring rubrics and timing strategies to secure top-tier results.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-8">
                <h4 className="font-serif text-xl mb-3 text-slate-900">Foundational Graphing</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Comprehensive command of AD/AS, Money Markets, Loanable Funds, and the Phillips Curve models.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-8">
                <h4 className="font-serif text-xl mb-3 text-slate-900">Modern Monetary Policy</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Specialized instruction on <strong>Ample vs. Limited Reserves</strong>—a nuanced requirement of the current AP standards.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-8">
                <h4 className="font-serif text-xl mb-3 text-slate-900">Budget Challenge</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Practical application of <strong>Personal Finance</strong> through the specialized Budget Challenge program curriculum.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-8">
                <h4 className="font-serif text-xl mb-3 text-slate-900">Core Methodologies</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Deep integration of Case & Fair and Krugman & Wells principles for undergraduate-level academic rigor.</p>
              </div>
              <div className="border-l-2 border-amber-200 pl-8">
                <h4 className="font-serif text-xl mb-3 text-slate-900">FRQ Dissection</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Strategic training on Free Response Questions to ensure students can articulate complex economic shifts clearly.</p>
              </div>
            </div>
          </section>

          {/* Footer inside content area */}
          <footer className="mt-auto pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400">
            <p>Mark DeCourcy Tutoring • Fayette County, GA</p>
            <p className="mt-4 md:mt-0">© {new Date().getFullYear()} All Rights Reserved</p>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default App;
