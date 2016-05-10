/**
 * Our orders object.
 */

angular.module('orderApp').service('ordersModel', function (orderModel) {
    // Use self to get round any this scoping issues
    var self = this;

    /**
     * List our available values.
     * @type {{color: string[], size: string[]}}
     */
    var values = {
        color : ['white','red','green'],
        size : ['small','medium','large']
    };

    /**
     * Some mock data to get us started.
     * @type {*[]}
     */
    var mockOrders = [
        orderModel.generateOrder({
            color: 'white',
            size: 'large',
            quantity: 1,
            customer: "evans"
        }),
        orderModel.generateOrder({
            color: 'red',
            size: 'small',
            quantity: 12,
            customer: "clark"
        })
    ];

    // Our list of orders.
    var orders = mockOrders;

    /**
     * Get the current list of orders.
     * @returns {*[]}
     */
    self.getOrders = function () {
        return orders;
    };

    /**
     * Add an order to our list.
     * @param order
     */
    self.addOrder = function (order) {
        var sameName = orders.filter(function(item){
            return (item.customer === order.customer);
        });
        if(sameName.length>0){
            alert("Choose a different name");
            return false;
        }else{
            orders.push(order);
            return true;
        }
    };

    /**
     * Get the current list of orders.
     * @returns {*[]}
     */
    self.getColorTypes = function () {
        return values.color;
    };

    /**
     * Get the current list of orders.
     * @returns {*[]}
     */
    self.getSizeTypes = function () {
        return values.size;
    };


});
