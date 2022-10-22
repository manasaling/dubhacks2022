import os
import pandas as pd 
import numpy as np
import random
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pickle

df = pd.read_csv("/content/drive/MyDrive/UW_SECOND_YEAR/DubHacks 22/diabetes_012_health_indicators_BRFSS2015.csv")
useDf = df.drop(['CholCheck', 'PhysActivity', 'NoDocbcCost', 'AnyHealthcare', 'MentHlth', 'Education', 'Income'], axis = 1)

df = df.rename(columns={'Diabetes_012': 'DiabetesPrediction', 'DiffWalk': 'Walking'})

ClassModel = DecisionTreeClassifier()
features = df.loc[:, df.columns != 'DiabetesPrediction']
labels = df['DiabetesPrediction']
features_train, features_test, labels_train, labels_test = train_test_split(features, labels, test_size=0.10)
ClassModel.fit(features_train, labels_train)

array = np.array([[1.0, 1.0, 28.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 22.0, 0.0, 0.0, 0.0, 0.0]])

train_predictions = ClassModel.predict(features_train)
print(features_train)
test_predictions = ClassModel.predict(array)
print(test_predictions)

pickle.dump(ClassModel, open('model.pkl','wb'))
