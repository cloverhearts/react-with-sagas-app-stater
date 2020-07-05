import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation, useParams, useRouteMatch, useHistory } from "react-router-dom";
import StoreWithSaga from "../../store";

function PlatformProvider(props) {
  const { children } = props;
  const store = StoreWithSaga({
    router: {
      history: useHistory(),
      params: useParams(),
      location: useLocation(),
      routerMatch: useRouteMatch()
    }
  });

  return <Provider store={store}>{children}</Provider>;
}

export default props => {
  const { children } = props;
  return (
    <BrowserRouter>
      <PlatformProvider>{children}</PlatformProvider>
    </BrowserRouter>
  );
};
