/*!
 * Codes are for a simple implementation of 
 * how the jQuery framework works,
 * it includes 2 main features that jQuery has:

 * 1) how jQuery creates objects without 'new' operator
 * 2) how to implement chaining operation in jQuery

 * these two features are the core logical of jQuery

 * @Author Lynnic 
 * @Date 2016-01-09
 * 
 */

(function(window){
	var jQuery = function(selector) {
		if (this === window) return new jQuery(selector);

		//getElementsByTagName does not return an array
		var nodeList = document.getElementsByTagName(selector);
		var eles = [];
        
        //trans nodeList to array
		for(var i = 0; i < nodeList.length; i++) {
            eles[i] = nodeList.item(i);
		}

        //return jQuery object,not doms
		return this.setAttr(eles);
	}

    jQuery.fn = jQuery.prototype;

    //push all elements to jQuery object and set the length
    //property 
	jQuery.fn.setAttr = function(attr) {
		this.length = 0;
		Array.prototype.push.apply(this, attr);

		//return jQuery object to implement chain operation
		return this;
	}

    //traverse the collection of elements
	jQuery.fn.each = function(method) {
        for(var i = 0; i < this.length; i++) {
        	method.call(this[i], i);
        }
	}
 
    
    jQuery.fn.show = function() {

    	//call the each method to traverse, excute show method for
    	//every element,use i as index 
    	//notice that parameter i here is the actual parameter passed by 
    	//method.call(this[i], i);
      
    	this.each(function(i) {

    		//codes that show method uses actually
            alert(i);
    	});

        //return jQuery object to implement chain operation
    	return this;
    }

    //exports 'jQuery' and '$'' interface for window
	window.jQuery = window.$ = jQuery;

})(window);

//show the index of filtered elements
console.log($('div').show());