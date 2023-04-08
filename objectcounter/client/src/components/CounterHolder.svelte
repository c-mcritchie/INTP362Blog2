<script>
    import {onDestroy, onMount} from "svelte";
    import axios from "axios";
    import {account} from "../stores.js";
    import CounterPopup from "./CounterPopup.svelte";
    import Counter from "./Counter.svelte";

    let isPopupOpen;


</script>

<main>
    <button on:click={() => {isPopupOpen = true}} class="button is-small">New counter</button>
    <CounterPopup bind:isActive={isPopupOpen}/>
    <div class="columns is-multiline">
        {#each $account.counters as counter (counter._id)}
            <Counter bind:counter={counter}/>
        {/each}

</main>