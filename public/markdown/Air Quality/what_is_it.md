The DVRPC region currently does not meet federal air quality standards for ground-level ozone and until recently did not meet the standards for PM<sub>2.5</sub>. In order to maintain and improve air quality in the region, the Clean Air Act requires that DVRPC demonstrate that transportation projects included in the Long-Range Plan and Transportation Improvement Programs will not worsen air quality or cause future violations of the air quality standards.

In order to convey the health impacts of air pollution to the general public, the US EPA has created a color-coded scale to identify pollutant levels in simple terms. This scale is referred to as the Air Quality Index (AQI). AQI levels are directly related to the federal air quality standards and pollutant concentrations in the air. The AQI reports pollutant levels for six different categories based on AQI: Good or green (0 to 50), Moderate or yellow (51 to 100), Unhealthy for Sensitive Groups or orange (101 to 150), Unhealthy or red (151 to 200), Very Unhealthy or purple (201 to 300), and Hazardous (301 to 500). Note that no day in 2000 or subsequent years has qualified as hazardous, so it is not present in the charts. Sensitive groups are defined as children, older adults, and those with breathing impairments. When the AQI reaches Code Orange or higher for any of the pollutants, an air quality standard violation has occurred.

Air quality standards have been revised a number of times since 1997, and the data in these charts is normalized to the current standard. The first chart shows the number of days violating air quality standards per year since 2000, along with a five-year rolling average, based on the Philadelphia-Camden-Wilmington core-based statistical area. The second chart shows the number of days per year in each violating category (Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, and Hazardous) for both Ozone and PM<sub>2.5</sub>.

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
