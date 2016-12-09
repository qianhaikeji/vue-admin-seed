/**
 * Created by zuozhuo on 2016/12/8.
 */
'use strict'

function formateDate (timeStamp) {
  const date = new Date(timeStamp)
  return date.toLocaleString()
}

export {
  formateDate
}

