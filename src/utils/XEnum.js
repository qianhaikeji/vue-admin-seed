/**
 * Created by zuozhuo on 2016/12/8.
 */
'use strict'

class XEnumItem {
  constructor (value, text, desc, meta = {}) {
    this.value = value
    this.text = text
    this.desc = desc
    this.meta = meta
  }

  getValue () {
    return this.value
  }

  getText () {
    return this.text
  }

  getDesc () {
    return this.desc
  }

  equals (value) {
    if (value instanceof XEnumItem) {
      value = value.getValue()
    }
    return this.value === value
  }
}
class XEnum {
  constructor (enumDict) {
    this.enumItems = Object.values(enumDict)
    Object.keys(enumDict).forEach(key => {
      this[key] = enumDict[key]
    })
  }

  findItem (itemValue) {
    if (itemValue instanceof XEnumItem) {
      itemValue = itemValue.getValue()
    }
    return this.enumItems.find(e => e.getValue() === itemValue)
  }

  getOptions () {
    if (!this.options) {
      this.options = this.enumItems.map(e => {
        return {
          value: e.getValue(),
          label: e.getText()
        }
      })
    }
    return this.options
  }
}

export {
  XEnum,
  XEnumItem
}
