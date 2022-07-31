<script>
    import Connect from './components/Connect.svelte';
    import Hello from './components/Hello.svelte';
    import Accounts from './components/Accounts.svelte';

    export let name;
    $: connected = false;

    function checkIsConnected(event) {
        console.log(`Connected: ${event.detail}`);
        connected = event.detail;
    }
</script>

<main>
    <h1>
        {name}
    </h1>
    <Connect on:connected={checkIsConnected} />

    {#if connected}
        <Accounts />
        <Hello />
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
