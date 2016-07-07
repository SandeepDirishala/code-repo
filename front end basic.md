Good to use stuff
====================
<h4>Basic Stuff</h4>
<ul>
<li><strong>Margin:</strong>  declares margin between html element and the elements around it.</li>
<li><strong>Padding:</strong> distance between the border of an html element and the content within it.</li> 
<li><strong>Boarder: </strong>thin line of separation between margin and padding.</li>
<li><strong>Positioning:</strong> positioning properties are not inheritable how the elements are positioned (position:value)</li> 
<li><strong>Fixed and Absolute:</strong> does not occupy any space on regular flow of the DOM ,but placed above the DOM, Fixed positioning wrt the window, Absolute is positioned relative to its first positioned (non static) ancestor element.</li>
<li><strong>Static and Relative:</strong> follows the regular flow and occupies space in the DOM, static cannot have top and right properties, Relative can have this properties. Relative is wrt its normal position </li>
<li><strong>Float :</strong> Float property changes how text and or images within an element are displayed. Float: value; (value can be left, right, none)</li>
<li><strong>Overflow:</strong> Control what elements contents will do if it overflows its boundaries. overflow:value; (value can be auto,hidden, visible,scroll)</li>
<li><strong>Z-index:</strong> to control the layer order of positioned elements. z-index:value;(value can be auto, number [higher the no hogher the level])</li>
<li><strong>Block:</strong> Creates a line break before and after the element</li>
<li><strong>Inline:</strong> No line break is created</li>
<li><strong>List Item:</strong> Creates a line break before and after the element and adds a list item marker.</li>
<li><strong>None:</strong> Makes an element not display on the page.</li>
<li><strong>text-shadow</strong> has h-shadow v-shadow blur and color
</ul>
<a href="http://www.cssflow.com/">CSS Flow </a> <br>
<a href="http://www.quackit.com/">All CSS, HTML properties and tags listed </a> <br>

<h4> HTML5  </h4>
<a href="http://html5doctor.com/"> HTML5 All tags listed </a><br>
<a href="http://www.htmlfivewow.com/slide1"> HTML5 Wow and the How </a><br>
<a href="http://html5-demos.appspot.com/static/html5-whats-new/template/index.html#1">HTML5 Whats new </a><br>


