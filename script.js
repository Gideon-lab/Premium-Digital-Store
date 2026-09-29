/* =========================================
   WHATSAPP CONFIGURATION
========================================= */

/*
   GANTI NOMOR DI BAWAH DENGAN NOMOR WHATSAPP KAMU.

   Format:
   628xxxxxxxxxx

   Jangan gunakan:
   +62
   spasi
   -
*/

const whatsappNumber = "6281370925371";


/* =========================================
   ORDER PRODUCT
========================================= */

function orderProduct(productName) {

    const message =
        `Halo Admin, saya ingin order *${productName}*.\n\n` +
        `Mohon info harga dan paket yang tersedia.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const faqItem =
            question.parentElement;

        const answer =
            faqItem.querySelector(".faq-answer");


        /*
           Tutup FAQ lain
        */

        document
            .querySelectorAll(".faq-item")
            .forEach((item) => {

                if (item !== faqItem) {

                    item.classList.remove("active");

                    const otherAnswer =
                        item.querySelector(".faq-answer");

                    otherAnswer.style.maxHeight = null;
                }

            });


        /*
           Toggle FAQ yang dipilih
        */

        faqItem.classList.toggle("active");


        if (faqItem.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});