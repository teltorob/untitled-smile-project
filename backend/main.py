from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

import os
import json
from random import randint

app = FastAPI()

origins = ["*", "http://localhost:8080/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#
BASE_PATH = os.getcwd()
databasePath = os.path.join(BASE_PATH, 'compliments.json')


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
