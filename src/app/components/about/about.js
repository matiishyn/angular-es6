import template from './about.html'
import styles from './styles.mcss'

class Controller {
    /** @ngInject */
    constructor() {
        this.styles = styles;
    }
}

export default {
    template,
    controller: Controller
};
