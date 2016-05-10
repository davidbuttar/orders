/**
 * Order object factory.
 */

angular.module('orderApp').service('orderModel', function () {
    // Use self to get round any this scoping issues
    var self = this;

    /**
     * Generate a new order for a given spec.
     * @param spec
     */
    self.generateOrder = function(spec){
        // handle user not providing a spec.
        if(!spec){
            spec = {};
        }
        return {
            color: spec.color || null,
            size: spec.size || null,
            quantity: spec.quantity || 0,
            customer: spec.customer || null
        }
    };

});
