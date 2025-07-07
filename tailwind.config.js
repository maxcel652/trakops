/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Path to your main HTML file (e.g., if index.html is in the root)
      './index.html',
      // Path to all HTML and JavaScript files within a 'src' directory and its subdirectories
      './src/**/*.{html,js}',
      // Path to all HTML and JavaScript files within a 'scripts' directory and its subdirectories
      './scripts/**/*.{html,js}',
      
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/container-queries'),
        
    ],
  };