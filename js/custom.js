function subm(a,b,c,d) {
var x=document.forms['valid'];
x.req.value=a;
x.act.value=b;     
if (c) {
  x.opt.value=c;
  } else {
  x.opt.value='';
  }
if (d) {
  x.target="_blank";
  } else {
  x.target="_self";
  }
x.action="";
x.submit();
}

function setVal(a,b) {
var x=eval("document.forms['valid']."+a);
x.value=b;
return true;
}

function submR(r) {
var x=document.forms['valid'];
x.ropt.value=r; //rep id:usr id
x.target="modalF";
x.action="inc/cgi/excel-writer.cgi";
x.submit();
}

function lk() {
if (document.forms[0].look.value) {
var regA=/^i/i;
var regB=/^b/i;
if (regA.test(document.forms[0].look.value)==true) {
 ws('invoices','edit1','m:'+document.forms[0].look.value.substr(1));
 } else if (regB.test(document.forms[0].look.value)==true) {
 ws('bills','edit1','m:'+document.forms[0].look.value.substr(1));
 } else {
 ws('moves','splash','m:'+document.forms[0].look.value);
 }
}
}

function mult(obj) {
var str; var y=0;
var inputs=document.getElementsByTagName('input');
for( var x=0; x<inputs.length; x++) {
  if(inputs[x].type == "checkbox" && inputs[x].name == 'multi')  {
    if(inputs[x].checked == true) {
      str+= inputs[x].value + ',';
      y++;
      }
    }  
  }
if (/,$/.test(str)) {
  str=str.replace(/,$/,'');
  str=str.replace(/undefined/,'');
  }
if (y==0) {
  document.forms[0].ME_m.value='';
  } else {
  document.forms[0].ME_m.value=str; 
  }
}

function submM(a,b,c,d,e) {
var x=document.forms['valid'];
if (e) {
  x.ME_v.value=e;                                                   
  }
if (d==1) {
  var ME;
  ME='&ME_v='+x.ME_v.value;
  document.getElementById('modalF').src=('inc/cgi/'+a+'.cgi?act='+b+ME);
  } else {
  x.req.value=a;
  x.act.value=b;
  x.opt.value=c;
  x.target="modalF";
  document.getElementById("wrkHdr").style.display="";
  document.getElementById("wrk").style.paddingTop="30px";
  document.getElementById("modalF").style.width="980px";
  document.getElementById("modalF").style.height="575px";
  x.action="";
  x.submit();
  }
}  

function submI(a,b,c,d,e) {
var x=document.forms['valid'];
x.req.value=a;
x.act.value=b;
x.opt.value=c;
x.target="modalF"; 
document.getElementById("wrkHdr").style.display="none";
document.getElementById("wrk").style.paddingTop="0";
document.getElementById("modalF").style.width="700px";
document.getElementById("modalF").style.height="300px";
x.action="";
x.submit();
}
                                                               
function bf(x) {
if (x=='F') {
document.getElementById('modalF').contentWindow.history.forward();
} else {
document.getElementById('modalF').contentWindow.history.back();
}
}
function ws(x,y,z) {
var i=document.getElementById('modalF').contentWindow.document.forms['valid'];
i.req.value=x;
i.act.value=y;
i.opt.value=z;
i.action="";
i.submit();
}

function tglMenu() {
$('.leftNav').toggle('slow');
if ($('.tgl').attr('src') == 'images/my/hide.gif') {
  $('.tgl').attr('src', 'images/my/show.gif');
  $.cookie('nav', 'closed');
  } else {
  $('.tgl').attr('src', 'images/my/hide.gif');
  $.cookie('nav', 'open');}
}

