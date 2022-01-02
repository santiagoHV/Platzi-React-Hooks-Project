import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Checkout from "../containers/Chekout";
import Home from "../containers/Home";
import Information from "../containers/Information";
import NotFound from "../containers/NotFound";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import AppContext from "../context/AppContext";
import UseInitialState from "../hooks/UseInitialState";

const App = () => {
  const initialState = UseInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/checkout/information/" component={Information} />
                <Route exact path="/checkout/payment/" component={Payment} />
                <Route exact path="/checkout/success" component={Success} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;