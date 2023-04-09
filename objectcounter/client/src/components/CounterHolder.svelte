<script>
    //Imports
    import {account} from "../stores.js";
    import CounterPopup from "./CounterPopup.svelte";
    import Counter from "./Counter.svelte";

    let isPopupOpen;

</script>

<main>
    <!-- Counter popup -->
    <button on:click={() => {isPopupOpen = true}} class="button is-small is-info">New counter</button>
    <CounterPopup bind:isActive={isPopupOpen}/>
    <br>

    <div>
        <div class="line"></div>
    </div>
    <br>
    <!-- Counters -->
    <div class="columns is-multiline">
        <!-- If there are no counters, show a notification -->
        {#if ($account.counters === [] && $account != {}) || $account.counters.length === 0}
            <div class="column is-full">
                <div class="notification is-info">
                    You don't have any counters yet. Click on the button above to create one.
                </div>
            </div>
        {:else}
            <!-- If there are counters, show them -->
            {#each $account.counters as counter (counter.name)}
                <Counter bind:counter={counter}/>
            {/each}
        {/if}
    </div>

</main>

<style>
    .line {
        width: 90%;
        border-bottom: 1px solid #e6e6e6;
        margin: auto;
    }
</style>