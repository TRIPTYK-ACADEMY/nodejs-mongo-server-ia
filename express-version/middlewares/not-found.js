module.exports = (req,res) => {
    res.sendFile(`${process.cwd()}/views/404.html`);
};