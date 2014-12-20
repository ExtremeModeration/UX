package tv.extrememoderation.sec

/**
 * Created by Steve on 12/17/2014.
 */
class User implements Serializable {
    String id
    String username
    String displayName
    String email

    Map toMap() {
        def m = [:]
        this.properties.each { k, v ->
            if (k != 'class') {
                m[k] = v
            }
        }
        m
    }
}
