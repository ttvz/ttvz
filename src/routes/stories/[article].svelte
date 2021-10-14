<script context="module">
    export async function load({ page }) {
        console.log(page.params.article)
        if(page.params.article === 'pm'){
            return {
                status: 200,
                props: {
                    title: 'Innovation Product Manager'
                }
            };
        }
        return {
            status: 404,
            error: new Error(`article not found`)
        };
    }
    export let title;
    export const prerender = true;
</script>
<svelte:head>
    <title>Thibaut Valez - Stories | {title}</title>
</svelte:head>

<h1>{title}</h1>