/**
 * Monitor interaction with the orders section
 */
angular.module('orderApp').controller('ordersController', function ($scope, ordersModel, orderModel) {


	// Populate our view with the model data.
	$scope.orders = ordersModel.getOrders();
	$scope.colors = ordersModel.getColorTypes();
	$scope.sizes = ordersModel.getSizeTypes();

	/**
	 * Create order form is visible when the users starts the create process.
 	 * @type {boolean}
     */
	$scope.showCreateOrder = false;

	/**
	 * The details need to be set to visible if we succefully name a new order.
	 * @type {boolean}
     */
	$scope.showCreateOrderDetails = false;

	/**
	 * Store the order currently being edited.
	 * @type {{}}
	 */
	$scope.editingOrder = {};

	/**
	 * Show the create orders form.
	 */
	$scope.startOrderCreate = function(){
		$scope.showCreateOrder = true;
		$scope.editingOrder = orderModel.generateOrder();
	};

	/**
	 * Show the create orders form.
	 */
	$scope.createOrder = function(){
		if(ordersModel.addOrder($scope.editingOrder)){
			$scope.showCreateOrderDetails = true;
		}
	};

	/**
	 * User has finished the order creation process.
	 */
	$scope.orderCreateDone = function(){
		$scope.showCreateOrderDetails = false;
		$scope.showCreateOrder = false;
	};

});
