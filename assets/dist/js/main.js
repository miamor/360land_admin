!function(e){var t=function(e,t){this.init(e,t)};t.prototype={constructor:t,init:function(t,n){var r=this.$element=e(t);this.options=e.extend({},e.fn.radio.defaults,n);r.before(this.options.template);this.setState()},setState:function(){var e=this.$element,t=e.closest(".radio");e.prop("disabled")&&t.addClass("disabled");e.prop("checked")&&t.addClass("checked")},toggle:function(){var t="disabled",n="checked",r=this.$element,i=r.prop(n),s=r.closest(".radio"),o=r.closest("form").length?r.closest("form"):r.closest("body"),u=o.find(':radio[name="'+r.attr("name")+'"]'),a=e.Event("toggle");u.not(r).each(function(){var r=e(this),i=e(this).closest(".radio");if(r.prop(t)==false){i.removeClass(n)&&r.removeAttr(n).trigger("change")}});if(r.prop(t)==false){if(i==false)s.addClass(n)&&r.prop(n,true);r.trigger(a);if(i!==r.prop(n)){r.trigger("change")}}},setCheck:function(t){var n="checked",r=this.$element,i=r.closest(".radio"),s=t=="check"?true:false,o=r.prop(n),u=r.closest("form").length?r.closest("form"):r.closest("body"),a=u.find(':radio[name="'+r["attr"]("name")+'"]'),f=e.Event(t);a.not(r).each(function(){var t=e(this),r=e(this).closest(".radio");r.removeClass(n)&&t.removeAttr(n)});i[s?"addClass":"removeClass"](n)&&s?r.prop(n,n):r.removeAttr(n);r.trigger(f);if(o!==r.prop(n)){r.trigger("change")}}};var n=e.fn.radio;e.fn.radio=function(n){return this.each(function(){var r=e(this),i=r.data("radio"),s=e.extend({},e.fn.radio.defaults,r.data(),typeof n=="object"&&n);if(!i)r.data("radio",i=new t(this,s));if(n=="toggle")i.toggle();if(n=="check"||n=="uncheck")i.setCheck(n);else if(n)i.setState()})};e.fn.radio.defaults={template:'<span class="icons"><span class="first-icon fui-radio-unchecked"></span><span class="second-icon fui-radio-checked"></span></span>'};e.fn.radio.noConflict=function(){e.fn.radio=n;return this};e(document).on("click.radio.data-api","[data-toggle^=radio], .radio",function(t){var n=e(t.target);t&&t.preventDefault()&&t.stopPropagation();if(!n.hasClass("radio"))n=n.closest(".radio");n.find(":radio").radio("toggle")});e(function(){e('[data-toggle="radio"]').each(function(){var t=e(this);t.radio()})})}(window.jQuery);!function(e){var t=function(e,t){this.init(e,t)};t.prototype={constructor:t,init:function(t,n){var r=this.$element=e(t);this.options=e.extend({},e.fn.checkbox.defaults,n);r.before(this.options.template);this.setState()},setState:function(){var e=this.$element,t=e.closest(".checkbox");e.prop("disabled")&&t.addClass("disabled");e.prop("checked")&&t.addClass("checked")},toggle:function(){var t="checked",n=this.$element,r=n.closest(".checkbox"),i=n.prop(t),s=e.Event("toggle");if(n.prop("disabled")==false){r.toggleClass(t)&&i?n.removeAttr(t):n.prop(t,t);n.trigger(s).trigger("change")}},setCheck:function(t){var n="disabled",r="checked",i=this.$element,s=i.closest(".checkbox"),o=t=="check"?true:false,u=e.Event(t);s[o?"addClass":"removeClass"](r)&&o?i.prop(r,r):i.removeAttr(r);i.trigger(u).trigger("change")}};var n=e.fn.checkbox;e.fn.checkbox=function(n){return this.each(function(){var r=e(this),i=r.data("checkbox"),s=e.extend({},e.fn.checkbox.defaults,r.data(),typeof n=="object"&&n);if(!i)r.data("checkbox",i=new t(this,s));if(n=="toggle")i.toggle();if(n=="check"||n=="uncheck")i.setCheck(n);else if(n)i.setState()})};e.fn.checkbox.defaults={template:'<span class="icons"><span class="first-icon fui-checkbox-unchecked"></span><span class="second-icon fui-checkbox-checked"></span></span>'};e.fn.checkbox.noConflict=function(){e.fn.checkbox=n;return this};e(document).on("click.checkbox.data-api","[data-toggle^=checkbox], .checkbox",function(t){var n=e(t.target);if(t.target.tagName!="A"){t&&t.preventDefault()&&t.stopPropagation();if(!n.hasClass("checkbox"))n=n.closest(".checkbox");n.find(":checkbox").checkbox("toggle")}});e(function(){e('[data-toggle="checkbox"]').each(function(){var t=e(this);t.checkbox()})})}(window.jQuery);

