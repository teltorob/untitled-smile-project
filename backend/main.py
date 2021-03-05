from fastapi import FastAPI, Form


import json
from random import randint

app = FastAPI()

databasePath = r'I:\untitled-smile-project\backend\compliments.json'


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/getCompliment")
async def getCompliment():
    with open(databasePath) as file:
        data = json.load(file)["compliments"]
        datalen = len(data)
        randomCompliment = data[randint(0, (datalen-1))]

    return {"compliment": randomCompliment}


@app.post("/addCompliment")
async def addCompliment(compliment: str = Form(...)):
    # function to add to JSON
    def write_json(data, filename=databasePath):
        with open(filename, 'w') as f:
            json.dump(data, f, indent=4)

    with open(databasePath) as json_file:
        data = json.load(json_file)

        temp = data['compliments']
        temp.append(compliment)

    write_json(data)

    return {"success": "ok", "compliment": compliment}
