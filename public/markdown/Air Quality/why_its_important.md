The U.S. Environmental Protection Agency (US EPA) has developed air quality standards for six "criteria" pollutants. Of these six pollutants, the DVRPC region has a history of violating the standards for two: ground-level ozone and fine particulate matter (PM<sub>2.5</sub>). This indicator measures how well the region is achieving the _Connections 2050_ Plan goal to improve air quality.

Ozone and PM<sub>2.5</sub> have been shown to impede healthy lung development in children and exacerbate breathing disorders in the general population, especially in the elderly. Additionally, exposure to PM<sub>2.5</sub> can aggravate heart conditions. In addition to higher costs for households and the healthcare system, poor air quality has economic implications including more days of missed work and school. Air pollution has been shown to have disproportionate effects on persons of color and low-income populations.

---

<br>

#### Days Violating National Ambient Air Quality Standards

<d3chart
  type="mixed"
  data='{
    "data": [
      {
        "key": "Days Violating",
        "type": "bar",
        "values": [
          {"x": "2000", "y": 62}, {"x": "2001", "y": 80}, {"x": "2002", "y": 83},
          {"x": "2003", "y": 62}, {"x": "2004", "y": 50}, {"x": "2005", "y": 62},
          {"x": "2006", "y": 59}, {"x": "2007", "y": 58}, {"x": "2008", "y": 49},
          {"x": "2009", "y": 24}, {"x": "2010", "y": 48}, {"x": "2011", "y": 31},
          {"x": "2012", "y": 43}, {"x": "2013", "y": 19}, {"x": "2014", "y": 20},
          {"x": "2015", "y": 30}, {"x": "2016", "y": 18}, {"x": "2017", "y": 21},
          {"x": "2018", "y": 19}, {"x": "2019", "y": 16}, {"x": "2020", "y": 8},
          {"x": "2021", "y": 15}, {"x": "2022", "y": 6}, {"x": "2023", "y": 25}
        ]
      },
      {
        "key": "Five Year Average",
        "type": "line",
        "values": [
          {"x": "2000", "y": 70}, {"x": "2001", "y": 71}, {"x": "2002", "y": 74},
          {"x": "2003", "y": 71}, {"x": "2004", "y": 67}, {"x": "2005", "y": 67},
          {"x": "2006", "y": 63}, {"x": "2007", "y": 58}, {"x": "2008", "y": 56},
          {"x": "2009", "y": 50}, {"x": "2010", "y": 48}, {"x": "2011", "y": 42},
          {"x": "2012", "y": 39}, {"x": "2013", "y": 33}, {"x": "2014", "y": 32},
          {"x": "2015", "y": 29}, {"x": "2016", "y": 26}, {"x": "2017", "y": 22},
          {"x": "2018", "y": 22}, {"x": "2019", "y": 21}, {"x": "2020", "y": 16},
          {"x": "2021", "y": 16}, {"x": "2022", "y": 13}, {"x": "2023", "y": 14}
        ]
      }
    ],
    "colors": ["#4f46e5", "#ef4444"]
  }'
  type="mixed"
/>

## <br>

<br>

#### Quarterly Unhealthy Days by Air Quality Index Level

<d3chart
  type="stackedBar"
  data='{
    "data": [
      {
        "key": "Unhealthy Sensitive PM",
        "values": [
          {"x": "2023 Q4", "y": 4}, {"x": "2023 Q3", "y": 2}, {"x": "2023 Q2", "y": 1}, {"x": "2023 Q1", "y": 0},
          {"x": "2022 Q4", "y": 1}, {"x": "2022 Q3", "y": 0}, {"x": "2022 Q2", "y": 0}, {"x": "2022 Q1", "y": 0}
        ]
      },
      {
        "key": "Unhealthy PM",
        "values": [
          {"x": "2023 Q4", "y": 0}, {"x": "2023 Q3", "y": 0}, {"x": "2023 Q2", "y": 3}, {"x": "2023 Q1", "y": 0},
          {"x": "2022 Q4", "y": 0}, {"x": "2022 Q3", "y": 0}, {"x": "2022 Q2", "y": 0}, {"x": "2022 Q1", "y": 0}
        ]
      },
      {
        "key": "Very Unhealthy PM",
        "values": [
          {"x": "2023 Q4", "y": 0}, {"x": "2023 Q3", "y": 0}, {"x": "2023 Q2", "y": 1}, {"x": "2023 Q1", "y": 0},
          {"x": "2022 Q4", "y": 0}, {"x": "2022 Q3", "y": 0}, {"x": "2022 Q2", "y": 0}, {"x": "2022 Q1", "y": 0}
        ]
      },
      {
        "key": "Hazardous PM",
        "values": [
          {"x": "2023 Q4", "y": 0}, {"x": "2023 Q3", "y": 0}, {"x": "2023 Q2", "y": 1}, {"x": "2023 Q1", "y": 0},
          {"x": "2022 Q4", "y": 0}, {"x": "2022 Q3", "y": 0}, {"x": "2022 Q2", "y": 0}, {"x": "2022 Q1", "y": 0}
        ]
      },
      {
        "key": "Unhealthy Sensitive Ozone",
        "values": [
          {"x": "2023 Q4", "y": 0}, {"x": "2023 Q3", "y": 8}, {"x": "2023 Q2", "y": 4}, {"x": "2023 Q1", "y": 0},
          {"x": "2022 Q4", "y": 0}, {"x": "2022 Q3", "y": 2}, {"x": "2022 Q2", "y": 3}, {"x": "2022 Q1", "y": 0}
        ]
      },
      {
        "key": "Unhealthy Ozone",
        "values": [
          {"x": "2023 Q4", "y": 0}, {"x": "2023 Q3", "y": 0}, {"x": "2023 Q2", "y": 1}, {"x": "2023 Q1", "y": 0},
          {"x": "2022 Q4", "y": 0}, {"x": "2022 Q3", "y": 0}, {"x": "2022 Q2", "y": 0}, {"x": "2022 Q1", "y": 0}
        ]
      }
    ],
    "colors": [
      "#60a5fa", "#3b82f6", "#1d4ed8", "#1e3a8a", "#34d399", "#10b981", "#047857", "#064e3b"  
    ]
  }'
  type="stackedBar"
/>
