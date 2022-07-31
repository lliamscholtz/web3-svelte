<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    async function connectWallet() {
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            walletConnected = window.ethereum.isConnected();
            dispatch('connected', walletConnected);
        }
    }

    function onClickConnectWallet() {
        promise = connectWallet();
    }

    $: walletConnected = window.ethereum?.isConnected() ? true : false;
    let promise = connectWallet();
</script>

<div>
    {#if window.ethereum}
        <p>Browser connected to MetaMask: <strong>{walletConnected}</strong></p>
    {:else}
        <p>Please install <a href="https://metamask.io/">MetaMask</a></p>
    {/if}
    {#if window.ethereum && !walletConnected}
        <button on:click={onClickConnectWallet}>Connect MetaMask</button>
    {/if}
</div>
