(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,o){e.exports=o.p+"static/media/logo.6394b7c0.png"},34:function(e,t,o){e.exports=o(63)},39:function(e,t,o){},63:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),i=o(30),r=o.n(i),c=(o(39),o(7)),l=o(8),s=o(10),d=o(9),m=o(11),p=o(14),h=o(13),u=(o(40),o(3)),b=o(12),g=o.n(b),y=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(s.a)(this,Object(d.a)(t).call(this,e))).onChangeTodoDescription=o.onChangeTodoDescription.bind(Object(u.a)(o)),o.onChangeTodoResponsible=o.onChangeTodoResponsible.bind(Object(u.a)(o)),o.onChangeTodoPriority=o.onChangeTodoPriority.bind(Object(u.a)(o)),o.onSubmit=o.onSubmit.bind(Object(u.a)(o)),o.state={todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1},o}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({todo_responsible:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("Todo Description: ".concat(this.state.todo_description)),console.log("Todo Responsible: ".concat(this.state.todo_responsible)),console.log("Todo Priority: ".concat(this.state.todo_priority)),console.log("Todo Completed: ".concat(this.state.todo_completed));var t={todo_description:this.state.todo_description,todo_responsible:this.state.todo_responsible,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};g.a.post("/todos/add",t).then(function(e){return console.log(e.data)}),this.setState({todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1})}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:20}},n.a.createElement("h3",null,"Create New Item"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Description: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Price: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_responsible,onChange:this.onChangeTodoResponsible})),n.a.createElement("h3",null,"Sale Priority"),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Low")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Medium")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"High"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Create Item",className:"btn btn-primary"}))))}}]),t}(a.Component),f=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(s.a)(this,Object(d.a)(t).call(this,e))).onChangeTodoDescription=o.onChangeTodoDescription.bind(Object(u.a)(o)),o.onChangeTodoResponsible=o.onChangeTodoResponsible.bind(Object(u.a)(o)),o.onChangeTodoPriority=o.onChangeTodoPriority.bind(Object(u.a)(o)),o.onChangeTodoCompleted=o.onChangeTodoCompleted.bind(Object(u.a)(o)),o.onSubmit=o.onSubmit.bind(Object(u.a)(o)),o.state={todo_description:"",todo_responsible:"",todo_priority:"",todo_completed:!1},o}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/todos/"+this.props.match.params.id).then(function(t){e.setState({todo_description:t.data.todo_description,todo_responsible:t.data.todo_responsible,todo_priority:t.data.todo_priority,todo_completed:t.data.todo_completed})}).catch(function(e){console.log(e)})}},{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({todo_responsible:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onChangeTodoCompleted",value:function(e){this.setState({todo_completed:!this.state.todo_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={todo_description:this.state.todo_description,todo_responsible:this.state.todo_responsible,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};g.a.post("/todos/update/"+this.props.match.params.id,t).then(function(e){return console.log(e.data)}),this.props.history.push("/")}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Update Items"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Description: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Price: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.todo_responsible,onChange:this.onChangeTodoResponsible})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Low")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"Medium")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),n.a.createElement("label",{className:"form-check-label"},"High")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"completedCheckbox",name:"completedCheckbox",onChange:this.onChangeTodoCompleted,checked:this.state.todo_completed,value:this.state.todo_completed}),n.a.createElement("label",{className:"form-check-label",htmlFor:"completedCheckbox"},"Completed")),n.a.createElement("br",null),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Update Item",className:"btn btn-primary"})))))}}]),t}(a.Component),v=function(e){return n.a.createElement("tr",null,n.a.createElement("td",{className:e.todo.todo_completed?"completed":""},e.todo.todo_description),n.a.createElement("td",{className:e.todo.todo_completed?"completed":""},e.todo.todo_responsible),n.a.createElement("td",{className:e.todo.todo_completed?"completed":""},e.todo.todo_priority),n.a.createElement("td",null,n.a.createElement(p.b,{to:"/edit/"+e.todo._id},"Edit")))},E=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={todos:[]},o}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/todos").then(function(t){e.setState({todos:t.data})}).catch(function(e){console.log(e)})}},{key:"componentDidUpdate",value:function(){var e=this;g.a.get("/todos").then(function(t){e.setState({todos:t.data})}).catch(function(e){console.log(e)})}},{key:"todoList",value:function(){return this.state.todos.map(function(e,t){return n.a.createElement(v,{todo:e,key:t})})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Item for Sale"),n.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Priority to Sell"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,this.todoList())))}}]),t}(a.Component),_=o(33),k=o.n(_),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"https://edcall.github.io/Updated-Portfolio/",target:"https://edcall.github.io/Updated-Portfolio/"},n.a.createElement("img",{src:k.a,width:"30",height:"30",alt:"CodingTheSmartWay.com"})),n.a.createElement(p.b,{to:"/",className:"navbar-brand"},"Garage Sale App"),n.a.createElement("div",{className:"collpase nav-collapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(p.b,{to:"/",className:"nav-link"},"Items")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(p.b,{to:"/create",className:"nav-link"},"Upload Items"))))),n.a.createElement(h.a,{path:"/",exact:!0,component:E}),n.a.createElement(h.a,{path:"/edit/:id",component:f}),n.a.createElement(h.a,{path:"/create",component:y})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.7f185e15.chunk.js.map