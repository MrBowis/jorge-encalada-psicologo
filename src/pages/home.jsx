import React from "react";

// Dummy data for testimonies and plans
const testimonies = [
    {
        name: "María A., 32 años",
        text: "Llegué a consulta sintiéndome atrapada en mis pensamientos, con ansiedad constante y sin saber por dónde empezar. Jorge me ayudó a comprender mis emociones con amabilidad, sin juicios, y poco a poco fui reconectando conmigo misma. Cada sesión fue un espacio seguro donde pude soltar y descubrir herramientas que hoy aplico en mi vida diaria. No solo encontré alivio, también encontré dirección.",
    },
    {
        name: "Luis y Carla, 38 y 36 años",
        text: "Después de años de discusiones y silencios, mi pareja y yo decidimos buscar ayuda. En el espacio terapéutico con Jorge aprendimos a escucharnos de verdad, a reconocer nuestras heridas y a encontrar nuevas formas de vincularnos. No fue fácil, pero su mirada integradora nos sostuvo en los momentos más difíciles. Hoy, más que una pareja, somos un equipo que eligió reconstruirse con conciencia.",
    },
    {
        name: "Paola M., mamá de Valentina (13 años)",
        text: "Mi hija estaba pasando por un momento muy difícil tras cambiarse de colegio. Se sentía sola, frustrada, con baja autoestima. Gracias al trabajo con Jorge, empezó a expresar lo que sentía, a entenderse mejor y a ganar seguridad. La diferencia ha sido inmensa, en casa la vemos más tranquila y conectada consigo misma. Como madre, me sentí también contenida y orientada en el proceso.",
    },
];

const plans = [
    {
        title: "Paquete de 6 Sesiones",
        desc: "6 sesiones con seguimiento continuo.",
        price: "$150,00",
    },
    {
        title: "Terapia Individual",
        desc: "Atención personalizada para trabajar tus objetivos personales.",
        price: "$30,00",
    },
    {
        title: "Terapia Familiar y/o de Pareja",
        desc: "Espacio para trabajar la comunicación.",
        price: "$40,00",
    },
];

export default function Home() {
    return (
        <main className="w-full">
            {/* Primera sección con imagen de fondo + gradiente */}
            <section
                className="w-full relative bg-cover bg-center text-white overflow-hidden h-screen bg-[url('https://images.unsplash.com/photo-1532009877282-3340270e0529?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8emVuJTIwc3RvbmVzfGVufDB8fDB8fHww')]"
            >
                <div className="h-screen bg-linear-65 from-teal-900 flex flex-col justify-center items-center text-center">
                    <div className="w-3/5">
                        <h1 className="text-3xl font-bold mb-4">
                            Bienvenido a este espacio donde tu historia importa.
                        </h1>
                        <p className="text-lg leading-relaxed">
                            Aquí cada emoción tiene lugar, cada proceso es respetado y cada paso hacia tu bienestar es acompañado con presencia, escucha y compromiso.

                            Mi intención es ofrecerte un lugar cálido, profesional y humano donde puedas reconectar contigo, comprender lo que sientes y abrirte a nuevas formas de estar en el mundo. Estás dando un paso valiente. Gracias por estar aquí.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <section className="my-8">
                    <h2 className="text-2xl font-semibold mb-4">Testimonios</h2>
                    <div className="flex flex-wrap gap-6">
                        {testimonies.map((t, i) => (
                            <blockquote
                                key={i}
                                className="bg-gray-100 border-l-4 border-teal-300 p-4 rounded-lg flex-1 min-w-[220px]"
                            >
                                <p className="italic">"{t.text}"</p>
                                <footer className="mt-2 font-bold">— {t.name}</footer>
                            </blockquote>
                        ))}
                    </div>
                </section>

                <section className="my-8">
                    <p className="text-gray-600 italic text-center">
                        “Gracias a quienes confiaron en este espacio y decidieron compartir unas palabras sobre su proceso terapéutico. Cada testimonio fue publicado con su consentimiento y con todo el respeto que merece su camino.”
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Planes y Tarifas</h2>
                    <div className="flex flex-wrap gap-6">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-300 rounded-lg p-4 flex-1 min-w-[220px]"
                            >
                                <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
                                <p>{plan.desc}</p>
                                <p className="font-semibold mt-2">{plan.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
