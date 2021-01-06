const test = require("tape");
const jisx0401 = require("../main");

const HOKKAIDO = {
  en: "Hokkaido",
  ja: "北海道",
  "ja-kana": "ホッカイドウ",
};

test("jisx0401#resolve", function (t) {
  t.deepEqual(jisx0401.resolve("01"), HOKKAIDO, "半角数字二文字");
  t.deepEqual(jisx0401.resolve("1"), HOKKAIDO, "半角数字一文字");
  t.deepEqual(jisx0401.resolve(1), HOKKAIDO, "半角数字");
  t.ok(
    jisx0401.resolve("00") === undefined,
    "存在しないコードの場合は undefined を返す"
  );
  t.ok(
    jisx0401.resolve() === undefined,
    "引数が与えられない場合は undefined を返す"
  );
  t.end();
});

test("jisx0401#find", function (t) {
  t.equal(jisx0401.find("北海道"), "01", "漢字");
  t.equal(jisx0401.find("ホッカイドウ"), "01", "カタカナ");
  t.equal(jisx0401.find("Hokkaido"), "01", "ローマ字");
  t.equal(jisx0401.find("HOKKAIDO"), "01", "ローマ字(Uppercase)");
  t.equal(jisx0401.find("hokkaido"), "01", "ローマ字(Lowercase)");
  t.ok(
    jisx0401.find("ワシントン") === undefined,
    "存在しない名称の場合は undefined を返す"
  );
  t.ok(
    jisx0401.find() === undefined,
    "引数が与えられない場合は undefined を返す"
  );
  t.end();
});
