var fs = require('fs');
var path = require('path');

function mkdirs(folderPath, mode) {
    var folders = [];
    var tmpPath = path.normalize(folderPath);
    var exists = fs.existsSync(tmpPath);
    while (!exists) {
        folders.push(tmpPath);
        tmpPath = path.join(tmpPath, '..');
        exists = fs.existsSync(tmpPath);
    }

    for (var i = folders.length - 1; i >= 0; i--) {
        fs.mkdirSync(folders[i], mode);
    }
}

module.exports = mkdirs;