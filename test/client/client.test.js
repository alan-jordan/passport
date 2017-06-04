import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './setup-dom'
import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}
