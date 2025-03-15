import { accountSchema, personalFormSchema } from "@/schema/validation";

function splitByFirstSpace(str) {
  const index = str.indexOf(" "); //find index of first space
  if (index === -1) return [str, ""]; //if not exsit space in str do this
  return [str.slice(0, index), str.slice(index + 1)];
}
const shortenTransactionId = (uuid) => {
  const numericId = uuid.replace(/\D/g, "");
  const shortId = numericId.slice(-9);
  return shortId;
};

const p2eFormat = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
const e2pFormat = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
export { splitByFirstSpace, shortenTransactionId, p2eFormat,e2pFormat };
