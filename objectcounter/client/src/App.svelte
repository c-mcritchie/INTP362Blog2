<script lang="ts">
    //Imports
    import CounterHolder from './components/CounterHolder.svelte';
    import { fade } from 'svelte/transition';
    import Login from './components/Login.svelte';
    import { account } from './stores.js';
    import axios from "axios";



    //Reactive check if logged in
    $: loggedIn = ($account.username !== undefined);


    //Delete account function
    async function deleteAccount() {
        const res = await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/accounts/' + $account._id,
        });
        $account = {};
    }

    //Save account function
    async function save() {
        await axios({
            method: 'put',
            url: 'http://localhost:3000/api/accounts/',
            data: {
                account: $account
            }
        });
    }

    //Logout function
    function logout() {
        save();
        $account = {};
    }


</script>

<main class="box app container ">
    {#if !loggedIn}
        <!-- If not logged in show login page -->
        <Login/>
    {:else if loggedIn}
        <!-- If logged in show account page and counter holder -->
        <div class="container content" transition:fade>
            <h1>Welcome {$account.username}</h1>
            <button on:click={deleteAccount} class="button is-danger is-small">Delete Account</button>
            <button on:click={logout} class="button is-danger is-small">Logout</button>
        </div>
        <CounterHolder/>
    {/if}
</main>

<style>
    .app {
        width: 500px;
    }
</style>