!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b;return a.search_match||a.group_match?a.active_options>0?(b=document.createElement("li"),b.className="group-result",b.innerHTML=a.search_text,this.outerHTML(b)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);


(function($){
	$.fn.extend({
		donetyping: function (callback,timeout) {
			//timeout = timeout || 1e3; // 1 second default timeout
			timeout = timeout || 100
			var timeoutReference,
				doneTyping = function(el) {
					if (!timeoutReference) return;
					timeoutReference = null;
					callback.call(el);
				};
			return this.each (function (i,el) {
				var $el = $(el);
				// Chrome Fix (Use keyup over keypress to detect backspace)
				// thank you @palerdot
				$el.is(':input') && $el.on('keyup keypress',function(e) {
					// This catches the backspace button in chrome, but also prevents
					// the event from triggering too premptively. Without this line,
					// using tab/shift+tab will make the focused element fire the callback.
					if (e.type=='keyup' && e.keyCode!=8) return;

					// Check if timeout has been set. If it has, "reset" the clock and
					// start over again.
					if (timeoutReference) clearTimeout(timeoutReference);
					timeoutReference = setTimeout(function() {
						// if we made it here, our timeout has elapsed. Fire the
						// callback
						doneTyping(el);
					}, timeout);
				}).on('blur',function() {
					// If we can, fire the event since we're leaving the field
					doneTyping(el);
				});
			})
		}
	});
})(jQuery);


var isMobile = ($(window).width() <= 500 ? true : false);
var __uType = (localStorage.getItem('uType') ? localStorage.getItem('uType') : 'mod');
var API_URL = '//mappy.com.vn:8000/manager_'+__uType;
var API_URL_ALL = API_URL.split('/manager_')[0];
var __token = __userInfo = null;


ASSETS = MAIN_URL+"/assets";
CSS = ASSETS+"/dist/css";
IMG = ASSETS+"/dist/img";
JS = ASSETS+"/dist/js";
PLUGINS = ASSETS+"/plugins";
ACE_THEME = 'chrome';
var pl_page;
loading = '<div class="center loading">Loading <img src="'+IMG+'/loadingIcon.gif"/></div>';

jQuery.fx.interval = 50;

var duration = 5000;
var interval;

function objectifyForm(formArray) {//serialize data function
  	var returnArray = {};
  	for (var i = 0; i < formArray.length; i++){
    	returnArray[formArray[i]['name']] = formArray[i]['value'];
  	}
  	return returnArray;
}

function redirect(location) {
//	if (!time) time = 200;
//	setTimeout(function () {
		if (!location) location.reload();
		else window.location.href = location;
//	}, time)
}
$.fn.digits = function(){
	return this.each(function(){
		$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
	})
}

