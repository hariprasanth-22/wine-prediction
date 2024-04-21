from django.http import HttpResponse
from django.shortcuts import render
import numpy as np
import joblib

def home(request):
    return render(request, "home.html")


    
    # Retrieve values from the request
    # Add your code to retrieve values from the request and perform prediction
    
    # Return an HTTP response


def result(request):
    # Load the machine learning model trained on the wine dataset
    classifier = joblib.load('training_model.sav')
    
    # Retrieve values from the request
    fixed_acidity = float(request.GET.get('fixed_acidity', 0))
    volatile_acidity = float(request.GET.get('volatile_acidity', 0))
    citric_acid = float(request.GET.get('citric_acid', 0))
    residual_sugar = float(request.GET.get('residual_sugar', 0))
    chlorides = float(request.GET.get('chlorides', 0))
    free_sulfur_dioxide = float(request.GET.get('free_sulfur_dioxide', 0))
    total_sulfur_dioxide = float(request.GET.get('total_sulfur_dioxide', 0))
    density = float(request.GET.get('density', 0))
    pH = float(request.GET.get('pH', 0))
    sulphates = float(request.GET.get('sulphates', 0))
    alcohol = float(request.GET.get('alcohol', 0))
    
    # Create a list of input features
    feature_list = [
        fixed_acidity,
        volatile_acidity,
        citric_acid,
        residual_sugar,
        chlorides,
        free_sulfur_dioxide,
        total_sulfur_dioxide,
        density,
        pH,
        sulphates,
        alcohol
    ]

    # Convert the input data to a numpy array and reshape it
    input_data_as_numpy_array = np.asarray(feature_list)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    # Make prediction
    prediction = classifier.predict(input_data_reshaped)
   
    
    # Render the result template with prediction and input data
    return render(request, "result.html", {'prediction': prediction, 'list': feature_list})
