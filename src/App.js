import './App.css';
import React, {Component, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Content/common/Preloader/Preloader";
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import {toggleInitializationThunkCreator} from "./redux/reducers/app-reducer";
import store from "./redux/redux-store";

const
    LoginContainer = React.lazy(() => import('./components/Content/Login/LoginContainer')),
    UsersContainer = React.lazy(() => import('./components/Content/Users/UsersContainer')),
    MessagesContainer = React.lazy(() => import('./components/Content/Messages/MessagesContainer')),
    News = React.lazy(() => import('./components/Content/News/News')),
    Settings = React.lazy(() => import('./components/Content/Settings/Settings')),
    Music = React.lazy(() => import('./components/Content/Music/Music'));

class App extends Component {
    componentDidMount() {
        this.props.toggleInitializationThunkCreator();
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <HeaderContainer/>
                    <div className='app_wrapper'>
                        <NavbarContainer store={this.props.store}/>
                        <Suspense fallback={<Preloader/>}>
                            <div className='app_wrapper_content'>
                                {!this.props.isInitialized
                                    ? <Preloader/>
                                    : <Routes>
                                        <Route path='/' element={<ProfileContainer/>}/>
                                        <Route path="/profile" element={<ProfileContainer/>}>
                                            <Route path=":userId" element={<ProfileContainer/>}/>
                                        </Route>
                                        <Route path='/messages/*' element={<MessagesContainer/>}/>
                                        <Route path='/news/*' element={<News/>}/>
                                        <Route path='/music/*' element={<Music/>}/>
                                        <Route path='/users/*' element={<UsersContainer/>}/>
                                        <Route path='/settings/*' element={<Settings/>}/>
                                        <Route path='/login/*' element={<LoginContainer/>}/>
                                    </Routes>}
                            </div>
                        </Suspense>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

const
    mapStateToProps = (state) => {
        return {
            isInitialized: state.app.isInitialized,
        }
    },
    mapDispatchToProps = {
        toggleInitializationThunkCreator
    };

export default connect(mapStateToProps, mapDispatchToProps)(App);
