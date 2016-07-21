import template from './footer.html'
import styles from './footer.mcss'


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
