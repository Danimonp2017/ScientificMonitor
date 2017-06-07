const deExcel = require('excel-as-json').processFile,
      fs = require('fs');

let opts = {
  omitEmptyFields: false
};

let callback = (err, data) => {
  if (err) throw err;

  let objs = require('./datos/procesados/Lista_instituciones.json');

  objs.forEach((i) => {
    i['teléfono'] = String(i['teléfono']);
  });

  let fileContent = JSON.stringify(objs);

  let filepath = "./datos/procesados/Lista_instituciones.json";

  fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;

    console.log("File successfully saved!");
  });
};

let targetFile = "./datos/procesados/Lista_instituciones.json";

deExcel("./datos/Lista_instituciones.xlsx", targetFile, opts, callback);
