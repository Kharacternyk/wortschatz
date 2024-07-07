import fileinput
import json

print("[")

for index, line in enumerate(fileinput.input()):
    if index:
        print(",", end="")
    print(json.dumps(dict(key=str(index), value=line.strip())))

print("]")
