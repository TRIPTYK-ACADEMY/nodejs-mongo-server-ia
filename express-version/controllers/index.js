const renderPage = require('../utils/render-page');

module.exports = async (req,res) => {
    const html = await renderPage("index",{
        title : "index"
    });

    res.send(html);
}