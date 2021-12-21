(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={form:"Filter_form__1OOU5",input:"Filter_input__2aBNb"}},62:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),o=n.n(r),u=n(4),s=n(5),i=n(30),l=n.n(i),b=n(31),d=n(2),j=n(6),f=Object(s.b)("contacts/changeFilter"),p=n(7),m=n.n(p),O=n(16),h=n(11),C=n.n(h);C.a.defaults.baseURL="https://61c228e29dbcca0017c82397.mockapi.io/";var x,v,_,g=Object(s.c)("contacts/fetchContacts",function(){var t=Object(O.a)(m.a.mark((function t(e,n){var c,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,C.a.get("/contacts");case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(s.c)("contacts/addContact",function(){var t=Object(O.a)(m.a.mark((function t(e,n){var c,a,r,o,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.name,a=e.number,r=n.rejectWithValue,t.prev=2,t.next=5,C.a.post("/contacts",{name:c,number:a});case 5:return o=t.sent,u=o.data,t.abrupt("return",u);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",r(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(s.c)("contacts/deleteContact",function(){var t=Object(O.a)(m.a.mark((function t(e,n){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,C.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),w={fetchContacts:g,addContact:y,deleteContact:N},k=Object(s.d)(!1,(x={},Object(d.a)(x,w.fetchContacts.pending,(function(){return!0})),Object(d.a)(x,w.fetchContacts.fulfilled,(function(){return!1})),Object(d.a)(x,w.fetchContacts.rejected,(function(){return!1})),Object(d.a)(x,w.addContact.pending,(function(){return!0})),Object(d.a)(x,w.addContact.fulfilled,(function(){return!1})),Object(d.a)(x,w.addContact.rejected,(function(){return!1})),Object(d.a)(x,w.deleteContact.pending,(function(){return!0})),Object(d.a)(x,w.deleteContact.fulfilled,(function(){return!1})),Object(d.a)(x,w.deleteContact.rejected,(function(){return!1})),x)),L=Object(s.d)([],(v={},Object(d.a)(v,w.fetchContacts.fulfilled,(function(t,e){return e.payload})),Object(d.a)(v,w.addContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(d.a)(v,w.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),v)),F=Object(s.d)("",Object(d.a)({},f,(function(t,e){return e.payload}))),A=Object(s.d)(null,(_={},Object(d.a)(_,w.fetchContacts.rejected,(function(t){return console.log(t)})),Object(d.a)(_,w.fetchContacts.pending,(function(){return null})),Object(d.a)(_,w.addContact.rejected,(function(t){return console.log(t)})),Object(d.a)(_,w.addContact.pending,(function(){return null})),Object(d.a)(_,w.deleteContact.rejected,(function(t){return console.log(t)})),Object(d.a)(_,w.deleteContact.pending,(function(){return null})),_)),z=Object(j.b)({loading:k,items:L,filter:F,error:A}),J=Object(s.a)({reducer:{contacts:z},middleware:function(t){return t({serializableCheck:!1}).concat(l.a)},devTools:!1}),S=(n(62),n(20)),V=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},Z=function(t){var e=V(t),n=W(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},B=n(8),P=n.n(B),q=n(1);function D(){var t=Object(c.useState)(""),e=Object(S.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(S.a)(r,2),s=o[0],i=o[1],l=Object(u.c)(V),b=Object(u.b)(),d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":i(c);break;default:return}},j=function(){a(""),i("")};return Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):b(w.addContact({name:n,number:s})),j()},className:P.a.form,children:[Object(q.jsxs)("label",{className:P.a.label,children:["Name",Object(q.jsx)("input",{className:P.a.input,type:"text",placeholder:"type name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:d,required:!0})]}),Object(q.jsxs)("label",{className:P.a.label,children:["Number",Object(q.jsx)("input",{className:P.a.input,type:"tel",placeholder:"999-99-99",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:s,onChange:d,required:!0})]}),Object(q.jsx)("button",{type:"submit",className:P.a.button,children:"Add contact"})]})}var E=n(9),I=n.n(E);function M(){var t=Object(u.c)(Z),e=Object(u.b)();return Object(q.jsx)("ul",{className:I.a.contactList,children:t.map((function(t){return Object(q.jsxs)("li",{className:I.a.contact,children:[Object(q.jsx)("p",{className:I.a.name,children:"".concat(t.name)}),Object(q.jsx)("p",{className:I.a.number,children:"".concat(t.number)}),Object(q.jsx)("button",{className:I.a.button,onClick:function(){return n=t.id,e(w.deleteContact(n));var n},children:"Delete"})]},t.id)}))})}var U=n(19),G=n.n(U);function R(){var t=Object(u.c)(W),e=Object(u.b)();return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("form",{className:G.a.form,children:Object(q.jsxs)("label",{children:[Object(q.jsx)("h3",{children:"Find contacts by name:"}),Object(q.jsx)("input",{type:"text",value:t,onChange:function(t){return e(f(t.target.value))},className:G.a.input})]})})})}function T(){var t=Object(u.b)();return Object(c.useEffect)((function(){t(w.fetchContacts())}),[t]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h1",{children:"Phonebook"}),Object(q.jsx)(D,{}),Object(q.jsx)("h2",{children:"Contacts"}),Object(q.jsx)(R,{}),Object(q.jsx)(M,{})]})}o.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(u.a,{store:J,children:Object(q.jsx)(T,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__3SlJ9",label:"ContactForm_label__3lkmw",input:"ContactForm_input__-pLW4",button:"ContactForm_button__1d9SJ"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__1zeVP",contact:"ContactList_contact__2r3AZ",name:"ContactList_name__1JGoi",number:"ContactList_number__2p7k9",button:"ContactList_button__VIvY1"}}},[[64,1,2]]]);
//# sourceMappingURL=main.87765a57.chunk.js.map