<template>
    <section class="subscribe center">
        <article class="subscribe_content">
            <div class="subscribe_content_left">
                <div><img src="@/assets/img/face.png" /></div>
                <div class="subscribe_content_left_text">
                    <p class="subscribe__p">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
                        purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        <br />
                        <span class="subscribe__h4">Bin Burhan</span> <br />
                        <span class="subscribe__p1">Dhaka, Bd</span>
                    </p>
                </div>
            </div>
            <div class="subscribe_content_right">
                <div class="subscribe_content_right_text">
                    <h2 class="subscribe__h2">Subscribe</h2>
                    <h1 class="subscribe__h1">FOR OUR NEWLETTER AND PROMOTION</h1>
                </div>
                <form class="subscribe_form">
                    <input type="email" placeholder="Enter Your Email..." required />
                    <button>Subscribe</button>
                </form>
            </div>
        </article>
        <div class="pagination">
            <a class="lines" href="#"></a>
            <a class="lines active" href="#"></a>
            <a class="lines" href="#"></a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SiteSubscribe"
    }
</script>

<style scoped>

</style>