from flask import Flask, request, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

df = None
DRIVE_URL = 'https://drive.google.com/file/d/1jRI6Kn16CGhAeYAlaXEeFKQ1rF1TydlO/view?usp=sharing'

@app.before_first_request
def initialize():
  global df
  df = pd.read_csv('/Users/sam/Downloads/kepler_time_series.csv')
  print(df)
  print("initializing")

@app.route('/star_types')
def star_types():
  try:
    counts = df["LABEL"].value_counts()
    star_types = {"non-exoplanet": int(counts[1]), "exoplanet": int(counts[2])}
    return star_types
  except Exception as e:
    return not_found(str(e))

@app.route('/stats')
def stats():
  try:
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
  except Exception as e:
    return not_found(str(e))

@app.route("/flux")
def scatter():
  try:
    data = {
      "flux_range": np.array(range(3197)).tolist(), 
      "non-exoplanet": df[df["LABEL"]==1].iloc[1,1:].to_list(), 
      "exoplanet": df[df["LABEL"]==2].iloc[1,1:].to_list()
    }
    return data
  except Exception as e:
    return not_found(str(e))

@app.errorhandler(404)
def not_found(exception):
  return jsonify(error=exception),404