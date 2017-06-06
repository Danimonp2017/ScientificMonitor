const deExcel = require('excel-as-json').processFile,
      fs = require('fs');

let opts = {
  omitEmptyFields: false
},
    callback = (err, data) => {
      err ? err : null;
    };

let targetFile = "./datos/procesados/Lista_instituciones.json";

deExcel("./datos/test.xlsx", targetFile, opts, callback);

let objs = require('./datos/procesados/Lista_instituciones.json');

console.log(objs[0]);

objs.forEach((i) => {
  i['teléfono'] = String(i['teléfono']);
})
