import { MapPin} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#DE3163] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold">Suvidha Foundation (Suvidha Mahila Mandal)</h2>
          <p className="mt-2 text-[#FFEDFA]">
            Empowering Rural Women for a Healthier Tomorrow.
          </p>
        </div>

        {/* Office Headquarters */}
        <div>
          <h3 className="text-lg font-medium">Office Headquarters</h3>
          <div className="mt-2">
            <p className="flex items-start gap-2 text-[#FFEDFA]">
              <MapPin size={18} />
              <span>
                <strong>Nagpur:</strong> Motghare Bhavan, Ward No. 4, Santnagar, Annamod, Near Water Tank, Khaperkheda, Saoner, Nagpur, Maharashtra, India - 441102
              </span>
            </p>
            <p className="flex items-start gap-2 mt-2 text-[#FFEDFA]">
              <MapPin size={18} />
              <span>
                <strong>Hyderabad:</strong> Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
              </span>
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-medium">Certifications</h3>
          <ul className="mt-2 text-[#FFEDFA] space-y-1">
            <li className="certificate"><a href="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf" target="_blank" rel="noopener">✅ 80G Certificate</a></li>
            <li className="certificate"><a href="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf" target="_blank" rel="noopener">✅ 12A Certificate</a></li>
            <li className="certificate"><a href="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF" target="_blank" rel="noopener">✅ CSR Certificate</a></li>
            <li className="certificate"><a href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf" target="_blank" rel="noopener">✅ Suvidha Darpan Registration</a></li>
            <li className="certificate"><a href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf" target="_blank" rel="noopener">✅ Suvidha Pan Card</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[#E195AB] mt-8 pt-4 text-center text-[#FFEDFA]">
        <p>&copy; {new Date().getFullYear()} Suvidha Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
