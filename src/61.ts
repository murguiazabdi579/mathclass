import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Generate random data
np.random.seed(42)
data = np.random.rand(100, 5)

# Create a DataFrame for the dataset
df_data = pd.DataFrame(data, columns=['A', 'B', 'C', 'D', 'E'])

# Define the linear regression model
model = LinearRegression()

# Fit the model to the data
model.fit(df_data[['A']], df_data[['E']])

# Make predictions using the model
predictions = model.predict(df_data[['A']])
