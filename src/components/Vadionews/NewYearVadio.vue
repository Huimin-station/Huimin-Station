<script setup>

</script>

<template>
    <div class="bigbox">
        <div class="smallbox">
            <div class="rongqi">
                <video src="" controls></video>
                <div class="list">
                    <a class="lititlebox" v-for="n in 10" :key="n"></a>
                </div>
            </div>
            <div class="common">
                <input type="text">
                <button class="sent"></button>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .bigbox{
        width: 100%;
        height: 1000px;
        background-color: red;
        padding-top: 20px;
    }
    .smallbox{
        margin-left: 100px;
        width: 80%;
        height: 600px;
        background-color: rgb(156, 83, 83);
        float: left;

    }
    .smallbox video{
        width: 80%;
        height: 600px;
        border: 2px solid rgb(255, 0, 0);
    }
    .rongqi .list{
        float: right;
        width: 18%;
        height: 600px;
        background-color: black;
        overflow: scroll;
        
    }

    .list .lititlebox{
        display: block;
        margin: 1%;
        width: 98%;
        height: 150px;
        background-color: gray;
    }
    .list .lititlebox:hover{
        border: 1px blue solid;
        background-color: black;
    }
    .common{
        border-radius: 25px;
        width: 80%;
        height: 50px;
        background-color: white;
        overflow: hidden;
    }
    .common input{
        float: left;
        width: 90%;
        height: 100%;
        font-size: 30px;
        padding-left: 20px;
        border-radius: 25px 0 0  25px;
    }
    .common .sent{
        width: 10%;
        height: 100%;
        float: right;
        outline: none;
        background-color: rgb(63, 5, 5);

    }

</style>