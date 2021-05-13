module.exports = {
    plugins: [
        require("postcss-uncss")({
            html: [
                './*'
            ]
        })
    ]
}