function mStat(pl,n) {
var x=document.forms['valid'];
var z=document.getElementById('mySelect');
alert(x.ME_v.value);
if (n) {
  alert(n);
  }
document.getElementById('modalF').src=('inc/cgi/'+pl+'.cgi?ME_v='+x.ME_v.value+'&stat='+n);
alert(document.getElementById('modalF').src);
return false;
}
function setM(a,b,c,d) {
var x=document.forms['valid'];
var y=chkM();
if (y) {
  x.ME_v.value=y;
  submM(a,b,c,d);
  showDialog();
  }
else {
  return false;
  }
}
function chkM() {
var x=document.forms['valid'];
var y=0; var z='';
if (x.ME_id.length!='undefined') {
  for (var i=0; i<x.ME_id.length; i++) {
    if (x.ME_id[i].checked) {
      y=1;
      if (!isNaN(x.ME_id[i].value)) {
        z+=',';
        z+=x.ME_id[i].value;
        }
      }
    }
  if (y==1) {
    z=z.substr(1);
    return z;
    }
  }
if (x.ME_id.checked==true) {
  return x.ME_id.value;
  }
alert('Nothing Selected');
return false;
}
function setPg(a,b) {
var x=document.forms['valid'];
x.cur_pg.value=a;
if (!b) {
  x.opt.value="";
  }
x.target="_self";
x.action="";
x.submit();
}
function setCt(a,b) {
var x=document.forms['valid'];
x.per_pg.value=a;
if (!b) {
  x.opt.value="";
  }
x.target="_self";
x.action="";
x.submit();
}
function setDS(a,b) {
var x=document.forms['valid']; 
$(document).ready(function() {
  x.sort.value=a;
  x.ord.value=b;
  x.cur_pg.value=0;
  });
}
function setOrd(a,b) {
var x=document.forms['valid'];
x.sort.value=a;
if (!b) {
  x.opt.value="";
  }
if (!x.ord.value||x.ord.value=='DESC') {
  x.ord.value="ASC";
  } 
else if (x.ord.value=='ASC') {
  x.ord.value="DESC";
  }
x.target="_self";
x.action="";
x.submit();
}



function chkA() {
var x=document.forms['valid'];
var inputs = document.getElementsByTagName('input'); 
  for(var i=0; i < inputs.length; i++) {
    if (inputs[i].getAttribute('type') == 'checkbox') { 
      if (x.chkAll.checked == true) { 
        inputs[i].checked = true;
        } else {
        inputs[i].checked = false;
        }	  
      }
    } 

}


