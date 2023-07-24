import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export function generateWordDocument() {
  //instance
  let doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new Header("Hello World")],
          }),
        ],
      },
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun("Hello World")],
          }),
        ],
      },
    ],
  });

  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  Packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimeType);
    saveAs(docblob, "testDoc.docx");
  });
}
