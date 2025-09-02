"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Não informado",
          message: formData.message,
          time: new Date().toLocaleString()
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string 
      );

      alert("Mensagem enviada com sucesso!")
      setFormData({ name: "", phone: "", email: "", message: "" })
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar a mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-[#04001C]" id="contatos">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">SOBRE MIM</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Informações Pessoais */}
          <div className="bg-[#042a4b] rounded-lg p-6 lg:w-1/2">
            <div className="mb-6">
              <p>
                Considero-me como uma pessoa que possui comunicação, estabilidade emocional e Interação social,
                se adaptando ao convívio e ambiente. Objetivo de evoluir e agregar com o aprendizado adquirido.
              </p>
              <div className="my-6 flex justify-center">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Contatos e informações:</h3>
              <div className="flex items-center my-2">
                <img
                  src="/images/localizationIcon.png"
                  alt="Localização"
                  className="w-6 h-6 mr-2 filter invert"
                />
                <p>BRASÍLIA-DF</p>
              </div>
              <div className="flex items-center my-2">
                <img
                  src="/images/emailIcon.png"
                  alt="Email"
                  className="w-6 h-6 mr-2 filter invert"
                />
                <p>daviairesg6@gmail.com</p>
              </div>
              <div className="flex items-center my-2">
                <img
                  src="/images/Phone_icon.png"
                  alt="Telefone"
                  className="w-6 h-6 mr-2 filter invert"
                />
                <p>+55 (61) 99928-9566</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Redes sociais:</h3>
              <div className="flex justify-center gap-6">
                <a href="#">
                  <img src="/images/github.png" alt="GitHub" className="w-8 h-8 filter invert" />
                </a>
                <a href="#">
                  <img src="/images/figma.png" alt="Figma" className="w-8 h-8 filter invert" />
                </a>
                <a href="#">
                  <img src="/images/behance.png" alt="Behance" className="w-8 h-8 filter invert" />
                </a>
                <a href="#">
                  <img src="/images/instagramLogo.png" alt="Instagram" className="w-8 h-8 filter invert" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-[#042a4b] rounded-lg p-6 lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <h5 className="mb-4">
                Gostou do meu portifólio e quer entrar em contato comigo ou fazer um comentário?
                Envie uma mensagem para mim!
              </h5>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">SEU NOME:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-300 text-black"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">SEU NÚMERO DE TELEFONE:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-300 text-black"
                  placeholder="Digite seu número (opcional)"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">SEU EMAIL:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-300 text-black"
                  placeholder="Digite seu email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">SUA MENSAGEM:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 rounded bg-gray-300 text-black"
                  placeholder="Digite sua mensagem"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;