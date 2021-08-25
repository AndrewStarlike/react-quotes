import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/layout/Layout';
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => {
  return import("./pages/NewQuote");
});

const Quote = React.lazy(() => {
  return import("./pages/Quote");
});

const Quotes = React.lazy(() => {
  return import("./pages/Quotes");
});

const NotFound = React.lazy(() => {
  return import("./pages/NotFound");
});

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quote />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
