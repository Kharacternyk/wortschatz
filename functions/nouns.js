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

  const readRecords = await Promise.all(readPromises);

  return new Response(readRecords.join("\n"));
};