function getUserInfo () {
	console.log(API_URL);
    $.ajax({
        url: API_URL+'/info/',
        type: 'get',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
        },
        success: function (response) {
			response = response.data;
            localStorage.setItem('user_info', JSON.stringify(response));
            __userInfo = JSON.parse(localStorage.getItem('user_info'));
            console.log(__userInfo);
            //$('.nav-user').html('<img class="nav-user-avt" src=""/><h4 class="nav-user-name">'+__userInfo.username+'</h4>');
            $('.nav-user #me_login_link').hide();
            $('.nav-user #me_dropdown_info, .nav-user #me_logout_link').show();
            setUserInfoNav();
        },
        error: function (a, b, c) {
            console.log(a);
        }
    })
}

function setUserInfoNav () {
    if (__userInfo.avatar) $('.myAvt, #meinfo_avt').attr('src', __userInfo.avatar);
    $('.myID').attr('id', __userInfo.username);
    $('.myName, #meinfo_name').text(__userInfo.name.split(' ').reverse()[0]);
    $('#meinfo_uname').text(__userInfo.username);
    $('#meinfo_coins').text(__userInfo.coin);
    $('#meinfo_profile_link').attr('href', MAIN_URL+'/user/'+__userInfo.username);

	if (__userInfo.typemod != 1) {
		$('.menu-one-item[href*="user?type=coins&mode=request"]').remove();
	}

    if (isMobile) {
        //$('.nav-user-mobile').show().html('<a href="'+MAIN_URL+'/user/'+__userInfo.username+'">'+$('.nav-user .dropdown > a').html()+'</a>');
    }
}

function mtip(a, c, title, content) {
	$(".alert").length && $(".alert").remove();
	if (a && a.length) {
		if (a == 'alert') {
			$('body').append('<div class="the-board-fixed"></div><div class="alert-fixed alert-' + c + '"><a class="close" onclick="htip(\'just-add\')" data-dismiss="alert">\u00d7</a><strong>' + title + " </strong>" + content + "</div>");
		} else $(a).prepend('<div class="alert alert-' + c + ' just-add"><a class="close" onclick="htip(\'just-add\')" data-dismiss="alert">\u00d7</a><strong>' + title + " </strong>" + content + "</div>");
	} else $('body').append('<div class="alert alert-' + c + ' just-add"><a class="close" onclick="htip(\'just-add\')" data-dismiss="alert">\u00d7</a><strong>' + title + " </strong>" + content + "</div>");
	wi = $('.just-add').width()/2;
	$('.just-add').css("left", "calc(50% - "+wi+"px)").animate({
		bottom: "+=50"
	}, 200);
	stip('just-add')
}
function htip(a) {
	var l = $('.' + a).attr('class');
	if (l.indexOf('alerts') > -1) {
		$("." + a).slideUp(function () {
			$("." + a).remove().prev('.the-board-fixed').remove()
		})
	} else {
		$(".alert").animate({
			bottom: "-=150"
		}, 500, function () {
			$(".alert").remove().prev('.the-board-fixed').remove()
		})
	}
}
function stip(d) {
		$("." + d).fadeIn(1E3);
		setTimeout("htip('" + d + "')", 5E3)
}

