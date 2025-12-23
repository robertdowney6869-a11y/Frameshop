import { Clock,Phone,Mail,MapPin } from "lucide-react";
const ContactSection = () => (
  <div id="contact" className="bg-white py-16 2xl:py-24 relative z-20">
    <div className="container mx-auto max-w-7xl 2xl:max-w-[90%] min-[1920px]:max-w-[2400px] px-4">
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        
        {/* Map Side (Half Screen on Desktop) */}
        <div className="w-full md:w-1/2 h-80 md:h-auto min-h-[400px] relative bg-gray-200">
           {/* Embedding a Google Map iframe (grayscale filter for style) */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.90853992424792!2d78.0369535088539!3d15.828368098974732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e75ed16a85cf%3A0x6c5b6c92350afd76!2sR%20K%20Color%20Lab%20%26%20Studio!5e0!3m2!1sen!2sin!4v1766474097538!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             frameBorder="0" 
            //  style={{ border: 0, filter: 'grayscale(100%)' }} 
             allowFullScreen="" 
             aria-hidden="false" 
             tabIndex="0"
             className="absolute inset-0"
             title="Location Map"
           ></iframe>
        </div>

        {/* Details Side (Half Screen on Desktop) */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white md:bg-gray-50">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
            <MapPin size={14} /> Find Us
          </div>
          
          <h2 className="text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6">Visit Our Design Studio</h2>
          <p className="text-gray-500 mb-10 leading-relaxed text-lg">
            Experience our frames in person. Bring your artwork for a free design consultation with our master framers.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-indigo-100 group-hover:border-indigo-100 transition-all flex items-center justify-center text-indigo-600 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Address</h4>
                <p className="text-gray-500 leading-relaxed">123 Gallery Row, Art District<br/>New York, NY 10007</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
               <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-indigo-100 group-hover:border-indigo-100 transition-all flex items-center justify-center text-indigo-600 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                <p className="text-gray-500 mb-1">(555) 123-4567</p>
                <p className="text-sm text-indigo-500 font-medium">Available Mon-Sat</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
               <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-indigo-100 group-hover:border-indigo-100 transition-all flex items-center justify-center text-indigo-600 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                <p className="text-gray-500">hello@frameworks.com</p>
                <p className="text-sm text-gray-400 mt-1">We reply within 24 hours</p>
              </div>
            </div>

             <div className="flex items-start gap-5 group">
               <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-indigo-100 group-hover:border-indigo-100 transition-all flex items-center justify-center text-indigo-600 flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Hours</h4>
                <p className="text-gray-500">Mon - Sat : 9am - 6pm</p>
                <p className="text-gray-500">Sunday : 10am - 1pm</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default ContactSection;