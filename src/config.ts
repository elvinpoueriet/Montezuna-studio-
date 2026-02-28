// src/config.ts
// ==========================================
// CONFIGURACIÓN PRINCIPAL DE LA PÁGINA WEB
// ==========================================
// Aquí puedes cambiar fácilmente el logo, nombre y enlaces de tu empresa.
// Todo el código leerá esta información automáticamente.

export const siteConfig = {
  // 1. NOMBRE DE LA EMPRESA
  companyName: "Montezuna Studio",

  // 2. LOGO DE LA EMPRESA
  // Cambia esta URL por el enlace directo a tu logo (ej. "https://tusitio.com/logo.png" o "/logo.png" si está en la carpeta public)
  // Si dejas esto vacío (""), se mostrará el nombre de la empresa en texto.
  logoUrl:
    "https://fvakfzhhhybmdpkxpqjk.supabase.co/storage/v1/object/sign/index/IMG_6753%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOGRiMjY4Mi1iOGZmLTQ1ZGYtYjIxYy0wMjU0ZTY3ODcyOWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbmRleC9JTUdfNjc1MyAoMSkucG5nIiwiaWF0IjoxNzcyMjU5NDQ1LCJleHAiOjE4MDM3OTU0NDV9.dXKKzGkuHXBC5-B0I2ssLttYap-APg98r7LPhBaOSos", // <-- CAMBIA ESTO POR LA URL DE TU LOGO REAL

  // 3. INFORMACIÓN DE CONTACTO
  contact: {
    email: "montezunastudio@gmail.com",
    phone: "+1 (809) 344-9209",
    address: "Av. Principal 123, Ciudad Creativa",
  },

  // 4. REDES SOCIALES (Pon tus enlaces reales aquí)
  socialLinks: {
    instagram: "https://www.instagram.com/montezunastudio?igsh=MTBiemJsNjl5MjJqYQ==",
    facebook: "https://www.facebook.com/share/1KTiwQiw7V/?mibextid=wwXIfr",
    twitter: "",
    linkedin: "",
  },
};
