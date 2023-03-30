import time
import joblib
import sys
import json

sys.modules["sklearn.externals.joblib"] = joblib

def load_model():
    return joblib.load("./fall_detector.joblib")

def predict_model(args):
    model = load_model()
    return model.predict([args])[0]

if __name__ == "__main__":
    args = [float(x) for x in sys.stdin.read().split()]
    result = predict_model(args)
    json = json.dumps({"result": result}).encode("ascii")
    sys.stdout.buffer.write(json)


