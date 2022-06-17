import { downloadZip } from "client-zip";

/**
 * 下载文件
 * @param {[name:string, data: Unit8Array]} files
 */
export async function download(files, zipName) {
  const intro = files.map((file) => ({ file: file.name, data: file.data }));
  const blob = await downloadZip(intro).blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = zipName ?? "donwload.zip";
  link.click();
  link.remove();
}
