angular
    .module('ng-firstapp')
    .factory('firstappFactory', function(){
        var firstAppData = [
            {
                "type": "Condo",
                "price": 220000,
                "address": "213, Grove Street",
                "description": "Excellent place, nice view!"
            },
            {
               "type": "House",
                "price": 410500,
                "address": "7823, Winding Way",
                "description": "Beautyfull home with lots of space for a large family" 
            },
            {
                "type": "Duplex",
                "price": 39500,
                "address": "834, River Lane",
                "description": "Great neighbourhood and lot's of nice green space"
            }
        ];
             
        function getFirstApp(){
            return firstAppData;
        }
            
        // returning an object for accessing the method described above outside of this file
        return{
            getFirstApp: getFirstApp
        }
     });