function validator (a, href) {
	if (!a) a = '.bootstrap-validator-form';
//	console.log(a);
//	console.log(href);
	$(a).bootstrapValidator({
		excluded: [':disabled'],
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		live: 'disabled',
	}).on('error.form.bv', function (e) {
		e.preventDefault();
		var $form = $(e.target);
		$form.find('textarea').focus();
	}).on('success.form.bv', function (e) {
		e.preventDefault();
		var $form = $(e.target),
			validator = $form.data('bootstrapValidator'),
			submitButton = validator.getSubmitButton();
		formDatas = getFormData($form);
		formData = new FormData($(this)[0]);
//		console.log(formData);
		$form.children('*:visible').hide().addClass('visible hide-to-load');
		$form.append('<div class="spinner loading-sending"><div></div><div></div><div></div></div>');
//		console.log(formDatas);
		if ($form.is('.comment-form-feed') && !$form.is('.comment-form-status')) {
			$post = $(this).closest('.feed-load');
			type = $post.attr('data-type');
			id = $post.attr('data-iid');
//			action = MAIN_URL+'/'+type+'/'+id+'?do=reply';
			action = href+'&do=reply';
		} else {
			action = $form.attr('action');
		}
		if ($form.is('.comment-form-status')) type = 'status';
		//console.log(formData);
		$.ajax({
			url: action,
			type: 'post',
			data: formData,
			async: false,
			cache: false,
			contentType: false,
			processData: false,
			success: function (data) {
//				console.log(action);
//				console.log(formDatas);
				console.log(data);
				alertsContent = data.split(/\[content\]|\[\/content]/)[1];
				alertsType = data.split(/\[type\]|\[\/type\]/)[1];
				alertsDataID = data.split(/\[dataID\]|\[\/dataID\]/)[1];
				if (alertsType == 'success') {
					$form.find('textarea').val('');
					if ($form.find('.sceditor-container').length) {
						$form.find('.sceditor-container').prev('textarea').each(function () {
							$(this).val('').sceditor('instance').val('');
						})
					}
				}
				$form.addClass('just-sent').children('.spinner.loading-sending').remove();
				$form.children('*.visible.hide-to-load').show().removeClass('visible hide-to-load');
				if (alertsContent) mtip('', alertsType, '', alertsContent);
				$form.find('[type^="submit"]').attr('disabled', false);
				if ($form.is('.signup')) {
					if (alertsType == 'success') location.reload();
					else if (alertsDataID == 'username') $('[name="username"]').next('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').closest('.has-feedback').removeClass('has-success').addClass('has-error');
					else if (alertsDataID == 'password') $('[name="confirm_password"]').next('.form-control-feedback').removeClass('glyphicon-ok').addClass('glyphicon-remove').closest('.has-feedback').removeClass('has-success').addClass('has-error');
				}
				else if ($form.is('.ratings-form')) {
					table.ajax.reload(function (json) {
						$('.r-cmts').show();
						table.page('last').draw('page');
					});
				}
				else if ($form.is('.new-post')) {
					href = MAIN_URL+'/status/'+alertsDataID+'?temp=feed';
					$('#post-list').prepend('<div data-type="status" data-iid="'+alertsDataID+'" class="feed-load"><span class="feed-href hidden">'+href+'</span></div>');
					$this = $('.feed-load[data-type="status"][data-iid="'+alertsDataID+'"]');
					loadFeed(href, $this, alertsDataID, 'status');
				}
				else if ($form.is('.comment-form-feed')) {
					$form.find('.cmt-textarea').attr('readonly', false);
					if (alertsType == 'success') {
					meName = $('#top_navbar .s-title').text();
					meAvt = $('#top_navbar .avatar').attr('src');
					meUname = $('#top_navbar .myID').attr('id');
					ratingsHTML = '';
					if (type != 'status') {
						rate = $form.find('.rate-val').val();
						ratingsHTML += '<span class="ratings text-warning">';
						uPost = $form.closest('.one-group-feed').find('.feed-note-user').text();
						$fCoin = $post.find('.feed-coins strong');
						oldcoin = parseInt($fCoin.text());
						coin = parseInt(data.split(/\[coin\]|\[\/coin\]/)[1]);
						$fCoin.text(oldcoin*1+coin*1);
						for (i = 1; i <= 5; i++) {
							if (rate > i && rate < (i+1)) ratingsHTML += '<i class="fa fa-star-half-o"></i>';
							else if (rate < i) ratingsHTML += '<i class="fa fa-star-o"></i>';
							else ratingsHTML += '<i class="fa fa-star"></i>';
						}
						ratingsHTML += '</span>\
				<span class="coins-plus" title="Review của '+meName+' đã cộng thêm cho '+uPost+' '+coin+' điểm">\
					<span class="text-success">'+coin+'</span>\
				</span>';
					}
					$form.before('<div class="box-comment">\
					<div class="box-comment-left">\
						<a href="'+MAIN_URL+'/user/'+meUname+'" data-online="1" class="left">\
							<img class="img-sm img-circle" src="'+meAvt+'">\
						</a>\
					</div>\
					<div class="comment-text">\
						<span class="username">\
							<a href="'+MAIN_URL+'/user/'+meUname+'">'+meName+'</a>\
							'+ratingsHTML+'\
							<span class="text-muted pull-right">Just now</span>\
						</span><!-- /.username -->\
						'+alertsDataID+'</div><!-- /.comment-text -->\
				</div>');
				} // end if (alertsType == 'success')
				} else if (alertsDataID) {
					if (alertsType == 'success') redirect(alertsDataID);
				}
			},
			error: function (data) {
				console.log(data);
				$form.addClass('just-sent').children('.spinner.loading-sending').remove();
				$form.children('*.visible.hide-to-load').show().removeClass('visible hide-to-load');
//				mtip('.bootstrap-validator-form', 'error', '', 'Oops! Seems like something went wrong. Please contact the administrators for help.')
			}
		})
	});

	if ($('.btn-file').length > 0){
		$(document).on('change', '.btn-file :file', function() {
				"use strict";
				var input = $(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
				input.trigger('fileselect', [numFiles, label]);
		});
		$('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.input-group').find(':text'),
				log = numFiles > 1 ? numFiles + ' files selected' : label;
			if( input.length ) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});
	}
}

