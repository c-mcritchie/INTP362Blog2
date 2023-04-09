<script>
    //Imports
    import axios from "axios";
    import {account} from "../stores.js";
    import { fade } from 'svelte/transition';

    //Variables from the input
    let savedName;
    let name = "";

    //Account object from the server
    let storedAccount = {};

    //Booleans to show the buttons
    let showLogin = false;
    let showCreate = false;

    //reactive checks to show the check button
    //and hide the login and create buttons if name is changed
    $: checkShown = (name !== savedName);
    $: if (name !== savedName) {
        savedName = undefined;
        showLogin = false;
        showCreate = false;
    }

    //set the stored login to the svelte store
    function login() {
        $account = storedAccount;
        console.log(account);
    }

    //Create account, upload to server and set the account object
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


    //Check if there is an account on the server with the same name,
    //if there is, show the login button, if not, show the create button
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

<main class="container content" transition:fade >
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