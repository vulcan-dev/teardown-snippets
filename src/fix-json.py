import json
import os

with open('data.json', 'r') as f:
    j = json.load(f)

new_json = {item['prefix']: item for item in j}

with open('output.json', 'w') as f:
    json.dump(new_json, f, indent=4, ensure_ascii=False)