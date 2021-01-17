(function(window, undefined) {
  var dictionary = {
    "636ad0a4-7d6c-4ede-8137-01f11dabd2fa": "CrearPista",
    "3cbbbf72-afa9-46d9-8aa5-4a8ee9fa9bce": "EditarPerfil",
    "97a78670-1de0-438a-9389-9d17a0119f8e": "Búsqueda",
    "50e6df9d-3e14-478b-8873-75075304f2e0": "EditarPerfilGestor",
    "2c6c64f1-dac5-4b90-aa2f-5fa0d966e585": "Pistas",
    "a304b4a5-a8f3-4e3f-ba3d-bacf670b4658": "Evento",
    "0cf44d35-3e60-4338-8733-cfe251f28e85": "Registro_dep",
    "7821f0ac-14c0-4671-bfa0-218884fa6abb": "Home",
    "cef460d0-fa5e-486b-b2d9-23116e9f989b": "Perfil",
    "cbc720d4-a35a-4653-8802-87a92004ca2b": "Eventos",
    "de5cd936-fddb-4696-b13c-779246e826f2": "CrearEvento",
    "0f1ff276-24d4-4b06-aff6-49fe3e638a5f": "Registro_ges",
    "9fd149f0-3b62-4e81-bee6-fd1c2606adb2": "PerfilGestor",
    "f81de416-e10e-4021-8166-14a4f4bc0662": "VerPista",
    "8842a7e3-79b1-402f-bf6c-b772df4f863f": "ValorarPista",
    "2e0972d5-6df0-4c3a-9cbc-574e8ffca4a7": "BuscarPista",
    "686aeb0f-a8cf-4e80-86bc-6edeb8922e76": "Registro_mon",
    "18ceeb5b-ae43-4e84-9bdf-eaa91bade1fc": "TusEventos",
    "025780ae-9cd5-443f-a6f9-12cbc6359eca": "ValorarJugador",
    "298448f1-3377-44d4-8b32-371688ee0821": "TusPistas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Identificación",
    "b8fe55e7-7a35-43da-88b5-c75244d6dd9e": "Reserva",
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