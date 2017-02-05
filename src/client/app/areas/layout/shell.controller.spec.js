/* jshint -W117, -W030 */
describe('ShellController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.layout');
    bard.inject('$controller', '$q', '$rootScope', '$timeout', 'dataservice');
  });

  // TODO: Figure out how to mock state out the right way
  // ---------------------------------------------
  // This is throwing...
  //   TypeError: $state.get is not a function
  // ---------------------------------------------
  // beforeEach(function() {
  //   controller = $controller('ShellController');
  //   $rootScope.$apply();
  // });

  bard.verifyNoOutstandingHttpRequests();

  describe('Shell controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

  });
});
