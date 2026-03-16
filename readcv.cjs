const PDFParser = require("pdf2json");
const pdfParser = new PDFParser(this, 1);
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log("=== CV TEXT BASE64 ===");
    console.log(Buffer.from(pdfParser.getRawTextContent()).toString('base64'));
});
pdfParser.loadPDF("C:\\Users\\andre\\Downloads\\CV_Andres_Barahona.pdf");
