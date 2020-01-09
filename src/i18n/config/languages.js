module.exports = [
    {
        locale: "cs",
        label: "Čeština",
        routes: {
            "/": "/",
            "/page1": "/stranka1",
            "/subpage/page1": "/podstranka/stranka1",
            "/subpage/subsubpage/page1": "/podstranka/podpodstranka/stranka1",
            "/savethedate": "/savethedate"
        }
    },
    {
        default: true,
        locale: "en",
        label: "English",
        routes: {
            "/": "/",
            "/page1": "/page1",
            "/subpage/page1": "/subpage/page1",
            "/subpage/subsubpage/page1": "/subpage/subsubpage/page1",
            "/savethedate": "/savethedate"
        }
    },
    {
        locale: "vi",
        label: "English",
        routes: {
            "/": "/",
            "/page1": "/page1",
            "/subpage/page1": "/subpage/page1",
            "/subpage/subsubpage/page1": "/subpage/subsubpage/page1",
            "/savethedate": "/savethedate"
        }
    }
];
