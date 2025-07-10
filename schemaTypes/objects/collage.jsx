// schemaTypes/objects/collage.js
import {defineField, defineType} from 'sanity'
import BackgroundInput from '../../components/BackgroundInput'
import CollageInput from '../../components/CollageInput'
import CollageImageItemInput from '../../components/CollageImageItemInput'

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
            {name: 'image', type: 'image', title: 'Image'},

            // Horizontal alignment
            {
              name: 'horizontalAlignFrom',
              type: 'string',
              title: 'Horizontal Align From',
              options: {
                list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Right', value: 'right'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const {horizontalPosition, centerHorizontally} = context.parent
                  if (
                    horizontalPosition &&
                    centerHorizontally &&
                    horizontalPosition !== '50%' &&
                    !value
                  ) {
                    return 'Please select whether to align from left or right.'
                  }
                  return true
                }),
              hidden: true,
            },
            {
              name: 'horizontalPosition',
              type: 'string',
              title: 'Horizontal Position (e.g. 10%, 100px)',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const {centerHorizontally} = context.parent
                  if (value !== '50%' && centerHorizontally) {
                    return 'You cannot use horizontal position and horizontal centering at the same time.'
                  }
                  return true
                }),
              hidden: true,
            },

            // Vertical alignment
            {
              name: 'verticalAlignFrom',
              type: 'string',
              title: 'Vertical Align From',
              options: {
                list: [
                  {title: 'Top', value: 'top'},
                  {title: 'Bottom', value: 'bottom'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const {verticalPosition, centerVertically} = context.parent
                  if (
                    verticalPosition &&
                    centerVertically &&
                    verticalPosition !== '50%' &&
                    !value
                  ) {
                    return 'Please select whether to align from top or bottom.'
                  }
                  return true
                }),
              hidden: true,
            },
            {
              name: 'verticalPosition',
              type: 'string',
              title: 'Vertical Position (e.g. 10%, 100px)',
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const {centerVertically} = context.parent
                  if (value !== '50%' && centerVertically) {
                    return 'You cannot use vertical position and vertical centering at the same time.'
                  }
                  return true
                }),
              hidden: true,
            },

            // Other layout props
            {
              name: 'width',
              type: 'string',
              title: 'Width (e.g. 200px or 40%)',
            },
            {
              name: 'zIndex',
              type: 'number',
              title: 'Z-Index',
            },
            {name: 'centerHorizontally', type: 'boolean', hidden: true},
            {name: 'centerVertically', type: 'boolean', hidden: true},
          ],
          components: {
            input: CollageImageItemInput,
          },
        },
      ],
    }),
  ],
  components: {
    input: CollageInput,
  },
})
