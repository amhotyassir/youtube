(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var n=s(9),i=s.n(n),a=s(18),r=s(3),c=s(4),o=s(6),l=s(5),u=s(2),d=s.n(u),h=s(19),m=s.n(h),p=s(20),j=s.n(p),b=s(0),f=(d.a.Component,function(e){if(e.videos){var t=e.videos.map((function(t){return Object(b.jsxs)("div",{onClick:function(){return e.refresh(t,t.snippet.title,t.snippet.description,t.id.videoId)},className:"ui comments",children:[Object(b.jsx)("h3",{className:"ui dividing header"}),Object(b.jsxs)("div",{className:"comment",children:[Object(b.jsx)("a",{className:"",children:Object(b.jsx)("img",{src:t.snippet.thumbnails.medium.url})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("a",{style:{fontSize:"50%",display:"inline",marginTop:"-80px",marginLeft:"0px"},className:"author",children:t.snippet.title})})]})]})}));return Object(b.jsx)("div",{className:"vidlist",children:t})}return null}),v=(s(46),function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={text:"",response:null,matches:0,video:null,title:"",description:"",url:null},e.makeAPIrequest=function(){var t=Object(a.a)(i.a.mark((function t(s){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://www.googleapis.com/youtube/v3/search",{params:{q:s,type:"video",key:"AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg",part:"snippet",maxResults:20}});case 2:n=t.sent,console.log(n.data.items),e.setState({response:n.data.items,matches:n.data.items.length});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.submitted=function(t){t.preventDefault(),e.makeAPIrequest(e.state.text)},e.refresh=function(t,s,n,i){e.setState({SelectedVid:t,title:s,description:n,url:i})},e}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"All",children:[Object(b.jsx)("form",{onSubmit:this.submitted,className:"ui form",children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Look for your favorite videos"}),Object(b.jsx)("input",{value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})},type:"text"}),Object(b.jsxs)("div",{children:[" We found : ",this.state.matches,"  Matches "]})]})}),Object(b.jsx)("iframe",{width:"70%",height:"250px",src:"https://www.youtube.com/embed/".concat(this.state.url)}),Object(b.jsx)("div",{className:"desc",children:Object(b.jsx)("div",{style:{fontSize:"110%"},children:this.state.title})}),Object(b.jsx)(f,{videos:this.state.response,refresh:this.refresh})]})}}]),s}(d.a.Component));m.a.render(Object(b.jsx)(v,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.76ab2d3b.chunk.js.map