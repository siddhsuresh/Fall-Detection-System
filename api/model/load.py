import time
import joblib
import sys

sys.modules['sklearn.externals.joblib'] = joblib

model = joblib.load("./fall_detector.joblib")

if __name__ == "__main__":
    test = [[1.15041235, 0.94879958, 5.50766259, 1.39958032, 1.02742593,
       2.95343321, 2.19231136, 1.71787736]]
    time_start = time.time()
    predictions = model.predict(test)
    time_end = time.time()
    print("Time taken to predict: " + str(time_end - time_start) + " seconds")
    print(predictions)