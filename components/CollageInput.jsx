// components/CollageInput.js
import React from 'react'
import {Stack, Card, Text} from '@sanity/ui'
import {useClient} from 'sanity'
import imageUrlBuilder from '@sanity/image-url'

export default function CollageInput(props) {
  const client = useClient()
  const builder = imageUrlBuilder(client)

  // Helper function to generate image URLs
  const urlFor = (source) => builder.image(source)

  const {value, renderDefault} = props

  return (
    <Stack space={4}>
      {/* Render the default form fields */}
      {renderDefault(props)}

      {/* Live preview section */}
      <Card padding={3} radius={2} shadow={1}>
        <Stack space={3}>
          <Text size={2} weight="semibold">
            Live Preview
          </Text>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              aspectRatio: '4/5',
              background: value?.background || '#f1f1f1',
              overflow: 'hidden',
              border: '1px solid #e1e1e1',
              borderRadius: '4px',
            }}
          >
            {value?.images?.map((img, i) => {
              const url = img.image ? urlFor(img.image).url() : null
              if (!url) return null

              return (
                <img
                  key={i}
                  src={url}
                  style={{
                    position: 'absolute',
                    left: img.x || '0',
                    top: img.y || '0',
                    width: img.width || 'auto',
                    zIndex: img.zIndex || 1,
                    objectFit: 'cover',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  alt=""
                />
              )
            })}
            {(!value?.images || value.images.length === 0) && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#999',
                  fontSize: '14px',
                }}
              >
                Add images to see preview
              </div>
            )}
          </div>
        </Stack>
      </Card>
    </Stack>
  )
}
