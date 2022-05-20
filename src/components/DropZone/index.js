import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Thumbnail } from "../DropZone/Thumbnail.js";
import { ThumbContainer } from "../DropZone/ThumbContainer.js";
import { ThumbInner } from "../DropZone/ThumbInner.js";

export default function DropZone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Thumbnail key={file.name}>
      <ThumbInner>
        <img
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="file"
        />
      </ThumbInner>
    </Thumbnail>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <ThumbContainer>{thumbs}</ThumbContainer>
    </section>
  );
}
