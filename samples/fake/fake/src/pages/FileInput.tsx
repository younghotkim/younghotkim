import type { ChangeEvent } from "react";

export default function FileInput() {
  const fileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        console.log(`file[${i}]`, file);
      }
    }
  };

  return (
    <div>
      <p>OnChange</p>
      <div>
        <input type="file" onChange={fileInput} multiple accept="images/*" />
      </div>
    </div>
  );
}
