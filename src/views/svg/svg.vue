<template>
    <div class="svg">
        <svg width="800" height="800">
            <rect width="50" height="50" style="fill: red; stroke-width: 1px; stroke: #007bff"/>
            <line
                    x1="100"
                    y1="100"
                    x2="200"
                    y2="200"
                    style="stroke-width: 1px; stroke: blue"
            />
            <line
                    x1="200"
                    y1="200"
                    x2="250"
                    y2="300"
                    style="stroke-width: 1px; stroke: blue"
            />
            <circle
                    cx="300"
                    cy="300"
                    r="100"
                    stroke-width="2px"
                    fill="red"
                    stroke="green"
            />
        </svg>
    </div>
</template>

<script>
    export default {
        name: "my-svg"
    }
</script>

<style scoped>

</style>