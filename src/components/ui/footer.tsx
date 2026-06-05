import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  Share2,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-100 border-t border-white/10 text-gray-300 pt-20 pb-10 relative overflow-hidden z-10 w-full">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                Landmark Lab
              </h2>
              <p className="text-sm text-gray-400 italic">
                OPC Pvt. Ltd.
              </p>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Engineering excellence through rigorous material testing,
              structural analysis, and advanced geospatial solutions.
              Precision is our standard.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Headquarters */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">
              Headquarters
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5 text-blue-400" />
              </div>

              <div>
                <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                  HQ
                </span>

                <h4 className="text-sm font-medium text-white mb-1">
                  Vasai
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Unit no. 5, Sethia Industrial Park, Vasai Phata, Vasai East, Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Palghar Branch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">
              Branch Office
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5 text-blue-400" />
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-1">
                  Goregaon
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Gala no 7, Aalam Compound, near Oberai Mall, Dindoshi, Goregaon East
                </p>
              </div>
            </div>
          </div>

          {/* Goregaon + Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Branch Office
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Palghar
                  </h4>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Palghar
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <MailIcon className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Email
                  </h4>

                  <a
                    href="mailto:landmark.cet@gmail.com"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    landmark.cet@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Phone
                  </h4>

                  <a
                    href="tel:+918983671620"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    +91 8983671620
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Landmark Consulting Labs (OPC) Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