(function(d){function l(b,a,c){a="("+c.replace(m,"\\$1")+")";return b.replace(new RegExp(a,"gi"),"<strong>$1</strong>")}function i(b,a){this.el=d(b);this.el.attr("autocomplete","off");this.suggestions=[];this.data=[];this.badQueries=[];this.selectedIndex=-1;this.currentValue=this.el.val();this.intervalId=0;this.cachedResponse=[];this.onChangeInterval=null;this.ignoreValueChange=false;this.serviceUrl=a.serviceUrl;this.isLocal=false;this.options={autoSubmit:false,minChars:1,maxHeight:300,deferRequestBy:0, width:0,highlight:true,params:{},fnFormatResult:l,delimiter:null,zIndex:9999};this.initialize();this.setOptions(a)}var m=new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","g");d.fn.autocomplete=function(b){return new i(this.get(0)||d("<input />"),b)};i.prototype={killerFn:null,initialize:function(){var b,a,c;b=this;a=Math.floor(Math.random()*1048576).toString(16);c="Autocomplete_"+a;this.killerFn=function(e){if(d(e.target).parents(".autocomplete").size()===0){b.killSuggestions(); b.disableKillerFn()}};if(!this.options.width)this.options.width=this.el.width();this.mainContainerId="AutocompleteContainter_"+a;d('<div id="'+this.mainContainerId+'" style="position:absolute;z-index:9999;"><div class="autocomplete-w1"><div class="autocomplete" id="'+c+'" style="display:none; width:300px;"></div></div></div>').appendTo("body");this.container=d("#"+c);this.fixPosition();window.opera?this.el.keypress(function(e){b.onKeyPress(e)}):this.el.keydown(function(e){b.onKeyPress(e)});this.el.keyup(function(e){b.onKeyUp(e)}); this.el.blur(function(){b.enableKillerFn()});this.el.focus(function(){b.fixPosition()})},setOptions:function(b){var a=this.options;d.extend(a,b);if(a.lookup){this.isLocal=true;if(d.isArray(a.lookup))a.lookup={suggestions:a.lookup,data:[]}}d("#"+this.mainContainerId).css({zIndex:a.zIndex});this.container.css({maxHeight:a.maxHeight+"px",width:a.width})},clearCache:function(){this.cachedResponse=[];this.badQueries=[]},disable:function(){this.disabled=true},enable:function(){this.disabled=false},fixPosition:function(){var b= this.el.offset();d("#"+this.mainContainerId).css({top:b.top+this.el.innerHeight()+"px",left:b.left+"px"})},enableKillerFn:function(){d(document).bind("click",this.killerFn)},disableKillerFn:function(){d(document).unbind("click",this.killerFn)},killSuggestions:function(){var b=this;this.stopKillSuggestions();this.intervalId=window.setInterval(function(){b.hide();b.stopKillSuggestions()},300)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},onKeyPress:function(b){if(!(this.disabled|| !this.enabled)){switch(b.keyCode){case 27:this.el.val(this.currentValue);this.hide();break;case 9:case 13:if(this.selectedIndex===-1){this.hide();return}this.select(this.selectedIndex);if(b.keyCode===9)return;break;case 38:this.moveUp();break;case 40:this.moveDown();break;default:return}b.stopImmediatePropagation();b.preventDefault()}},onKeyUp:function(b){if(!this.disabled){switch(b.keyCode){case 38:case 40:return}clearInterval(this.onChangeInterval);if(this.currentValue!==this.el.val())if(this.options.deferRequestBy> 0){var a=this;this.onChangeInterval=setInterval(function(){a.onValueChange()},this.options.deferRequestBy)}else this.onValueChange()}},onValueChange:function(){clearInterval(this.onChangeInterval);this.currentValue=this.el.val();var b=this.getQuery(this.currentValue);this.selectedIndex=-1;if(this.ignoreValueChange)this.ignoreValueChange=false;else b===""||b.length<this.options.minChars?this.hide():this.getSuggestions(b)},getQuery:function(b){var a;a=this.options.delimiter;if(!a)return d.trim(b);b= b.split(a);return d.trim(b[b.length-1])},getSuggestionsLocal:function(b){var a,c,e,g,f;c=this.options.lookup;e=c.suggestions.length;a={suggestions:[],data:[]};b=b.toLowerCase();for(f=0;f<e;f++){g=c.suggestions[f];if(g.toLowerCase().indexOf(b)===0){a.suggestions.push(g);a.data.push(c.data[f])}}return a},getSuggestions:function(b){var a,c;if((a=this.isLocal?this.getSuggestionsLocal(b):this.cachedResponse[b])&&d.isArray(a.suggestions)){this.suggestions=a.suggestions;this.data=a.data;this.suggest()}else if(!this.isBadQuery(b)){c= this;c.options.params.query=b;d.get(this.serviceUrl,c.options.params,function(e){c.processResponse(e)},"text")}},isBadQuery:function(b){for(var a=this.badQueries.length;a--;)if(b.indexOf(this.badQueries[a])===0)return true;return false},hide:function(){this.enabled=false;this.selectedIndex=-1;this.container.hide()},suggest:function(){if(this.suggestions.length===0)this.hide();else{var b,a,c,e,g,f,j,k;b=this;a=this.suggestions.length;e=this.options.fnFormatResult;g=this.getQuery(this.currentValue); j=function(h){return function(){b.activate(h)}};k=function(h){return function(){b.select(h)}};this.container.hide().empty();for(f=0;f<a;f++){c=this.suggestions[f];c=d((b.selectedIndex===f?'<div class="selected"':"<div")+' title="'+c+'">'+e(c,this.data[f],g)+"</div>");c.mouseover(j(f));c.click(k(f));this.container.append(c)}this.enabled=true;this.container.show()}},processResponse:function(b){var a;try{a=eval("("+b+")")}catch(c){return}if(!d.isArray(a.data))a.data=[];if(!this.options.noCache){this.cachedResponse[a.query]= a;a.suggestions.length===0&&this.badQueries.push(a.query)}if(a.query===this.getQuery(this.currentValue)){this.suggestions=a.suggestions;this.data=a.data;this.suggest()}},activate:function(b){var a,c;a=this.container.children();this.selectedIndex!==-1&&a.length>this.selectedIndex&&d(a.get(this.selectedIndex)).removeClass();this.selectedIndex=b;if(this.selectedIndex!==-1&&a.length>this.selectedIndex){c=a.get(this.selectedIndex);d(c).addClass("selected")}return c},deactivate:function(b,a){b.className= "";if(this.selectedIndex===a)this.selectedIndex=-1},select:function(b){var a;if(a=this.suggestions[b]){this.el.val(a);if(this.options.autoSubmit){a=this.el.parents("form");a.length>0&&a.get(0).submit()}this.ignoreValueChange=true;this.hide();this.onSelect(b)}},moveUp:function(){if(this.selectedIndex!==-1)if(this.selectedIndex===0){this.container.children().get(0).className="";this.selectedIndex=-1;this.el.val(this.currentValue)}else this.adjustScroll(this.selectedIndex-1)},moveDown:function(){this.selectedIndex!== this.suggestions.length-1&&this.adjustScroll(this.selectedIndex+1)},adjustScroll:function(b){var a,c,e;a=this.activate(b).offsetTop;c=this.container.scrollTop();e=c+this.options.maxHeight-25;if(a<c)this.container.scrollTop(a);else a>e&&this.container.scrollTop(a-this.options.maxHeight+25);this.el.val(this.getValue(this.suggestions[b]))},onSelect:function(b){var a,c;a=this.options.onSelect;c=this.suggestions[b];b=this.data[b];this.el.val(this.getValue(c));d.isFunction(a)&&a(c,b,this.el)},getValue:function(b){var a, c;a=this.options.delimiter;if(!a)return b;c=this.currentValue;a=c.split(a);if(a.length===1)return b;return c.substr(0,c.length-a[a.length-1].length)+b}}})(jQuery);

$(function() {	

$("#chkall").click(function(){$(".csel").attr('checked', this.checked);});

$('a[href="#"]').click(function(e){e.preventDefault();})
$('a[href=""]').click(function(e){e.preventDefault();})
    
$('table.tableStatic tr:odd').addClass('trodd');
$('table.tableStatic tr:even').addClass('treven');

$('table.tableStatic tr').hover(function() { 
      $(this).toggleClass('trhover');
    });

$('table.tableStatic tr').click(function() { 
      $('table.tableStatic tr.trclick').not(this).removeClass('trclick'); 
      if (!$(this).hasClass('trclick')) {
          $(this).toggleClass('trclick');
          }
    });
    
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();
$('[placeholder]').parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});



/*cookie*/

	var pluses = /\+/g;
	function raw(s) {
		return s;
	}
	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function(key, value, options) {

		// key and at least value given, set cookie...
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value == null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	};

	$.cookie.defaults = {};

/*cookie*/




//$("[class^=togBox]").hide();
//$("[class^=togl]").click(function() {
//var $this = $(this);
//if($this.attr("title")==""){
//$this.html("Close Specifications");
//$this.attr({title: "Opened"});
//}
//else if ($this.attr("title")=="Closed"){
//$this.html("View Specifications");
//$this.attr({title: ""});
//};
//var x = $this.attr("class").substr(5); 
//$(".togBox-"+x).toggle('fast');
//return false;
//});

   //===== Autocomplete =====//
	
	var availableTags = [ "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];
	$( "#ac" ).autocomplete({
	source: availableTags
	});	
	
	
	//===== Tags =====//	
		
	//$('#tags').tagsInput({width:'100%'});
	
	
	//===== Input limiter =====//
	
	/*$('.limit').inputlimiter({
		limit: 100
		//boxClass: 'limBox',
		//boxAttach: false
	});*/
	
	
	//===== Masked input =====//
	
	/*$.mask.definitions['~'] = "[+-]";
	$(".maskDate").mask("99/99/9999",{completed:function(){alert("Callback when completed");}});
	$(".maskPhone").mask("(999) 999-9999");
	$(".maskPhoneExt").mask("(999) 999-9999? x99999");
	$(".maskIntPhone").mask("+33 999 999 999");
	$(".maskTin").mask("99-9999999");
	$(".maskSsn").mask("999-99-9999");
	//$(".maskProd").mask("a*-999-a999", { placeholder: " " });
	$(".maskEye").mask("~9.99 ~9.99 999");
	$(".maskPo").mask("PO: aaa-999-***");
	$(".maskPct").mask("99%");*/
	
	
	//===== Placeholder =====//
	
	//$('input[placeholder], textarea[placeholder]').placeholder();

	
	//===== Multiple select with dropdown =====//
	
	//$(".chzn-select").chosen(); 
	
	
	//===== Usual validation engine=====//

    
   /*
	$("#usualValidate").validate({
		rules: {
			firstname: "required",
			minChars: {
				required: true,
				minlength: 3
			},
			maxChars: {
				required: true,
				maxlength: 6
			},
			mini: {
				required: true,
				min: 3
			},
			maxi: {
				required: true,
				max: 6
			},
			range: {
				required: true,
				range: [6, 16]
			},
			emailField: {
				required: true,
				email: true
			},
			urlField: {
				required: true,
				url: true
			},
			dateField: {
				required: true,
				date: true
			},
			digitsOnly: {
				required: true,
				digits: true
			},
			enterPass: {
				required: true,
				minlength: 5
			},
			repeatPass: {
				required: true,
				minlength: 5,
				equalTo: "#enterPass"
			},
			customMessage: "required",
			
	
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			customMessage: {
				required: "Bazinga! This message is editable",
			},
			agree: "Please accept our policy"
		}
	});
	*/
	
	//===== Form to Wizard plugin =====//
	/*
	$("#wizForm").formwizard({ 
		formPluginEnabled: false,
		validationEnabled: true,
		focusFirstInput : false,
		formOptions :{
			success: function(data){$("#status").fadeTo(500,1,function(){ $(this).html("You are now registered!").fadeTo(5000, 0); })},
			beforeSubmit: function(data){$("#data").html("data sent to the server: " + $.param(data));},
			dataType: 'json',
			resetForm: true
		},
		disableUIStyles : true,
		validationOptions : {
			rules: {
				req: "required",
				sel: "required",
				chb: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				req: "This field is required",
				sel: "Oops, required!",
				chb: "Check it",
				email: {
					required: "Please specify your email",
					email: "Correct format is name@domain.com"
				}
			}
		}
	 }
	);
   */
	
	//===== UI dialog =====//
	
	$( "#dialog-message" ).dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
			}
		}
	});
	
	$( "#opener" ).click(function() {
		$( "#dialog-message" ).dialog( "open" );
		return false;
	});	
	
	
	//===== PrettyPhoto lightbox plugin =====//
	
	//$("a[rel^='prettyPhoto']").prettyPhoto();
	
	
	//===== Dual select boxes =====//
	
	//$.configureBoxes();
	
	
	//===== Time picker =====//
	
	$('.timepicker').timeEntry({
		show24Hours: true, // 24 hours format
		showSeconds: true, // Show seconds?
		spinnerImage: 'images/ui/spinnerUpDown.png', // Arrows image
		spinnerSize: [17, 26, 0], // Image size
		spinnerIncDecOnly: true // Only up and down arrows
		});


	//===== File uploader =====//
	
