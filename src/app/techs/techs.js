import template from './techs.html'
import styles from './styles.mcss'

console.log(styles);

class TechsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });

    // css modules
    this.styles = styles;
  }
}

export const techs = {
  template,
  controller: TechsController
};
