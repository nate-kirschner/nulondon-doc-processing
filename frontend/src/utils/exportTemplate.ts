import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

export function generateWordDocument() {
  let doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "Assessment Details",
            heading: HeadingLevel.HEADING_2,
            spacing: { after: 200 },
            style: "",
          }),
          new Paragraph({
            text: "text text text ...",
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
