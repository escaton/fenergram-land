/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */
function getMobileOperatingSystem(req) {
    var userAgent = req.headers['user-agent']
    if ( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
        return {
            isMobile: true,
            platform: 'iOS'
        };
    } else if ( userAgent.match( /Android/i ) ) {
        return {
            isMobile: true,
            platform: 'iOS' //TODO: 'Android'
        };
    } else if ( userAgent.match( /facebookexternalhit/i ) ) {
        return {
            isBot: true,
            platform: 'facebook'
        };
    } else {
        return {
            isMobile: false,
            platform: 'desktop'
        };
    }
}

module.exports = getMobileOperatingSystem;
