import { createStore } from "redux";

import { combined } from "../store/reducers/index";

export const store = createStore(combined);
