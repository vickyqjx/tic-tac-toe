(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),i=a.n(s),l=(a(13),a(3)),c=a(4),o=a(5),u=a(7);var h=function(e){var t=e.ishighlighted?"square highlighted":"square";return t=null===e.value?"".concat(t," active"):t,r.a.createElement("button",{className:t,onClick:function(){return e.onClick()}},e.value)},m=a(6);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(m.a)(t[a],3),r=n[0],s=n[1],i=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return{name:e[r],highlights:[r,s,i]}}return null}var d=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},n}return Object(c.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();v(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"resetGame",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!0})}},{key:"renderSquare",value:function(e,t){var a=this;return r.a.createElement(h,{value:this.state.squares[e],onClick:function(){return a.handleClick(e)},ishighlighted:t.includes(e)})}},{key:"renderRow",value:function(e,t,a){for(var n=[],s=0;s<t;s++)n.push(this.renderSquare(e*t+s,a));return r.a.createElement("div",{className:"board-row"},n)}},{key:"renderBoard",value:function(e,t,a){for(var n=[],r=0;r<e;r++)n.push(this.renderRow(r,t,a));return n}},{key:"render",value:function(){var e,t=this,a=v(this.state.squares),n=[],s="",i=r.a.createElement("span",{className:"highlighted"},"Game Over!\xa0");return a?(e="Winner:".concat(a.name),n=a.highlights,s=i):this.state.squares.includes(null)?e="Current Player: "+(this.state.xIsNext?"X":"O"):(s=i,e="No winner"),r.a.createElement("div",null,this.renderBoard(3,3,n),r.a.createElement("div",{className:"status"},s,e),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"reset-button",onClick:function(){return t.resetGame()}},""!==s?"Play again":"Restart")))}}]),a}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-title"},"Tic Tac Toe"),r.a.createElement("div",{className:"game-board"},r.a.createElement(d,null)),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null),r.a.createElement("ol",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7f6d962a.chunk.js.map