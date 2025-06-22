import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white via-teal-500 to-teal-700 text-white py-3 bottom-0 md:bg-gradient-to-r">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <img src={Logo} alt="Jorge Encalada" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-lg text-center md:text-left">Contacto</span>
                    <a href='mailto:jorge.encalada1509@email.com' className="hover:underline text-blue-100">
                        jorge.encalada1509@email.com
                    </a>
                    <a className="hover:underline text-blue-100">
                        +593 99 822 3388
                    </a>
                </div>
                <div className="flex gap-6 text-2xl">
                    <div className="flex flex-col justify-center items-center text-blue-200">
                        <span className="font-semibold text-lg mb-4">Sígueme</span>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/jorge.encalada.9237"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-300 transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=593998223388"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-300 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jorge-luis-encalada-c%C3%B3rdova-5a1654175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-300 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mr-6 mt-6 text-center text-blue-200 text-sm md:text-right">
                &copy; {new Date().getFullYear()} Jorge Encalada Psicólogo. Todos los derechos reservados.
            </div>
        </footer>
    );
}