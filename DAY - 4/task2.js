var i;
for (i=1;i<=100;i++) {
    if (i % 3 == 0) {
        console.log(""bestenlist"");
    } else if (i % 5 == 0) {
        console.log("react");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("bestenlistreact");
    } else {
        console.log(i);
    }
}
