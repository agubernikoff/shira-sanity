import {defineType, defineField} from 'sanity'

export const articleLinks = defineType({
  name: 'articleLinks',
  title: 'Article Links',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'linkExternal'}],
    }),
  ],
  preview: {
    select: {
      links: 'links',
    },
    prepare({links}) {
      const titles = links?.map((l) => l.text).filter(Boolean)
      const title =
        titles && titles.length > 0
          ? `${titles.length} Links: ${titles.slice(0, 3).join(', ')}${titles.length > 3 ? '…' : ''}`
          : 'No article links added'

      return {
        title,
      }
    },
  },
})
