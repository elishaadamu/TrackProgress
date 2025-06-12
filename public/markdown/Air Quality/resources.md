For more resources on air quality and ways DVRPC is working with its partners to combat pollution, explore DVRPC’s [Air Quality Partnership](http://www.airqualitypartnership.org/).

DVRPC’s _[Municipal Implementation Toolbox](https://www.dvrpc.org/Plan/MIT/)_ suggests the following tools for improving air quality in our region:

- [Alternative Energy Ordinance](https://www.dvrpc.org/Plan/MIT/alternativeenergyordinance)
- [Clean Energy Supply](https://www.dvrpc.org/Plan/MIT/cleanenergysupply)
- [Electric Vehicles](https://www.dvrpc.org/Plan/MIT/electricvehicles)
- [Greenhouse Gas Reduction Targets and Climate Action Plans](https://www.dvrpc.org/Plan/MIT/greenhousegasreductiontargetsandclimateactionplans)
- [Street Tree Ordinance and Management Plan](https://www.dvrpc.org/Plan/MIT/streettreeordinanceandmanagementplan)

Tracking the Congestion Management and Air Quality (CMAQ) program's performance in reducing on-road mobile source emissions is one of the National Goals set by the Federal Highway Administration’s Transportation Performance Management (TPM). DVRPC is required to either set regional targets or match state department of transportation targets for emissions reductions from mobile-source emissions. See how the region is performing: [TPM System Performance](https://www.dvrpc.org/tpm/?indicator=systemperf).

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
