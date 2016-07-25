import template from './tech.html'
import styles from './styles.mcss'

class Controller {

  constructor() {
    // css modules
    this.styles = styles;
  }
}

export const tech = {
  template,
  bindings: {
    tech: '<'
  },
  controller: Controller
};
