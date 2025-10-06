import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoServico: '',
    outroServico: '',
    contato: '',
    observacoes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.telefone || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    let message = `Olá! Vim do site da Taborda Calhas e Serralheria.\n\n`;
    message += `Nome: ${formData.nome}\n`;
    message += `Telefone: ${formData.telefone}\n`;
    message += `E-mail: ${formData.email}\n`;
    message += `Tipo de serviço: ${formData.tipoServico === 'Outro:' ? formData.outroServico : formData.tipoServico}\n`;
    message += `Forma de contato preferida: ${formData.contato}\n`;
    if (formData.observacoes) {
      message += `Observações: ${formData.observacoes}\n`;
    }

    const whatsappUrl = `https://wa.me/5514999998888?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });

    // Reset form
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      tipoServico: '',
      outroServico: '',
      contato: '',
      observacoes: ''
    });
  };

  const regioesAtendidas = [
    "Botucatu", "Bauru", "Marília", "Assis", "Ourinhos", "Avaré", "Jaú", "Lins", "Lençóis Paulista", "Agudos",
    "Arandu", "Barão de Antonina", "Borebi", "Cerqueira César", "Conchas", "Coronel Macedo", "Itatinga", 
    "Manduri", "Pardinho", "Pereiras", "Porangaba", "Pratânia", "São Manuel", "Tejupá"
  ];

  return (
    <section className="py-20 bg-slate-800 text-white" id="contato">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-red-600 rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Solicite seu Orçamento Agora!
              </h2>
              <p className="text-red-100 mb-6">
                Orçamento rápido e gratuito com a Taborda Calhas e Serralheria em Botucatu.
              </p>
              <p className="text-red-100 mb-8 text-sm">
                Solicite agora seu orçamento com a Taborda Calhas e Serralheria, empresa de calhas e rufos em Botucatu e referência em Serralheria em Botucatu e região. Oferecemos estruturas metálicas, portões, grades, escadas, coberturas, telhados, calhas, rufos com qualidade e agilidade. Atendimento personalizado, preços competitivos e soluções sob medida para residências e empresas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="nome"
                    placeholder="Nome *"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="bg-white text-slate-800"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone *"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="bg-white text-slate-800"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white text-slate-800"
                    required
                  />
                </div>

                <div>
                  <Select onValueChange={(value) => handleSelectChange('tipoServico', value)} value={formData.tipoServico}>
                    <SelectTrigger className="bg-white text-slate-800">
                      <SelectValue placeholder="Tipo de serviço desejado:" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Portão de ferro">Portão de ferro</SelectItem>
                      <SelectItem value="Estrutura metálica">Estrutura metálica</SelectItem>
                      <SelectItem value="Grade de proteção">Grade de proteção</SelectItem>
                      <SelectItem value="Corrimão / Guarda-corpo">Corrimão / Guarda-corpo</SelectItem>
                      <SelectItem value="Calhas e Rufos">Calhas e Rufos</SelectItem>
                      <SelectItem value="Cobertura">Cobertura</SelectItem>
                      <SelectItem value="Mezanino">Mezanino</SelectItem>
                      <SelectItem value="Outro:">Outro:</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.tipoServico === 'Outro:' && (
                  <div>
                    <Input
                      type="text"
                      name="outroServico"
                      placeholder="Especifique o serviço desejado"
                      value={formData.outroServico}
                      onChange={handleInputChange}
                      className="bg-white text-slate-800"
                    />
                  </div>
                )}

                <div>
                  <Select onValueChange={(value) => handleSelectChange('contato', value)} value={formData.contato}>
                    <SelectTrigger className="bg-white text-slate-800">
                      <SelectValue placeholder="Como deseja ser contatado?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                      <SelectItem value="E-mail">E-mail</SelectItem>
                      <SelectItem value="Telefone">Telefone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea
                    name="observacoes"
                    placeholder="Observações Adicionais:"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    className="bg-white text-slate-800 min-h-[100px]"
                  />
                </div>

                <div className="text-xs text-red-100 mb-4">
                  Ao preencher este formulário, você concorda que nossa equipe entrará em contato para oferecer a melhor solução para sua obra.
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info and Regions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span>(14) 3622-1234</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-red-400" />
                  <span>(14) 99999-8888</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>taborda.serralheria@gmail.com</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 mt-1" />
                  <span>R. das Flores, 123 - Centro, Botucatu - SP, 18600-123</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Aceitamos todos os cartões</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xs">MASTER</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xs">ELO</span>
                </div>
                <div className="bg-white rounded p-2 flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-xs">PIX</span>
                </div>
              </div>
            </div>

            {/* Regions Served */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Regiões Atendidas!</h3>
              <p className="text-gray-300 mb-4">
                Atendimento rápido e eficiente em Botucatu e cidades da região.
              </p>
              <p className="text-gray-400 mb-6 text-sm">
                A Taborda Calhas e Serralheria empresa de calhas e rufos em Botucatu atende toda a região com agilidade, qualidade e compromisso. Se você busca uma serralheria confiável, com serviços personalizados e prazos rápidos, fale conosco! Somos referência em serralheria no interior de São Paulo.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {regioesAtendidas.map((cidade, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-red-400">•</span>
                    <span className="text-gray-300">{cidade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
