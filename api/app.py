from flask import Flask
import requests
import pandas as pd
import numpy as np

app = Flask(__name__)

df = None
DRIVE_URL = 'https://drive.google.com/file/d/1jRI6Kn16CGhAeYAlaXEeFKQ1rF1TydlO/view?usp=sharing'

@app.before_first_request
def initialize():
  # read csv here
  global df
  # df = pd.read_csv('/Users/sam/Downloads/kepler_time_series.csv').head(1000)
  # download_file_from_google_drive(DRIVE_URL, './kepler_data/kepler_data.csv')
  # df = pd.read_csv('./kepler_data/kepler_data.csv').head(100)
  df = pd.read_csv('/Users/sam/Downloads/kepler_time_series.csv').head(1000)
  print(df)
  print("initializing")

@app.route('/star_types')
def star_types():
  counts = df["LABEL"].value_counts()
  star_types = {"non-exoplanet": int(counts[1]), "exoplanet": int(counts[2])}
  return star_types

@app.route('/stats')
def stats():
  labels = df.LABEL
  stats_df = df.drop('LABEL', axis=1)

  return {
    "non-exoplanet": {
      "mean": stats_df[labels==1].mean().mean().round(2),
      "median": stats_df[labels==1].median(axis=1).median().round(2),
      "max_val": stats_df[labels==1].max(axis=1).max().round(2),
      "min_val": stats_df[labels==1].min(axis=1).min().round(2),
    },
    "exoplanet": {
      "mean": stats_df[labels==2].mean().mean().round(2),
      "median": stats_df[labels==2].median(axis=1).median().round(2),
      "max_val": stats_df[labels==2].max(axis=1).max().round(2),
      "min_val": stats_df[labels==2].min(axis=1).min().round(2),
    },
    "total": {
      "mean": stats_df.mean().mean().round(2),
      "median": stats_df.median(axis=1).median().round(2),
      "max_val": stats_df.max(axis=1).max().round(2),
      "min_val": stats_df.min(axis=1).max().round(2)
    }
  }

@app.route("/flux")
def scatter():
  # melted = df.melt(id_vars=['LABEL'], var_name='FLUX', value_name="LIGHT INTENSITY").head(100)
  # return {"x": np.array(range(3197)).tolist(), "y": melted["LIGHT INTENSITY"].to_json(orient='values')}
  return {
    "flux_range": np.array(range(3197)).tolist(), 
    "non-exoplanet": df[df["LABEL"]==1].iloc[1,1:].to_list(), 
    "exoplanet": df[df["LABEL"]==2].iloc[1,1:].to_list()
  }