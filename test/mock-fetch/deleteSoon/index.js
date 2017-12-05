
/*
function divs(i) {
  return [
   '<div style="color:blue; width:' + i + 'px;height:' + i + 'px; background-color: gold; margin: 10px;">I am blue</div>',
   '<div style="color:green; width:' + i + 'px;height:' + i + 'px; background-color: blue; margin: 10px;">I am green</div>',
   '<div style="color:red; width:' + i + 'px;height:' + i + 'px; background-color: green; margin: 10px;">I am red</div>',
   '<div style="color:yellow; width:' + i + 'px;height:' + i + 'px; background-color: red; margin: 10px;">I am yellow</div>',
   '<div style="color:gold; width:' + i + 'px;height:' + i + 'px; background-color: yellow; margin: 10px;">I am gold</div>'
  ]	
}  


var i =0;
function counter() {
	i += 1;
	_root.innerHTML = divs(i+100)[i%5]
  return i;
}

function counter1() {
	i += 1;
	_1.innerHTML = divs(i+100)[i%5]
  return i;
}

function counter2() {
	i += 1;
	_2.innerHTML = divs(i+100)[i%5]
  return i;
}

function counter3() {
	i += 1;
	_3.innerHTML = divs(i+100)[i%5]
  return i;
}

//var _root = document.getElementById('root');
var _1 = document.getElementById('_1');
var _2 = document.getElementById('_2');
var _3 = document.getElementById('_3');
//setInterval(counter, 1000);
setInterval(counter1, 1000);
setInterval(counter2, 3000);
setInterval(counter3, 5000);

function StatefulReactComponent (props) {
	return {
		constructor:  function () {},
		setState: function () {},
		state:  {},
		componentWillMount:  function () {},
		componentDidMount:  function () {},
		componentWillReceiveProps:  function () {},
		shouldComponentUpdate:  function () {},
		componentWillUpdate:  function () {},
		componentWillUnmount:  function () {},
		render:  function() {},
	}
};

var App = StatefulReactComponent();
console.log(App);
*/

var App = {
	name: {
		type: 'div',
		props: {
			children: 'Omer',
			style={backgroundColor: 'grey'},
		}
	},
	age: {},
}
var ReactDOM = function (){

	render = function(Component, node){
		// Compnent will be a deeply nested POJO;
	}
}