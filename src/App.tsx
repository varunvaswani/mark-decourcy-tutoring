import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Mark DeCourcy</h1>
        <p className="text-xl text-slate-600">Expert AP Macroeconomics Tutoring</p>
      </header>

      <main className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">Experience & Credentials</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              30+ years of teaching experience.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              31 years teaching GA High School Economics Standards.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              28 years teaching AP Macro in the Fayette County school system.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">Tutoring Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-2">Individual Sessions</h3>
              <p className="text-slate-600">Tailored 1-on-1 support for specific student needs.</p>
              <p className="mt-2 font-semibold text-blue-600">Rate: [Contact for Pricing]</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-2">Group Sessions</h3>
              <p className="text-slate-600">Collaborative learning for small groups of students.</p>
              <p className="mt-2 font-semibold text-blue-600">Rate: [Contact for Pricing]</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Ready to get started?</h2>
          <a 
            href="mailto:mark_decourcy@yahoo.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Contact Mark
          </a>
          <p className="mt-4 text-slate-500">mark_decourcy@yahoo.com</p>
        </section>
      </main>

      <footer className="mt-12 text-slate-400 text-sm">
        © {new Date().getFullYear()} Mark DeCourcy Tutoring. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
