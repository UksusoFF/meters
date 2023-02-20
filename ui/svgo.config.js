module.exports = {
    js2svg: {
        indent: 2,
        pretty: true,
        useShortTags: false,
    },
    plugins: [
        "cleanupIds",
        "collapseGroups",
        "convertShapeToPath",
        "convertTransform",
        "removeMetadata",
        "removeTitle",
        "removeXMLProcInst",
        "sortAttrs",
        {
            name: "removeAttrs",
            params: {
                attrs: "svg:fill:none",
            },
        },
    ]
};
