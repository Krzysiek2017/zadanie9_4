function drawTree(treeHeight) {
	for (var i = 1; i <= treeHeight; i++) {
		var star = '';
		for (var j = 1; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
var treeHeight = 5;
drawTree(treeHeight);