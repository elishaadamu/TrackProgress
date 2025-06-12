The U.S. Environmental Protection Agency (US EPA) has developed air quality standards for six "criteria" pollutants. Of these six pollutants, the DVRPC region has a history of violating the standards for two: ground-level ozone and fine particulate matter (PM<sub>2.5</sub>). This indicator measures how well the region is achieving the _Connections 2050_ Plan goal to improve air quality.

Ozone and PM<sub>2.5</sub> have been shown to impede healthy lung development in children and exacerbate breathing disorders in the general population, especially in the elderly. Additionally, exposure to PM<sub>2.5</sub> can aggravate heart conditions. In addition to higher costs for households and the healthcare system, poor air quality has economic implications including more days of missed work and school. Air pollution has been shown to have disproportionate effects on persons of color and low-income populations.

<br>

#### Days Violating National Ambient Air Quality Standards for Ozone and/or PM<sub>2.5</sub> by Value Type

<br>

chart:{
"type": "mixed",
"file": "aq_1-yearly_fk.csv",
"xAxis": "year",
"option": false,
"bars": [
{"key": "daysViolating", "name": "Days Violating", "color": "red"}
],
"lines": [
{"key": "fiveYearAvg", "name": "Five Years Avg", "color": "green"}
]
}

<br>
<br>

#### Quarterly Unhealthy Days by Air Quality Index Level

<br>
<br>

chart:{
"type": "stacked",
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
