# Solution Explanation

## Overview

This document outlines the solution implemented for the task of creating a React application that visualizes data

## Technology Stack

- **Frontend Framework:** React
- **Data Visualization Library:** Google Charts

## Steps Taken

### Step 1: Create React Application

- **Setup:** Used `create-react-app` to bootstrap the project structure.
- **Folder Structure:** Organized components into separate directories for better maintainability.
- **Fetch Data:** from NASA’s API
- **API Endpoint:** Utilized the API at [https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY]
- **Data Handling:**
  - Implemented error handling for network requests.
  - Sorted the data based on average estimated diameter in descending order.
- **Display Data in a Chart:** Used Google Charts to render a non-stacked bar chart.

### Step 2: Implement Filtering Functionality

- **Dropdown Filter:**
  - Created a dropdown to allow users to select an orbital body.
  - Filtered the displayed NEOs based on the selected orbital body, updating the chart dynamically.

### Step 3: Create Table View with View Switcher

- **Table Component:** Developed a table view to display the same NEO data in a tabular format.
- **Tabs Implementation:** Utilized React-Bootstrap to create tabs for switching between chart and table
