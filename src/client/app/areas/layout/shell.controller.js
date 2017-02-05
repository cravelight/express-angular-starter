(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger', 'routerHelper'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger, routerHelper) {
    var vm = this;

    vm.states = routerHelper.getStates();
    vm.brandContent = '<i class="fa fa-home"></i> BrandGoesHere';

    activate();

    function activate() {
      logger.success('Application loaded!', null);
    }

  }
})();
