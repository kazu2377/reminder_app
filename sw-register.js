if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful:", registration);
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });
  });
}
