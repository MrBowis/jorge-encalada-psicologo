import React from "react";

export default function About() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Blur */}
            <div
                className="absolute inset-0 w-full h-full bg-[url(about-bg.jpg)] bg-cover bg-center"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                {/* Blur Effect */}
                <div className="absolute inset-0 backdrop-blur-md" />
            </div>

            {/* Content */}
            <div className="h-screen w-full relative z-5 p-8 bg-black/60 text-white flex flex-col justify-center items-center">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">¿Quién es Jorge Encalda?</h1>
                    <p className="text-lg">
                        Psicólogo Clínico con enfoque integrador, apasionado por el desarrollo humano, la neuroeducación y la salud mental. Mi trabajo se fundamenta en modelos psicoterapéuticos basados en evidencia, combinando herramientas de la neuropsicología, la TCC y enfoques humanistas. Acompaño a personas en procesos de transformación emocional, aprendizaje significativo y crecimiento personal. Comprometido con una práctica clínica ética, empática y científicamente actualizada.
                    </p>
                </div>
            </div>
        </div>
    );
}