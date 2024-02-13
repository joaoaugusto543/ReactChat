const express = require('express')

const Router= express()

Router.use('/api/user',require('./userRoutes'))
Router.use('/api/session',require('./sessionRoutes'))
Router.use('/api/group',require('./groupsRoutes'))
Router.use('/api/message',require('./messagesRoutes'))
Router.use('/api/messageGroups',require('./messagesGroupsRoutes'))
Router.use('/api/notification',require('./notificationRoutes'))

module.exports = Router