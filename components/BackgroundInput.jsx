// components/BackgroundInput.js
import React, {useState, useEffect} from 'react'
import {Stack, Card, Text, Button, Grid, Flex, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'

const PRESET_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff8a80 0%, #ea4c89 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
]

export default function BackgroundInput(props) {
  const {value, onChange} = props

  const getInitialTab = (val) => {
    if (!val) return 'color'
    if (PRESET_GRADIENTS.includes(val)) return 'gradient'
    if (val.startsWith('linear-gradient')) return 'builder'
    return 'custom'
  }

  const [activeTab, setActiveTab] = useState(getInitialTab(value))
  const [customValue, setCustomValue] = useState(value || '')
  const [gradientBuilder, setGradientBuilder] = useState({
    color1: '#ff0000',
    color2: '#0000ff',
    angle: 45,
  })

  const handleColorChange = (color) => {
    onChange(color ? set(color) : unset())
  }

  const handleCustomChange = (event) => {
    const newValue = event.target.value
    setCustomValue(newValue)
    onChange(newValue ? set(newValue) : unset())
  }

  const handleGradientBuilderChange = (field, value) => {
    const newBuilder = {...gradientBuilder, [field]: value}
    setGradientBuilder(newBuilder)
    const gradient = `linear-gradient(${newBuilder.angle}deg, ${newBuilder.color1}, ${newBuilder.color2})`
    onChange(set(gradient))
  }

  useEffect(() => {
    if (value?.startsWith('linear-gradient')) {
      const match = value.match(
        /linear-gradient\((\d+)deg,\s*(#[0-9a-fA-F]{3,6})(?:\s+\d+%?)?,\s*(#[0-9a-fA-F]{3,6})(?:\s+\d+%?)?\)/,
      )
      if (match) {
        setGradientBuilder({
          angle: parseInt(match[1], 10),
          color1: match[2],
          color2: match[3],
        })
      }
    }
  }, [value])

  return (
    <Stack space={3}>
      <Text size={2} weight="semibold">
        Background
      </Text>

      {/* Tab Navigation */}
      <Flex gap={2}>
        <Button
          mode={activeTab === 'color' ? 'default' : 'ghost'}
          onClick={() => {
            setActiveTab('color')
            handleColorChange('#ffffff')
          }}
          text="Solid Colors"
        />
        <Button
          mode={activeTab === 'gradient' ? 'default' : 'ghost'}
          onClick={() => {
            setActiveTab('gradient')
            handleColorChange(PRESET_GRADIENTS[0])
          }}
          text="Gradients"
        />
        <Button
          mode={activeTab === 'builder' ? 'default' : 'ghost'}
          onClick={() => {
            setActiveTab('builder')
            const gradient = `linear-gradient(${gradientBuilder.angle}deg, ${gradientBuilder.color1}, ${gradientBuilder.color2})`
            handleColorChange(gradient)
          }}
          text="Gradient Builder"
        />
        <Button
          mode={activeTab === 'custom' ? 'default' : 'ghost'}
          onClick={() => {
            setActiveTab('custom')
            handleColorChange(customValue)
          }}
          text="Custom"
        />
      </Flex>

      {/* Current Preview */}
      <Card padding={3} radius={2} shadow={1}>
        <div
          style={{
            width: '100%',
            height: '60px',
            background: value || '#ffffff',
            border: '1px solid #e1e1e1',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#666',
          }}
        >
          {value || 'No background set'}
        </div>
      </Card>

      {/* Color Picker */}
      {activeTab === 'color' && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={3}>
            <Text size={1} weight="medium">
              Select a color:
            </Text>
            <input
              type="color"
              value={value || '#ffffff'}
              onChange={(e) => handleColorChange(e.target.value)}
              style={{
                width: '60px',
                height: '40px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            />
          </Stack>
        </Card>
      )}

      {/* Gradient Builder */}
      {activeTab === 'builder' && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={4}>
            <Text size={1} weight="medium">
              Build your gradient:
            </Text>

            {/* Color 1 Selection */}
            <Stack space={2}>
              <Text size={1} weight="medium">
                First Color:
              </Text>
              <input
                type="color"
                value={gradientBuilder.color1}
                onChange={(e) => handleGradientBuilderChange('color1', e.target.value)}
                style={{
                  width: '60px',
                  height: '40px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              />
            </Stack>

            {/* Color 2 Selection */}
            <Stack space={2}>
              <Text size={1} weight="medium">
                Second Color:
              </Text>
              <input
                type="color"
                value={gradientBuilder.color2}
                onChange={(e) => handleGradientBuilderChange('color2', e.target.value)}
                style={{
                  width: '60px',
                  height: '40px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              />
            </Stack>

            {/* Angle Selection */}
            <Stack space={2}>
              <Text size={1} weight="medium">
                Angle: {gradientBuilder.angle}°
              </Text>
              <input
                type="range"
                min="0"
                max="360"
                value={gradientBuilder.angle}
                onChange={(e) => handleGradientBuilderChange('angle', parseInt(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: '#e1e1e1',
                  outline: 'none',
                }}
              />
              <Flex gap={2}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <Button
                    key={angle}
                    mode="ghost"
                    onClick={() => handleGradientBuilderChange('angle', angle)}
                    text={`${angle}°`}
                    style={{
                      fontSize: '12px',
                      padding: '4px 8px',
                      backgroundColor: gradientBuilder.angle === angle ? '#e1e1e1' : 'transparent',
                    }}
                  />
                ))}
              </Flex>
            </Stack>

            {/* Preview of built gradient */}
            <Card padding={3} radius={2} shadow={1}>
              <div
                style={{
                  width: '100%',
                  height: '60px',
                  background: `linear-gradient(${gradientBuilder.angle}deg, ${gradientBuilder.color1}, ${gradientBuilder.color2})`,
                  border: '1px solid #e1e1e1',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: '#666',
                }}
              >
                {gradientBuilder.color1} → {gradientBuilder.color2} @ {gradientBuilder.angle}°
              </div>
            </Card>
          </Stack>
        </Card>
      )}

      {/* Gradient Picker */}
      {activeTab === 'gradient' && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={3}>
            <Text size={1} weight="medium">
              Select a gradient:
            </Text>
            <Grid columns={2} gap={2}>
              {PRESET_GRADIENTS.map((gradient, index) => (
                <Button
                  key={index}
                  mode="bleed"
                  onClick={() => handleColorChange(gradient)}
                  style={{
                    background: gradient,
                    width: '100%',
                    height: '50px',
                    border: value === gradient ? '2px solid #0066cc' : '1px solid #e1e1e1',
                    borderRadius: '4px',
                    padding: 0,
                    minWidth: 'unset',
                  }}
                />
              ))}
            </Grid>
          </Stack>
        </Card>
      )}

      {/* Custom Input */}
      {activeTab === 'custom' && (
        <Card padding={3} radius={2} shadow={1}>
          <Stack space={3}>
            <Text size={1} weight="medium">
              Enter custom CSS background:
            </Text>
            <TextInput
              value={customValue}
              onChange={handleCustomChange}
              placeholder="e.g. #ff0000 or linear-gradient(45deg, #ff0000, #00ff00)"
            />
            <Text size={1} muted>
              You can use hex colors, CSS gradients, or any valid CSS background value.
            </Text>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}
