import FilterView from './views/filter-view.js';
import InfoView from './views/info-view.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const tripEvents = document.querySelector('.trip-events');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripMain = document.querySelector('.trip-main');
const eventsPresenter = new TripPresenter({container: tripEvents});

render(new InfoView(), tripMain, 'afterbegin');
render(new FilterView(), tripFilters);

eventsPresenter.init();
