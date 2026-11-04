export const THEME_STORAGE_KEY = "theme";

/*
  Runs inline in <head> before first paint, so dark-mode visitors never see a
  flash of the light theme. Keep it tiny and dependency-free.
*/
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;
