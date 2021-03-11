from flask import Flask

app = Flask(__name__)

message = "TODO"


@app.route("/mic", methods=['GET'])
def api():
    return {
        'id': 1,
        'message': message
    }


@app.route("/tonnymontana", methods=['GET'])
def api1():
    return {
        'id': 1,
        'message': "aaaaaaaa"
    }


@app.route("/predict", methods=['POST'])
def predict(str):
    return {
        'text': str
    }
