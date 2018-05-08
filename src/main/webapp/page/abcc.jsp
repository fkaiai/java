<html>
<head>
<title>sdf</title>
</head>
<body>
<h2>page-abc</h2>

<div onclick="sessionTest1()">11111111111111111111</div>

<a href="ajaxTest.html">asdfasdf</a>


<script src="js/jquery-1.11.0.js"></script>
<script>
    function sessionTest1 () {
        $.ajax({
            url: '/userPage',
            type: 'GET',
            data: {"offset":1,"limit":2},
            success:function(data){
                console.log(data)
            },
            error:function(data){
                console.log(data)
            }
        })
    }
    sessionTest1()



</script>
</body>
</html>
