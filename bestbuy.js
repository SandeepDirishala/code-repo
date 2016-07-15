/**
 * Created by sandi on 7/14/2016.
 */
$.ajax({
    url:"http://api.bestbuy.com/beta/products/trendingViewed?apiKey=t8k7uptcxtdk9j9szvn5xhsa",
    jsnop:"callback",
    dataType:"jsonp",
    data:{
        q: "select * from results",
        format:"json"
    },
    success:function(response){
        console.log("connected");
    }
})
    .done(function( data ) {
        var arr=data.results;
        var html = "<h1>Best buy products</h1>";
        for(var i=0;i<arr.length;i++){
            html += "<div class='container img-rounded back'><p><img src='"+arr[i].images.standard+"'</p><p class='lead'>"+arr[i].names.title+"</p><p>average score:"+arr[i].customerReviews.averageScore+"</p><p>Current Price:"+arr[i].prices.current+"</p><p>Regular Price:"+arr[i].prices.regular+"</p></div>";
        }

        html += "</table>";

        $("#datafrombestbuy").html(html);

    });





    //    $.each( data.results, function( i, item ) {
    //       var obj=jQuery.parseJSON
    //        $( "<img>" ).attr( "src", item.images.standard ).appendTo( "#images" );
    //        $( "#review" ).append( item.customerReviews.averageScore );
    //        $( "#review2" ).append( item.customerReviews.count );
    //
    //        if ( i === 10 ) {
    //            return false;
    //        }})
    //
    //
    //
    //
    //
    //});
