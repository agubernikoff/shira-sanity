import React from 'react'
import {Stack, Card, Text, TextInput, Checkbox, Flex, Radio} from '@sanity/ui'
import {set} from 'sanity'

export default function CollageImageItemInput(props) {
  const {value = {}, onChange, renderDefault} = props

  const updateField = (field, fieldValue) => {
    onChange(set({...value, [field]: fieldValue}))
  }

  const toggleCentering = (axis) => {
    const isCentering = !value[axis]
    const positionKey = axis === 'centerHorizontally' ? 'horizontalPosition' : 'verticalPosition'
    onChange(
      set({
        ...value,
        [axis]: isCentering,
        [positionKey]: isCentering ? '50%' : '',
      }),
    )
  }

  return (
    <Stack space={4}>
      {renderDefault(props)}

      <Card padding={4} radius={2} shadow={1}>
        <Stack space={5}>
          <Text size={2} weight="semibold">
            Positioning Options
          </Text>

          {/* Horizontal Controls */}
          <Stack space={3}>
            <Flex align="center" gap={2}>
              <Checkbox
                checked={value.centerHorizontally || false}
                onChange={() => toggleCentering('centerHorizontally')}
              />
              <Text>Center Horizontally</Text>
            </Flex>

            <TextInput
              value={value.horizontalPosition || ''}
              onChange={(e) => updateField('horizontalPosition', e.target.value)}
              placeholder="e.g. 20%"
              readOnly={value.centerHorizontally}
            />

            {!value.centerHorizontally && (
              <Stack space={2}>
                <Text size={1} muted>
                  Align from:
                </Text>
                <Flex gap={4}>
                  {['left', 'right'].map((option) => (
                    <label key={option}>
                      <Flex gap={2} align="center">
                        <Radio
                          name="horizontalAlignFrom"
                          checked={value.horizontalAlignFrom === option}
                          onChange={() => updateField('horizontalAlignFrom', option)}
                        />
                        <Text>{option[0].toUpperCase() + option.slice(1)}</Text>
                      </Flex>
                    </label>
                  ))}
                </Flex>
              </Stack>
            )}
          </Stack>

          {/* Vertical Controls */}
          <Stack space={3}>
            <Flex align="center" gap={2}>
              <Checkbox
                checked={value.centerVertically || false}
                onChange={() => toggleCentering('centerVertically')}
              />
              <Text>Center Vertically</Text>
            </Flex>

            <TextInput
              value={value.verticalPosition || ''}
              onChange={(e) => updateField('verticalPosition', e.target.value)}
              placeholder="e.g. 20%"
              readOnly={value.centerVertically}
            />

            {!value.centerVertically && (
              <Stack space={2}>
                <Text size={1} muted>
                  Align from:
                </Text>
                <Flex gap={4}>
                  {['top', 'bottom'].map((option) => (
                    <label key={option}>
                      <Flex gap={2} align="center">
                        <Radio
                          name="verticalAlignFrom"
                          checked={value.verticalAlignFrom === option}
                          onChange={() => updateField('verticalAlignFrom', option)}
                        />
                        <Text>{option[0].toUpperCase() + option.slice(1)}</Text>
                      </Flex>
                    </label>
                  ))}
                </Flex>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
