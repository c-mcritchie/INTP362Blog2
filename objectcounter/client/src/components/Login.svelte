<script>
    import axios from "axios";
    import {account} from "../stores.js";

    let savedName;
    let name = "";

    let storedAccount = {};


    let showLogin = false;
    let showCreate = false;


    $: checkShown = (name !== savedName);
    $: if (name !== savedName) {
        savedName = undefined;
        showLogin = false;
        showCreate = false;
    }

    function login() {
        $account = storedAccount;
        console.log(account);
    }

    async function create() {
        try {
            const { data } = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/accounts/createAccount/',
                data: {
                    username: name,
                    counters: []
                }});
            $account = data;
        } catch (e) {
            console.log(e);
        }
    }

    async function checkName() {

        try {
            const { data } = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/accounts/findAccount',
                data: {
                    username: name
                }});
            storedAccount = data;
            //show login button
            showCreate = false;
            showLogin = true;

        } catch (e) {
            //No account found, show create button
            showLogin = false;
            showCreate = true;
        } finally {
            savedName = name;
        }

    }


</script>

<main class="container content">
    <h1 >Log in</h1>
    <div class="field has-addons">
        <p class="control is-expanded">
            <input class="input" type="text"  placeholder="Name" bind:value={name} >
        </p>

        {#if checkShown}
        <p class="control">
            <button class="button " on:click={checkName}>check</button>
        {/if}

        {#if showLogin}
        <p class="control">
            <button class="button is-info " on:click={login}>login</button>
        {/if}

        {#if showCreate}
        <p class="control">
            <button class="button is-primary" on:click={create}>create</button>
        {/if}
    </div>


</main>