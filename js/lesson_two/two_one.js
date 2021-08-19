var a = 1, b = 1, c, d;
c = ++a; alert(c);            // 2   c = 1 + 1 = 2   c = 2  a = 2
d = b++; alert(d);            // 1   d = 1 + 1 = 1   d = 1  b = 2
c = (2 + ++a); alert(c);      // 5   с = 2 + 3 = 5   c = 5  a = 3
d = (2 + b++); alert(d);      // 4   d = 2 + 2 = 4   d = 4  b = 3
alert(a);                     // 3   a = 3
alert(b);                     // 3   a = 3