<template>
    <section>
        <p>
            We design, produce and deliver <span>brand content</span> across <span>all channels</span>, 
            using the best talent, processes and tools. <br>
            The result? Seamless 
            global execution of multiple content types across <span>all markets</span>, 
            without compromising <span>creative quality</span>.
        </p>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import "../../styles/variables.scss";
    section{
        padding: 0 15px;
        p{
            color:black;
            font-size: 16px;
            text-align: left;
            line-height: 1.4;
            span{
                color:$red;
            }
        }
    }
    @media(min-width: 600px){
        section{
            padding: 0 5%;
            p{
                font-size: 20px;
            }
        }
    }
    @media(min-width: 900px){
        section{
            padding: 0 10%;
            p{
                font-size: 24px;
            }
        }
    }
</style>