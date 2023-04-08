

<script>
    import axios from "axios";
    import { account } from "../stores.js";

    export let isActive = false;

    let counterName = '';
    let count = 0;
    let description = '';



    function createCounter() {
        $account.counters = [...$account.counters, {
            name: counterName,
            count: count,
            description: description
        }];
        counterName = '';
        count = 0;
        description = '';
        isActive = false;
    }

</script>



<main>
    <div class="modal {((isActive) ? 'is-active' : '')} ">
        <div class="modal-background"></div>
        <div class="modal-content box">
            <!-- Create new counter -->
            <input type="text" placeholder="Counter name" class="input" bind:value={counterName}>
            <textarea class="textarea is-link" placeholder="Description" bind:value={description}></textarea>
            <input type="number" class="input" bind:value={count}>
            <button class="button is-link" on:click={createCounter}>Create</button>
            <button class="button is-danger" on:click={() => isActive = false}>close</button>
        </div>
    </div>
</main>
