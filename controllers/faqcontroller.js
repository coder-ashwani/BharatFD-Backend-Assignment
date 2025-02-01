const { Translate } = require('@google-cloud/translate').v2;
const FAQ = require('../models/faq');

// Initialize Google Translate with your credentials
const translate = new Translate({
    projectId: 'your-project-id',
    keyFilename: 'path/to/your/credentials.json'
});

// Controller to handle FAQ translations
const getFAQWithTranslation = async (req, res) => {
    try {
        // Get preferred language from request header
        const targetLanguage = req.headers['accept-language']?.substring(0,2) || 'en';
        
        // Only translate if language is Hindi or Bengali
        if (!['hi', 'bn'].includes(targetLanguage)) {
            const faqs = await FAQ.find({});
            return res.status(200).render("faqpage", { faqs });
        }

        // Get all FAQs
        const faqs = await FAQ.find({});
        
        // Translate each FAQ
        const translatedFaqs = await Promise.all(faqs.map(async (faq) => {
            try {
                // Translate question
                const [questionTranslation] = await translate.translate(
                    faq.question,
                    targetLanguage
                );

                // Translate answer
                const [answerTranslation] = await translate.translate(
                    faq.answer,
                    targetLanguage
                );

                return {
                    ...faq.toObject(),
                    question: questionTranslation,
                    answer: answerTranslation,
                    language: targetLanguage
                };
            } catch (error) {
                console.error(`Translation error for FAQ ${faq._id}:`, error);
                // Fallback to original content if translation fails
                return faq;
            }
        }));

        res.status(200).render("faqpage", { faqs: translatedFaqs });

    } catch (error) {
        console.error('Translation service error:', error);
        // Fallback to original content without translation agar nhi hua toh original content show kare
        const faqs = await FAQ.find({});
        res.status(200).render("faqpage", { faqs });
    }
};

module.exports = {
    getFAQWithTranslation
};