function goToByScroll (id) {
	$('html,body').animate({
		scrollTop: $("#"+id).offset().top
	}, 'slow');
}

function initEmoFBList () {
	var emoFB = {};
	var emoFB_more = {};
	for (var b = 0, a, c = 0; 239 > c; c++) {
		switch (c) {
			case 210:
				a = "o.O";
				break;
			case 211:
				a = "O.o";
				break;
			case 212:
				a = ":'(";
				break;
			case 213:
				a = "3:)";
				break;
			case 214:
				a = ":(";
				break;
			case 215:
				a = ":O";
				break;
			case 216:
				a = "8)";
				break;
			case 217:
				a = ":D";
				break;
			case 218:
				a = "&gt;:(";
				break;
			case 219:
				a = "&lt;3";
				break;
			case 220:
				a = "^_^";
				break;
			case 221:
				a = ":*";
				break;
			case 222:
				a = ":v";
				break;
			case 223:
				a = '&lt;(")';
				break;
			case 224:
				a = ":poop:";
				break;
			case 225:
				a = ":putnam:";
				break;
			case 226:
				a = "(^^^)";
				break;
			case 227:
				a = ":)";
				break;
			case 228:
				a = "-_-";
				break;
			case 229:
				a = "8|";
				break;
			case 230:
				a = ":P";
				break;
			case 231:
				a = ":/";
				break;
			case 232:
				a = "&gt;:O";
				break;
			case 233:
				a = ";)";
				break;
			case 234:
				a = "(y)";
				break;
			case 235:
				a = ":3";
				break;
			case 236:
				a = ":|]";
				break;
			case 237:
				a = "O:)";
				break;
			default:
				a = ":fb" + c + ":"
		}
		b -= 17;
		if ((c > 209 && c < 238) || (c > 146 && c < 191) || c == 193 || c == 79 || c == 200)
			emoFB[a] = "0 " + b + "px"
		else emoFB_more[a] = "0 " + b + "px"
//		emoFB[c] = {'key': a, 'position': '0  '+b+'px'}
	};
	emoList = {'dropdown': emoFB, 'more': emoFB_more};
	return emoList;
}
function initEmojiList () {
	var emo = {};
	var emo_more = {};
	for (var t = 0, l = 0, a, c = 0; 257 > c; c++) {
		switch (c) {
			default:
				a = ":fb" + c + ":"
		}
		if (c > 16 && c%16 == 0) {
			t += 49;
		}
		if (c%16 == 0) l = 0;
		else l += 49;
		if (c >= 0 && c < 71)
			emo[a] = "-"+l+"px -"+t+"px"
		else emo_more[a] = "-"+l+"px -"+t+"px"
	};
	emoList = {'dropdown': emo, 'more': emo_more};
	return emoList;
}

