const jisx0401 = require("./lib/jisx0401.json");

const resolve = function(code) {
  if (typeof code === "number") return resolve(code.toString());
  if (typeof code !== "string") return undefined;
  if (code.length === 1) return resolve("0" + code);
  return jisx0401[code];
};

const find = function(name) {
  if (!name) return undefined;
  const lc = name.toLowerCase();
  return Object.keys(jisx0401).find((code) => {
    const values = Object.values(jisx0401[code]).map((a) => a.toLowerCase());
    return values.indexOf(lc) !== -1;
  });
};

module.exports = {
  resolve: resolve,
  find: find
};
