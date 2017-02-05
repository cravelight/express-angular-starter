(function () {
  "use strict";

  var module = angular.module("app.components");

  // function controller($http) {
  function controller() {

    /*jshint validthis: true */
    var vm = this;

    // Handle component lifecycle events
    vm.$onInit = function () {
      /**
       * Called on each controller after all the controllers on an element have been constructed
       * and had their bindings initialized (and before the pre & post linking functions for the
       * directives on this element). This is a good place to put initialization code for your
       * controller.
       */
    };

    vm.$onChanges = function (changesObj) {
      /**
       * Called whenever one-way bindings are updated. The changesObj is a hash whose keys are
       * the names of the bound properties that have changed, and the values are an object of the
       * form { currentValue, previousValue, isFirstChange() }. Use this hook to trigger updates
       * within a component such as cloning the bound value to prevent accidental mutation of the
       * outer value.
       */
    };

    vm.$doCheck = function () {
      /**
       * Called on each turn of the digest cycle. Provides an opportunity to detect and act on changes.
       * Any actions that you wish to take in response to the changes that you detect must be invoked
       * from this hook; implementing this has no effect on when $onChanges is called. For example, this
       * hook could be useful if you wish to perform a deep equality check, or to check a Date object,
       * changes to which would not be detected by Angular's change detector and thus not trigger $onChanges.
       * This hook is invoked with no arguments; if detecting changes, you must store the previous value(s)
       * for comparison to the current values.
       */
    };

    vm.$onDestroy = function () {
      /**
       * Called on a controller when its containing scope is destroyed. Use this hook for
       * releasing external resources, watches and event handlers.
       */
    };

    vm.$postLink = function () {
      /**
       * Called after this controller's element and its children have been linked. Similar to the post-link
       * function this hook can be used to set up DOM event handlers and do direct DOM manipulation. Note
       * that child elements that contain templateUrl directives will not have been compiled and linked since
       * they are waiting for their template to load asynchronously and their own compilation and linking has
       * been suspended until that occurs. This hook can be considered analogous to the ngAfterViewInit and
       * ngAfterContentInit hooks in Angular 2. Since the compilation process is rather different in Angular 1
       * there is no direct mapping and care should be taken when upgrading.
       */
    };

  }

  module.component("navbar", {
    bindings: {
      brandContent: "<",
      states: "<"
    },
    controllerAs: "vm",
    controller: [controller], // list of DI items with controller method as the last item
    // controller: ["$http", controller], // list of DI items with controller method as the last item
    templateUrl: "app/components/navbar/navbar.component.html"
  });

}());
