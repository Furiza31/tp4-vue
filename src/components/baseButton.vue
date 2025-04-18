<template>
    <!-- Don't forget disabled state -->
    <button class="base-button" :disabled="disabled" @click="$emit('click')">
        <slot></slot>
    </button>
    
</template>


<script>
export default {
  name: 'BaseButton',
  components: {
  }
}
</script>

<style scoped lang="css">
.base-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
    margin-top: 10px;
}

.base-button:hover {
    background-color: #0056b3;
    transition: background-color 0.3s ease;
}

.base-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transition: background-color 0.3s ease;
}

</style>