//	$("#uploader").pluploadQueue({
//		runtimes : 'html5,html4',
//		url : 'php/upload.php',
//		max_file_size : '2mb',
//		unique_names : true,
//		filters : [
//			{title : "Image files", extensions : "jpg,gif,png"},
//			{title : "Zip files", extensions : "zip"}
//		]
//	});
	


	//===== File manager =====//	
	
	//$('#fileManager').elfinder({
	//	url : 'php/connector.php',
	//})
	

	//===== Alert windows =====//

	$(".bAlert").click( function() {
		jAlert('This is a custom alert box. Title and this text can be easily editted', 'Alert Dialog Sample');
	});
	
	$(".bConfirm").click( function() {
		jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
			jAlert('Confirmed: ' + r, 'Confirmation Results');
		});
	});
	
	$(".bPromt").click( function() {
		jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
			if( r ) alert('You entered ' + r);
		});
	});
	
	$(".bHtml").click( function() {
		jAlert('You can use HTML, such as <strong>bold</strong>, <em>italics</em>, and <u>underline</u>!');
	});


	//===== Accordion =====//		
	
	$('div.menu_body:eq(0)').show();
	$('.acc .head:eq(0)').show().css({color:"#2B6893"});
	
	$(".acc .head").click(function() {	
		$(this).css({color:"#2B6893"}).next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().css({color:"#404040"});
	});
	
	
	
	
	//===== WYSIWYG editor =====//
	/*
	$('.wysiwyg').wysiwyg({
		iFrameClass: "wysiwyg-input",
		controls: {
			bold          : { visible : true },
			italic        : { visible : true },
			underline     : { visible : true },
			strikeThrough : { visible : false },
			
			justifyLeft   : { visible : true },
			justifyCenter : { visible : true },
			justifyRight  : { visible : true },
			justifyFull   : { visible : true },
			
			indent  : { visible : true },
			outdent : { visible : true },
			
			subscript   : { visible : false },
			superscript : { visible : false },
			
			undo : { visible : true },
			redo : { visible : true },
			
			insertOrderedList    : { visible : true },
			insertUnorderedList  : { visible : true },
			insertHorizontalRule : { visible : false },

			h1: {
			visible: true,
			className: 'h1',
			command: ($.browser.msie || $.browser.safari) ? 'formatBlock' : 'heading',
			arguments: ($.browser.msie || $.browser.safari) ? '<h1>' : 'h1',
			tags: ['h1'],
			tooltip: 'Header 1'
			},
			h2: {
			visible: true,
			className: 'h2',
			command: ($.browser.msie || $.browser.safari) ? 'formatBlock' : 'heading',
			arguments: ($.browser.msie || $.browser.safari) ? '<h2>' : 'h2',
			tags: ['h2'],
			tooltip: 'Header 2'
			},
			h3: {
			visible: true,
			className: 'h3',
			command: ($.browser.msie || $.browser.safari) ? 'formatBlock' : 'heading',
			arguments: ($.browser.msie || $.browser.safari) ? '<h3>' : 'h3',
			tags: ['h3'],
			tooltip: 'Header 3'
			},
			h4: {
			visible: true,
			className: 'h4',
			command: ($.browser.msie || $.browser.safari) ? 'formatBlock' : 'heading',
			arguments: ($.browser.msie || $.browser.safari) ? '<h4>' : 'h4',
			tags: ['h4'],
			tooltip: 'Header 4'
			},
			h5: {
			visible: true,
			className: 'h5',
			command: ($.browser.msie || $.browser.safari) ? 'formatBlock' : 'heading',
			arguments: ($.browser.msie || $.browser.safari) ? '<h5>' : 'h5',
			tags: ['h5'],
			tooltip: 'Header 5'
			},
			h6: {
			visible: true,
			className: 'h6',
			command: ($.browser.msie || $.browser.safari) ? 'formatBlock' : 'heading',
			arguments: ($.browser.msie || $.browser.safari) ? '<h6>' : 'h6',
			tags: ['h6'],
			tooltip: 'Header 6'
			},
			
			cut   : { visible : true },
			copy  : { visible : true },
			paste : { visible : true },
			html  : { visible: true },
			increaseFontSize : { visible : false },
			decreaseFontSize : { visible : false },
			},
		events: {
			click: function(event) {
				if ($("#click-inform:checked").length > 0) {
					event.preventDefault();
					alert("You have clicked jWysiwyg content!");
				}
			}
		}
	});
	
	*/
	
	//$('.wysiwyg').wysiwyg("insertHtml", "Sample code");







	
	//===== ToTop =====//

	$().UItoTop({ easingType: 'easeOutQuart' });	
	
	
	//===== Spinner options =====//
	
	/*
	
	var itemList = [
		{url: "http://ejohn.org", title: "John Resig"},
		{url: "http://bassistance.de/", title: "J&ouml;rn Zaefferer"},
		{url: "http://snook.ca/jonathan/", title: "Jonathan Snook"},
		{url: "http://rdworth.org/", title: "Richard Worth"},
		{url: "http://www.paulbakaus.com/", title: "Paul Bakaus"},
		{url: "http://www.yehudakatz.com/", title: "Yehuda Katz"},
		{url: "http://www.azarask.in/", title: "Aza Raskin"},
		{url: "http://www.karlswedberg.com/", title: "Karl Swedberg"},
		{url: "http://scottjehl.com/", title: "Scott Jehl"},
		{url: "http://jdsharp.us/", title: "Jonathan Sharp"},
		{url: "http://www.kevinhoyt.org/", title: "Kevin Hoyt"},
		{url: "http://www.codylindley.com/", title: "Cody Lindley"},
		{url: "http://malsup.com/jquery/", title: "Mike Alsup"}
	];

	var opts = {
		's1': {decimals:2},
		's2': {stepping: 0.25},
		's3': {currency: '$'},
		's4': {},
		's5': {
			//
			// Two methods of adding external items to the spinner
			//
			// method 1: on initalisation call the add method directly and format html manually
			init: function(e, ui) {
				for (var i=0; i<itemList.length; i++) {
					ui.add('<a href="'+ itemList[i].url +'" target="_blank">'+ itemList[i].title +'</a>');
				}
			},

			// method 2: use the format and items options in combination
			format: '<a href="%(url)" target="_blank">%(title)</a>',
			items: itemList
		}
	};

	for (var n in opts)
		$("#"+n).spinner(opts[n]);

	$("button").click(function(e){
		var ns = $(this).attr('id').match(/(s\d)\-(\w+)$/);
		if (ns != null)
			$('#'+ns[1]).spinner( (ns[2] == 'create') ? opts[ns[1]] : ns[2]);
	});
	*/


	//===== Contacts list =====//
	/*
	$('#myList').listnav({ 
		initLetter: 'a', 
		includeAll: true, 
		includeOther: true, 
		flagDisabled: true, 
		noMatchText: 'Nothing matched your filter, please click another letter.', 
		prefixes: ['the','a'] ,
	});
	*/


	//===== ShowCode plugin for <pre> tag =====//

	/*
	$('.showCode').sourcerer('js html css php'); // Display all languages
	$('.showCodeJS').sourcerer('js'); // Display JS only
	$('.showCodeHTML').sourcerer('html'); // Display HTML only
	$('.showCodePHP').sourcerer('php'); // Display PHP only
	$('.showCodeCSS').sourcerer('css'); // Display CSS only
   */

	//===== Calendar =====//
   
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	/*
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},
		editable: true,
		events: [
			{
				title: 'All day event',
				start: new Date(y, m, 1)
			},
			{
				title: 'Long event',
				start: new Date(y, m, 5),
				end: new Date(y, m, 8)
			},
			{
				id: 999,
				title: 'Repeating event',
				start: new Date(y, m, 2, 16, 0),
				end: new Date(y, m, 3, 18, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating event',
				start: new Date(y, m, 9, 16, 0),
				end: new Date(y, m, 10, 18, 0),
				allDay: false
			},
			{
				title: 'Actually any color could be applied for background',
				start: new Date(y, m, 30, 10, 30),
				end: new Date(y, m, d+1, 14, 0),
				allDay: false,
				color: '#B55D5C'
			},
			{
				title: 'Lunch',
				start: new Date(y, m, 14, 12, 0),
				end: new Date(y, m, 15, 14, 0),
				allDay: false
			},
			{
				title: 'Birthday PARTY',
				start: new Date(y, m, 18),
				end: new Date(y, m, 20),
				allDay: false
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 27),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}
		]
	});
	
	*/
	//===== Dynamic data table =====//

	//oTable = $('#example').dataTable({
	//	"bJQueryUI": true,
	//	"sPaginationType": "full_numbers",
	//	"sDom": '<""f>t<"F"lp>'
	//});
	
	
	//===== Form elements styling =====//
	
	//$("select, input:checkbox, input:radio, input:file").uniform();
	
	//$("input:checkbox, input:radio, input:file").uniform();
	
	
	//===== Form validation engine =====//
   /*
	$("#valid").validationEngine();
	*/

	//===== Datepickers =====//

	$( ".datepicker" ).datepicker({ 
		defaultDate: +7,
		autoSize: true,
		dateFormat: 'yy-mm-dd',
	});	

	$( ".datepickerInline" ).datepicker({ 
		defaultDate: +7,
		autoSize: true,
		dateFormat: 'yy-mm-dd',
		numberOfMonths: 1
	});	


	//===== Progressbar (Jquery UI) =====//

	$( "#progressbar" ).progressbar({
			value: 37
	});
		
		
	//===== Tooltip =====//
		
	$('.leftDir').tipsy({fade: true, gravity: 'e'});
	$('.rightDir').tipsy({fade: true, gravity: 'w'});
	$('.topDir').tipsy({fade: true, gravity: 's'});
	$('.botDir').tipsy({fade: true, gravity: 'n'});

		
	//===== Information boxes =====//
		
	$(".hideit").click(function() {
		$(this).fadeTo(200, 0.00, function(){ //fade
			$(this).slideUp(300, function() { //slide up
				$(this).remove(); //then remove from the DOM
			});
		});
	});	
	

	//=====Resizable table columns =====//
	/*
	var onSampleResized = function(e){
		var columns = $(e.currentTarget).find("th");
		var msg = "columns widths: ";
		columns.each(function(){ msg += $(this).width() + "px; "; })
	};	

	$(".resize").colResizable({
		liveDrag:true, 
		gripInnerHtml:"<div class='grip'></div>", 
		draggingClass:"dragging", 
		onResize:onSampleResized});
   */

	//===== Left navigation submenu animation =====//	
		
	$("ul.sub li a").hover(function() {
	$(this).stop().animate({ color: "#3a6fa5" }, 400);
	},function() {
	$(this).stop().animate({ color: "#494949" }, 400);
	});
	
	
	//===== Image gallery control buttons =====//

	 $(".pics ul li").hover(
		  function() { $(this).children(".actions").show("fade", 200); },
		  function() { $(this).children(".actions").hide("fade", 200); }
	 );
	

	//===== Color picker =====//
   /*
	$('#colorpickerField').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});	
	*/
	
	//===== Autogrowing textarea =====//
	
	//$(".auto").autoGrow();
	

	//===== Autotabs. Inline data rows =====//

	//$('.onlyNums input').autotab_magic().autotab_filter('numeric');
	//$('.onlyText input').autotab_magic().autotab_filter('text');
	//$('.onlyAlpha input').autotab_magic().autotab_filter('alpha');
	//$('.onlyRegex input').autotab_magic().autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
	//$('.allUpper input').autotab_magic().autotab_filter({ format: 'alphanumeric', uppercase: true });
	
	
	//===== jQuery UI sliders =====//	
	
	$( ".uiSlider" ).slider();
	
	$( ".uiSliderInc" ).slider({
		value:100,
		min: 0,
		max: 500,
		step: 50,
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
		}
	});
	$( "#amount" ).val( "$" + $( ".uiSliderInc" ).slider( "value" ) );
		
	$( ".uiRangeSlider" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#rangeAmount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#rangeAmount" ).val( "$" + $( ".uiRangeSlider" ).slider( "values", 0 ) +" - $" + $( ".uiRangeSlider" ).slider( "values", 1 ));
			
	$( ".uiMinRange" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( "#minRangeAmount" ).val( "$" + ui.value );
		}
	});
	$( "#minRangeAmount" ).val( "$" + $( ".uiMinRange" ).slider( "value" ) );
	
	$( ".uiMaxRange" ).slider({
		range: "max",
		min: 1,
		max: 100,
		value: 20,
		slide: function( event, ui ) {
			$( "#maxRangeAmount" ).val( ui.value );
		}
	});
	$( "#maxRangeAmount" ).val( $( ".uiMaxRange" ).slider( "value" ) );	
	
	
	
	$( "#eq > span" ).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true,
			orientation: "vertical"
		});
	});
	
	
	//===== Breadcrumbs =====//	

	//$("#breadCrumb").jBreadCrumb();
	
	
	//===== Autofocus =====//	
	
	$('.autoF').focus();


	//===== Tabs =====//
		
	$.fn.simpleTabs = function(){ 
	
		//Default Action
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("activeTab").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	
		//On Click Event
		$("ul.tabs li").click(function() {
			$(this).parent().parent().find("ul.tabs li").removeClass("activeTab"); //Remove any "active" class
			$(this).addClass("activeTab"); //Add "active" class to selected tab
			$(this).parent().parent().find(".tab_content").hide(); //Hide all tab content
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab).show(); //Fade in the active content
			return false;
		});
	
	};//end function

	$("div[class^='widget']").simpleTabs(); //Run function on any div with class name of "Simple Tabs"


	//===== User nav dropdown =====//		

	$('.dd').click(function () {
		$('ul.menu_body').slideToggle(200);
	});
	
	$(document).bind('click', function(e) {
	var $clicked = $(e.target);
	if (! $clicked.parents().hasClass("dd"))
		$("ul.menu_body").slideUp(200);
	});
	



	
	$('.acts').click(function () {
		$('ul.actsBody').slideToggle(100);
	});
	
	
	//===== Collapsible elements management =====//
	
	$('.exp').collapsible({
		defaultOpen: 'current',
		cssOpen: 'active corner',
		cssClose: 'inactive',
		speed: 300
	});

	$('.opened').collapsible({
		defaultOpen: 'opened,toggleOpened',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});

	$('.closed').collapsible({
		defaultOpen: '',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	}); 
	
	





	
});

