/**
 * User: Rainer Wittmann
 * Date: 12.10.12
 * Time: 13:50
 * Copyright: Spirit EDV-Beratung AG
 * http://www.spirit.de
 **/

// Exposing JSLQ101 as global var
var JSLQ101 = window.JSLQ101 || {};

(function ($) {
    // examples: stores runCode() per example
    JSLQ101.examples = [];

    // results: stores $.getJSON data.d.results
    JSLQ101.results = [];

    // kayValId: stored key/Id pairs to match ?eid=XXX query string with array index(key)
    JSLQ101.keyValId = [];

    //params: stored querystring params. Currently only eid (val.Id) will be used
    JSLQ101.params = getParams();

    //disqusDiv: cached jQuery object
    JSLQ101.disqusDiv = $('#disqus_thread');

    // Static JSON exported from internal SharePoint site (_vti_bin/listdata.svc/JSLQ101)
    $.getJSON('examples/json/1.js', function (data) {
        var items = [];

        JSLQ101.results = data.d.results;

        $.each(data.d.results, function (key, val) {

            JSLQ101.examples.push({ runCode:function () {
                eval(val.Code);
            } });

            JSLQ101.keyValId.push(val.Id);

            items.push('<div id="example' + val.Id + '" class="panel radius anchorLink">');
            items.push('<h4>Example ' + (key + 1) + ": " + val.Title + '</h4>');
            items.push('<p>' + val.Description + '</p>');
            items.push('<pre><code data-language="javascript">' + val.Code + '</code></pre>');
            items.push('<a href="#" class="button" onclick="JSLQ101.logResults(' +key + ');return false;">Run example ' + val.Id + '</a>&nbsp;');
            items.push('<a href="#" class="secondary button feedback" data-disqus-identifier="' + val.Id +
                '" onclick="JSLQ101.disqusReset(' + key + ');return false;">Feedback</a>');
            items.push('</div>');
        });

        $('<ul/>', {
            'class':'example-list',
            html:items.join('')
        }).appendTo('#dynExamples');

        //Highlight code after appending
        Rainbow.color();

        // Check if page is called with an eid query string. Load feedback and scroll to it.
        if (JSLQ101.params.eid) {
            JSLQ101.scrollToComment();
        }
    });

    JSLQ101.scrollToComment = function(){
        // Get the current key based on eid (val.Id) query string
        var key = JSLQ101.keyValId.indexOf(parseInt(JSLQ101.params.eid, 10));
        var val = JSLQ101.results[key];
        var destination = $('#example' + val.Id).offset().top;

        // Setting vars required by disqus
        window.disqus_identifier = val.Id;
        window.disqus_url = 'http://jslq.spirit.de/?cid=' + val.ChapterId + '&eid=' + val.Id;
        window.disqus__title = 'Example ' + (key + 1) + ": " + val.Title;

        $('#disqus_thread').appendTo('#example' + val.Id);
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop:destination}, 1100);
    };

    JSLQ101.logResults =  function (key){
        console.info('Example ' + (key +1));
        JSLQ101.examples[key].runCode();
    };

    /**
     *
     * @param key (int) index for JSLQ101.results
     */
    JSLQ101.disqusReset = function (key) {
        var val = JSLQ101.results[key];
        var destination;

        // See http://help.disqus.com/customer/portal/articles/472107
        // Classic query strings are used in this.page.url instead of hashbang
        DISQUS.reset({
            reload:true,
            config:function () {
                this.page.identifier = val.Id;
                this.page.url = 'http://jslq.spirit.de/?cid=' + val.ChapterId + '&eid=' + val.Id;
                this.page.title = 'Example ' + (key + 1) + ": " + val.Title;
            }
        });

        // Move $('#disqus_thread') to current example and scroll to it
        $('#disqus_thread').appendTo('#example' + val.Id)
            .promise().done(function () {
                destination = $('#example' + val.Id).offset().top;
                $("html:not(:animated),body:not(:animated)").animate({ scrollTop:destination}, 600);
            });
        // Adding load feedback button
        $('#siteFeedback').html($('<a href="#" onclick="JSLQ101.reloadDisqus(); return false">load feedback</a>'));
    };

    // Reload disqus to show site comments
    JSLQ101.reloadDisqus = function () {

        DISQUS.reset({
            reload:true,
            config:function () {
                this.page.identifier = 'Default';
                this.page.url = 'http://jslq.spirit.de';
            }
        });

        // Overwrite #siteFeedback
        $('#siteFeedback').html( $('#disqus_thread') );
    };


    // Returning the params object
    function getParams() {
        var params = {};
        if (location.search) {
            location.search.split('?')[1].split('&').forEach(function (param) {
                var key = param.split('=')[0],
                    val = decodeURIComponent(param.split('=')[1]);
                params[key] = val;
            });
        }
        return params;
    }

})(jQuery);


