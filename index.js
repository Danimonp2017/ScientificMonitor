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

  let fileContent = JSON.stringify(objs, null, 2),
      sample = JSON.stringify(objs.slice(0,20), null, 2);
  let filepath = "./datos/procesados/";
  let file = "Lista_instituciones.json",
      sampleFile="sample.json";
  let encoding = "utf8";

  fs.writeFile(filepath + file, fileContent, encoding, (err) => {
    if (err) throw err;

    console.log("File successfully saved!");
  });
  fs.writeFile(filepath + sampleFile, sample, encoding, (err) => {
    if (err) throw err;

    console.log("Sample successfully saved!");
  });
};

let targetFile = "./datos/procesados/Lista_instituciones.json";

deExcel("./datos/Lista_instituciones.xlsx", targetFile, opts, callback);
