const excelAsJSON = require('excel-as-json').processFile,
      fs = require('fs');

let deExcel = (file) => {

  let opts = {
    omitEmptyFields: false
  };

  let obj=file;

  let callback = (err, data) => {
    if (err) throw err;

    console.log("Raw file successfully saved!");

    console.log(obj);

    let objs = require("." + file.targetDir + file.fileName + ".json");

    objs.forEach((i) => {
      if (i['teléfono'] !== undefined) i['teléfono'] = String(i['teléfono']);
    });

    let fileContent = JSON.stringify(objs, null, 2),
        sample = JSON.stringify(objs.slice(0,5), null, 2);
    let filepath = file.targetDir;
    let fileName = file.fileName + ".json",
        sampleFile=file.fileName + "_sample.json";
    let encoding = "utf8";

    fs.writeFile(filepath + fileName, fileContent, encoding, (err) => {
      if (err) throw err;

      console.log("Processed file successfully saved!");
    });
    fs.writeFile(filepath + sampleFile, sample, encoding, (err) => {
      if (err) throw err;

      console.log("Sample successfully saved!");
    });
  };

  excelAsJSON(file.fileDir + file.fileName + file.fileExtension, file.targetDir + file.fileName + ".json", opts, callback);
};

module.exports = deExcel

// files = [
//   {
//     fileDir: "./datos/Publiciencia/",
//     fileName: "Lista_instituciones",
//     fileExtension: ".xlsx",
//     targetDir: "./datos/Finales/"
//   }
// ]
