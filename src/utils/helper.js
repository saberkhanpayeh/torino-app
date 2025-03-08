function splitByFirstSpace(str) {
  const index = str.indexOf(" "); //find index of first space
  if (index === -1) return [str, ""]; //if not exsit space in str do this
  return [str.slice(0, index), str.slice(index + 1)];
}
const shortenTransactionId = (uuid) => {
const numericId=uuid.replace(/\D/g, '');
const shortId=numericId.slice(-9);
return shortId;
};
export { splitByFirstSpace,shortenTransactionId };
