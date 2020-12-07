// Write a JavaScript function to get the values of First and Last name of the following form.


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Return First and Last Name from a form</title>
        <script>
            function getValue() {
                var first = document.getElementById("form1").elements[0].value;
                var last = document.getElementById("form1").elements[1].value;
                alert("Hello " + first + " " + last + "!");
            }
        </script>
    </head>
    <body>
        <form id="form1" onsubmit  ="getValue()">
            First name: <input type="text" name="fname" value="David"><br>
            Last name: <input type="text" name="lname" value="Beckham"><br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
