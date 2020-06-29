# Weather App
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

### Description

> This App will display the weather of your local area in a week-based display, each day will render a new page with more information and detail of the weather during that day.

<br>

### Wireframes

![Desktop, Tablet, Phone](https://wireframe.cc/wuzJut)

<br>

### MVP

> Display information requested from API onto user screen, use links to request specific information of that day to the user in a different page.

<br>

#### MVP Goals

- Display the local weather of the user
- Allow links between each day of the week
- Render a new page with more detail and information for each day

<br>

#### MVP API

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| WeatherAPI |      yes      | _https://api.met.no/weatherapi/locationforecast/2.0/documentation#/_ | _https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=50&lon=-50_ |

Sample Query Results:

```json
"data": {
                    "instant": {
                        "details": {
                            "air_pressure_at_sea_level": 1007.8,
                            "air_temperature": 23.8,
                            "cloud_area_fraction": 4.7,
                            "relative_humidity": 80.8,
                            "wind_from_direction": 257.4,
                            "wind_speed": 2.9
                        }
                    }
}

```

<br>

#### MVP Libraries & Dependencies

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Allows for user interfarce by creating UI's for users to see_ |
| React Router | _Links Components between one another_ |

<br>

#### MVP Components


```
src
|__ assets/
      |__ App
      |__ CSS
      |__ API call
      |__ Images
|__ components/
      |__ Monday.jsx
      |__ Tuesday.jsx
      |__ Wednesday.jsx
      |__ Thursday.jsx
      |__ Friday.jsx
      |__ Saturday.jsx
      |__ Sunday.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Renders components to user_ |
|    Home.js    | functional |   n   |   y   |   y   | _API request will be made here, all information will be passed down from here_ |
|  Day.js  | class |   y   |   y   |   y   | _Checks for what day the user clicked and displays its information on a separate page_ |
|     Detail.js     | functional |   y   |   y   |   y   | _Displays detailed user experience_ |
|    Images.js     | functional |   y   |   y   |   y   | _Checks for image to display on background_ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Obtain user geolocation |    H     |     4 hrs      |      TBD     |     TBD    |
| Use location to make API request      |    H     |     3 hrs      |      TBD     |    TBD     |
| Create Home component      |    M     |     3 hrs      |      TBD     |     TBD     |
| Create Detail Page component     |    H     |     3 hrs      |     TBD     |     TBD     |
| Link image as background for each weather    |    L     |     3 hrs      |     TBD     |     TBD     |
| Create Component for each day     |    H     |     5 hrs      |     TBD     |     TBD     |
| Link day component to Detail Page Component      |    M     |     3 hrs      |     TBD     |     TBD     |

| TOTAL            |          |     24 hrs      |     TBD     |     TBD     |

<br>

### Post-MVP

- Allow user to write a location and display its weather
- Add more API's to request quotes, clock, and top news.

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.