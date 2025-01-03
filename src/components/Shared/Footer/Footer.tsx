import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        <h5 className="text-lg font-bold mb-2">Quick Links</h5>
                        <Link href="/about" className="hover:text-gray-300 transition mb-1">About Us</Link>
                        <Link href="/services" className="hover:text-gray-300 transition mb-1">Services</Link>
                        <Link href="/blog" className="hover:text-gray-300 transition mb-1">Blog</Link>
                        <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
                    </div>

                    <div className="flex flex-col">
                        <h5 className="text-lg font-bold mb-2">Contact Us</h5>
                        <p className="mb-1">Email: info@example.com</p>
                        <p className="mb-1">Phone: (123) 456-7890</p>
                        <p>Address: 123 Main St, City, Country</p>
                    </div>

                    <div className="flex flex-col">
                        <h5 className="text-lg font-bold mb-2">Our Location</h5>
                        <div className="h-32 w-full bg-gray-700 rounded-md overflow-hidden">
                            <iframe
                                src="https://maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092733!2d144.9537363153168!3d-37.81627997975199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e0ef%3A0x5045675218ce6e0!2sYour%20Location!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* <div className="flex justify-center mt-8 space-x-6">
                    <Link href="/terms" className="hover:text-gray-300 transition">Terms of Service</Link>
                    <Link href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</Link>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;