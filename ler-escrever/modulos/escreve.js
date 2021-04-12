const fs = require('fs').promises;





module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }) //W reescreve A adiciona
};
