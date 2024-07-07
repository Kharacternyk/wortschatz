export const onRequestGet = async (context) => {
  const writeRecords = [
    "Time	Die Zeit	Die Zeiten",
    "Man	Der Mann	Die Männer",
    "Hand	Die Hand	Die Hände",
    "Day	Der Tag	Die Tage",
    "Way	Der Weg	Die Wege",
  ];
  const writePromises = [context.env.nouns.put("length", writeRecords.length)];
  for (let index = 0; index < writeRecords.length; ++index) {
    writePromises.push(context.env.nouns.put(index, writeRecords[index]));
  }

  await Promise.all(writePromises);

  const length = await context.env.nouns.get("length", {
    cacheTtl: 3600,
  });
  const readPromises = [];
  const keys = [];

  for (let index = 0; index < 3; ++index) {
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

  const readRecords = await Promise.all(readPromises);

  return new Response(readRecords.join("\n"));
};
