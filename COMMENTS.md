<!-- Project Comments Go Here -->

## Setup

- Installed axios as an additional dependancy to send http requests to the backend (API) (fetch data).
- The API endpoint has been rigorously tested using Postman (integration testing) prior to consuming it in the frontend.

## Unit Testing Using Vitest

- Implemented a very simple and basic unit testing due to time constraints of the task. This could be extended to include a more comprehensive testing (mocking the data etc.).

## Main Logic

- Most of the new code and new logic is concentrated in the two components: `Applications.tsx` and `SingleApplication.tsx`
- `Applications.tsx` component includes all the data fetching and rendering
- `SingleApplication.tsx` is complemented with some functions to format the raw data strings and present in the required format

## Responsive Design

- Basic responsive design was implemented using media queries for different screen sizes.

## Other Notes & Comments

- The API URL is directly included in the component for simplicity. However, it's best practice is to store such URLs in environment variables (.env file for instance), and this would be done in a production environment.

## Opportunities for Improvement

- If this project grows, state management tool such as Redux / Redux-Toolkit could be beneficial.
