There were 25 days violating National Ambient Air Quality Standards in 2023, with a higher severity thanks largely to smoke from Canadian wildfires during the summer. This increased the five-year average of days with poor air quality from 13 per year from 2018 to 2022 to 14 from 2019 to 2023. This is the first time this value has increased since 2003, which can be seen in the first chart. The 2019–2023 five-year average had 60 fewer days per year that violated standards than did the 1998–2002 five-year average—the peak of the period shown.

The second chart shows that concentrations of both pollutants increased slightly in 2023, after having decreased in severity for about a decade prior. Ozone violations are more common than PM<sub>2.5</sub>, thanks to advances made to reduce PM<sub>2.5</sub> levels through power plant and diesel-powered engine regulations. Ozone is particularly seasonal—with violations occurring primarily in the second and third quarters of the year, due to higher levels of heat and sunlight in those periods. The last Very Unhealthy day for ozone occurred in 2008. 2023 was the first year with a PM<sub>2.5</sub> violation since 2008, and it was the first year since 2019 with at least one code red Unhealthy day.

Federal standards have had a dramatic effect in reducing emissions and unhealthy air quality days over the past few decades. Public health has benefitted from greater awareness of pollutants and ways to lessen their impact. However, climate change may counter the progress the nation has made in improving air quality, as higher temperatures increase the potential for forming ground-level ozone and wildfires risk increased PM<sub>2.5</sub> emissions, which is likely to result in more days that violate national standards.

# Air Quality Trends

Here's our air quality data:

# Trends Over Time

<d3chart 
  type="bar" 
  data='{
    "data": [
      {"label": "2006", "value": 12025.6},
      {"label": "2007", "value": 11574.9},
      {"label": "2008", "value": 33445.9},
      {"label": "2009", "value": 24681.6},
      {"label": "2010", "value": 18434.0},
      {"label": "2011", "value": 6569.6},
      {"label": "2012", "value": 31965.2},
      {"label": "2013", "value": 28205.9},
      {"label": "2014", "value": 26710.4},
      {"label": "2015", "value": 25393.3},
      {"label": "2016", "value": 15292.7},
      {"label": "2017", "value": 22511.6},
      {"label": "2018", "value": 9889.1},
      {"label": "2019", "value": 17155.3},
      {"label": "2020", "value": 36571.4},
      {"label": "2021", "value": 16535.3},
      {"label": "2022", "value": 16258.7}
    ]
  }'
/>

# Bridge and Deck Area Trends

## Deck Area by Ownership Type

<d3chart 
  type="stackedBar" 
  data='{
    "data": [
      {
        "year": "2000",
        "values": [
          {"name": "State", "value": 4458.6},
          {"name": "Local", "value": 863.6},
          {"name": "Other", "value": 852.3}
        ],
        "total": 6174.5
      }
    ],
    "colors": ["#4f46e5", "#06b6d4", "#14b8a6"]
  }'
/>

## Bridge Count by Ownership

<d3chart 
  type="multiLine" 
  data='{
    "data": [
      {
        "name": "State",
        "values": [
          {"year": "2000", "value": 381},
          {"year": "2010", "value": 490},
          {"year": "2020", "value": 307},
          {"year": "2023", "value": 267}
        ]
      },
      {
        "name": "Local",
        "values": [
          {"year": "2000", "value": 261},
          {"year": "2010", "value": 355},
          {"year": "2020", "value": 280},
          {"year": "2023", "value": 243}
        ]
      },
      {
        "name": "Other",
        "values": [
          {"year": "2000", "value": 63},
          {"year": "2010", "value": 54},
          {"year": "2020", "value": 31},
          {"year": "2023", "value": 28}
        ]
      }
    ],
    "colors": ["#4f46e5", "#06b6d4", "#14b8a6"]
  }'
/>
