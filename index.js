const deExcel = require('./js/excel-processing.js');

console.log(deExcel);

const files = [
  {
    fileDir: "./datos/Publiciencia/",
    fileName: "Lista_instituciones",
    fileExtension: ".xlsx",
    targetDir: "./datos/Finales/Instituciones/"
  },
  {
    fileDir: "./datos/Stata/Finales/",
    fileName: "consolidada",
    fileExtension: ".xlsx",
    targetDir: "./datos/Finales/Países/"
  },
  {
    fileDir: "./datos/Stata/Finales/",
    fileName: "ciudades",
    fileExtension: ".xlsx",
    targetDir: "./datos/Finales/Ciudades/"
  }
];

files.forEach((file, i) => {
  deExcel(file);
});
