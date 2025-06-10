There were 25 days violating National Ambient Air Quality Standards in 2023, with a higher severity thanks largely to smoke from Canadian wildfires during the summer. This increased the five-year average of days with poor air quality from 13 per year from 2018 to 2022 to 14 from 2019 to 2023. This is the first time this value has increased since 2003, which can be seen in the first chart. The 2019–2023 five-year average had 60 fewer days per year that violated standards than did the 1998–2002 five-year average—the peak of the period shown.

The second chart shows that concentrations of both pollutants increased slightly in 2023, after having decreased in severity for about a decade prior. Ozone violations are more common than PM<sub>2.5</sub>, thanks to advances made to reduce PM<sub>2.5</sub> levels through power plant and diesel-powered engine regulations. Ozone is particularly seasonal—with violations occurring primarily in the second and third quarters of the year, due to higher levels of heat and sunlight in those periods. The last Very Unhealthy day for ozone occurred in 2008. 2023 was the first year with a PM<sub>2.5</sub> violation since 2008, and it was the first year since 2019 with at least one code red Unhealthy day.

Federal standards have had a dramatic effect in reducing emissions and unhealthy air quality days over the past few decades. Public health has benefitted from greater awareness of pollutants and ways to lessen their impact. However, climate change may counter the progress the nation has made in improving air quality, as higher temperatures increase the potential for forming ground-level ozone and wildfires risk increased PM<sub>2.5</sub> emissions, which is likely to result in more days that violate national standards.

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
