/*
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their 
sum is 50.
*/

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.</title>
</head>
<body>
  <script>
  function test50(x, y) 
  {
  return ((x == 50 || y == 50) || (x + y == 50));
  }
  console.log(test50(50, 50))
  console.log(test50(60, 30))
  console.log(test50(20, 70))
  console.log(test50(20, 30))
  </script>
</body>
</html>
