export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Scan Content for{" "}
          <span className="text-[#58a6ff]">Copyright Violations</span>{" "}
          Before Publishing
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Protect your brand from costly legal disputes. CopyGuard checks your blog posts and social media content against copyright databases and suggests safe alternatives — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white">10M+</div>
            <div className="text-xs text-[#8b949e] mt-1">Database entries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">&lt;5s</div>
            <div className="text-xs text-[#8b949e] mt-1">Scan time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">99%</div>
            <div className="text-xs text-[#8b949e] mt-1">Accuracy rate</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#161b22] border-y border-[#30363d] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-[#58a6ff] text-2xl mb-2">&#128269;</div>
            <h3 className="font-semibold text-white mb-1">Text Analysis</h3>
            <p className="text-sm text-[#8b949e]">AI-powered scanning of blog posts and articles against copyright databases.</p>
          </div>
          <div>
            <div className="text-[#58a6ff] text-2xl mb-2">&#128247;</div>
            <h3 className="font-semibold text-white mb-1">Image Check</h3>
            <p className="text-sm text-[#8b949e]">Reverse image search to detect unlicensed or protected visuals.</p>
          </div>
          <div>
            <div className="text-[#58a6ff] text-2xl mb-2">&#9878;&#65039;</div>
            <h3 className="font-semibold text-white mb-1">Safe Alternatives</h3>
            <p className="text-sm text-[#8b949e]">Get instant suggestions for legally safe replacements for flagged content.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited text scans",
              "Up to 500 image checks/mo",
              "Legal database integration",
              "AI-powered safe alternatives",
              "Violation PDF reports",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What types of content can I scan?</h3>
            <p className="text-sm text-[#8b949e]">You can scan plain text (blog posts, articles, social captions) and images. Our engine checks against major copyright databases and known licensed content registries.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate are the results?</h3>
            <p className="text-sm text-[#8b949e]">Our AI achieves 99% accuracy on text and 95%+ on images. Results include confidence scores so you can prioritize which flags to review first.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my content stored or shared?</h3>
            <p className="text-sm text-[#8b949e]">No. Submitted content is processed in memory and deleted immediately after scanning. We never store, train on, or share your content with third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} CopyGuard. All rights reserved.
      </footer>
    </main>
  );
}
