function getFibonacci(n) {
    if (!(typeof(n) == 'number')) return "not allowed";
    if (n > 10)
        return "not allowed";
    if (n < 1)
        return "not allowed";
    if (n == 1)
        return [1];
    if (n == 2)
        return [1, 1];

    var n1 = 1, n2 = 1;
    var aux;
    var nbs = [1, 1];
    
    for (var i = 2; i < n; i++) {
        aux = n1;
        n1 = n2;
        n2 = aux + n2;
        nbs.push(n2);
    }
	console.log(nbs);
    return nbs;
	
}
