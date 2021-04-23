<template>
    <div class="main">
        <div class="main-image">
            <div class="animate__animated animate__backInLeft font">
                <p>欢迎来到Liovee小区!</p>
                <p>下面请欣赏这优美的环境</p>
            </div>
        </div>
        <div class="about-img">
            <div class="animate__animated animate__backInLeft about-dis">
                <img src="../assets/tr1.jpg" alt="">
            </div>
            <div class="animate__animated animate__backInLeft about-dis">
                <img src="../assets/tr3.jpg" alt="">
            </div>
            <div class="animate__animated animate__backInUp about-dis">
                <img src="../assets/tr2.jpg" alt="">
            </div>
            <div class="animate__animated animate__backInUp about-dis">
                <img src="../assets/tr5.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main-image{
        width:100%;
        height:600px;
        background-image: url(../assets/intro-bg.jpg);
        margin-bottom:40px;
    }
    .font{
        color:white;
        font-size:20px;
        width:220px;
        margin: 0 auto;
        position: relative;
        top:200px;
        text-align: center;
    }
    .about-dis{
        float:left;
        width:500px;
        height:300px;
        margin-left:280px;
        margin-bottom:100px;
    }
    .about-dis img{
        width:100%;
        height:100%;
    }
</style>