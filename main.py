from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def read_test():
    return {"message": "Hello from the test endpoint!"}

@app.post("/test")
def echo_test(data: dict):
    return data
