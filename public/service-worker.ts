self.addEventListener("install", () => {
    console.log("Service Worker installé !");
  });
  
  self.addEventListener("activate", () => {
    console.log("Service Worker activé !");
  });
  
//   self.addEventListener("fetch", (event) => {
//     console.log("Fetching:", event.request.url);
//   });  