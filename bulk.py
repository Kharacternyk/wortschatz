import fileinput
import json

print("[")

for index, line in enumerate(fileinput.input()):
    englishNoun, fullGermanNoun, _ = line.split("\t", maxsplit=2)
    germanArticle, germanNoun = fullGermanNoun.split(" ", maxsplit=1)

    print(
        json.dumps(
            dict(
                key=str(index),
                value="\t".join(
                    [englishNoun.lower(), germanArticle.lower(), germanNoun]
                ),
            )
        ),
        ",",
        sep="",
    )

print(f'{{"key": "length", "value": "{index + 1}"}}]')
