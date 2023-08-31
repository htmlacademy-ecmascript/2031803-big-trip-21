import {render} from '../render.js';
import EditView from '../views/edit-view.js';
import EventListView from '../views/event-list-view.js';
import PointView from '../views/point-view.js';
import SortView from '../views/sort-view.js';

export default class TripPresenter {
  eventListView = new EventListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(this.eventListView, this.container);
    render(new EditView(), this.eventListView.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventListView.getElement());
    }
  }
}
