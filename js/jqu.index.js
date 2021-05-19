function accordion() {
    var out =document.getElementById('ul');
    var defaw = 150;
    var defah = 70;

    var activew = 300;
    var activeh = 380;

    var col = 5;
    var row = 4;

    // $('#ul li').click(function() {
    //     alert(123)
    // })
    function activepic(index) {

        var a_x = index % col;
        var  a_y = Math.floor(index / col);
        // console.log(a_x,a_y+"--------")
        for (j = 0; j < col; j++) {
            for (k = 0; k < row; k++) {
                var bbj = col * k + j;
                console.log(bbj)
                if (a_x == j && a_y == k) {
                    // ul.children(loc).style.width = "100px";
                    out.children[bbj].style.width=activew+'px';
                    out.children[bbj].style.height=activeh+'px';
                }
            }
        }
    }


    for (i = 0; i < out.children.length; i++) {
        out.children[i].ind = i;

        out.children[i].onmouseenter = function() {
            activepic(this.ind);
        }
    }
}