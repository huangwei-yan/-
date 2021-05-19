function accordion() {
    var out = document.getElementById('ul');
    var defaw = 150;
    var defah = 70;

    var activew = 300;
    var activeh = 380;

    var row = 4;
    var col = 5;
    out.style.width = defaw * 4 + activew + 'px';

    function activepic(index) {
        let a_x = index % col;
        let a_y = Math.floor(index / col); // k是行 // j是列
        for (j = 0; j < col; j++) {
            for (k = 0; k < row; k++) {
                // console.log(j, k + '------------');
                var cindex = col * k + j;
                if (a_x == j && a_y == k) {
                    out.children[cindex].style.width = activew + 'px';
                    out.children[cindex].style.height = activeh + 'px';
                } else if (a_x == j) {
                    // console.log(j);
                    out.children[cindex].style.width = activew + 'px';
                    out.children[cindex].style.height = defah + 'px';
                } else if (a_y == k) {
                    out.children[cindex].style.width = defaw + 'px';
                    out.children[cindex].style.height = activeh + 'px';
                } else {
                    out.children[cindex].style.width = defaw + 'px';
                    out.children[cindex].style.height = defah + 'px';
                }
            }

        }
    }
    activepic(0);

    for (i = 0; i < out.children.length; i++) {
        out.children[i].ind = i;

        out.children[i].onmouseenter = function() {
            activepic(this.ind);
        }
    }
}