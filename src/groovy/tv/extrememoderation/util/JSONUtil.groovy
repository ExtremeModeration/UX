package tv.extrememoderation.util

import grails.plugins.rest.client.RestBuilder
import org.codehaus.groovy.grails.web.json.JSONElement

/**
 * Created by Steve on 12/17/2014.
 */
class JSONUtil {

    static String ENDPOINT

    static JSONElement get(String uri) {
        def data = new RestBuilder().get("${ENDPOINT}${uri}").json
    }

}
