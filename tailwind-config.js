/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        sl: {
          abyss: "#050508", // Fondo principal más oscuro que black
          surface: "#111116", // Tarjetas y modales
          cyan: "#00E5FF", // El color del "Sistema"
          purple: "#8B5CF6", // Aura de sombras
        },
        p5: {
          blood: "#E60012", // Rojo característico
          gold: "#FBBF24", // Detalles de Royal
          paper: "#F1F1F1", // Blanco roto para textos con mucho contraste
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 15px rgba(0, 229, 255, 0.4)",
        "glow-purple": "0 0 15px rgba(139, 92, 246, 0.4)",
      },
    },
  },
};
