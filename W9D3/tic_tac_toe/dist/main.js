(()=>{var t={930:(t,r,s)=>{const n=s(375);class e{constructor(){this.grid=e.makeGrid()}isEmptyPos(t){if(!e.isValidPos(t))throw new n("Is not valid position!");return null===this.grid[t[0]][t[1]]}isOver(){if(null!=this.winner())return!0;for(let t=0;t<3;t++)for(let r=0;r<3;r++)if(this.isEmptyPos([t,r]))return!1;return!0}placeMark(t,r){if(!this.isEmptyPos(t))throw new n("Is not an empty position!");this.grid[t[0]][t[1]]=r}print(){const t=[];for(let r=0;r<3;r++){const s=[];for(let t=0;t<3;t++)s.push(this.grid[r][t]?this.grid[r][t]:" ");t.push(s.join("|")+"\n")}console.log(t.join("-----\n"))}winner(){const t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let r=0;r<t.length;r++){const s=this.winnerHelper(t[r]);if(null!=s)return s}return null}winnerHelper(t){for(let r=0;r<e.marks.length;r++){const s=e.marks[r];let n=!0;for(let r=0;r<3;r++){const e=t[r];this.grid[e[0]][e[1]]!=s&&(n=!1)}if(n)return s}return null}static isValidPos(t){return 0<=t[0]&&t[0]<3&&0<=t[1]&&t[1]<3}static makeGrid(){const t=[];for(let r=0;r<3;r++){t.push([]);for(let s=0;s<3;s++)t[r].push(null)}return t}}e.marks=["x","o"],t.exports=e},450:(t,r,s)=>{const n=s(930),e=s(375);t.exports=class{constructor(){this.board=new n,this.currentPlayer=n.marks[0]}isOver(){return this.board.isOver()}playMove(t){this.board.placeMark(t,this.currentPlayer),this.swapTurn()}promptMove(t,r){this.board.print(),console.log("Current Turn: "+this.currentPlayer),t.question("Enter rowIdx: ",(s=>{const n=parseInt(s);t.question("Enter colIdx: ",(t=>{const s=parseInt(t);r([n,s])}))}))}run(t,r){this.promptMove(t,(s=>{try{this.playMove(s)}catch(t){if(!(t instanceof e))throw t;console.log(t.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(this.winner()+" has won!"):console.log("NO ONE WINS!"),r()):this.run(t,r)}))}swapTurn(){this.currentPlayer===n.marks[0]?this.currentPlayer=n.marks[1]:this.currentPlayer=n.marks[0]}winner(){return this.board.winner()}}},375:t=>{t.exports=function(t){this.msg=t}},489:t=>{t.exports=class{constructor(t,r){this.game=t,this.$el=r,$("<ul></ul>").appendTo(".ttt"),this.setupBoard(),this.bindEvents()}bindEvents(){let t=this;$("ul").on("click","li",(function(r){let s=$(r.currentTarget);try{t.makeMove(s)}catch(t){alert("Invalid Move! Try Again!")}}))}makeMove(t){this.game.playMove(t.data("pos"));let r=this.game.currentPlayer;t.addClass(r).append(r);let s="li."+r;this.game.board.winner()?($(s).attr("id","win"),$("li").addClass("lose"),$("ul").off(),$(".ttt").append(`<figcaption>You win, ${r}!</figcaption>`)):this.game.isOver()&&($("li").addClass("lose"),$("ul").off(),$(".ttt").append("<figcaption>It's a draw!</figcaption>"))}setupBoard(){const t=$("ul");for(let r=0;r<9;r++){const s=$("<li></li>");s.data("pos",[Math.floor(r/3),r%3]),t.append(s)}}}}},r={};function s(n){if(r[n])return r[n].exports;var e=r[n]={exports:{}};return t[n](e,e.exports,s),e.exports}(()=>{const t=s(489),r=s(450);$((()=>{let s=new r;const n=$(".ttt");new t(s,n)}))})()})();