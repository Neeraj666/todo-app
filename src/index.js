import React from "react-dom/client";
import Main from './Main';

import reducer from "./Reducer/Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

const root = React.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><Main /></Provider>);