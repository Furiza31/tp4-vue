<template>
    <div class="base-header">
        <header>
        <h1>My Application</h1>
        <nav>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    </div>
</template>


<script>
export default {
  name: 'BaseHeader',
  components: {
    
  }
}
</script>

<style scoped lang="css">
.base-header {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.base-header header {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.base-header nav ul li {
    margin: 0 15px;
}

</style>