import { useState } from "react";

export function readFile(file: File) {
  const img = file;
  const regex = /(\/jpg|\/jpeg|\/png)$/i;
  if (typeof file === "string") return;
  if (img.size > 500000) {
    alert("File size exceeded 500kb, consider optimizing your image");
    return;
  } else if (!regex.exec(img.type)) {
    alert("File type must be JPEG, PNG or WEBP");
    return;
  } else {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => resolve(String(reader.result)),
        false
      );
      reader.readAsDataURL(file);
    });
  }
}