<h4>Good to Know Stuff</h4>
<h4> SASS </h4>
<p> Sass is a <strong> preprocessor</strong> that lets to use features like varibles, nesting, mixins, inheritance and save it out as a normal CSS</p>
<p>Sass is an extension of CSS that adds power and elegance to basic language. It allows you to use</p>
<ul>
  <li>Variables <pre>$ font-stack :Helvitica</pre></li> 
  <li>Partials<pre>_reset.scss in base.scss use @import ‘reset’    one scss to other scss file</pre> </li> 
  <li>Mixins <pre>@mixin name($radius){border-radius:$radius }   .box {@include name(10px)</pre></li>
  <li>Nesting <pre>nav{ul{} li{} a{}} rather than nav ul{} nav li{} nav a{} </pre></li>
  <li>Extend <pre>One selctor to other selector   @extend, literal meaning is to use a bunch of css properties from once selector to other</pre></li>
</ul>
<a href="http://sass-lang.com/guide">SASS Basic Reference</a> <br>
<a href="http://minamarkham.github.io/sassy-starter/docs/"> Quick reference SASS doc </a>

<h4> Borubon Neat</h4>
<p> Light weight semantic <strong> grid framework</strong> buily on top of Bourbon and Sass. It relies entirely on Sass Mixins </p>
<pre> content coming up.....</pre>

<h4> Handlebars </h4>
<p> Handlebars provide the power necessary to let you build semantic templates effectively. Handlebar is a <strong>compiler </strong> built with javascript function. This derived javascript function then takes one parameter, an object-your data-and it returns a string with the HTML and the object properties'values inserted intot the HTML. There are three main pieces of code you use of Handlebars templating</p>
  <ol>
    <li>Handlebars expressions <pre>{{ content}} : content can be a variable or a helper function with or without parameters <br>{{article.title}}  :lookup the article property in the current context, then look for title in the result                     <br>{{{content}}}  :if you don’t want handlebar to escape a value use {{{
&lt;div&gt; Name :{{customerName}}&lt;/div&gt; :customerName variable is a property that will be by the Handlebars.Compile function 
</pre> </li>
    <li>Data (or Context) <pre>The data object is called the context; this object can be comprised of arrays (can use handlebars each helper), strings, numbers, other objects or a combination of all of these.</pre></li>
    <li>The Handlebars Compile Function <pre>Compile the template with the Handlebars .compile function
        Then use that compiled function to invoke the data object passed to it </pre></li>
 </ol>
<h5><i> Handlebar built in helpers </i></h5>
<table>
<tr> <td> {{#each}} </td><td>to iterate over an array</td><tr>
<tr> <td> {{#if}} </td><td>It checks for truthy values such as true, any non-empty or non null value, it can not take conditional logic like if i>10, only checks for truthy values</td><tr>
<tr> <td>{{else}} </td><td>It can be used with the if block or any other block, cannot exist on its own</td><tr>
<tr> <td> {{#unless}} </td><td>The content between the unless block only renders if the unless expression evaluates to a falsy value</td><tr>
<tr> <td>  {{#with}} </td><td>To target the specific property of the object, use with block to target the groupName property where we need access to its values</td><tr>
</table>

<h5><i> Handlebar custom helpers </i></h5>
<p>There are two typer of custom helpers: custom function helpers, custom block helpers</p>
<p>Custom function helper is simply a helper that does not use a block, Custom helpers are created in the JavaScript code, not inside the Handlebars template </p>
<ul> <li>register the function using Handlebars.registerHelper method</li>
<li>This method takes a string (the name of the helper) as first parameter and function with any number of parameters as the second parameter</li>
</ul>
<p>Custom block helper is a helper with a block, When we register a custom block helper, Handlebars automatically adds an options object as the last parameter in the callback function.  And the options object has an fn method, a hash object, and an inverse method.</p>
<ul>
<li>Custom block helper can be placed anywhere in the template, we can pass any number of parameters in the template</li>
<table>
<tr><td>Options.fn </td><td>takes in object as a parameter that it uses as a context</td></tr>
<tr><td>Options.inverse  </td><td>inverse method is used as the else section of any block statement</td></tr>
<tr><td>Options.hash </td><td>Handlebars expressions take not only strings and variables as arguments, but you can pass key-value pairs separated by spaces as well. Invocation of the Handlebars expression with the key-value pairs as parameters will be added automatically onto the hash object in the helper callback function </td></tr>
</table>
</ul>

<h4> Requirejs</h4>
<p>RequireJS takes a different approach to script loading than traditional &lt;script&gt; tags. While it can also run fast and optimize well, the primary goal is to encourage modular code. As part of that, it encourages using module IDs instead of URLs for script tags.</p>
<pre>&lt;script data-main="scripts/main" src="scripts/require.js"&gt; &lt;/script&gt;</pre>
<p>data-main: is the attribute that tells require.js to load script/main.js after require.js loads</p>
<p>Inside main.js you can use require() to load any other script that needs to run. This ensures a single point entry, since data-main script you specify is loaded asynchronously.</p>
<pre>require (["helper/util"], function(util) {
}
</pre>
<p>Require.js by default assumes that all dependencies are scripts, so it does not expect to see a trailing “.js” suffix on module IDs.</p>
<p>Defining module: module is different from traditional script file; a well scoped object that avoids polluting the global namespace is defined.</p>
<pre>define(function () {
 
  function method (x) {
    return x + x;
  }
 
  return {
    someValue: 'foobar',
    myMethod: method
  }
});
</pre>
<p>This code would make up the entirety of our JavaScript file for this module. Nothing should be declared outside of a single define call. If this code was saved in my/utils.js, this module would be defined as the module “my/utils”.</p>

<h4>Backbone</h4>
<p>Backbone.js gives structure to web applications by providing models with key-value binding and custom events, <ul><li>collections with a rich API of enumerable functions</li><li> views with declarative event handling </li> <li>connects it all to your existing API over a RESTful JSON interface </li></P>
<pre>Detailed content of backbone model,event and view coming up....</pre>

<h4>Marionette</h4>
<p>Backbone.Marionette is a composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications. It is a collection of common design and implementation patterns found in applications.</p>
<pre>Detailed content coming up....</pre>

<h4>jquery underscore </h4>
<p>for data manipulation : Underscore provides 80-odd functions that support both the usual functional suspects: map, select, invoke — as well as more specialized helpers: function binding, JavaScript templating, deep equality testing, and so on. It delegates to built-in functions, if present, so modern browsers will use the native implementations of forEach, map, reduce, filter, every, some and indexOf.</p>
<pre>Detailed content coming up....</pre>

<h4>Grunt </h4>
<p>It’s a task runner, features: helps in Work in as small chunks of CSS and JavaScript, Compress your CSS and minify your JavaScript, Optimize your images</p>
<pre>Detailed content coming up....</pre>

<h4>Angular</h4>
<p>Open source webframework aim for making development and testing tasks easier for web developers, it has no library dependencies. Angular teaches the browser how to be an ideal partner with any server technology by making use of dependency injection and inversion of control.</p>
<p><strong>Directives:</strong> used to create custom and reusable HTML components, which ca be used to hide complex DOM structure and decorate certain elements with behavior. Prefaced with ng-, all the Directives take place in HTML attributes and work as standalone elements.</p>
<table>
<tr> <td><strong> ng-app:</strong> </td><td>applications root element and placed in the <body> or <html> tags. <html ng-app>is also used to declare a page as an angular application.</td><tr>
<tr> <td><strong> ng-bind:</strong> </td><td>it replaces the text content of a HTML component with value of  expression and updates the text  content with the changes made in the value of that expression.</td><tr>
<tr> <td><strong> ng-controller:</strong> </td><td>it is used to define a javascript controller class to evaluate HTML expressions.</td><tr>
<tr> <td><strong> ng-model:</strong> </td><td>the ng-modal attribute is similar to ng-bind, except it is responsible for two-way data binding between the scope defined in the model and the view.</td><tr>
<tr> <td><strong> ng-repeat: </strong> </td><td>It instantiates a template once per item, to which the loop variable is set, from a collection.</td><tr>
<tr> <td><strong> ng-class: </strong> </td><td>this allows the class variable to load dynamically.</td><tr>
<tr> <td><strong> ng-If: </strong> </td><td>This basic if statement is used to re-insert or eliminate an element from the DOM, depending on the condition is true or false.</td><tr>
<tr> <td><strong> ng-hide and ng-show</strong> </td><td>according to Boolean expression’s value, these attributes conditionally display or hide element.</td><tr>
</table>
<h5><i>Data-binding in Angular</i></h5>
<p>Data-binding is second most powerful feature in AngularJS, it eliminates unnecessary code for manipulating, traversing and listening to DOM events. Generally in most templating system, merge of template and model into a view happens one time, changes made into the model component and other sections of the view after this one time merge will not reflect In the model.</p>
<p>In Angular two way data binding take place it automatically synchronizes the data between the model and view, and vice versa.
</p>
<p><strong>Dependency Injection:</strong>AngularJS comes with built in injector that is in charge of creating components, looking for dependencies and passing them to other components when needed.</p>
<p>In Angular templates are written with HTML, containing Angular-specific components and attributes.</p>
<p><strong>AngularJS Batarang</strong> is a chrome plug in for debugging angular applications on browser.</p>

<h4>XAMPP</h4>
<p>XAMPP stands for Cross-Platform (X), Apache (A), MySQL (M), PHP (P) and Perl (P). It is a simple, lightweight Apache distribution that makes it extremely easy for developers to create a local web server for testing purposes</p>
<ul><li><strong>Apache:</strong> Apache is the actual web server application that processes and delivers web content to a computer. Apache is the most popular web server online, powering nearly 54% of all websites</li></ul>
<p>once installed go to this path and place the dist :<pre>C:\xampp\tomcat\webapps\ROOT </pre>  and start the tomcat server </p>

<h4>Tools </h4>
<ul> <li>beyond compare</li>
<li><a href="http://uptodate.frontendrescue.org/">All Mix Fruit juice for Frontend technologies</a></li>
<li><a href="https://www.draw.io/">Drawing flow charts</a></li>
<li><a href="http://placehold.it">Place holder</a></li>
<li><a href="http://lorempixel.com/">LoremPixel</a></li>
<li><a href="https://pixlr.com/">To create opaque images</a></li>
</ul>

<h4>HTTP Explained </h4>
<h4>HTTP Explained </h4>Is a request/response protocol between the browser(client) and the web server
http request from client to the server contains all the information server needs to send the response

HTTP GET:get requests asks for data and does not modify any data on the server, typing a url in the browser , clicking on the link 

HTTP Post: Post changes state on the server. posting status update on twitter , facebook, So after the post the server has more information than it had before
post requests are usually initiated by a web form.
<li><a href="http://rve.org.uk/dumprequest">HTTP Well explained *must read* </a></li>
HTTP Methods</p>


<h4>AJAX Explained </h4>
<p> Async javascript and xml </h4> </p>
