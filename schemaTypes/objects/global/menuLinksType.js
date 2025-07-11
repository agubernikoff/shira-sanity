import {defineField} from 'sanity'

export const menuLinksType = defineField({
  name: 'menuLinks',
  title: 'Menu Links',
  type: 'array',
  of: [
    defineField({
      name: 'linkInternal',
      type: 'linkInternal',
    }),
    defineField({
      name: 'linkExternal',
      type: 'linkExternal',
    }),
  ],
})
