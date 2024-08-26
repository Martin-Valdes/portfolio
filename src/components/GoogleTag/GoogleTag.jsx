
export const GoogleTag = () => {
  const googleTagScript = document.createElement("script");
  googleTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${
    import.meta.env.VITE_REACT_GOOGLE_VAR
  }`;
  googleTagScript.async = true;
  document.head.appendChild(googleTagScript);

  // Inicializar Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", import.meta.env.VITE_REACT_GOOGLE_VAR);
};
