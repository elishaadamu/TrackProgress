The DVRPC region currently does not meet federal air quality standards for ground-level ozone and until recently did not meet the standards for PM<sub>2.5</sub>. In order to maintain and improve air quality in the region, the Clean Air Act requires that DVRPC demonstrate that transportation projects included in the Long-Range Plan and Transportation Improvement Programs will not worsen air quality or cause future violations of the air quality standards.

In order to convey the health impacts of air pollution to the general public, the US EPA has created a color-coded scale to identify pollutant levels in simple terms. This scale is referred to as the Air Quality Index (AQI). AQI levels are directly related to the federal air quality standards and pollutant concentrations in the air. The AQI reports pollutant levels for six different categories based on AQI: Good or green (0 to 50), Moderate or yellow (51 to 100), Unhealthy for Sensitive Groups or orange (101 to 150), Unhealthy or red (151 to 200), Very Unhealthy or purple (201 to 300), and Hazardous (301 to 500). Note that no day in 2000 or subsequent years has qualified as hazardous, so it is not present in the charts. Sensitive groups are defined as children, older adults, and those with breathing impairments. When the AQI reaches Code Orange or higher for any of the pollutants, an air quality standard violation has occurred.

Air quality standards have been revised a number of times since 1997, and the data in these charts is normalized to the current standard. The first chart shows the number of days violating air quality standards per year since 2000, along with a five-year rolling average, based on the Philadelphia-Camden-Wilmington core-based statistical area. The second chart shows the number of days per year in each violating category (Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, and Hazardous) for both Ozone and PM<sub>2.5</sub>.

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
