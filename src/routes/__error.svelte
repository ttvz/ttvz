<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `${error.message}`
            }
        };
    }
</script>

<script>
    export let title;
</script>

<svelte:head>
    <title>Page not found | ttvz</title>
</svelte:head>

<h1>{title}</h1>