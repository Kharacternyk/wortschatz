export const onRequestGet = async (context) => {
  const length = Number(
    await context.env.nouns.get("length", {
      cacheTtl: 300,
    })
  );
  const readPromises = [];
  const keys = [];

  for (let index = 0; index < 4; ++index) {
    let key = Math.floor(Math.random() * (length - index));

    for (const otherKey of keys) {
      if (otherKey <= key) {
        ++key;
      }
    }

    keys.push(key);
    keys.sort();

    readPromises.push(
      context.env.nouns.get(key, {
        cacheTtl: 300,
      })
    );
  }

  const records = await Promise.all(readPromises);
  const chosenIndex = Math.floor(Math.random() * records.length);
  const chosenRecord = records[chosenIndex];
  console.log({ records, chosenRecord, chosenIndex });
  const [chosenEnglishNoun, chosenGermanArticle, ..._] =
    chosenRecord.split("\t");
  const responseFields = [chosenEnglishNoun, chosenGermanArticle, chosenIndex];

  for (const record of records) {
    responseFields.push(record.split("\t")[2]);
  }

  return new Response(responseFields.join("\t"));
};
