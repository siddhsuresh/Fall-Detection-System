import time
import joblib
import sys

sys.modules["sklearn.externals.joblib"] = joblib

model = joblib.load("./fall_detector.joblib")

import sys

if __name__ == "__main__":
    # take the 7 argued values from the command line
    args = sys.argv[1:]
    # convert them to floats
    args = [float(arg) for arg in args]
    # reshape the list to a 2D array
    args = [args]
    # get the model's prediction
    prediction = model.predict(args)
    # print the prediction
    print(prediction[0])

    
