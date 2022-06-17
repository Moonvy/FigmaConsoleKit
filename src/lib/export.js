import { downloadZip } from "client-zip";

/**
 * 下载文件
 * @param {[name:string, input: Unit8Array]} files
 */
export async function download(files, zipName) {
  const blob = await downloadZip(files).blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = zipName ?? "donwload.zip";
  link.click();
  link.remove();
}
