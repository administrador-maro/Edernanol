
const Footer = () => {
  return (
    <footer className="pt-10 bg-gradient-to-r from-black to-[#065077] text-white py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Newsletter Section (Updated for side-by-side input and button) */}
        <div className="flex justify-center gap-12 md:flex-row flex-col">
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold text-center">
              SOLUCIONES CONFIABLES PARA LA INDUSTRIA Y EL TRANSPORTE MARÍTIMO
            </h3>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex-1 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 justify-between text-center">
          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Resources</h4>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Pricing
              </a>
            </li>
          </ul>

          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">About</h4>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                License
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                About TemplateSee
              </a>
            </li>
          </ul>

          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Explore</h4>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Languages
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>

          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Company</h4>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="duration-150 hover:text-gray-400">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 py-10 border-t border-gray-700 flex items-center justify-center sm:flex-row flex-col">
          <p className="text-gray-300">
            © 2025 TemplateSee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
