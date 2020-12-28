import React from 'react';
import css from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div>
            <div>
                <img alt ="background" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPDw4NDQ0NDxANDQ0NDQ8NDQ0NFRIWFhURFRUYHSggGBolGxUVITEhJSk3Li4uFx8zODMtNygtLisBCgoKDg0OFw8PFS0ZFR0rKy03LS0rNy03NystKysrLS03Ky0tLS0rNystLSstLS0rLS0tKystLSsrKysrKystK//AABEIAGACCgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAUCAQYAB//EADYQAAICAgECBgACCAYDAQAAAAADAQIEIREiMQUSE3GBsXLBBhQyQVFhkbIjM2JjgsJCc6IH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EAB8RAQEBAAMBAQADAQAAAAAAAAABAhESITEDEyJBMv/aAAwDAQACEQMRAD8A8fSA1YMVgLWDweX2HUVUDCwCg9BbRmTqpBPNLMtgXkZkneNm1VO2rs2uo00W5VMCS9h37EHDgrY1yv579cn64V7M+xfJvoHZoJt+TounNMJGR3OJ/aD3VsFxxYtjXif6ZUJtr5Mrkx5tfJxch1o2IsLtqPY+tYXpfUHfUBaeGF9xqsiS7DFLCStoyuwxRm4E6BI/cNz4nVOrNA7tFYboAx4+ahYbhvc3VpLq/uEo8YKsLYH85Nx2ch5YNCU36gJrBf1QLWmrRu7e4KGirHdwUOIVaKi27GlNIy3bGlOHiW1ijA9WEmjhirh45NqMMNeoT4cahxSI076hujCd6wVTRmOXuB9QC1gCWjRjcsMSwV9Tk+5GKLZgBlz4HaByUm6wpaw2+gp5NmRsZXbY0q4rFOJCU55BwMO0Z3PpbsUhncz6mwqQ1S+wy52T132OY9ti00PrqGrAvW5qGBlaw3U1IFNuTbJ4Na0gGT2ki5dSlkM7kjKYPmp7ywusBLUgAoYgXejYyWcruTGq3JcZUScrucm9OvGUz0jMpH/TOSo5tadWcvzisBawfVoGos8619LHU1HF0ApoN0Ja0LdaHLUO+Y5Eic1pQ5UaWsY4+j6lQdgtEVoZU0Um3Bn1OC/5VD9FP1Q9L6I0PG1P0dPLmsFtOxVk9Rubizb7K5qOob82jaogUlmgyLlOeS88KfPEA/UA3boBVuxr8aaWV30EXcRXfXwFpfRODaprnR2zRRbdA7OKQlM3cKNeDa/RPbkbkfMS1T1cgIvIJH6wbU8fglr1GK0Y9TkkYTh2GjTKdpqLgmnFMPmWjYNQJSLrccgasMZjOORJbtkpPVe3ivT3GFWElOCqcVmENbUFM5D+pwTEN2M3ZHA0y59aNQ83V5LnIO0dyPxwlypy4KlxHu6YDqyANyoucA9YWc/Qv648blUq0NDNEdb9jimcjgbix9Ei834PqMGK1eOQMU2FpbucXuQ8J0GaGfLsI6eBezDcM5aO4PfJqWmKs2Y0dp3HETsTi+w6mbBYaKMHayDi/Y75tgMaRY262hRLDbmaNWhTItPEkp8yVGzzBMZIJWsdxxqtQOPA9Smie9KYy55dCjKj0xoBamzj1XVmEZXs+8g5ZYvNSG3Tl+YwGrJmYg3ByXL25sRchosLUkNEiXI9hPMfLnkFMnUzsboHZSrT6CKWDpb6DLsLcQvagvoJumYgdyZ0Iutop+eeKTei9WzyP499E2k7H0di3COr4aiRd/cNWAGRGx4ja5MyHRYCuAyalMo6ozLTwCpM8hmxoWoPSzStFumPY7W+hWzOn4OQ3pgEg9vFKl9cirHfRmjOkVvfRTOeS3TTn6Jzcjcm8m+oJt2bkvjCO9mpyAiMjZLZeeQuMzcFLhLu9Z4c4oQ0heGzPPwUo5BwS6UcZuwt7dyZiXnzD9/yJ6jTSTn37k2jdjPil+OSaiebC5g91pTglHk6rTPrfzLcJXSpj5GxpuTog4zt9xl7tDSJapmcrYyjK7nnbO2NId32bRJVZ2UFVlaIGQ/+YVWRruJDLTsnQtOV22Tm5Op2Kzk9ikZeTk7KeNkHk0ZGytiukaM9BZkcHKMjiCZL9Hy8jUDQlVl3jiTWPfck1WRqTeK/cjEprJsIXYfZTyexxgM2ccq4Qu0zRuwGip6uw6WkeW7GENNfhou+r2Oy7ZPlvYxZ2xDqiXG3u0SE5ATIyOkFGG/V5/oL13yAo7R9is55F5Pwp4qx+lNCWNbcDtL6I6VzHZpoH6YSL6OeY5qvIXvTcik1Hb33IlZscz7kN1fMflt7GosL2saixO5enND1sGiwnW4etydyfsJMnUyBtc+VceZ8Dsr1t9BlWEq318BlXF1kOzeTOhF86D5TNCTbcwUxn1Pegq22UMe2iXanl2PYlvyLdUbpSj9wrlW2GuzsIZbth6pdjS7aGFXJtG6DraNnKO9H3s0JeofZD9E/9YKdUu6wxvT8GYb0wI3f0/BiH9MDTA9/FijekUs3U+wGj+gSvkan2KYyGtGMpvTBNlm5B5mT0wIrydyX/OIb0fYzYXFbuCOzI2bxX7gfUS7PbeGO+ilDfo8z4U/fwVYd9Ccehb4pYjOooXZ9EDDb1FO7PonqBKk+Lt3JNxndQTxlk8kvGZ1BzCW1V/WO4KXi0W7mZKhLTmI3qG3t6STht6hvIdHlDYHId27GUO7kq745GEOjYmoMMZLginaJuUyAimaFkPwfs0Ws3sCszuJ3bPMFJC8LKLbLuJbt7QeUxXTzJ6LBb29oHkHhSvbQOltQdveOAFGaj5HmSU2m3TPuFw53Iou/ESFwG7kbqnXcy0xyTbskczmbkmZNuOP5g6tGpacq3YndxmjxLDcKEt2M4zfskWeGx3/ZuPBej88TwYvbcilXdj6zNz7CX6eDqYbyGdJPSzZvKb0i6NIZU3QTDb3Jq36+AmC7uJVJHpsVnYepfRHxJ3A/W2iWqpIarbR9yK0Zo36hy1fMctbcidu5qzNyA8xDboy/Lr2OxYAy595yly6J+gvmC0uJecJW4lya/oZtc+UzYrZhxTNlJjwn8q3VmvgKtgjW/wBBKX0LrDT9BcpmhaluZgzlM+geJbm0FPzx6Tf6H/Fl+WlZ/jaPqQeHbX9B79KqeVFJ/wBdY/8AmSVg31/QvcIfyeKDmdiXmN2MvZ2JeYzYusFzucnVN0Ho0mKZoPRhpkutQ1lO0T6tC5LOkRXcfqn2indnT8GfV6YF2t6fgFLekpM0O04U6N6BJjNT7GVO6BRrdT7D5wGtOZd+mBNVtyZymTxAPHtuSuM8I71yKy2wmNPb2gVZfYbFt29h9JcvReGt4mfYf/W/ojYTO/sEu36J6+mnxXwsvqLMZHMfB4/BZPmL6rTr2I6+tCfi9yfiftjfiYliT1mxfWs8PUjuGuv9r2/IGuNSNZC9X/D+UD9vT5wkY9uqQuU6PKTlX659zOazRbhzf7XWPjkZQ/uQWMnmB3GuawYbynnVZGu4lk2ByziNA6m5WKtAWvuBVL5PrM3A3UOVXFtuT0WDft7QeVw77k9Hg37e0BkHlXZbpFaW1BttukVXbVfcpmJ2nL24iT7w9vVJjJniJ+APh9uqR7Ccj5jdz7i3i88VXP8AE7lz1fJ39JacKRP8Yj6Dc+QJUZrdAqOBNnXwB5J2HlN2yNhsfJ7e5DcyYk3jOnWwceG5e0U3p59glW/tfyr+cEjHyf8AD+YD47+fU/B+cEtT2qT4Ot2zniD+KwTYfuDHieR0QSv+GlMqydfAx4Y/fzBCTk6+BrwnJ6vmPs1zRle/w7dUDbL8R8k/Dt1wMZN+n5j8zl18dOZ63DdT7hLt/IQ9TU/igK6/5HNeeXTmOeruQlZ1HsTvU3YeVPTX8MfRLS3Hj8jbc55wDr7Oec7blyfyUWb7C1uIWaZ/WRenI39PD9mHFM2TbZJxWTsvn8k/5XpKs+glGaJVcj6CUyNC6/IZ+hrLb9H3hd+WV9ybkv5H/wBH9tp7wPjHBdfpy9b+nq/Lirn/AHa/2yeawbdPxB7H/wDTl+XCVP8AvU/sseCQ2fL8R9FbnxPNM5WTEcE7IdzIPJbuPcBe4u8jnR9V9B6MEFs0Fq6IFmWujWTfpElyEc7mASe0+wYUV9tR7ArM4oCybzr2BtZ0F+PhOTSnx5QFsiOJgTh0eXuL1uaDaayLag7jfvAMt0wHxv3jQlDb3DY09vYA2dhsf8g0iris4mQ/m5/oIY7NzA1N+P6E9fTT4Pgz1HoUfu9jy2E7qPRY7o17ENmyW8SEsT9sa8QZyJ4l+sXF9U1PIsY9dT7wUslWmfh/6wTsRkcT7wXcuvS38H/WBe39nRjHkeAr/mW9web2Prt4Zb3kHlsiYO3nyPO1P7VPb3gbx5EG23A0iwQEyLAmX0Yez9xxk6GjGMdpub7gWx52dm+xqEVcVnEyegwsiOY9oPIrduSrh5E8x7QafBeodkxwKKyY6fcUe/pgSW/9n3/MfMT09Lmv+oAeHvjzSI+K5HH9IEfDsvqkpqe1Of4v5DIm3yO/phXjHxp/jEfR5u+V1/Jd/T1nGJhz/GI/tG1PIXN9rzbe0ewHnQszI1G/3AvX13I36rH2VItVm42YynfzFat2Jyfh6zDnlU/iqP8Ah9eYb/65/uqS/DmR6Ft/+dSl4TfT/wCSp/vqT1r/AKU48hN7PLaBbxV8TWIN+IX3UR8UtERUjnXPA2fW8edfA74N+1/yj7J+NaOPgoeBz1x+Kv2U18rZ+x+k4VP8SA3iFOKT7x+Z9h1/xY9zfiscUn8Ufmefq+O/M9SLTxE/ir9Bclm5+BHJZxFo/wBdfqDebfi0/wDEhfrpkC9TdivjT0U/DX6PPxbVp9i7h/5a/wAFP7YEsVs8j//Z"/>
            </div>

            <div>
                <div className={css.profile_foto}>
                    <img alt = "account" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnOlK_OzBO7JLvLRvLSehkddYklToA9eWpNv7-R_y9CRHrh6rCFsrRq7zZCqZDY1LZaifPuffzDo&usqp=CAc"/>
                </div>

                <div className={css.profile_info}>
                    <div>Name</div>
                    <div>DOB</div>
                    <div>CITY</div>
                    <div>Edu</div>
                    <div>Web</div>
                </div>
            </div>

            <Posts/>

        </div>
    )
}

export default Profile;