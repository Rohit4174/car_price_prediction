# backend/train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import joblib

# Load dataset
df = pd.read_csv("dataset/cardekho_dataset.csv")

# Basic preprocessing (adjust column names as per your dataset)
df = df.dropna()

X = df[['brand', 'model', 'age', 'km_driven', 'seller_type', 'fuel_type', 'transmission', 'condition', 'color']]
y = df['price']

categorical_features = ['brand', 'model', 'seller_type', 'fuel_type', 'transmission', 'condition', 'color']
numerical_features = ['age', 'km_driven']

# Preprocessor
preprocessor = ColumnTransformer(transformers=[
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
], remainder='passthrough')

# Model pipeline
pipeline = Pipeline([
    ('encoder', preprocessor),
    ('model', RandomForestRegressor())
])

# Train
pipeline.fit(X, y)

# Save the pipeline and sklearn version
joblib.dump((pipeline.named_steps['model'], pipeline.named_steps['encoder'], joblib.__version__), 'car_price_model.pkl')
