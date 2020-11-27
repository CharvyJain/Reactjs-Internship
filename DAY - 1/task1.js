/* 
Write a JavaScript program to calculate the days left until the next Christmas.
*/

<html>
  <head>
  <meta charset=utf-8 />
  <title>Write a JavaScript program to calculate days left until next Christmas</title>
  </head>
  <body>
    <script>
    today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==11 && today.getDate()>25) 
    {
      christmas.setFullYear(christmas.getFullYear()+1); 
    }  
    var one_day = 1000*60*60*24;
    console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+ " days left until Christmas!");
    </script>
</body>
  </html>
