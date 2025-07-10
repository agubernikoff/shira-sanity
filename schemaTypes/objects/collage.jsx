// schemaTypes/objects/collage.js
import {defineField, defineType} from 'sanity'
import BackgroundInput from '../../components/BackgroundInput'
import CollageInput from '../../components/CollageInput'

export const collageType = defineType({
  name: 'collage',
  type: 'document',
  title: 'Collage Layout',
  fields: [
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      description: 'Background color or gradient for the collage',
      components: {
        input: BackgroundInput,
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', type: 'image'},
            {name: 'x', type: 'string', title: 'Left Position (e.g. 20%)'},
            {name: 'y', type: 'string', title: 'Top Position (e.g. 10%)'},
            {name: 'width', type: 'string', title: 'Width (e.g. 200px or 40%)'},
            {name: 'zIndex', type: 'number', title: 'Z-Index'},
          ],
        },
      ],
    }),
  ],
  components: {
    input: CollageInput,
  },
})
