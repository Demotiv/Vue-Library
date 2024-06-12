<template>
    <div class="social-media">
        <a :href="address.map" 
            target="_blank"
            class="social-media__link">
            <span>{{ address.part1 }} <br> {{ address.part2 }}</span>
        </a>
        <div>
            <ul class="social-media__icons">
                <li>
                    <a :href="social.twitter.url">
                        <img 
                            :src="social.twitter.src" 
                            :alt="social.twitter.alt">
                    </a>
                </li>
                <li>
                    <a :href="social.instagram.url">
                        <img 
                            :src="social.instagram.src" 
                            :alt="social.instagram.alt">
                    </a>
                </li>
                <li>
                    <a :href="social.facebook.url">
                        <img 
                            :src="social.facebook.src" 
                            :alt="social.facebook.alt">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TwitterIcon from '@/assets/img/footer/u_twitter-alt.png'
import InstagramIcon from '@/assets/img/footer/u_instagram.png'
import FacebookIcon from '@/assets/img/footer/u_facebook-f.png'

export default {
    data() {
        return {
            address: {
                map: 'https://www.google.com/maps/place/286+Cadman+Plaza+W,+Brooklyn,+NY+11201,+USA',
                part1: '286 Cadman Plaza, New York, ',
                part2: 'NY 11238, United States'
            },
            social: {
                twitter: {
                    url: 'https://www.neycer.in/products/urinal/half-stall-delux/',
                    src: TwitterIcon,
                    alt: 'twitter'
                },
                instagram: {
                    url: 'https://www.instagram.com/albertocappiello/',
                    src: InstagramIcon,
                    alt: 'instagram',
                },
                facebook: {
                    url: 'https://www.facebook.com/albertocappiello.it/',
                    src: FacebookIcon,
                    alt: 'facebook',
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.social-media {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__link {
        font-family: $inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 133%;
        color: $white;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: $sand;
        }
    }

    &__icons {
        display: flex;
        gap: 15px;
    }
}
</style>