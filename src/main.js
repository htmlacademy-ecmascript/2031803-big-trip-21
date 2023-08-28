import FilterView from './views/filter-view.js';
import InfoView from './views/info-view.js';
import {render} from './render.js';
import PointPresenter from './presenter/trip-presenter.js';

const tripFiltersElement = document.querySelector('.trip-events');
const tripEventsFiltersElement = document.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.trip-main');
const pointsPresenter = new PointPresenter({container: tripFiltersElement});

render(new InfoView(), tripMainElement, 'afterbegin');
render(new FilterView(), tripEventsFiltersElement);

pointsPresenter.init();
