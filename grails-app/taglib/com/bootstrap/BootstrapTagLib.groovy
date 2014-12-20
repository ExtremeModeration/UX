package com.bootstrap

import groovy.xml.MarkupBuilder

class BootstrapTagLib {
	static namespace = 'bs'
    static defaultEncodeAs = [taglib:'raw']
    //static encodeAsForTags = [tagName: [taglib:'html'], otherTagName: [taglib:'none']]

    // NAVBAR Tags
    def navbarLink = { attrs, body ->
    	def targetController = attrs.controller
    	def targetAction = attrs.action
    	def (writer, builder) = writerAndBuilder
    	builder.li(class: (controllerName == targetController && actionName == targetAction ? 'active' : '')) {
    		a(href: g.createLink(controller: targetController, action: targetAction)) {
    			mkp.yieldUnescaped body()
    		}
    	}
    	out << writer.toString()
    }

    def getWriterAndBuilder() {
    	def writer = new StringWriter()
    	def builder = new MarkupBuilder(writer)
    	[writer, builder]
    }
}
