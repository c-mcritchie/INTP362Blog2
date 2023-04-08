<script>
    import {onDestroy, onMount} from "svelte";
    import axios from "axios";
    import {account} from "../stores.js";
    import CounterPopup from "./CounterPopup.svelte";
    import Counter from "./Counter.svelte";

    let isPopupOpen;


</script>

<main>
    <button on:click={() => {isPopupOpen = true}} class="button is-small is-info">New counter</button>
    <CounterPopup bind:isActive={isPopupOpen}/>
    <br>

    <div>
        <div class="line"><div/>
    </div>
    <br>
    <div class="columns is-multiline">
        {#each $account.counters as counter (counter.name)}
            <Counter bind:counter={counter}/>
        {/each}

</main>

<style>
    .line {
        width: 90%;
        border-bottom: 1px solid #e6e6e6;
        margin: auto;
    }
</style>