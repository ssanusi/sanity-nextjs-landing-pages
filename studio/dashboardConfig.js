export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6ec5d4108321b0b4bffec2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2y47p5q2',
                  apiId: '1e6318bc-00e4-4d76-b4cb-a1848d5683c3'
                },
                {
                  buildHookId: '5f6ec5d447cd08aaed922524',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vsux39tk',
                  apiId: 'b6e18772-d060-4317-b232-22cf86e345f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ssanusi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vsux39tk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