function sce (a) {
	$(a).find('textarea').not('.one-cmt textarea, .non-sce, .non-me, .ace_text-input, .add-comment-line-textarea, .comment-form-feed textarea, .comment-form-status textarea, .stt-form textarea').each(function () {
/*		emoList = initEmoFBList();
		emoListStr = JSON.stringify(emoList);
*/		$(this).sceditor({
			//plugins: "bbcode",
			style: PLUGINS+"/sceditor/minified/jquery.sceditor.default.min.css",
			parserOptions: {
				breakAfterBlock: false
			},
			toolbar:	'bold,italic,underline,strike,left,center,right,justify,' +
				'font,size,color,removeformat,bulletlist,orderedlist,' +
				'quote,horizontalrule,image,email,link,unlink,emoticon,source',
/*			emoticons: {
				dropdown: emoList.dropdown,
				more: emoList.more
			},
*/			convertEmoticons: false
		}).sceditor('instance');
	});
	$(a).find('.stt-form textarea').each(function () {
		$(this).sceditor({
			//plugins: "bbcode",
			style: PLUGINS+"/sceditor/minified/jquery.sceditor.sttform.min.css",
			parserOptions: {
				breakAfterBlock: false
			},
			toolbar:	'bold,italic,underline,strike,' +
				'bulletlist,orderedlist,' +
				'image,email,link,unlink,emoticon,removeformat',
/*			emoticons: {
				dropdown: emoList.dropdown,
				more: emoList.more
			},
*/			convertEmoticons: false
		}).sceditor('instance');
	});
	$(a).find('textarea.add-comment-line-textarea').each(function () {
		$(this).sceditor({
//			//plugins: "bbcode",
			style: PLUGINS+"/sceditor/minified/jquery.sceditor.default.min.css",
			toolbar:	'bold,italic,underline,strike,' +
				'color,removeformat,' +
				'link,unlink,emoticon,' +
				'source',
		}).sceditor('instance');
	})
}


function getFormData ($form) {
	if ($form.find('.sceditor-container').length) {
		$form.find('.sceditor-container').each(function () {
			var vl = $(this).prev('textarea').sceditor('instance').val();
//			var vl = $(this).prev('textarea').sceditor('instance').getSourceEditorValue('bbcode');
			//vl = $(this).prev("textarea").sceditor('instance').fromBBCode(vl, true);
			$(this).prev('textarea').val(vl);
		})
	}
	formData = $form.serialize();
	return formData;
}

function choosen (a) {
	"use strict";
	var configChosen = {
		'.chosen-select'           : {},
		'.chosen-select-deselect'  : {allow_single_deselect:true},
		'.chosen-select-no-single' : {disable_search_threshold:10},
		'.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
		'.chosen-select-width'     : {width:"100px"}
	}
	for (var selector in configChosen) {
		if (a) $(a).find(selector).chosen(configChosen[selector]);
		else $(selector).chosen(configChosen[selector]);
	}
}

