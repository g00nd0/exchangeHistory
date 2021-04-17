# Current-See

Forex checking app, using Create-react-app, ExpressJS, and CurrencyScoop API

## Application Structure

Application is separated into two folders, **client** and **server**, for better organization.

1. Client App (React, Create-React-App)

- Main source code is located in **src/** directory. **App.js** resides in the root of this folder.
- Components are located in the **component/** folder, and are organized into three subfolders:
  i) **CurrencyView**
  ii) **NavBar**
  iii) **SearchBar**
- **CurrencyView** has been further compartmentalized as:
  i) In the root of **CurrencyView/**, the main component and its test file reside here. CurrencyView.js renders all the available currencies on the frontend, allows users to click on the desired **CurrencyCard**
  ii) **CurrencyCard** is rendered in CurrencyView, and displays basic information on each currency, including its currency code, full name and latest rates.
  iii) **ViewOne** shows relevant currency info for the requested forex, with its rates based on the base currency specified by the user. The user can also select the number of days to view historical currency rates, up to 7 days.
  iv) **Pagination** was attempted, but due to the amount of time available and complexity, opted not to include in the main application, but can be revisited as a new feature.
- **Navbar** Contains the main link to the home page, meaning the CurrencyView page, as well as gives users the option to change the base currency. This persists across the CurrencyView page and the CurrencyViewOne component
- **SearchBar** is the component used to specify the base currency, residing in the Navbar allows the user to switch base currencies on the fly

2. Server App (ExpressJS)

- **CurrencyController** router contains the API endpoints. The endpoints use API calls specified in the CurrencyScoop API documentation
- A .env file is used to hold the API key required to used CurrencyScoop's API
- Axios is used as the middleware to make the API calls. As some the Axios calls require multiple concurrent API calls to the CurrencyScoop API, axios.all() and axios.spread() is used for all CurrencyController endpoints for the app.
- Further info on CurrencyController endpoints can be found below, under **API Endpoints**

## Remarks

1. Would have liked to add some form of pagination for the CurrencyView component, but due to time and complexity, this was left out.

2. Another alternative to looking through the large list of available currencies would have been to implement a search function for CurrencyView, perhaps allowing the user to receive filtered results based on their search.

3. Instead of scrolling down the list of base currencies to choose from, implementing a search bar/function into the drop down list would have been better.

4. Noticed from currency scoop that in some cases, historical currency rates from the last few days isn't always updated, appearing as zero.

5. Would have preferred to use the timeseries endpoint in CurrencyScoop, but that requires a subscription. This would have reduced the number of calls made for the currency rate history component.

6. Due to my limited knowledge with testing, only jest was installed for testing React components, and only tested for either the `title` of the component, or text specified in the component. However, not all tests will pass, as I did not account for some of the components rendering conditionally. This can be improved with further reading and practice with testing.

7. Attempted test-driven development initially, however, due to time constraints and my limited knowledge and practice, I proceeded with creating the application first. I understand this is pretty much the opposite of what TDD is, but my main aim was to at least have a working app.

8. I'm not well-versed with e2e testing, as such it was not implemented here. However, I am aware that Cypress is one such framework that can be used for such cases. With further reading and practice, I aim to improve my knowledge in e2e testing.

## API Endpoints

1. **GET**
   Endpoint: **"/api/forex/?baseCurr=..."**
   Gets the latest currencies, based on the specified base currency, **baseCurr**.
2. **GET**
   Endpoint: **"/api/forex/:reqCurr/"**
   Gets the specified currency, **reqCurr**, along with relevant currency info.

3. **General approach**
   Endpoint: **"/api/forex/:reqCurr/history?baseCurr=..."**
   Gets the specified currency, **reqCurr**, with its historical currency, up to 7 days prior, based on the specified base currency, **baseCurr**.

## Setup and Run App

1. Clone this Repo
   `git clone https://github.com/g00nd0/exchangeHistory.git`
2. Install dependencies for backend and frontend
   Backend: `npm install`
   Frontend: `cd client-react && npm install`
3. Create a .env for the CurrencyScoop API key in the root directory of the app
   `touch .env`
   The field for the CurrencyScoop API key and default port number should be:
   `API_KEY=(insert API key here) PORT=4000`
4. Start express server, in the app's root directory:
   `node server/server.js`
5. Start React App
   `cd client && npm start`
6. Access the app by opening your brower and go to URL `localhost:3000`
