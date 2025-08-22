import {CogIcon, ControlsIcon, ErrorOutlineIcon, MenuIcon, SearchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export const settingsType = defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      fields: [
        {
          name: 'logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'menu',
          type: 'menu',
        },
      ],
    }),
    defineField({
      name: 'pagesSideNav',
      type: 'menu',
    }),
    defineField({
      name: 'pagesHero',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'turnHeaderLogo',
      title: 'Turn Header Logo White On About Pages',
      type: 'boolean',
    }),
    defineField({
      name: 'evenBetterHero',
      type: 'collage',
    }),
    defineField({
      name: 'instagramLink',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          type: 'instagram',
        }),
        {name: 'icon', type: 'image'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
