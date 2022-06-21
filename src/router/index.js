import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from '../views/home/home';
import user from '../views/user/user'
import cart from '../views/cart/cart'
import Conbottom from '../views/tabbar/conbottom.jsx';
import orderEdit from '../views/cart/orderEdit/orderEdit.tsx';
const RouteInit = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} ></Route>
                <Route exact path="/user" component={user} ></Route>
                <Route exact path="/cart" component={cart} ></Route>
                <Route exact path="/orderedit" component={orderEdit} ></Route>

                <Redirect exact from="/" to="home"></Redirect>
            </Switch>
            <Conbottom></Conbottom>
        </BrowserRouter>

    );
};
export default RouteInit;
