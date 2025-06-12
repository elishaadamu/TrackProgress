Bridges enable mobility and commerce throughout the region. Federal transportation legislation requires state departments of transportation to use a Lowest Life Cycle Cost (LLCC) approach to maximize the life of a bridge at the lowest cost. LLCC emphasizes preservation and promotes the right treatment at the right time, while incorporating risk into the analysis. Bridges with a poor condition rating indicate maintenance needs that do not pose safety issues, as long as they are resolved in a timely manner.

This indicator reflects the _Connections 2050_ Plan goal to rebuild and modernize the region’s transportation assets in order to achieve and maintain a state-of-good repair.

# Bridge Conditions

Here's the trend of bridge conditions over time:

chart:{
"type": "line"
"file": "aq_2-quarterly_fk.csv",
"xAxis": "quarteryear",
"option": true,
"optionKey": "type",
"optionLabel": "Select Pollutant Type",
"options": [
{"value": "Ozone", "label": "Ground-level Ozone"},
{"value": "PM", "label": "Particulate Matter - PM"}
],
"bars": [
{"key": "Unhealthy Sensitive PM", "name": "Unhealthy for Sensitive Groups (PM)", "color": "#FFB74D", "type": "PM"},
{"key": "Unhealthy PM", "name": "Unhealthy", "color": "#FF9800", "type": "PM"},
{"key": "Very Unhealthy PM", "name": "Very Unhealthy", "color": "#F57C00", "type": "PM"},
{"key": "Hazardous PM", "name": "Hazardous ", "color": "#E65100", "type": "PM"},
{"key": "Unhealthy Sensitive Ozone", "name": "Unhealthy for Sensitive Groups", "color": "#81C784", "type": "Ozone"},
{"key": "Unhealthy Ozone", "name": "Unhealthy ", "color": "#4CAF50", "type": "Ozone"},
{"key": "Very Unhealthy Ozone", "name": "Very Unhealthy ", "color": "#388E3C", "type": "Ozone"},
{"key": "Hazardous Ozone", "name": "Hazardous ", "color": "#1B5E20", "type": "Ozone"}
]
}
