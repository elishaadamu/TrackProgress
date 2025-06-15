A well-maintained transit system is vital to moving people around the region. When transit is not maintained, the risk of delayed or canceled rides increases and reliability decreases. As a result, passengers can be discouraged from using transit, and users are more likely to choose to drive, causing more congestion, crashes, and air pollution throughout the region. Those who do not have another option, or cannot afford one, may not be able to reach jobs, medical appointments, education programs, or other important activities. A poorly maintained transit system requires more regular, costly repairs to stay operational, and is less energy efficient. DVRPC’s _Connections 2050_ Plan sets a goal to rebuild and modernize the region’s transportation assets to achieve and maintain a state-of-good repair.

#### Total Roadways Miles by Pavement Condition

chart:{
"type": "transit",
"file": "transit_conditions_1_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Lanes Miles",
"type": "number"
},
"locations": [
{"value": "septa_bus", "name": "SEPTA Bus"}
],
"timePeriods": {
"Total": "Total",
"Percent": "Percent"
},
"defaultOption": "Total"
}

chart:{
"type": "transit",
"file": "transit_conditions_2_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Lanes Miles",
"type": "number"
},
"locations": [
{"value": "auto", "name": "Automobiles"},
{"value": "trucks", "name": "Trucks"},
{"value": "articulated", "name": "Articulated Trucks"}
],
"timePeriods": {
"Total": "Total",
"Percent": "Percent"
},
"defaultOption": "Total"
}
