
function line() {
      document.write("<br>-------------------------------------");
    }

    function dw(msg) {
      document.write("<br>" + msg);
    }



function fact(a)
{
    var f = 1, i;
    for (i = 1; i <= a;i++)
    {
        document.write(i+" x ");
        f = f * i;
    }
    document.write("Factorial="+f);

}



    function myfun1() {
      line();
      document.write("<br>Hello");
      line();
        dw("hello");
        
        fact(7);

      // var m = document.getElementById("txt1").value;
      // dw(m);
      // document.write(m);
}
    
