(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),c=a.n(s),o=(a(13),a(14),a(3)),i=a(4),l=a(5),u=a(7);var v=function(e){return r.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)},m=a(6);function d(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(m.a)(t[a],3),r=n[0],s=n[1],c=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[c])return e[r]}return null}var h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},n}return Object(i.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();d(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(v,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"renderRow",value:function(e,t){for(var a=[],n=0;n<t;n++)a.push(this.renderSquare(e*t+n));return r.a.createElement("div",{className:"board-row"},a)}},{key:"renderBoard",value:function(e,t){for(var a=[],n=0;n<e;n++)a.push(this.renderRow(n,t));return a}},{key:"render",value:function(){var e,t=d(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",null,r.a.createElement("div",{className:"status"},e),this.renderBoard(3,3))}}]),a}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(h,null)),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null),r.a.createElement("ol",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fedc89b7.chunk.js.map