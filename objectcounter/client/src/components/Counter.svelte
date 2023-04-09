<script>
    //Imports
    import { fly } from 'svelte/transition';
    import {account} from "../stores";

    //Counter object passed from counter holder
    export let counter;

    //boolean to show the counter details
    let isActive = false;

    //Find self in the account array and delete it
    function deleteCounter() {
        const index = $account.counters.find(e => e == counter);
        if (index === undefined) {
            console.log("Error: Counter not found");
            return;
        }
        $account.counters.splice(index, 1);
    }

</script>

<main transition:fly="{{ y: 200, duration: 400 }}">
    <!-- Counter -->
    <div  class="box container counter content">
        <button on:click={() => {isActive = true}} class="textButton">{counter.name}: {counter.count}</button>
        <div>
            <button class="button is-small" on:click={() => counter.count++}>+</button>
            <button class="button is-small" on:click={() => counter.count--}>-</button>
        </div>
    </div>

    <!-- Counter detail popup -->
    <div class="modal {((isActive) ? 'is-active' : '')} ">
        <div class="modal-background"></div>
        <div class="modal-content box">
            <!-- Create new counter -->
            <input type="text" placeholder="Counter name" class="input" value={counter.name}>
            <textarea class="textarea is-link" placeholder="Description" value={counter.description}></textarea>
            <button class="button is-info" on:click={() => isActive = false}>close</button>
            <button class="button is-danger" on:click={deleteCounter}>Delete</button>
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;

    }
    .textButton {
        padding-right: 40%;
        border: none;
        width: 100%;
        height: 100%;
        font-size: 25px;
    }
    button {
        width: 100%;
    }

    .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
    }
</style>
