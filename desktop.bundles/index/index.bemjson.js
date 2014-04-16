({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block: 'head',
            content: {
                block: 'layout',
                content: [
                    {
                        elem: 'left',
                        content: [
                            {
                                block: 'icon',
                                tag: 'img',
                                attrs: { src: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png'}
                            },
                            {
                                elem: 'slogan',
                                content: 'A new way of thinking'
                            }
                        ]
                    },
                    {
                        elem: 'right',
                        content: 'right here'
                    }
                ]
            }
        }
    ]
})
