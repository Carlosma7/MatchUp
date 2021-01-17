(function(window, undefined) {
  var dictionary = {
    "9bf65ef7-764a-4045-bde6-b4334a8c02a0": "Reg_Monitor",
    "85c6abdd-8e73-4112-a4a6-1c1365f84d5a": "Editar_gestor",
    "9a032e21-c844-44db-b18c-a6dc30f27d57": "Perfil",
    "3af3be46-bcb5-4cb0-8022-63045336f329": "Evento",
    "f0ff9aba-dd42-4569-93ca-689ec2c550a4": "Buscar_pista",
    "32c6cff7-1898-40c1-8206-ccf158fcfbfa": "Registro",
    "746d9097-5c82-414c-a5a2-8b7a756b9ac2": "Reserva",
    "7abc0ea3-f772-434e-82a0-105b48a263e3": "Buscar_pista_evento",
    "d93aec41-6d93-4854-8624-d3f43fdbb3a1": "Crear_Pista",
    "fb726774-2cb5-42f0-998b-88fdb8945d1f": "Reg_Gestor",
    "541b9e5c-32ec-437b-9032-97a2557edff4": "Buscar_Evento",
    "e4372a23-678e-4126-bf48-a4424fdec7c2": "Ver_Pista",
    "f3cce401-78aa-49f3-9833-90e31087475b": "Tus_Pistas",
    "20b37629-e28e-4e5b-9707-08166b96c6ac": "CrearEvento",
    "3c018861-a308-4257-b1cf-ab7d4cd08a78": "Tus_Eventos",
    "4ea79635-a579-4e71-9263-1ed8829f9d6a": "Editar_Perfil",
    "6f544c14-1607-4944-b1e4-1efb02d7b34f": "Idenficarse",
    "9ce140d7-8488-44c5-83de-791f876789db": "Reg_Deportista",
    "9e2aee28-fda4-494d-8682-22532cbac45f": "ModificarEvento",
    "7a479a18-c26d-4995-bc2f-ed6c8d72ffa6": "Buscar_tus_Evento",
    "1d54a9b4-dc4b-4ec1-8a49-50ab66db288f": "Pistas",
    "4ff2f8ce-4eaa-4a6c-84f0-0568fe623413": "Eventos",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "7645ace9-c25d-415f-8db3-f1da40196a30": "Perfil_gestor",
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