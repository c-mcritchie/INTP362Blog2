<script lang="ts">
    import CounterHolder from './components/CounterHolder.svelte';
    import Login from './components/Login.svelte';
    import { account } from './stores.js';
    import axios from "axios";

    let loggedIn;
    $: loggedIn = ($account.username !== undefined);

    async function deleteAccount() {
        const res = await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/accounts/' + $account._id,
        });
        $account = {};
    }


</script>

<main class="box app container ">
    {#if !loggedIn}
        <Login/>
    {:else if loggedIn}
        <div class="container content">
            <h1>Welcome {$account.username}</h1>
            <button on:click={deleteAccount} class="button is-danger is-small">Delete Account</button>
            <button on:click={() => {$account = {}}} class="button is-danger is-small">Logout</button>
        </div>
        <CounterHolder/>
    {/if}

</main>

<style>
    .app {
        width: 500px;
    }
</style>