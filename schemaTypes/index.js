import {homeType} from './singletons/homeType'
const singletons = [homeType]

import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import {linkEmailType} from './objects/link/linkEmailType'
import {linkExternalType} from './objects/link/linkExternalType'
import {linkInternalType} from './objects/link/linkInternalType'
const annotations = [linkEmailType, linkExternalType, linkInternalType]

import {pageType} from './documents/page'
const documents = [pageType]

export const schemaTypes = [...annotations, ...singletons, ...blocks, ...documents]
