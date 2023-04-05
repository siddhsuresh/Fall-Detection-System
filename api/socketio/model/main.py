import pickle
import sys

# import the the model from the "finalized_model.pkl" file
model = pickle.load(open("/home/siddharth/Documents/GitHub/Fall-Detection-System/api/socketio/model/finalized_model.pkl", "rb"))
# import the the scaler from the "finalized_scaler.pkl" file
scaler = pickle.load(open("/home/siddharth/Documents/GitHub/Fall-Detection-System/api/socketio/model/finalized_scaler.pkl", "rb"))

if __name__ == "__main__":
    acc_x = sys.argv[1]
    acc_y = sys.argv[2]
    acc_z = sys.argv[3]
    features = [acc_x, acc_y, acc_z]
    # scale the features
    features = scaler.transform([features])
    # predict the label
    label = model.predict(features)
    # print the label
    print(label[0])