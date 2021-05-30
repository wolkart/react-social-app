import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {rerenderTree} from "./render";

rerenderTree(state)

reportWebVitals();
