import template from './app.html'
import styles from './style.mcss'

class controller {
    /** @ngInject */
    constructor() {
        this.styles = styles;
    }
}

export const app = {
    template,
    controller
};
