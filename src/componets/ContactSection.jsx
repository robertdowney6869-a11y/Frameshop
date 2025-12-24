import { Clock,Phone,Mail,MapPin } from "lucide-react";
const ContactSection = () => (
  <div id="contact" className="bg-white pb-8 2xl:py-16 relative z-20 scroll-mt-18 2xl:scroll-mt-8">
    <div className="container mx-auto max-w-7xl 2xl:max-w-[90%] min-[1920px]:max-w-[2400px] px-4">
      <div className="mb-8">
        <h2 className="text-3xl 2xl:text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-gray-500 2xl:text-l mt-1">We'd love to help you frame your memories</p>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        {/* 3. UPDATED: Reduced min-h-[400px] to min-h-[300px] */}
        <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] relative bg-gray-200">
           {/* Embedding a Google Map iframe (grayscale filter for style) */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.90853992424792!2d78.0369535088539!3d15.828368098974732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e75ed16a85cf%3A0x6c5b6c92350afd76!2sR%20K%20Color%20Lab%20%26%20Studio!5e0!3m2!1sen!2sin!4v1766474097538!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             frameBorder="0" 
            //  style={{ border: 0, filter: 'grayscale(100%)' }} 
             allowFullScreen="" 
            //  aria-hidden="false" 
            //  tabIndex="0"
             loading="lazy"
             className="absolute inset-0"
             title="Location Map"
           ></iframe>
        </div>
        {/* 3. UPDATED: Reduced padding p-10 md:p-16 to p-6 md:p-10 */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white md:bg-gray-50">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 w-fit"><MapPin size={14} /> Find Us</div>
          <h2 className="text-2xl 2xl:text-3xl font-bold text-gray-900 mb-4">Visit Our Design Studio</h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-base">Experience our frames in person.</p>
          {/* 3. UPDATED: Reduced space-y-8 to space-y-5 */}
          <div className="space-y-5">
            <div className="flex items-start gap-4 group"><div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0"><MapPin size={20} /></div><div><h4 className="font-bold text-gray-900 text-base mb-0.5">Address</h4><p className="text-gray-500 text-sm leading-relaxed">123 Gallery Row, Art District</p></div></div>
            <div className="flex items-start gap-4 group"><div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0"><Phone size={20} /></div><div><h4 className="font-bold text-gray-900 text-base mb-0.5">Phone</h4><p className="text-gray-500 text-sm mb-1">(555) 123-4567</p></div></div>
            <div className="flex items-start gap-4 group"><div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0"><Mail size={20} /></div><div><h4 className="font-bold text-gray-900 text-base mb-0.5">Email</h4><p className="text-gray-500 text-sm">hello@frameworks.com</p></div></div>
            <div className="flex items-start gap-4 group"><div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0"><Clock size={20} /></div><div><h4 className="font-bold text-gray-900 text-base mb-0.5">Hours</h4><p className="text-gray-500 text-sm">Mon-Sat: 9am - 7pm</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;