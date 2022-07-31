<script>
    import { Web3 } from 'svelte-web3';
    import HelloContract from '../contracts/Hello.json';

    async function getGreeting() {
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = HelloContract.networks[networkId];
        const contract = new web3.eth.Contract(
            HelloContract.abi,
            deployedNetwork && deployedNetwork.address
        );
        const response = await contract.methods.greet().call();
        return response;
    }

    $: promise = getGreeting();
</script>

<div>
    {#await promise}
        <p>Loading...</p>
    {:then greeting}
        <p>{greeting}</p>
    {/await}
</div>
