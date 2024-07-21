import {persisted} from "svelte-persisted-store";
import {get} from "svelte/store";
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
    const preferences = persisted('preferences', null)
    const locale = get(preferences).locale

    if (get(preferences).locale) {
        redirect(308, '/' + locale);
    } else {
        redirect(308, '/fr-FR');
    }
}