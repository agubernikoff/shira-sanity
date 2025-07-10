import {LinkIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

const TITLE = 'Even Better'

export const evenBetterType = defineField({
  name: 'evenBetter',
  title: TITLE,
  type: 'document',
  icon: LinkIcon,
  fields: [
    {
      name: 'headerText',
      type: 'portableTextSimple',
    },
    defineField({
      name: 'articleLinks',
      type: 'array',
      of: [{type: 'linkExternal'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        media: LinkIcon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
