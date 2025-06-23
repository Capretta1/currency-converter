# Currency Converter

A simple React application for converting currencies using live exchange rates from the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api).

## Features

- Convert between any two supported currencies
- Live exchange rates fetched from a public API
- Swap currencies with a single click
- Responsive and modern UI

## Demo

![Currency Converter Screenshot](screenshot.png) <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/
    InputBox.jsx
    index.js
  hooks/
    useCurrencyInfo.js
  App.jsx
  main.jsx
public/
  ...
```

## How It Works

- The app uses a custom React hook (`useCurrencyInfo`) to fetch exchange rates for the selected base currency.
- The user can enter an amount, select source and
