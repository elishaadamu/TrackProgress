There were 25 days violating National Ambient Air Quality Standards in 2023, with a higher severity thanks largely to smoke from Canadian wildfires during the summer. This increased the five-year average of days with poor air quality from 13 per year from 2018 to 2022 to 14 from 2019 to 2023. This is the first time this value has increased since 2003, which can be seen in the first chart. The 2019–2023 five-year average had 60 fewer days per year that violated standards than did the 1998–2002 five-year average—the peak of the period shown.

The second chart shows that concentrations of both pollutants increased slightly in 2023, after having decreased in severity for about a decade prior. Ozone violations are more common than PM<sub>2.5</sub>, thanks to advances made to reduce PM<sub>2.5</sub> levels through power plant and diesel-powered engine regulations. Ozone is particularly seasonal—with violations occurring primarily in the second and third quarters of the year, due to higher levels of heat and sunlight in those periods. The last Very Unhealthy day for ozone occurred in 2008. 2023 was the first year with a PM<sub>2.5</sub> violation since 2008, and it was the first year since 2019 with at least one code red Unhealthy day.

Federal standards have had a dramatic effect in reducing emissions and unhealthy air quality days over the past few decades. Public health has benefitted from greater awareness of pollutants and ways to lessen their impact. However, climate change may counter the progress the nation has made in improving air quality, as higher temperatures increase the potential for forming ground-level ozone and wildfires risk increased PM<sub>2.5</sub> emissions, which is likely to result in more days that violate national standards.

#### Days Violating National Ambient Air Quality Standards for Ozone and/or PM<sub>2.5</sub> by Value Type

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

#### Quarterly Unhealthy Days by Air Quality Index Level

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