function flatApp () {
	$(':checkbox').parent('label').addClass('checkbox');
    $(':radio').parent('label').addClass('radio');
    if ($(':checkbox').length) $(':checkbox').not('[data-toggle="switch"], .onoffswitch-checkbox').checkbox();
    if ($(':radio').length) $(':radio').radio();

	$('input[type="submit"], button, .button').not('[class*="btn "]').not('[data-online]').addClass('btn btn-primary');
	$('input[type="reset"]').addClass('btn btn-default');

	if ($('.bootstrap-validator-form').length) validator();
	//sce('#main-content');
	if ($('.chosen-select').length) choosen();
//	icons();
/*	$('.tooltip').remove();
	$('.tooltips').tooltip({
		selector: '*:not(".sceditor-dropdown img, #ui-datepicker-div a, #fancybox-buttons li a, #fancybox-buttons li, .fancybox-overlay li, .fancybox-overlay span, .fancybox-overlay div, .fancybox-overlay a")',
		container: "body"
	});
/*	$('.old-price,.new-price,.min-price,.max-price').digits();
	if ($('.collapse').length) {
		"use strict";
		$('.collapse').on('show.bs.collapse', function() {
			var id = $(this).attr('id');
			$('button.to-collapse[data-target="#' + id + '"]').html('<i class="fa fa-chevron-up"></i>');
		});
		$('.collapse').on('hide.bs.collapse', function() {
			var id = $(this).attr('id');
			$('button.to-collapse[data-target="#' + id + '"]').html('<i class="fa fa-chevron-down"></i>');
		});

		$('.collapse').on('show.bs.collapse', function() {
			var id = $(this).attr('id');
			$('a.block-collapse[href="#' + id + '"] span.right-icon').html('<i class="glyphicon glyphicon-minus icon-collapse"></i>');
		});
		$('.collapse').on('hide.bs.collapse', function() {
			var id = $(this).attr('id');
			$('a.block-collapse[href="#' + id + '"] span.right-icon').html('<i class="glyphicon glyphicon-plus icon-collapse"></i>');
		});
	}*/
}

function openInNewTab (url) {
	var $a = $('<a/>').appendTo('body');
	$a.attr("href", url).attr("target", "_blank").click();
	window.open(url);
}

//function popup (href, push_href = true) {
function popup (href, push_href) {
	old_href = window.location.href;
	console.log(href);
	if (href && push_href) history.pushState('', '', href);
	var topp = $(document).scrollTop() + 100;
	$('.popup-content').slideDown(400, function () {
		$('body').addClass('fixed');
		sce('popup-content', 'class');
		flatApp();
		$(this).css({
			'overflow': 'visible'
		})
	}).css('top', topp);
	$('.popup-content [role="close"]').click(function () {
		remove_popup(href, push_href = true)
	});
}
function remove_popup (href) {
	$('.popup-content').slideUp(400, function () {
		$('.popup').remove();
		$('body').removeClass('fixed');
		if (href && push_href) history.pushState('', '', old_href);
	})
}

function popup_html (html) {
	pHtml = '<div class="popup popup-dark"><div class="popup-inner">';
	pHtml += '	<div class="popup-content hide">';
	pHtml += '		<a class="popup-btn" role="close"></a>';
	pHtml += html;
	pHtml += '	</div>';
	pHtml += '</div>';
	$('body').addClass('fixed').append(pHtml);
	var topp = $(document).scrollTop() + 100;
	$('.popup-content').slideDown(400, function () {
		sce('popup-content', 'class');
		flatApp();
		$(this).css({
			'overflow': 'visible'
		}).removeClass('hide')
	}).css('top', topp);
	$('.popup-content [role="close"]').click(function () {
		remove_popup()
	});
}

function popup_page (href) {
	pHtml = '<div class="popup popup-dark"><div class="popup-inner">';
	pHtml += '	<div class="popup-content hide">';
	pHtml += '		<a class="popup-btn" role="close"></a>';
	pHtml += '		<div class="popup-section section-light"></div>';
	pHtml += '	</div>';
	pHtml += '</div>';
	$('body').addClass('fixeds').append(pHtml);
	$.get(href, function (data) {
		$('.popup-content .popup-section').html(data);
		flatApp();
	});
	var topp = $(document).scrollTop() + 100;
	$('.popup-content').slideDown(400, function () {
		$(this).css({
			'overflow': 'visible'
		}).removeClass('hide')
	}).css('top', topp);
	$('.popup-content [role="close"]').click(function () {
		remove_popup()
	});
}

