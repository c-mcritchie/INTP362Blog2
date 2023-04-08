<script>

    export let counter;
</script>

<main>
    <p>{counter.name}: {counter.count}</p>
    <button on:click={() => counter.count++}>+</button>
    <button on:click={() => counter.count--}>-</button>
</main>
