(this["webpackJsonpcovid-19-tracker-india"]=this["webpackJsonpcovid-19-tracker-india"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),s=a(2),l=a.n(s),o=a(5),d=a(16),u=a(17),h=a(3),m=a(19),v=a(18),f=a(4),p=a.n(f),E=(a(43),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={confirmed:0,cured:0,death:0,total:0,states:[]},n.getStatesData=n.getStatesData.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/");case 2:return t=e.sent,e.next=5,p.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/");case 5:for(a=e.sent,n=[],r=0;r<a.data.data.statewise.length;r++)n.push(a.data.data.statewise[r].state);i=t.data.data.statewise.filter((function(e){return e.state.match(n.slice()[0])})),this.setState({confirmed:i[0].confirmed,cured:i[0].recovered,death:i[0].deaths,total:i[0].active,states:n,indiaConfirmed:t.data.data.total.confirmed,indiaRecovered:t.data.data.total.recovered,indiaDeaths:t.data.data.total.deaths,indiaActive:t.data.data.total.active});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStatesData",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.target.value){e.next=2;break}return e.abrupt("return",this.getData());case 2:return a=t.target.value,e.prev=3,e.next=6,p.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/");case 6:n=e.sent,r=n.data.data.statewise.filter((function(e){return e.state.match(a)})),this.setState({confirmed:r[0].confirmed,cured:r[0].recovered,death:r[0].deaths,total:r[0].active}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),404===e.t0.response.status&&this.setState({confirmed:"No data available..",cured:"No data available..",death:"No data available..",total:"No data available.."});case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderStatesOptions",value:function(){return this.state.states.map((function(e,t){return r.a.createElement("option",{key:t},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Covid-19 India Tracker"),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"box confirmed"},r.a.createElement("h3",null,"Confirmed Cases"),r.a.createElement("h4",null,this.state.indiaConfirmed)),r.a.createElement("div",{className:"box recovered"},r.a.createElement("h3",null,"Recovered Cases"),r.a.createElement("h4",null,this.state.indiaRecovered)),r.a.createElement("div",{className:"box deaths"},r.a.createElement("h3",null,"Deaths"),r.a.createElement("h4",null,this.state.indiaDeaths)),r.a.createElement("div",{className:"box total"},r.a.createElement("h3",null,"Total Active"),r.a.createElement("h4",null,this.state.indiaActive))),r.a.createElement("h2",null,"Select State:"),r.a.createElement("select",{className:"dropdown",onChange:this.getStatesData},this.renderStatesOptions()),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"box confirmed"},r.a.createElement("h3",null,"Confirmed Cases"),r.a.createElement("h4",null,this.state.confirmed)),r.a.createElement("div",{className:"box recovered"},r.a.createElement("h3",null,"Recovered Cases"),r.a.createElement("h4",null,this.state.cured)),r.a.createElement("div",{className:"box deaths"},r.a.createElement("h3",null,"Deaths"),r.a.createElement("h4",null,this.state.death)),r.a.createElement("div",{className:"box total"},r.a.createElement("h3",null,"Total"),r.a.createElement("h4",null,this.state.total))))}}]),a}(r.a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9b710d27.chunk.js.map