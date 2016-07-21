import template from './footer.html'
import styles from './footer.mod.scss'


console.log(styles);

class controller {
    /** @ngInject */
    constructor() {
        this.styles = styles;
    }
}

export const footer = {
    template,
    controller
};
