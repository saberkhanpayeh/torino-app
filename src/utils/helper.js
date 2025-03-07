function splitByFirstSpace(str) {
  const index = str.indexOf(" "); //find index of first space
  if (index === -1) return [str, ""]; //if not exsit space in str do this
  return [str.slice(0, index), str.slice(index + 1)];
}
const shortenTransactionId = (id) => {
  const array = id.split("-");
  //we want to return a phrase in form "1c58****5k9x"
  //   console.log(array)
  return array[0].slice(0, 4).concat("****", array[array.length - 1].slice(-4));
};
export { splitByFirstSpace,shortenTransactionId };