function activeTab (tab) {
	$('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

function chat () {
	$.get(MAIN_URL+'/chat?v=view', function (data) {
		$('#right-side').html(data);
//		runChat()
	})
}

function setRead (a) {
	$.get(MAIN_URL+'/noti/'+a+'?do=setRead', function (data) {
		console.log(data);
		$('.notification-load .one-noti[data-id="'+a+'"]').attr('data-new', 0);
	})
}

function getNoti () {
	$.get(MAIN_URL+'/noti?do=get', function (data) {
		$('.notification-load').html(data);
		var new_num = $('.notification-load .one-noti[data-new="1"]').length;
		if (new_num > 0) $('.noti-new-num').show().text(new_num);
		else $('.noti-new-num').hide();
		$('.notification-load .one-noti[data-new="1"] .noti-post-link').each(function () {
			$(this).click(function () {
				setRead($(this).closest('.one-noti').attr('data-id'));
				location.href = $(this).attr('href');
				return false;
			})
		})
	})
}


var checkSession_Interval = null;
var checkSession = function() {
    var currentSec = Math.floor(Date.now()/1000);
    var loginSec = parseInt(localStorage.getItem('login_time'));
    var s = currentSec - loginSec;
    //console.log(s);
    if (s > 130*60) { // > 30 min
    //if (s >= 3) {
        // logout
        logout(true)
    }
}
checkSession_Interval = setInterval(checkSession, 1200);


function logout (autoLoggedOut = false) {
    clearInterval(checkSession_Interval);
    localStorage.removeItem('login_time');
    localStorage.removeItem('token');
    localStorage.removeItem('user_info');
    __userInfo = __token = null;
    console.log('Logged out!');
    $('.nav-user #me_login_link').show();
    $('.nav-user #me_dropdown_info, .nav-user #me_logout_link').hide();
    if (autoLoggedOut) loadLoginPopup(autoLoggedOut);
    else location.reload();
}

function logoutBtn() {
	$('[href*="/logout"]').click(function () {
        //popup('<div class="popup-section section-light">Đang đăng xuất khỏi tài khoản <b>'+__userInfo.username+'</b>...</div>');
		mtip('', 'info', '', 'Đang đăng xuất khỏi tài khoản <b>'+__userInfo.username+'</b>...')
        logout();
        setTimeout(function () {
            remove_popup();
        }, 1000);
        return false
    });
}

jQuery(document).ready(function($){
	flatApp();

	logoutBtn();

	if (API_URL.indexOf("manager_mod") > -1) {
	    $(".smod-box").remove();
	}

	if (localStorage.getItem('token')) {
        __token = localStorage.getItem('token');
        if (!localStorage.getItem('user_info')) {
            getUserInfo();
        } else {
            __userInfo = JSON.parse(localStorage.getItem('user_info'));
            console.log(__userInfo);
            //$('.nav-user').html('<img class="nav-user-avt" src=""/><h4 class="nav-user-name">'+__userInfo.username+'</h4>');
            $('.nav-user #me_login_link').hide();
            $('.nav-user #me_dropdown_info, .nav-user #me_logout_link').show();
            setUserInfoNav();
        }

		//getNoti();
		$('.left-oneli').click(function () {
			id = $(this).attr('id');
			left(id);
			return false
		});
		if ($('#right-side').length) runChat();
		$('.menu-one-item[href="'+window.location.href+'"]').addClass('active');
	} else {
		if (location.href.indexOf('login') <= -1) location.href = MAIN_URL+'/login';
        $('.nav-user #me_login_link').show();
        $('.nav-user #me_dropdown_info, .nav-user #me_logout_link').hide();
        if (!isMobile) {
            $('#me_login_link').click(function () {
                loadLoginPopup();
                return false
            })
        } else {
            $('.nav-user-mobile').show().html('<a href="'+MAIN_URL+'/login" class="loginlink"><i class="fa fa-ellipsis-h"></i></a>');
        }
    }

})
