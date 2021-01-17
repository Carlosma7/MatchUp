(function(window, undefined) {
  var dictionary = {
    "cef460d0-fa5e-486b-b2d9-23116e9f989b": "Perfil",
    "cbc720d4-a35a-4653-8802-87a92004ca2b": "Eventos",
    "de5cd936-fddb-4696-b13c-779246e826f2": "CrearEvento",
    "3cbbbf72-afa9-46d9-8aa5-4a8ee9fa9bce": "EditarPerfil",
    "97a78670-1de0-438a-9389-9d17a0119f8e": "Búsqueda",
    "686aeb0f-a8cf-4e80-86bc-6edeb8922e76": "Registro_mon",
    "a304b4a5-a8f3-4e3f-ba3d-bacf670b4658": "Evento",
    "0cf44d35-3e60-4338-8733-cfe251f28e85": "Registro_dep",
    "18ceeb5b-ae43-4e84-9bdf-eaa91bade1fc": "TusEventos",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Identificación",
    "7821f0ac-14c0-4671-bfa0-218884fa6abb": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);