<!doctype html>
<head><title>Distance calculator</title>
  <style>
        body{
          text-align: left;
          font-family: Courier new, cursive, sans-serif;
          color: Red;
          font-weight:Bold;
        }
    
    p {background-color:yellow;
color:blue
}
    </style>
  <script type="text/javascript" class="">
    function ShowDistance()
        {
        var x1, x2, y1, y2;
            x1=parseFloat(document.getElementById('xOne').value);
            x2=parseFloat(document.getElementById('xTwo').value);
            y1=parseFloat(document.getElementById('yOne').value);
            y2=parseFloat(document.getElementById('yTwo').value);


        var distance = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-
y2), 2) );
    distance = distance.toFixed(2);

            document.getElementById('outPut').innerHTML=
                 'The distance bewtween (' + x1 + ',' + y1 + ') and (' 
+ x2 + ',' + y2 + ') is '+ distance ;
 return distance;
        }
    </script>
  <style id="__web-inspector-hide-shortcut-style__" type="text/css">
.__web-inspector-hide-shortcut__, .__web-inspector-hide-shortcut__ *, .__web-inspector-hidebefore-shortcut__::before, .__web-inspector-hideafter-shortcut__::after
{
    visibility: hidden !important;
}
</style>
</head>
<Body>
  <h1>Distance Calculator</h1>
  <p>
        Point: ( 1. <input xone"="" size="18" value=""> 2.
<input type="text" id="yOne" size="type=&quot;text&quot;" text"="" value=""> 3.
<input type="text" id="yTwo" size="18" value="">)

        <br>
        <br>
        <input type="button" onclick="ShowDistance()" value="Calculate 
">
    </p>
  <hr>
  <div id="outPut"> </div>
  </body>
</html>
  
