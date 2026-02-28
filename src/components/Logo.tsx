// src/components/Logo.tsx
// Este es un componente SVG basado en el logo que proporcionaste.
// Puedes usar este componente o reemplazarlo por una etiqueta <img src="/tu-logo.png" />

export default function Logo({
  className = "w-10 h-10",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Picos de la montaña */}
      <path
        d="M50 20 L20 80 L35 80 L50 50 L65 80 L80 80 Z"
        fill="currentColor"
      />
      <path d="M35 80 L42.5 65 L50 80 Z" fill="currentColor" />
      <path d="M65 80 L57.5 65 L50 80 Z" fill="currentColor" />

      {/* Apertura de cámara en el centro */}
      <circle cx="50" cy="55" r="12" fill="white" />
      <circle cx="50" cy="55" r="10" fill="currentColor" />

      {/* Líneas de la apertura */}
      <path d="M50 45 L55 55" stroke="white" strokeWidth="1.5" />
      <path d="M55 55 L45 60" stroke="white" strokeWidth="1.5" />
      <path d="M45 60 L42 50" stroke="white" strokeWidth="1.5" />
      <path d="M42 50 L50 45" stroke="white" strokeWidth="1.5" />

      {/* Nieve en los picos */}
      <path d="M50 20 L45 30 L50 35 L55 30 Z" fill="white" />
      <path d="M30 60 L27 66 L30 69 L33 66 Z" fill="white" />
      <path d="M70 60 L67 66 L70 69 L73 66 Z" fill="white" />
    </svg>
  );
}