/*
,"top":50+"%","margin-top":-(modal_height/2)+"px"
,"top":o.top+"px"
*/



(function($){$.fn.extend({leanModal:function(options){var defaults={top:20,overlay:0.5,closeButton:null};var overlay=$("<div id='lean_overlay'></div>");$("body").append(overlay);options=$.extend(defaults,options);return this.each(function(){var o=options;$(this).click(function(e){$("body").css({"height":"100%"});$("body").css({"overflow":"hidden"});var modal_id=$(this).attr("href");$("#lean_overlay").click(function(){close_modal(modal_id)});$(document).keydown(function(e) {if (e.keyCode == 27) {close_modal(modal_id);}});$(o.closeButton).click(function(){close_modal(modal_id)});var modal_height=$(modal_id).outerHeight();var modal_width=$(modal_id).outerWidth();
$("#lean_overlay").css({"display":"block",opacity:0});$("#lean_overlay").fadeTo(200,o.overlay);$(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":999999,"left":50+"%","margin-left":-(modal_width/2)+"px","top":50+"%","margin-top":-(modal_height/2)+"px"});$(modal_id).fadeTo(200,1);e.preventDefault()})});function close_modal(modal_id){$("#lean_overlay").fadeOut(200);$(modal_id).css({"display":"none"});
$("body").css({"height":""});$("body").css({"overflow":"visible"});   
}}})})(jQuery);

function xModal() {
$('#lean_overlay').css({"display":"none"});
$('#wrk').css({"display":"none"});
$("body").css({"height":""});
$("body").css({"overflow":"visible"});   
}
