import template from './navbar.html'
import styles from './styles.mcss'

class controller {
    /** @ngInject */
    constructor() {
        this.styles = styles;
    }
}

export default {
    template,
    controller
};
