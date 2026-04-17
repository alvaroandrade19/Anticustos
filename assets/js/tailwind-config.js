tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            colors: {
                neutral: {
                    850: '#1f1f1f',
                    950: '#0a0a0a',
                },
                brand: {
                    500: '#e11d48',
                    600: '#be123c',
                    accent: '#fb7185'
                }
            }
        }
    }
};
