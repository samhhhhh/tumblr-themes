function quotConcat(quot,sourc,link) {
            {block:HomePage}
            if (quot.length >= 100) {
                var x = quot.indexOf('.');
                return '<p>' + quot.substr(0,x + 1) + '</p><p style="float:right;">&mdash;<a href="' + link + '">' + sourc + '</a></p>';
            } else {
                return '<p>' + quot + '</p><p style ="float:right;">&mdash;<a href="' + link + '">' + sourc + '</a></p>';
            }
            {/block:HomePage}
            {block:PermalinkPage}
            return '<p>' + quot + '</p><p style="float:right;">&mdash;' + sourc + '</p>';
            {/block:PermalinkPage}
        }