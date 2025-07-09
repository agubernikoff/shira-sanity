import {linkEmailType} from './objects/link/linkEmailType'
import {linkExternalType} from './objects/link/linkExternalType'
import {linkInternalType} from './objects/link/linkInternalType'
const annotations = [linkEmailType, linkExternalType, linkInternalType]

import {menuType} from './objects/global/menuType'
import {menuLinksType} from './objects/global/menuLinksType'

const objects = [menuType, menuLinksType]

import {homeType} from './singletons/homeType'
import {settingsType} from './singletons/settingsType'
const singletons = [homeType, settingsType]

import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import {pageType} from './documents/page'
const documents = [pageType]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
