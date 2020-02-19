module.exports = [
    {
        locale: "cs",
        label: "Čeština",
        routes: {
            "/": "/",
            "/lodging": "/stranka1",
            "/subpage/page1": "/podstranka/stranka1",
            "/subpage/subsubpage/page1": "/podstranka/podpodstranka/stranka1",
            "/savethedate": "/savethedate",
            "/background": "/background"
        }
    },
    {
        default: true,
        locale: "en",
        label: "English",
        routes: {
            "/": "/",
            "/lodging": "/lodging",
            "/subpage/page1": "/subpage/page1",
            "/subpage/subsubpage/page1": "/subpage/subsubpage/page1",
            "/savethedate": "/savethedate",
            "/background": "/background"
        }
    },
    {
        locale: "vi",
        label: "English",
        routes: {
            "/": "/",
            "/lodging": "/lodging",
            "/subpage/page1": "/subpage/page1",
            "/subpage/subsubpage/page1": "/subpage/subsubpage/page1",
            "/savethedate": "/savethedate",
            "/background": "/background"
        }
    }
];
