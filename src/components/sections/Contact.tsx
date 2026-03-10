import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export const Contact = () => {
    const contactMethods = [
        {
            name: 'Email',
            value: 'pablovelazquezbremont@gmail.com',
            href: 'mailto:pablovelazquezbremont@gmail.com',
            icon: Mail,
            color: 'text-blue-400'
        },
        {
            name: 'Phone',
            value: '+52 921 223 6568',
            href: 'tel:+529212236568',
            icon: Phone,
            color: 'text-green-400'
        },
        {
            name: 'LinkedIn',
            value: 'Pablo Velazquez Bremont',
            href: 'https://www.linkedin.com/in/pablo-velazquez-bremont-41201a31b',
            icon: Linkedin,
            color: 'text-blue-500'
        },
        {
            name: 'Instagram',
            value: '@pablovelazquezb',
            href: 'https://instagram.com/pablovelazquezb',
            icon: Instagram,
            color: 'text-pink-500'
        }
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background elements to match the premium dark theme */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl rounded-full pointer-events-none" />

            <div className="container relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#EDEDED]">
                        Get in Touch
                    </h2>
                    <p className="text-[#888] max-w-2xl mx-auto text-lg">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the following channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <motion.a
                                key={method.name}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group flex items-center p-6 bg-[#0a0a0a] border border-[#222] hover:border-[#444] rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 ${method.color}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-[#888] mb-1">{method.name}</h3>
                                    <p className="text-[#EDEDED] font-medium break-all">{method.value}</p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-[#333] group-hover:text-[#EDEDED] transition-colors" />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
