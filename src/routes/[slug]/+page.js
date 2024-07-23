import { error } from '@sveltejs/kit';

export function load({ params }) {
    if(params.slug !== 'fr-FR' && params.slug !== 'en-EN'){
        error(404, {
            message: 'Not found'
        });
    }
}