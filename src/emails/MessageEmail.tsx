// components/emails/MessageEmail.tsx

import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Text,
    Section,
  } from "@react-email/components";
  
  type ContactMessageProps = {
    name: string;
    email: string;
    message: string;
    subject?: string;
  };
  
  export default function MessageEmail({
    name,
    email,
    message,
    subject = "Sin asunto",
  }: ContactMessageProps) {
    return (
      <Html>
        <Head />
        <Preview>Nuevo mensaje de contacto en Veltrix</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={header}>
              <Text style={brand}>Veltrix</Text>
              <Text style={title}>Nuevo mensaje de contacto</Text>
            </Section>
  
            <Section style={section}>
              <Text style={label}>Nombre:</Text>
              <Text style={value}>{name}</Text>
  
              <Text style={label}>Correo:</Text>
              <Text style={value}>{email}</Text>

              <Text style={label}>Asunto:</Text>
              <Text style={value}>{subject}</Text>

  
              <Text style={label}>Mensaje:</Text>
              <Text style={value}>{message}</Text>
            </Section>
  
            <Section style={footer}>
              <Text style={footerText}>
                Este mensaje fue enviado desde el formulario de contacto de Veltrix.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
  
  // Estilos inline
  const main = {
    backgroundColor: "#f9fafb",
    fontFamily: "Helvetica, Arial, sans-serif",
    padding: "20px",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  };
  
  const header = {
    marginBottom: "20px",
  };
  
  const brand = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4f46e5", // morado estilo Veltrix
  };
  
  const title = {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "4px",
    color: "#111827",
  };
  
  const section = {
    marginBottom: "20px",
  };
  
  const label = {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "2px",
    color: "#374151",
  };
  
  const value = {
    fontSize: "14px",
    marginBottom: "12px",
    color: "#111827",
  };
  
  const footer = {
    borderTop: "1px solid #e5e7eb",
    paddingTop: "10px",
  };
  
  const footerText = {
    fontSize: "12px",
    color: "#6b7280",
  };
  