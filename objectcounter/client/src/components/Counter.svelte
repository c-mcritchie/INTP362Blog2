<script>

    export let counter;
</script>

<main>
    <div class="box container counter content">

        <h1>{counter.name}: {counter.count}</h1>
        <div>
            <button class="button is-small" on:click={() => counter.count++}>+</button>
            <button class="button is-small" on:click={() => counter.count--}>-</button>
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;

    }
    h1 {
        padding-right: 40%;
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
