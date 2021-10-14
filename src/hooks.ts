export function getSession(request) {
    return request.locals.user
        ? {
            user: {
                name: 'thibaut',
            }
        }
        : {};
}