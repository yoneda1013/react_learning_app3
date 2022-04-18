import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../compornents/pages/Top";
import { Users } from "../compornents/pages/Users";
import { DefaultLayout } from "../compornents/templates/DefaultLayout";
import { HeaderOnly } from "../compornents/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
