<template>
    <aside>
        <h2>Articles</h2>
        <ul>
            <li v-for="article in articles" :key="article.id">
                <a href="#">Lien 1</a>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: 'SidebarComponent',
        props: {
            articles: Array
        }
    }
</script>

<style>
    aside {
        background-color: #ccc;
        padding: 20px;
        text-align: center;
        width: 20%;
        float: left;
    }
    aside h2 {
        margin: 0;
        color: #333;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        padding: 20px;
        text-align: center;
    }
    aside ul {
        padding: 20px;
        text-align: center;
    }
    aside ul li {
        list-style: none;
        padding: 10px;
    }
</style>